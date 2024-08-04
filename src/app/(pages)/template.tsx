'use client'
import { usePathname } from 'next/navigation'
import Menu from '../(folders)/components/menu'

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <>
      {path === '/login' ? null : <Menu />}
      {children}
    </>
  )
}
