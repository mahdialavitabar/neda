'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Divider, Form, Input, Segmented } from 'antd'
import Link from 'next/link'
export default function LoginPage() {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  })
  const [isChecked, setchecked] = useState(false)
  const handleSubmit = (values: any) => {
    setFormValues(values) //set => formValues
  }

  function handlechange() {
    setchecked(!isChecked)
  }
  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-[40%]">
        <Image
          src={require('/public/image/storage.webp')}
          className="w-full h-full object-cover"
          quality={100}
          width={1000}
          height={1000}
          alt="sd"
        />
      </div>
      <div className="flex flex-col w-[60%] h-full">
        <div className="flex gap-10 items-center mr-32 mt-10">
          <Image
            src={require('/public/image/1.png')}
            className=" w-[4rem] "
            quality={100}
            width={100}
            height={100}
            alt="sd"
          />
          <span className="text-2xl">خوش امدید</span>
        </div>
        <div className="flex justify-center items-center h-full w-full">
          <div className="flex flex-col gap-10 w-1/2 items-center">
            <Segmented<string>
              options={[
                {
                  label: <span>نام کاربری و رمز عبور</span>,
                  className:
                    '!text-neutral-400 !bg-neutral-100 !border !border-l-none !rounded-l-none px-2 h-8 rounded-md',
                  value: 'userpass',
                },
                {
                  label: <span>رمز یکبار مصرف</span>,
                  className:
                    '!text-neutral-400 !bg-neutral-100 !border !border-r-none !rounded-r-none px-2 h-8 rounded-md',
                  value: 'otp',
                },
              ]}
              onChange={value => {
                // setFormType(value as 'userpass' | 'otp')
              }}
              className="custom-segmented"
              rootClassName="bg-white mx-auto w-fit"
            />
            <Divider className="h-[2px] bg-black w-full" />
            <Form
              name="layout-multiple-horizontal"
              layout="vertical"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              onFinish={handleSubmit}
              className="w-full"
            >
              <Form.Item<FieldType>
                layout="vertical"
                label="نلم کاربری"
                name="username"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                layout="vertical"
                label="رمز عبور"
                name="password"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <input type="checkbox" checked ={isChecked}onChange={handlechange} />
        <p>{isChecked ? 'yes' : 'no'}</p>
        <div className="w-full h-32 flex justify-center gap-2">
          <span className="text-center ">هنوز عضو سایت ما نشده اید؟</span>
          <Link href="/signup">ثبت نام کنید</Link>
        </div>
      </div>
    </div>
  )
}
