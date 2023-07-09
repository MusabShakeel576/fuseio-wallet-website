"use client"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Button } from "./ui/button"
import WalletAddress from "./wallet-address"

export default function YourPublicAddressDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Public Address</DialogTitle>
        </DialogHeader>
        <WalletAddress />
        <DialogFooter>
          <DialogPrimitive.Close asChild>
            <Button className="w-full" type="submit">Close</Button>
          </DialogPrimitive.Close>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}