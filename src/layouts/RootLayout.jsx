import { Outlet, NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <NavLink to="/" className="text-sm font-semibold tracking-tight">
            ⚡ AppName
          </NavLink>
          <div className="flex items-center gap-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-1.5 text-sm transition-colors',
                    isActive
                      ? 'bg-muted font-medium text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AppName. Built with React + Tailwind + Vite.
      </footer>
    </div>
  )
}
