"use client"
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PlusIcon, WalletIcon, PieChartIcon, ReceiptIcon, BarChartIcon, TrendingUpIcon } from "lucide-react"

interface Account {
  name: string
  balance: number
  icon: string
  color: string
  description?: string
  creditLimit?: number
}

export default function BankingApp() {
  const [accounts, setAccounts] = useState<Account[]>([
    { name: "KOMO Lorenz", balance: 74980.39, icon: "VISA", color: "bg-pink-500" },
    { name: "BPI Ana", balance: 16805.94, icon: "VISA", color: "bg-green-500" },
    { name: "Union Bank Lorenz", balance: 8992.90, icon: "VISA", color: "bg-green-500" },
    { name: "BDO Ana", balance: 71374.33, icon: "bank", color: "bg-yellow-500" },
    { name: "Wallet Lorenz", balance: 1258, icon: "wallet", color: "bg-gray-500", description: "Lorenz's Wallet" },
    { name: "UnionBank CC Ana", balance: -19117.77, icon: "bank", color: "bg-blue-500", creditLimit: 122882 },
    { name: "Security Bank CC Lorenz", balance: -30085.37, icon: "bank", color: "bg-yellow-500", creditLimit: 169915 },
    
  ])

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0)

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 max-w-md mx-auto sm:max-w-xl lg:max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <Avatar className="w-10 h-10 bg-gray-700" />
        <div className="text-center">
          <h2 className="text-sm font-medium text-gray-300">All accounts</h2>
          <p className="text-2xl font-bold text-white">₱ {totalBalance.toFixed(2)}</p>
        </div>
        <Button size="icon" variant="ghost" className="text-white hover:text-gray-300">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </div>

      <Tabs defaultValue="accounts" className="mb-6">
        <TabsList className="grid w-full grid-cols-2 bg-gray-800">
          <TabsTrigger value="accounts" className="text-white data-[state=active]:bg-gray-700">Accounts</TabsTrigger>
          <TabsTrigger value="finances" className="text-white data-[state=active]:bg-gray-700">My finances</TabsTrigger>
        </TabsList>
        <TabsContent value="accounts">
          <Card className="bg-gray-800 border-none">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-4 flex justify-between text-white">
                Accounts
                <span className="text-emerald-400">₱ {totalBalance.toFixed(2)}</span>
              </h3>
              <div className="space-y-4">
                {accounts.map((account, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full ${account.color} flex items-center justify-center text-white`}>
                        {account.icon === "VISA" ? "V" : account.icon === "bank" ? "B" : "W"}
                      </div>
                      <div>
                        <p className="font-medium text-white">{account.name}</p>
                        {account.description && <p className="text-sm text-gray-400">{account.description}</p>}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${account.balance < 0 ? 'text-red-500' : 'text-emerald-400'}`}>
                        ₱ {account.balance.toFixed(2)}
                      </p>
                      {account.creditLimit && <p className="text-sm text-emerald-400">₱ {account.creditLimit.toFixed(2)}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="finances">
          <Card className="bg-gray-800 border-none">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-4 text-white">My Finances</h3>
              <p className="text-gray-300">Finance details would go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-between">
        <Button variant="ghost" size="icon" className="h-12 w-12 flex flex-col items-center text-white hover:text-gray-300">
          <WalletIcon className="h-6 w-6" />
          <span className="text-xs">Accounts</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-12 w-12 flex flex-col items-center text-white hover:text-gray-300">
          <PieChartIcon className="h-6 w-6" />
          <span className="text-xs">Categories</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-12 w-12 flex flex-col items-center text-white hover:text-gray-300">
          <ReceiptIcon className="h-6 w-6" />
          <span className="text-xs">Transactions</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-12 w-12 flex flex-col items-center text-white hover:text-gray-300">
          <BarChartIcon className="h-6 w-6" />
          <span className="text-xs">Budget</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-12 w-12 flex flex-col items-center text-white hover:text-gray-300">
          <TrendingUpIcon className="h-6 w-6" />
          <span className="text-xs">Overview</span>
        </Button>
      </div>
    </div>
  )
}