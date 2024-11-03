'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import {useTheme } from 'next-themes'
import { ReactNode, useEffect } from 'react'


export function Providers({ children }: { children: ReactNode }) {
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const actualTheme = localStorage.getItem('theme')
    setTheme(actualTheme || 'system')
  }, [theme])

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      appearance={{
        baseTheme: resolvedTheme === 'dark' ? dark : undefined
      }}
      afterSignOutUrl="/"
    >
        {children}
    </ClerkProvider>
  )
}