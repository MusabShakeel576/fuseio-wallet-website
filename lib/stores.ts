import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Token, Tokens } from './types'

interface WalletState {
  address: string
  previousBalance: number
  balance: number
  token?: Token
  tokens: Tokens
  addAddress: (newAddress: string) => void
  addPreviousBalance: (newPreviousBalance: number) => void
  addBalance: (newBalance: number) => void
  addToken: (newToken: Token) => void
  addTokens: (newTokens: Tokens) => void
  resetToken: () => void
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      address: "",
      previousBalance: 0,
      balance: 0,
      token: undefined,
      tokens: [],
      addAddress: (newAddress) => set(() => ({ address: newAddress })),
      addPreviousBalance: (newPreviousBalance) => set(() => ({ previousBalance: newPreviousBalance })),
      addBalance: (newBalance) => set(() => ({ balance: newBalance })),
      addToken: (newToken) => set(() => ({ token: newToken })),
      addTokens: (newTokens) => set(() => ({ tokens: newTokens })),
      resetToken: () => set(() => ({ token: undefined })),
    }),
    {
      name: 'wallet-storage',
    }
  )
)

interface QrState {
  isQrReaderOpen: boolean
  setIsQrReaderOpen: (newQrOpenState: boolean) => void
}

export const useQrStore = create<QrState>()(
  persist(
    (set) => ({
      isQrReaderOpen: false,
      setIsQrReaderOpen: (newQrOpenState) => set(() => ({ isQrReaderOpen: newQrOpenState })),
    }),
    {
      name: 'wallet-storage',
    }
  )
)
