import { KeyOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Register Page',
}

export default function RegisterPage() {
  return (
    <section className='flex justify-center items-center h-screen'>
      <div>
        <h1 className='text-3xl font-semibold mb-8'>Login to your account</h1>
        <form className='flex flex-col gap-4'>
          <div>
            <Input size="large" placeholder="Name" prefix={<MailOutlined />} />
          </div>
          <div>
            <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
          </div>
          <div>
            <Input size="large" placeholder="Password" prefix={<KeyOutlined />} />
          </div>
          <div>
            <Input size="large" placeholder="Retype Password" prefix={<KeyOutlined />} />
          </div>

          <div>
            <Button className='w-full' type='primary'>Login</Button>
          </div>
        </form>
        <p className='mt-3'>
          Already have an account? Please click: <Link href="/login" className='font-bold'>Sign In</Link>
        </p>
      </div>
    </section>
  )
}
