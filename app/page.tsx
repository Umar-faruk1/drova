import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Folder, Share2, Shield, Zap, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-light-300">
      {/* Header */}
      <header className="bg-white border-b border-light-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-brand rounded-sm"></div>
                </div>
              </div>
              <h1 className="text-xl font-semibold text-light-100">Drive</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/signin">
                <Button variant="ghost" className="text-light-100 hover:text-brand">
                  Sign in
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-brand hover:bg-brand-100 text-white">Get started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-100 mb-6">Your files, everywhere you need them</h2>
          <p className="text-xl text-light-200 mb-8 max-w-2xl mx-auto">
            Store, sync, and share your files securely in the cloud. Access your documents from any device, anywhere in
            the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-brand hover:bg-brand-100 text-white px-8 py-3">
                Start for free
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-light-400 text-light-100 hover:bg-white px-8 py-3 bg-transparent"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-light-100 mb-4">Everything you need to stay organized</h3>
            <p className="text-lg text-light-200 max-w-2xl mx-auto">
              Powerful features to help you manage, share, and collaborate on your files with ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-light-400 hover:shadow-drop-1 transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-brand" />
                </div>
                <CardTitle className="text-light-100">Smart Organization</CardTitle>
                <CardDescription className="text-light-200">
                  Automatically organize your files with AI-powered suggestions and smart folders.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-light-400 hover:shadow-drop-1 transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-green" />
                </div>
                <CardTitle className="text-light-100">Easy Sharing</CardTitle>
                <CardDescription className="text-light-200">
                  Share files and folders with anyone, with granular permission controls.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-light-400 hover:shadow-drop-1 transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue" />
                </div>
                <CardTitle className="text-light-100">Secure Storage</CardTitle>
                <CardDescription className="text-light-200">
                  Enterprise-grade security with end-to-end encryption and advanced access controls.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-light-400 hover:shadow-drop-1 transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-yellow" />
                </div>
                <CardTitle className="text-light-100">Lightning Fast</CardTitle>
                <CardDescription className="text-light-200">
                  Upload and sync files at blazing speeds with our global CDN network.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-light-400 hover:shadow-drop-1 transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange" />
                </div>
                <CardTitle className="text-light-100">Team Collaboration</CardTitle>
                <CardDescription className="text-light-200">
                  Work together in real-time with comments, version history, and team workspaces.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-light-400 hover:shadow-drop-1 transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <Folder className="w-6 h-6 text-brand" />
                </div>
                <CardTitle className="text-light-100">Universal Access</CardTitle>
                <CardDescription className="text-light-200">
                  Access your files from any device - web, mobile, or desktop applications.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to get started?</h3>
          <p className="text-xl text-white/90 mb-8">
            Join millions of users who trust Drive with their most important files.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-brand hover:bg-light-300 px-8 py-3">
              Create your account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light-100 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center mr-3">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-brand rounded-sm"></div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold">Drive</h4>
              </div>
              <p className="text-light-200">The secure cloud storage solution for individuals and teams.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-light-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-light-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-light-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-light-200/20 mt-8 pt-8 text-center text-light-200">
            <p>&copy; 2024 Drive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
