'use client'
import { usePathname } from 'next/navigation'
import Menu from '../(folders)/components/menu'

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <div className="mt-20">
      {path === '/login' || path === '/login2' ? null : <Menu />}
      {children}
    </div>
  )
}
