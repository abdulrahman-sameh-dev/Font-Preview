"use client";
import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = "bash", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <div className={cn("relative group w-full", className)}>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-950 py-4 px-2 md:px-4 font-mono text-xs md:text-sm text-zinc-50 max-w-full">
        <button
          onClick={onCopy}
          className={cn(
            "absolute right-4 top-4",
            "p-2 rounded-md",
            "opacity-0 group-hover:opacity-100",
            "transition-all duration-300",
            "hover:bg-zinc-800"
          )}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-zinc-400" />
          )}
          <span className="sr-only">Copy code</span>
        </button>
        <code className="break-words whitespace-pre-wrap">{code}</code>
      </pre>
    </div>
  )
}
