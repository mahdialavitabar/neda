import Menu from '../(folders)/components/menu'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      <p className="mt-40">dfsdff</p>
      {children}
    </>
  )
}
