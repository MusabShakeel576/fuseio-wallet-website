import { type ClassValue, clsx } from "clsx"
import { formatUnits } from "ethers"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function intlBalance(balance: number, decimals: number) {
  const bigInt = BigInt(balance)
  const eth = formatUnits(bigInt, decimals)
  const float = parseFloat(eth).toFixed(3)
  const intl = new Intl.NumberFormat().format(Number(float))
  return intl
}
