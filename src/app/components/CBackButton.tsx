import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react';

const CBackButton = () => {
  return (
    <Link href="/">
      <div className="cursor-pointer w-[32px] h-[32px] bg-green-100 rounded-full flex justify-center items-center ml-2 lg:ml-[3rem]">
        <Icon icon="mdi:arrow-left" color="green" width={25} height={25} />
      </div>
    </Link>
  )
}

export default CBackButton