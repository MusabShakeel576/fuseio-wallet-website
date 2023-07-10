"use client"

import { useState } from "react"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useWalletStore } from "@/lib/stores"

const name = "Fuse"
const details = [
  {
    key: "Symbol",
    value: "WFUSE"
  },
  {
    key: "Name",
    value: "Wrapped Fuse"
  },
  {
    key: "Total Supply",
    value: "10,000,000"
  },
  {
    key: "Decimals",
    value: 18
  },
]

export default function Details() {
  const [isShowMore, setIsShowMore] = useState(false)
  const token = useWalletStore((state) => state.token)
  const resetToken = useWalletStore((state) => state.resetToken)

  return (
    <div className="flex flex-col w-auto gap-4">
      <div className="flex flex-row items-center space-x-4">
        <ArrowLeft className="h-8 w-8 cursor-pointer" onClick={() => resetToken()} />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Details
        </h3>
      </div>
      <div className={cn("flex flex-col items-start gap-4 rounded-lg bg-card text-card-foreground border shadow-sm w-[20rem] md:w-[40rem] p-8", isShowMore ? "h-[30rem]" : "h-80")}>
        <div className="font-extrabold">{name}</div>
        <div className={cn("flex flex-col grow w-full gap-4", isShowMore ? "overflow-y-scroll" : "overflow-hidden")}>
          {details.map((detail, index) =>
            <div key={index} className="flex flex-row items-center justify-between px-4 py-2 rounded-lg odd:bg-secondary even:bg-card">
              <div className="font-bold">{detail.key}</div>
              <div className="font-semibold">{detail.value}</div>
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