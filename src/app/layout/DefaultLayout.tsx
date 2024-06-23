import CNavbar from '../components/CNavbar'
import { ReactNode } from 'react'
interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="min-h-screen bg-grey-100">
      <CNavbar />
      <main className='m-auto'>{children}</main>
    </div>
  )
}
