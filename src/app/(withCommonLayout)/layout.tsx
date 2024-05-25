import Footer from '@/components/sheard/Footer'
import Navigation from '@/components/sheard/Navigation'
import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navigation />
            <>
                {children}
            </>
            <Footer />
        </>
    )
}
