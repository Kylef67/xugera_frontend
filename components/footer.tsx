"use client";

import {
  WalletIcon,
  PieChart,
  NotebookPen,
  ChartColumn,
  ChartArea,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0">
      <div className="flex flex-row items-center space-x-1 justify-between p-3">
        <div className="flex flex-col items-center hover:text-white hover:bg-black">
          <WalletIcon className="h-12 w-12" />
          <p>Accounts</p>
        </div>

        <div className="flex flex-col items-center hover:text-white hover:bg-black">
          <PieChart className="h-12 w-12" />
          <p>Categories</p>
        </div>

        <div className="flex flex-col items-center hover:text-white hover:bg-black">
          <NotebookPen className="h-12 w-12" />
          <p>Transactions</p>
        </div>

        <div className="flex flex-col items-center hover:text-white hover:bg-black">
          <ChartColumn className="h-12 w-12" />
          <p>Budget</p>
        </div>

        <div className="flex flex-col items-center hover:text-white hover:bg-black">
          <ChartArea className="h-12 w-12" />
          <p>Overview</p>
        </div>
      </div>
    </footer>
  );
}
