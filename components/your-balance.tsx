"use client"

import * as React from "react"
import { useEffect } from "react"
import { MoveDown, MoveUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import * as Primitive from "@radix-ui/react-dialog"
import { useMediaQuery } from 'usehooks-ts'
import YourPublicAddressDialog from "./your-public-address-dialog"
import YourPublicAddressSheet from "./your-public-address-sheet"
import { useWalletStore } from "@/lib/stores"
import { formatEther } from "ethers"
import { Skeleton } from "@/components/ui/skeleton"

const ReceiveButton = React.forwardRef<
  React.ElementRef<typeof Primitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof Primitive.Trigger>
>((props, ref) => (
  <Button {...props} ref={ref} className="w-full md:w-auto">
    <MoveDown className="mr-2 h-3 w-3" /> Receive
  </Button>
));
ReceiveButton.displayName = "ReceiveButton"

export default function YourBalance() {
  const matches = useMediaQuery('(min-width: 640px)')
  const address = useWalletStore((state) => state.address)
  const previousBalance = useWalletStore((state) => state.previousBalance)
  const balance = useWalletStore((state) => state.balance)
  const addPreviousBalance = useWalletStore((state) => state.addPreviousBalance)
  const addBalance = useWalletStore((state) => state.addBalance)

  useEffect(() => {
    const id = setInterval(async () => {
      const response = await fetch(`https://explorer.fuse.io/api?module=account&action=eth_get_balance&address=${address}`);
      const data = await response.json();

      const bigInt = BigInt(data.result)
      const eth = formatEther(bigInt)
      addPreviousBalance(balance)
      addBalance(Number(parseFloat(eth).toFixed(3)))
    }, 3000);

    return () => clearInterval(id);
  }, [])

  return (
    <div className="flex flex-col items-start md:items-center justify-between gap-2 md:gap-0 rounded-lg bg-card text-card-foreground border shadow-sm w-[20rem] md:w-[40rem] p-8 md:flex-row">
      <div className="flex flex-col space-y-4">
        <div className="font-extrabold">Your Balance</div>
        {
          balance ?
            <div className="flex flex-row items-center space-x-2">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                ${new Intl.NumberFormat().format(balance)}
              </h3>
              {
                ((balance - previousBalance) / previousBalance) * 100 >= 0 ?
                  <span className="flex flex-row items-center text-green-400">
                    +{Math.trunc(((balance - previousBalance) / previousBalance) * 100)}% <MoveUp className="mr-2 h-3 w-3" />
                  </span> :
                  <span className="flex flex-row items-center text-red-400">
                    -{Math.trunc(((balance - previousBalance) / previousBalance) * 100)}% <MoveDown className="mr-2 h-3 w-3" />
                  </span>
              }
            </div> :
            <Skeleton className="w-[120px] h-[30px] rounded-full" />
        }
      </div>
      {matches ?
        <YourPublicAddressDialog>
          <ReceiveButton />
        </YourPublicAddressDialog>
        : <YourPublicAddressSheet>
          <ReceiveButton />
        </YourPublicAddressSheet>
      }
    </div>
  )
}
