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
import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"
import { Copy, QrCode, AlertTriangle } from "lucide-react"
import { Button } from "./ui/button"

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
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-row items-center space-x-2 bg-card rounded-lg px-4 py-2">
            <p className="flex-1 w-60 truncate">0xe3A133EC46aB6625342eA4465AF38fC0A7769d31</p>
            <QrCode className="flex-none mr-2 h-6 w-6" />
            <Copy className="flex-none mr-2 h-6 w-6" />
          </div>
          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Please make sure you are sending assets on the Fuse network
            </AlertDescription>
          </Alert>
        </div>
        <DialogFooter>
          <DialogPrimitive.Close asChild>
            <Button className="w-full" type="submit">Close</Button>
          </DialogPrimitive.Close>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}