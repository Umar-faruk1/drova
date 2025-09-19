"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { OTPModal } from "@/app/components/otp-modal"

export default function SignUpPage() {
  const [showOTPModal, setShowOTPModal] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowOTPModal(true)
  }

  const handleOTPVerified = () => {
    console.log("Account created:", formData)
    setShowOTPModal(false)
  }

  return (
    <>
      <div className="min-h-screen flex">
        {/* Left Side - Branding */}
        <div className="flex-1 bg-brand flex flex-col justify-center items-center p-12 text-white relative overflow-hidden">
          <div className="max-w-md text-center z-10">
            <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 flex items-center justify-center backdrop-blur-sm">
              {/* <div className="w-15 h-15 flex items-center justify-center"> */}
                <img src="/favicon.ico" alt="" />
              {/* </div> */}
            </div>
            
          </div>
            <h1 className="text-4xl font-bold mb-4">Drova</h1>
            <h2 className="text-2xl font-semibold mb-4">Manage your files the best way</h2>
            <p className="text-white/90 mb-8">
              Awesome, we've created the perfect place for you to store all your documents.
            </p>
          </div>

          {/* Illustration */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-32 h-24 bg-blue rounded-lg transform rotate-12 shadow-lg"></div>
              <div className="absolute -top-4 -right-4 w-24 h-20 bg-white/90 rounded-lg shadow-lg flex items-center justify-center">
                <div className="w-16 h-12 bg-light-300 rounded"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-red rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-yellow/80 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex-1 bg-white flex flex-col justify-center items-center p-12">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-bold text-light-100 mb-8 text-center">Create Account</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-light-200 text-sm">
                  Full name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="mt-2 border-light-400 focus:border-brand focus:ring-brand h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-light-200 text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2 border-light-400 focus:border-brand focus:ring-brand h-12"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand hover:bg-brand-100 text-white font-medium h-12 rounded-full"
              >
                Create Account
              </Button>
            </form>

            <div className="text-center mt-6">
              <span className="text-light-200">Already have an account? </span>
              <Link href="/sign-in" className="text-brand hover:text-brand-100 font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <OTPModal
        isOpen={showOTPModal}
        onClose={() => setShowOTPModal(false)}
        onVerified={handleOTPVerified}
        email={formData.email}
      />
    </>
  )
}
