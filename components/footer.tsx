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
      <div className="flex flex-row items-center space-x-1 justify-between">
        <div className="flex flex-col items-center">
          <WalletIcon className="text-black h-12 w-12" />
        </div>

        <div className="flex flex-col items-center">
          <PieChart className="text-black h-12 w-12" />
        </div>

        <div className="flex flex-col items-center">
          <NotebookPen className="text-black h-12 w-12" />
        </div>

        <div className="flex flex-col items-center">
          <ChartColumn className="text-black h-12 w-12" />
        </div>

        <div className="flex flex-col items-center">
          <ChartArea className="text-black h-12 w-12" />
        </div>
      </div>
    </footer>
  );
}
