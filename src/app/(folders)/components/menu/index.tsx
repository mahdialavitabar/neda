'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

type Props = {}

const Menu = (props: Props) => {
  const router = useRouter()

  function handleclicklogin() {
    router.push('/login')
  }
  return (
    <menu className="fixed top-0 border-b border-b-gray-500 w-full h-20 pt-6 pb-6 bg-white">
      <div className="flex justify-between items-center w-9/12 mx-auto ">
        <div>
          <Image
            className="w-10 h-10"
            src={require('/public/image/1.png')}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex gap-10 text-xl justify-center">
          <Link href="/">خانه</Link>
          <Link href="/neda">محصولات</Link>
          <Link href="/orders">سفارشات</Link>
        </div>
        <div>
          <button
            onClick={handleclicklogin}
            className="bg-black text-white rounded-md w-32 h-10"
          >
            ورود|ثبت نام
          </button>
        </div>
      </div>
    </menu>
  )
}

export default Menu
