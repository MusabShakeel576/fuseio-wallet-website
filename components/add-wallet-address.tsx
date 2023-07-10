"use client"

import * as React from 'react';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScanLine } from "lucide-react"
import { useRef } from "react"
import { isAddress } from "ethers"
import { useToast } from "@/components/ui/use-toast"
import { useWalletStore, useQrStore } from '@/lib/stores';

type CardProps = React.ComponentProps<typeof Card>

export default function AddWalletAddress({ className, ...props }: CardProps) {
  const address = useRef<HTMLInputElement>(null)
  const { toast } = useToast()
  const addAddress = useWalletStore((state) => state.addAddress)
  const setIsQrReaderOpen = useQrStore((state) => state.setIsQrReaderOpen)

  function handleAddWalletAddress() {
    if(!address.current || !isAddress(address.current.value)) {
      return toast({
        variant: "destructive",
        description: "Address is incorrect",
      })
    }
    addAddress(address.current?.value ?? "")
  }

  return (
    <Card className={cn("w-[20rem] md:w-[40rem]", className)} {...props}>
      <CardHeader>
        <CardTitle>Add Wallet Address</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center space-x-2">
          <Input placeholder="Enter or copy wallet address" className="flex-1" ref={address} />
          <ScanLine className="flex-none mr-2 h-6 w-6 cursor-pointer" onClick={() => setIsQrReaderOpen(true)} />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleAddWalletAddress}>
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
}
