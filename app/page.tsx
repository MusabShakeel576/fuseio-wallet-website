import AddWalletAddress from '@/components/add-wallet-address'
import Details from '@/components/details'
import Navbar from '@/components/navbar'
import Wallet from '@/components/wallet'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      {/* <div className='container w-auto m-auto'>
        <AddWalletAddress />
      </div> */}
      <div className='container w-auto mt-32 mb-20'>
        <Wallet />
        {/* <Details /> */}
      </div>
    </main>
  )
}
