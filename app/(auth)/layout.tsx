import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication - Drova",
  description: "Sign in or create an account to access your files",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-light-500">{children}</div>
}