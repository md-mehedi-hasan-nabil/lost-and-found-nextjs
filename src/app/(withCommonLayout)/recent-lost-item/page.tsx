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
        content = data.map((item: { id: Key | null | undefined; image_url: string | StaticImport; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; location: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; date: moment.MomentInput }) =>
            <div key={item.id} className="col-span-12 md:col-span-6">
                <div className="w-full grid grid-cols-12 gap-4 bg-white border border-gray-200 rounded-lg shadow ">
                    <div className="col-span-4">
                        <Image
                            width={200}
                            height={200}
                            className="rounded-lg w-full p-3"
                            src={item.image_url}
                            alt="product image"
                        />
                    </div>
                    <div className="col-span-8 py-3">
                        <h5 className="text-2xl font-bold capitalize text-gray-900">
                            {item.name}
                        </h5>
                        <p className="text-lg line-clamp-1 mt-2">{item.description}</p>
                        <p className="text-base line-clamp-1 mt-2"><b>Location: </b><i>{item.location}</i></p>
                        <p className="mt-1"><b>Lost Date:</b> {moment(item.date).startOf('hour').fromNow()}</p>

                        <div className="mt-4">
                            <Link href={`/recent-lost-item/${item.id}`} >
                                <Button type="primary">See more lost item</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>)
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
