"use client"

import { useWalletStore, useQrStore } from '@/lib/stores'
import { QrScanner } from '@yudiel/react-qr-scanner'

export default function QrReader() {
  const addAddress = useWalletStore((state) => state.addAddress)
  const setIsQrReaderOpen = useQrStore((state) => state.setIsQrReaderOpen)

  return (
    <QrScanner
      onDecode={(result) => {
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