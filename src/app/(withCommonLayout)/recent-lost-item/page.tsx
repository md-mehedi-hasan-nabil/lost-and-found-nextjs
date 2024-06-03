import ItemCard from "@/components/ItemCard"
import { IItem } from "@/types"
import { Button } from "antd"
import moment from "moment"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Link from "next/link"
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react"

async function getAllLostItems(type: "lost" | "found") {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items?type=${type}`, {
        next: {
            revalidate: 30,
            tags: ["lost_items"]
        }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function LostItemsPage() {
    const { data } = await getAllLostItems("lost") || {}

    let content;

    if (data && data?.length > 0) {
        content = data.map((item: IItem) => <ItemCard key={item.id} item={item} />)
    } else {
        content = <p className="col-span-12 mb-5">No item found.</p>
    }

    return (
        <section>
            <div className='container my-10'>
                <h2 className='text-3xl font-semibold mb-8 text-center'>Recent Lost Items </h2>

                <div className='grid grid-cols-12 gap-6 mt-6'>
                    {content}
                </div>
            </div>
        </section>
    )
}
