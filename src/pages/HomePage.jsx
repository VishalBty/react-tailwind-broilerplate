import { useState } from 'react'
import { Zap, Code2, Palette, Rocket } from 'lucide-react'
import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription, Badge, Input } from '@/components/ui'

const features = [
  { icon: Zap, title: 'Vite', description: 'Lightning-fast dev server and optimized production builds.', badge: 'v6' },
  { icon: Code2, title: 'React', description: 'Modern React 19 patterns with hooks and JSX.', badge: 'v19' },
  { icon: Palette, title: 'Tailwind CSS v4', description: 'Utility-first styling with zero config and CSS variables.', badge: 'v4' },
  { icon: Rocket, title: 'Production Ready', description: 'Routing, components, and folder structure all set up.', badge: 'Ready' },
]

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Hero */}
      <section className="mb-20 text-center">
        <Badge className="mb-4">Vibe-ready boilerplate</Badge>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Build fast.{' '}
          <span className="text-primary">Ship faster.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          A professional React + Tailwind + Vite starter. Clone it, rename it, ship it.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">View on GitHub</Button>
        </div>
      </section>

      {/* Features */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-2xl font-semibold">Everything included</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description, badge }) => (
            <Card key={title} className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                  <Badge variant="secondary">{badge}</Badge>
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Component showcase */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-2xl font-semibold">Component showcase</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>All button variants ready to use.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button loading>Loading</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Example form with input and validation state.</CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="rounded-lg bg-success/10 px-4 py-3 text-sm text-success">
                  You're on the list!
                </div>
              ) : (
                <form
                  className="flex flex-col gap-3"
                  onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true) }}
                >
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={email === 'bad' ? 'Invalid email address' : undefined}
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
