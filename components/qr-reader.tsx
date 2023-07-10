"use client"

import { useWalletStore, useQrStore } from '@/lib/stores'
import { QrScanner } from '@yudiel/react-qr-scanner'
import { isAddress } from 'ethers'
import { useToast } from '@/components/ui/use-toast'

export default function QrReader() {
  const addAddress = useWalletStore((state) => state.addAddress)
  const setIsQrReaderOpen = useQrStore((state) => state.setIsQrReaderOpen)
  const { toast } = useToast()

  return (
    <QrScanner
      onDecode={(result) => {
        if(!isAddress(result)) {
          setIsQrReaderOpen(false)
          return toast({
            variant: "destructive",
            description: "Address is incorrect",
          })
        }
        addAddress(result)
        setIsQrReaderOpen(false)
      }}
      onError={(error) => {
        console.log(error?.message)
        setIsQrReaderOpen(false)
      }}
    />
  )
}