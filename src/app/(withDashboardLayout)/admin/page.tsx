"use client"

import { useGetAdminMetaQuery } from "@/redux/features/admin/adminApi"
import { Spin } from "antd";

export default function DashboardPage() {
    const { data, isLoading, isSuccess } = useGetAdminMetaQuery(undefined)

    let content;

    if (isLoading) {
        content = <>
            <Spin />
        </>
    } else if (isSuccess && data?.data) {
        const { lostCount, foundCount, userCount } = data?.data
        content = <>
            <div className="col-span-12 md:col-span-4 text-center bg-slate-100 rounded-lg py-5">
                <h2 className="text-3xl font-bold">Total Lost Item</h2>
                <p className="text-2xl font-bold mt-3">{lostCount}</p>
            </div>
            <div className="col-span-12 md:col-span-4 text-center bg-slate-100 rounded-lg py-5">
                <h2 className="text-3xl font-bold">Total Found</h2>
                <p className="text-2xl font-bold mt-3">{foundCount}</p>
            </div>
            <div className="col-span-12 md:col-span-4 text-center bg-slate-100 rounded-lg py-5">
                <h2 className="text-3xl font-bold">Total User</h2>
                <p className="text-2xl font-bold mt-3">{userCount}</p>
            </div>
        </>
    } else {
        content = <p>No data found</p>
    }

    return (
        <section>
            <div className="grid grid-cols-12 gap-6">
                {content}
            </div>
        </section>
    )
}
