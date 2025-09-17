"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Mail, ArrowLeft } from "lucide-react"

interface OTPModalProps {
  isOpen: boolean
  onClose: () => void
  onVerified: () => void
  email: string
}

export function OTPModal({ isOpen, onClose, onVerified, email }: OTPModalProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setCanResend(true)
    }
  }, [isOpen, timeLeft])

  useEffect(() => {
    if (isOpen) {
      // Focus first input when modal opens
      inputRefs.current[0]?.focus()
    }
  }, [isOpen])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return // Prevent multiple characters

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 6)
    const newOtp = [...otp]

    for (let i = 0; i < pastedData.length && i < 6; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newOtp[i] = pastedData[i]
      }
    }

    setOtp(newOtp)

    // Focus the next empty input or the last one
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === "")
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex
    inputRefs.current[focusIndex]?.focus()
  }

  const handleVerify = async () => {
    const otpCode = otp.join("")
    if (otpCode.length !== 6) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demo purposes, accept any 6-digit code
    if (otpCode.length === 6) {
      onVerified()
    } else {
      alert("Invalid OTP code")
    }

    setIsLoading(false)
  }

  const handleResend = async () => {
    setCanResend(false)
    setTimeLeft(60)
    setOtp(["", "", "", "", "", ""])

    // Simulate resend API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Focus first input after resend
    inputRefs.current[0]?.focus()
  }

  const isComplete = otp.every((digit) => digit !== "")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-brand" />
            </div>
          </div>
          <DialogTitle className="text-xl text-light-100">Verify your email</DialogTitle>
          <DialogDescription className="text-light-200">
            We sent a verification code to <span className="font-medium text-light-100">{email}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-center text-lg font-semibold border-light-400 focus:border-brand focus:ring-brand"
                />
              ))}
            </div>

            <div className="text-center">
              {canResend ? (
                <button onClick={handleResend} className="text-brand hover:text-brand-100 font-medium text-sm">
                  Resend code
                </button>
              ) : (
                <p className="text-light-200 text-sm">Resend code in {timeLeft}s</p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleVerify}
              disabled={!isComplete || isLoading}
              className="w-full bg-brand hover:bg-brand-100 text-white font-medium py-2.5"
            >
              {isLoading ? "Verifying..." : "Verify email"}
            </Button>

            <Button
              variant="ghost"
              onClick={onClose}
              className="w-full text-light-200 hover:text-light-100 hover:bg-light-400/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to sign up
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-light-200">
            {"Didn't receive the code? Check your spam folder or "}
            <button
              onClick={handleResend}
              disabled={!canResend}
              className="text-brand hover:text-brand-100 font-medium disabled:text-light-200 disabled:cursor-not-allowed"
            >
              try again
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
