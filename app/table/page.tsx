"use client";

import { useState } from "react";
import Component from "@/components/comp-485";

export default function TablePage() {
  const [activeTable, setActiveTable] = useState<'Ayat' | 'Number'>('Ayat');

  return (
    <div className="container mx-auto space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Data Tables</h1>
      </div>
      
      <div className="bg-card rounded-lg p-4 border shadow-sm md:p-6">
        <Component />
      </div>
    </div>
  );
}
