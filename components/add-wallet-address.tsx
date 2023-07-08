"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export default function AddWalletAddress({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[20rem] md:w-[40rem]", className)} {...props}>
      <CardHeader>
        <CardTitle>Add Wallet Address</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter or copy wallet address" />
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
}
