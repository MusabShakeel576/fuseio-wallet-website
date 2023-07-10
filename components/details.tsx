"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn, intlBalance } from "@/lib/utils"
import { useWalletStore } from "@/lib/stores"

export default function Details() {
  const [isShowMore, setIsShowMore] = useState(false)
  const [detail, setDetail] = useState<{ [key: string]: string | number } | {}>({})
  const token = useWalletStore((state) => state.token)
  const resetToken = useWalletStore((state) => state.resetToken)

  useEffect(() => {
    const id = setInterval(async () => {
      if (token) {
        const response = await fetch(`https://explorer.fuse.io/api?module=stats&action=tokensupply&contractaddress=${token?.contractAddress}`);
        const data = await response.json();

        setDetail({
          "Symbol": token.symbol,
          "Name": token.name,
          "Token Supply": intlBalance(Number(data.result), Number(token.decimals)),
          "Balance": intlBalance(Number(token.balance), Number(token.decimals)),
          "Decimals": token.decimals,
          "Type": token.type,
          "Contract Address": token.contractAddress,
        })
      }
    }, 3000);

    return () => clearInterval(id);
  }, [token])
  return (
    <div className="flex flex-col w-auto gap-4">
      <div className="flex flex-row items-center space-x-4">
        <ArrowLeft className="h-8 w-8 cursor-pointer" onClick={() => resetToken()} />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Details
        </h3>
      </div>
      <div className={cn("flex flex-col items-start gap-4 rounded-lg bg-card text-card-foreground border shadow-sm w-[20rem] md:w-[40rem] p-8", isShowMore ? "h-[30rem]" : "h-80")}>
        <div className="font-extrabold">
          {
            Object.hasOwn(detail, "Name") ?
              (detail as { Name: string })["Name"] :
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
          }
        </div>
        <div className={cn("flex flex-col grow w-full gap-4", isShowMore ? "overflow-y-scroll" : "overflow-hidden")}>
          {Object.entries(detail).map(([key, value]) =>
            <div key={key} className="flex flex-row items-center justify-between px-4 py-2 rounded-lg odd:bg-secondary even:bg-card space-x-2">
              <div className="font-bold">{key}</div>
              <div className="truncate">{value}</div>
            </div>
          )}
        </div>
        <Button variant="empty" className="w-full border-t" onClick={() => setIsShowMore(!isShowMore)}>
          Show {isShowMore ? "Less" : "More"} {isShowMore ? <ChevronUp className="mr-2 h-3 w-3" /> : <ChevronDown className="mr-2 h-3 w-3" />}
        </Button>
      </div>
    </div>
  )
}