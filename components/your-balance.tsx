"use client"

import { MoveDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import YourPublicAddressDialog from "./your-public-address-dialog"

export function ReceiveButton() {
  return (
    <Button className="w-full md:w-auto">
      <MoveDown className="mr-2 h-3 w-3" /> Receive
    </Button>
  )
}

export default function YourBalance() {
  return (
    <div className="flex flex-col items-start md:items-center justify-between gap-2 md:gap-0 rounded-lg bg-card text-card-foreground border shadow-sm w-[20rem] md:w-[40rem] p-8 md:flex-row">
      <div className="flex flex-col space-y-4">
        <div className="font-extrabold">Your Balance</div>
        <div className="flex flex-row items-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            $60
          </h3>
          <span>+0%</span>
        </div>
      </div>
      <YourPublicAddressDialog>
        <Button className="w-full md:w-auto">
          <MoveDown className="mr-2 h-3 w-3" /> Receive
        </Button>
      </YourPublicAddressDialog>
    </div>
  )
}
