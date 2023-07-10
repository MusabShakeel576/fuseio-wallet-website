"use client"

import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useWalletStore } from "@/lib/stores"
import { Copy, QrCode, AlertTriangle } from "lucide-react"
import QRCode from 'react-qr-code'
import { useCopyToClipboard } from 'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"

export default function WalletAddress() {
  const address = useWalletStore((state) => state.address)
  const [_, copy] = useCopyToClipboard()
  const { toast } = useToast()

  function handleCopy() {
    copy(address)
    toast({
      description: "Address has been copied",
    })
  }

  return (
    <div className="flex flex-col w-full gap-2 mb-4">
      <div className="flex flex-row items-center space-x-2 bg-card rounded-lg px-4 py-2">
        <p className="flex-1 w-60 truncate">{address}</p>
        <Popover>
          <PopoverTrigger>
            <QrCode className="flex-none mr-2 h-6 w-6 cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent>
            <QRCode value={address} />
          </PopoverContent>
        </Popover>
        <Copy className="flex-none mr-2 h-6 w-6 cursor-pointer" onClick={handleCopy} />
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
