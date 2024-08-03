import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, ThemeConfig } from 'antd'

const myFont = localFont({
  src: '../../../public/fonts/IRANSansWeb.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#52c41a',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={myFont.style}>
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            
            {children}
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  )
}
