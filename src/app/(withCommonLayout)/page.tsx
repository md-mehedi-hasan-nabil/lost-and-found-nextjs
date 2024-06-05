"use client"

import About from '@/components/home/About'
import ClientFeedback from '@/components/home/ClientFeedback'
import Hero from '@/components/home/Hero'
import { Button, Spin } from 'antd'
import { Metadata } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { lazy, Suspense } from 'react'
const RecentLostItems = lazy(() => import('@/components/RecentLostItems'));

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <Hero />
        <About />

        <div className='container py-10'>
          <h3 className='text-center text-3xl font-bold mb-10'>Recent Lost Items</h3>
          <Suspense fallback={<Spin size="large" />}>
            <RecentLostItems itemCount={4} />
          </Suspense>

          <div className='text-center mt-10'>
            <Link href="/recent-lost-item" className='text-lg'>
              <Button size='large'>See More</Button>
            </Link>
          </div>
        </div>
        <ClientFeedback />
      </div>
    </>
  )
}
