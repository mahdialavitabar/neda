import React from 'react'
import Image from 'next/image'
import { Divider } from 'antd'
import Menu from '../(folders)/components/menu'
export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full">
      <div className="flex gap-14 w-9/12 mt-20">
        <p>بیشترین تخفیف</p>
        <Image
          src={require('/public/image/rr.jpeg')}
          width={300}
          height={300}
          alt="logo1"
        />
      </div>
      <Divider className="h-1 bg-gray-300 " />
      <div className="flex gap-14 w-9/12">
        <p>پربازدیدترین</p>
        <Image
          src={require('/public/image/rr.jpeg')}
          width={300}
          height={300}
          alt="logo1"
        />
      </div>
    </div>
  )
}
