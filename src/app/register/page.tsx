"use client"

import { MailOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import Link from 'next/link'
import logo from "@/assets/logo.svg"
import Image from 'next/image'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import TextArea from 'antd/es/input/TextArea'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Head from 'next/head'
import { IoKeyOutline, IoTimeOutline } from 'react-icons/io5'
import { createUser } from '@/services/actions/createUser'
import { useRouter } from 'next/navigation'

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  profile: {
    bio: string;
    age: number;
  }
}

export default function RegisterPage() {
  const router = useRouter()

  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      profile: {
      }
    }
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (data?.password === data?.confirm_password) {

        const { email, name, password, profile } = data

        const obj = {
          email, name, password, profile
        }

        const result = await createUser(obj)

        if (result?.success) {
          message.success('Account create successful');
          router.push("/login")
        }
      } else {
        message.error("Password is not match")
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Head>
        <title>Register Page</title>
      </Head>
      <section className='flex justify-center items-center min-h-screen py-6'>
        <div className='px-6'>
          <Link href="/">
            <Image src={logo} alt='logo' className='mx-auto mb-10' />
          </Link>
          <h1 className='text-xl md:text-3xl font-semibold mb-8'>Create your account</h1>
          <Form onFinish={handleSubmit(onSubmit)} className=''>

            <Form.Item name="name">
              <Controller
                name="name"
                control={control}
                render={({ field }) =>
                  <Input {...field} required type="text" size="large" placeholder="Name" prefix={<IoIosInformationCircleOutline />} />}
              />
            </Form.Item>

            <Form.Item name="email">
              <Controller
                name="email"
                control={control}
                render={({ field }) =>
                  <Input {...field} required type="email" size="large" placeholder="Email" prefix={<MailOutlined />} />}
              />
            </Form.Item>

            <div className='flex justify-center items-center gap-4'>
              <Form.Item name="password">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true, minLength: 6 }}
                  render={({ field, fieldState: { error } }) =>
                    <>
                      <Input {...field} required type="password" size="large" placeholder="Password" prefix={<IoKeyOutline />} />
                      {error && <span className='text-red-400 text-sm'>Password must be at least 6 characters long</span>}
                    </>
                  }
                />
              </Form.Item>

              <Form.Item name="confirm_password">
                <Controller
                  name="confirm_password"
                  control={control}
                  rules={{ required: true, minLength: 6 }}
                  render={({ field, fieldState: { error } }) =>
                    <>
                      <Input {...field} type="password" size="large" placeholder="Confirm password" prefix={<IoKeyOutline />} />
                      {error && <span className='text-red-400 text-sm'>Confirm password must be at least 6 characters long</span>}
                    </>
                  }
                />
              </Form.Item>
            </div>

            <Form.Item name="profile.age">
              <Controller
                name="profile.age"
                control={control}
                render={({ field }) =>
                  <Input {...field} required type="number" size="large" placeholder="Age" prefix={<IoTimeOutline />} />}
              />
            </Form.Item>

            <Form.Item name="profile.bio">
              <Controller
                name="profile.bio"
                control={control}
                render={({ field }) =>
                  <TextArea required {...field} rows={4} placeholder="Bio" size='large' />}
              />
            </Form.Item>

            <div>
              <Button htmlType='submit' className='w-full' type='primary'>Create account</Button>
            </div>
          </Form>

          <p className='mt-3'>
            Already have an account? Please click: <Link href="/login" className='font-bold'>Sign In</Link>
          </p>
        </div>
      </section >
    </>
  )
}
