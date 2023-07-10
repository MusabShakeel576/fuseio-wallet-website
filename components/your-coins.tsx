"use client"

import { useEffect, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn, intlBalance } from "@/lib/utils"
import { useWalletStore } from "@/lib/stores"
import { Token } from "@/lib/types"

export default function YourCoins() {
  const [isShowMore, setIsShowMore] = useState(false)
  const address = useWalletStore((state) => state.address)
  const tokens = useWalletStore((state) => state.tokens)
  const addToken = useWalletStore((state) => state.addToken)
  const addTokens = useWalletStore((state) => state.addTokens)

  function handleComponentTransition(token: Token) {
    addToken(token)
  }

  useEffect(() => {
    const id = setInterval(async () => {
      const response = await fetch(`https://explorer.fuse.io/api?module=account&action=tokenlist&address=${address}`);
      const data = await response.json();
      addTokens(data.result)
    }, 3000);

    return () => clearInterval(id);
  }, [])

  return (
    <div className={cn("flex flex-col items-start gap-4 rounded-lg bg-card text-card-foreground border shadow-sm w-[20rem] md:w-[40rem] p-8", isShowMore ? "h-[30rem]" : "h-80")}>
      <div className="font-extrabold">Your Coins</div>
      <div className={cn("flex flex-col grow w-full gap-4", isShowMore ? "overflow-y-scroll" : "overflow-hidden")}>
        {tokens.map((token, index) =>
          <div key={index} className="flex flex-row items-center justify-between px-4 py-2 rounded-lg odd:bg-secondary even:bg-card cursor-pointer" onClick={() => handleComponentTransition(token)}>
            <div className="flex flex-row items-center gap-2">
              <Avatar>
                {/* <AvatarImage src={token.name} /> */}
                <AvatarFallback>{token.symbol.slice(0, 1)}</AvatarFallback>
              </Avatar>
              <div className="font-semibold">{token.name}</div>
            </div>
            <div className="font-bold truncate">${intlBalance(token.balance, Number(token.decimals))}</div>
          </div>
        )}
      </div>
      <Button variant="empty" className="w-full border-t" onClick={() => setIsShowMore(!isShowMore)}>
        Show {isShowMore ? "Less" : "More"} {isShowMore ? <ChevronUp className="mr-2 h-3 w-3" /> : <ChevronDown className="mr-2 h-3 w-3" />}
      </Button>
    </div>
  )
}
