"use client";

import ContextPractice from "@/components/practice/context-practice-provider";
import { useContext } from "react";

export default function BankingApp() {
  
  const user = useContext(ContextPractice);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <p>{user.firstName}</p>
    </main>
  );
}
