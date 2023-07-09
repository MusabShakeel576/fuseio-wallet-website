"use client"

import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"
import { Copy, QrCode, AlertTriangle } from "lucide-react"

export default function WalletAddress() {
  return (
    <div className="flex flex-col w-full gap-2 mb-4">
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
  )
}
