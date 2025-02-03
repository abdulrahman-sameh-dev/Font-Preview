"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { CircleCheck } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

interface UseProgressTimerProps {
  duration: number
  interval?: number
  onComplete?: () => void
}

function useProgressTimer({ duration, interval = 100, onComplete }: UseProgressTimerProps) {
  const [progress, setProgress] = useState(duration)
  const progressRef = useRef(duration)
  const timerRef = useRef<NodeJS.Timeout>()
  const startTimeRef = useRef<number>()
  const pausedTimeRef = useRef<number>()

  const cleanup = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  const start = useCallback(() => {
    cleanup()
    progressRef.current = duration
    setProgress(duration)
    startTimeRef.current = Date.now()
    pausedTimeRef.current = undefined

    timerRef.current = setInterval(() => {
      const elapsedTime = Date.now() - (startTimeRef.current || 0)
      const newProgress = Math.max(0, duration - elapsedTime)
      progressRef.current = newProgress
      setProgress(newProgress)

      if (newProgress === 0) {
        cleanup()
        onComplete?.()
      }
    }, interval)
  }, [duration, interval, onComplete])

  const pause = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      pausedTimeRef.current = progressRef.current
    }
  }, [])

  const resume = useCallback(() => {
    if (pausedTimeRef.current !== undefined) {
      cleanup()
      startTimeRef.current = Date.now() - (duration - pausedTimeRef.current)
      pausedTimeRef.current = undefined

      timerRef.current = setInterval(() => {
        const elapsedTime = Date.now() - (startTimeRef.current || 0)
        const newProgress = Math.max(0, duration - elapsedTime)
        progressRef.current = newProgress
        setProgress(newProgress)

        if (newProgress === 0) {
          cleanup()
          onComplete?.()
        }
      }, interval)
    }
  }, [duration, interval, onComplete])

  const reset = useCallback(() => {
    cleanup()
    progressRef.current = duration
    setProgress(duration)
    startTimeRef.current = undefined
    pausedTimeRef.current = undefined
  }, [duration])

  useEffect(() => {
    return cleanup
  }, [])

  return {
    progress,
    start,
    pause,
    resume,
    reset,
  }
}

interface ComponentProps {
  unicodeValue: string;
}

export default function Componnt({ unicodeValue }: ComponentProps) {
  const { toast } = useToast()
  const toastDuration = 2000

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(unicodeValue);
      toast({
        title: "Unicode Copied",
        description: `Copied: ${unicodeValue}`,
        duration: toastDuration
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy Unicode",
        duration: toastDuration,
        variant: "destructive"
      })
    }
  }

  return (
    <Button
      onClick={handleClick}
      className="!text-black font-bold bg-emerald-400 hover:bg-emerald-500"
      variant="outline"
      size="sm"
    >
      Copy
    </Button>
  )
}
