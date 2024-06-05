"use client"

import LostFoundActionBar from "@/components/LostFoundActionBar"
import { Spin } from "antd";
import { lazy, Suspense } from "react";
const RecentLostItems = lazy(() => import('@/components/RecentLostItems'));

export default function LostItemsPage() {
    return (
        <section>
            <div className='container my-10'>
                <h2 className='text-3xl font-semibold mb-8 text-center'>Recent Lost Items </h2>
                <LostFoundActionBar />

                <Suspense fallback={<Spin size="large" />}>
                    <RecentLostItems itemCount={4} />
                </Suspense>
            </div>
        </section >
    )
}
