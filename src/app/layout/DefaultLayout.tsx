import CNavbar from '../components/CNavbar'
import { ReactNode } from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="min-h-screen bg-grey-100">
      <CNavbar />
      <div className='flex'>
        <div className='w-full max-w-[280px] py-8 px-10 hidden md:block'>
          <ul>
            <li>
              <Link href="/" passHref className='flex items-center'>
                <Icon icon="tabler:home" width={35} height={35} />
                <span className='ml-1'>Home</span>
              </Link>
            </li>
            <li >
              <Link href="/blogs/our" passHref className='flex items-center'>
                <Icon icon="tabler:text-plus" width={35} height={35} />
                <span className='ml-1'>Our Blog</span>
              </Link>
            </li>
          </ul>
        </div>
        <main className='m-auto'>{children}</main>
      </div>
    </div>
  )
}
