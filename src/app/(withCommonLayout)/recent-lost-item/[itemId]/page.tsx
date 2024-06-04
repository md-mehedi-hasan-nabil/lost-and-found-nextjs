import { IItem } from "@/types"
import Image from "next/image"

async function getLostItem(type: "lost" | "found", itemId: string): Promise<IItem> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${itemId}?type=${type}`, {
        next: {
            revalidate: 30,
            tags: ["lost_items"]
        }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const result = await res.json()

    return result?.data
}

export default async function LostItemDetails({ params }: { params: { itemId: string } }) {
    const item = await getLostItem("lost", params?.itemId)

    const { image_url, name, description } = item || {};

    return (
        <section className="container py-12">
            <div className="grid grid-cols-12 gap-6">
                {image_url && <div className="col-span-4">
                    <Image width={500} height={500} src={image_url} alt={name} />
                </div>}
                <div className="col-span-8">
                    <h2 className="text-4xl font-bold capitalize">{name}</h2>
                    <p className="text-lg font-semibold capitalize text-stone-600 mt-4">{description}</p>
                </div>
            </div>
        </section>
    )
}
