import { Button, Flex, Input } from 'antd'
import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="h-full w-[35%]">
        <Image
          className="h-full w-full"
          src={require('/public/image/storage.webp')}
          height={100}
          width={500}
          alt="logo4"
        />
      </div>
      <div className="flex flex-col w-[65%] h-full ">
        <div className="flex gap-10 items-center mr-20 mt-10">
          <Image
            className="h-20 w-20"
            src={require('/public/image/1.png')}
            height={100}
            width={500}
            alt="logo4"
          />
          <span>خوش امدید</span>
        </div>
        <div className="flex h-full w-full justify-center items-center">
          <div className="flex flex-col gap-10 w-1/2">
            <Input />
            <Input />
            <Button>ورود</Button>
          </div>
        </div>
        <div className='h-20'>هنپز پارد سایت ما نشده اید</div>
      </div>
    </div>
  )
}
