import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import RecentLostItemReports from '@/components/home/RecentLostItemReports'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Home Page',
}

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <RecentLostItemReports />
    </div>
  )
}
