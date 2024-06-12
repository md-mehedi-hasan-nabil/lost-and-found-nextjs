"use client"

import { MailOutlined } from '@ant-design/icons'
import { Button, Input, Form, message } from 'antd'
import Link from 'next/link'
import logo from "@/assets/logo.svg"
import Image from 'next/image'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Head from 'next/head'
import { IoKeyOutline } from 'react-icons/io5'
import { loginUser } from '@/services/actions/loginUser'
import { storeUserInfo } from '@/services/auth.service'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface ILoginInput {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { control, handleSubmit } = useForm<ILoginInput>({
    defaultValues: {
      email: "mehedi@gmail.com",
      password: "123456789"
    }
  })

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    try {
      setLoading(true)
      const result = await loginUser(data);

      if (result?.success && result?.data?.token) {
        storeUserInfo(result.data.token)
        message.success('Login successful');
        router.push("/")
      } else {
        message.error(result?.message ? result?.message : "Login Failed")
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <section className='flex justify-center items-center h-screen'>
        <div>
          <Link href="/">
            <Image src={logo} alt='logo' className='mx-auto mb-10' />
          </Link>
          <h1 className='text-3xl font-semibold mb-8'>Login to your account</h1>

          <Form onFinish={handleSubmit(onSubmit)}>
            <Form.Item name="email">
              <Controller
                name="email"
                control={control}
                render={({ field }) =>
                  <Input {...field} size="large" placeholder="Email" prefix={<MailOutlined />} />}
              />
            </Form.Item>

            <Form.Item name="password">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder="Password" prefix={<IoKeyOutline />} type="password" />
                )}
              />
            </Form.Item>

            <Form.Item>
              <Button loading={loading} disabled={loading} type="primary" htmlType="submit" size="large" className='w-full'>
                Login
              </Button>
            </Form.Item>
          </Form>
          <p className='mt-3'>
            Don&rsquo;t have an Account? Click here: <Link href="/register" className='font-bold'>Sign Up</Link>
          </p>
        </div>
      </section>
    </>
  )
}
