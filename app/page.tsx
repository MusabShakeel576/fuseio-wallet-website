import Content from '@/components/content'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Content />
    </main>
  )
}
