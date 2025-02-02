"use client";

import { Button } from "@/components/ui/button";
import { BarChart3, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { SignedOut, SignInButton } from "@clerk/nextjs";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-2 items-center mr-4 md:mr-8">
          <BarChart3 className="h-6 w-6" />
          <span className="hidden md:inline-block font-bold text-xl">DataViz</span>
        </div>
        <div className="flex-1">
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
            <SignedOut>
                <SignInButton/>
            </SignedOut>
          <Button>Get Started</Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#features" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                  Features
                </a>
                <a href="#pricing" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                  Pricing
                </a>
                <a href="#about" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                  About
                </a>
                <Button variant="ghost" className="justify-start px-2">
                  Sign In
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}