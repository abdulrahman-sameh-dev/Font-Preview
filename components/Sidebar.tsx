"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import {
  Home,
  Type,
  Download,
  FileJson,
  Settings,
  HelpCircle,
  Table,
  X,
  Box
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const routes = [
    {
      href: '/',
      label: 'Home',
      icon: Home
    },
    {
      href: '/demo',
      label: 'Demo',
      icon: Type
    },
    {
      href: '/installation',
      label: 'Installation',
      icon: Box
    },
    {
      href: '/download',
      label: 'Download',
      icon: Download
    },
    {
      href: '/table',
      label: 'Table',
      icon: Table
    },
    {
      href: '/configuration',
      label: 'Configuration',
      icon: FileJson
    },
    {
      href: '/support',
      label: 'Support',
      icon: HelpCircle
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full bg-background transition-all duration-300",
          "border-r",
          {
            // Desktop styles
            "md:w-64 md:translate-x-0": isOpen,
            "md:w-16 md:translate-x-0": !isOpen,
            // Mobile styles
            "w-64 max-md:translate-x-0": isOpen,
            "w-64 max-md:-translate-x-full": !isOpen
          },
          "flex flex-col"
        )}
      >
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className={cn(
            "absolute top-4 -right-12 rounded-r-lg border-b border-r border-t bg-background p-2 md:hidden",
            !isOpen && "hidden"
          )}
        >
          <X className="h-4 w-4" />
        </button>

        {/* Sidebar Header */}
        <div className="flex h-14 items-center justify-center border-b">
          <Link href="/" className="w-full px-3 py-2">
            <Logo className="mx-auto" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    onClose();
                  }
                }}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 transition-all duration-300",
                  "hover:bg-accent hover:text-accent-foreground",
                  pathname === route.href ? "bg-accent text-accent-foreground" : "text-foreground",
                  !isOpen && "md:justify-center px-2",
                  "gap-3 justify-start"
                )}
              >
                <Icon className="h-5 w-5 min-w-[20px]" />
                {(isOpen || window.innerWidth < 768) && (
                  <span className="text-base">
                    {route.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}