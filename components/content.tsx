"use client"

import { useEffect, useState } from 'react'
import { useWalletStore, useQrStore } from "@/lib/stores"
import AddWalletAddress from "./add-wallet-address"
import Details from "./details"
import Wallet from "./wallet"
import QrRecording from './qr-recording'

export default function Content() {
  const [mounted, setMounted] = useState(false)
  const address = useWalletStore((state) => state.address)
  const isQrReaderOpen = useQrStore((state) => state.isQrReaderOpen)
  const token = useWalletStore((state) => state.token)

	useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {!address && <div className='container w-unset sm:w-auto m-auto'>
        {!isQrReaderOpen && <AddWalletAddress />}
        {isQrReaderOpen && <QrRecording />}
      </div>}
      {address && <div className='container w-unset sm:w-auto mt-32 mb-20'>
        {!token && <Wallet />}
        {token && <Details />}
      </div>}
    </>
  )
}