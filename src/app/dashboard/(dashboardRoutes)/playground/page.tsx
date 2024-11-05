// app/dashboard/(dashboardRoutes)/dashboard-settings/page.tsx
import { Metadata } from 'next'
import { Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Dashboard Settings',
  description: 'Manage your dashboard preferences'
}

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function DashboardSettingsPage() {
  return (
    <Suspense fallback={<SettingsLoadingState />}>
      <div className="container mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold">Dashboard Settings</h1>
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add settings content */}
            </div>
          </CardContent>
        </Card>
      </div>
    </Suspense>
  )
}

function SettingsLoadingState() {
  return (
    <div className="container mx-auto p-4">
      <div className="h-8 w-48 bg-muted animate-pulse rounded mb-4" />
      <div className="space-y-4">
        <div className="h-32 bg-muted animate-pulse rounded" />
      </div>
    </div>
  )
}