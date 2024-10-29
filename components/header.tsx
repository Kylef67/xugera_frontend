"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusIcon } from "lucide-react";

export default function Header() {

  return (
    <header className="absolute inset-x-0 top-0">
      <div className="flex flex-row items-center space-x-1 justify-between p-3">
        <div className="flex items-start relative justify-center">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex text-black flex-col items-center">
          <h2>All Accounts</h2>
          <h3>P 100,000.00</h3>
        </div>

        <div className="flex items-end text-black">
          <PlusIcon className="text-black h-12 w-12" />
        </div>
      </div>
    </header>
  );
}
