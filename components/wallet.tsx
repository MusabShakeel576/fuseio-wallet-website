"use client"

import YourBalance from "./your-balance";
import YourCoins from "./your-coins";

export default function Wallet() {
  return (
    <div className="flex flex-col w-auto gap-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Wallet
      </h3>
      <YourBalance />
      <YourCoins />
    </div>
  )
}