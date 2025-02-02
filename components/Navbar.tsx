"use client";

import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";

interface NavbarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export function Navbar({ isSidebarOpen, onSidebarToggle }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur h-14 supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onSidebarToggle}
            className="p-3 rounded-md hover:bg-accent"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
