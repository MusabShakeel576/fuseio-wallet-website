"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const coins = new Array(2).fill({
  name: "Fuse Dollar",
  image: "https://github.com/shadcn.png",
  price: 35
})

export default function YourCoins() {
  const [isShowMore, setIsShowMore] = useState(false)

  return (
    <div className={cn("flex flex-col items-start gap-4 rounded-lg bg-card text-card-foreground border shadow-sm w-[20rem] md:w-[40rem] p-8", isShowMore ? "h-[30rem]" : "h-80")}>
      <div className="font-extrabold">Your Coins</div>
      <div className={cn("flex flex-col grow w-full gap-4", isShowMore ? "overflow-y-scroll" : "overflow-hidden")}>
        {coins.map((coin, index) =>
          <div key={index} className="flex flex-row items-center justify-between px-4 py-2 rounded-lg odd:bg-secondary even:bg-card">
            <div className="flex flex-row items-center gap-2">
              <Avatar>
                <AvatarImage src={coin.image} />
                <AvatarFallback>{coin.name.slice(0, 1)}</AvatarFallback>
              </Avatar>
              <div className="font-bold">{coin.name}</div>
            </div>
            <div className="font-bold">${coin.price}</div>
          </div>
        )}
      </div>
      <Button variant="empty" className="w-full border-t" onClick={() => setIsShowMore(!isShowMore)}>
        Show {isShowMore ? "Less" : "More"} {isShowMore ? <ChevronUp className="mr-2 h-3 w-3" /> : <ChevronDown className="mr-2 h-3 w-3" />}
      </Button>
    </div>
  )
}
