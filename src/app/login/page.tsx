import { KeyOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Login Page',
}

export default function LoginPage() {
  return (
    <section className='flex justify-center items-center h-screen'>
      <div>
        <h1 className='text-3xl font-semibold mb-8'>Login to your account</h1>
        <form className='flex flex-col gap-4'>
          <div>
            <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
          </div>
          <div>
            <Input size="large" placeholder="Password" prefix={<KeyOutlined />} />
          </div>

          <div>
            <Button className='w-full' type='primary'>Login</Button>
          </div>
        </form>
        <p className='mt-3'>
          Don&rsquo;t have an Account? Click here: <Link href="/register" className='font-bold'>Sign Up</Link>
        </p>
      </div>
    </section>
  )
}
