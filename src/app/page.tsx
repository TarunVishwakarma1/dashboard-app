import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { ArrowRight, BarChart3, LineChart, PieChart, Sparkles } from "lucide-react";
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Animated background gradients */}
          <div className="absolute inset-0 hero-gradient animate-pulse" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />

          {/* Centered Container Fix */}
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 pb-8 pt-16 md:pt-24">
              {/* New Features Badge */}
              <div className="inline-flex items-center rounded-full border bg-background/95 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur">
                <Sparkles className="mr-2 h-4 w-4" />
                New Features Available
              </div>

              {/* Hero Content */}
              <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
                <h1 className="animate-in bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-4xl font-bold leading-tight tracking-tighter text-transparent md:text-6xl lg:text-7xl">
                  Beautiful, customizable
                  <br className="hidden sm:inline" />
                  dashboards for your data
                </h1>
                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                  Create stunning visualizations and monitor your metrics with our intuitive
                  dashboard builder. Customize every aspect to match your needs.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 bg-background/95 backdrop-blur hover:bg-primary/10"
                >
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </div>

              {/* Feature Cards */}
              <div className="grid w-full grid-cols-1 gap-6 pt-16 md:grid-cols-3 md:gap-8">
                {[
                  {
                    icon: BarChart3,
                    title: "Real-time Analytics",
                    description: "Monitor your data in real-time with interactive charts and graphs",
                  },
                  {
                    icon: LineChart,
                    title: "Custom Reports",
                    description: "Generate detailed reports with our powerful reporting engine",
                  },
                  {
                    icon: PieChart,
                    title: "Data Visualization",
                    description: "Transform your data into beautiful, insightful visualizations",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="card-hover group relative overflow-hidden rounded-xl border bg-card/50 p-6 text-center backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
