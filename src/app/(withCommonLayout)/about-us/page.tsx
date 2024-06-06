import { Metadata } from "next"
import aboutImage from "../../../assets/about-us.jpg"
import Image from "next/image"

export const metadata: Metadata = {
    title: 'About Page',
}

export default function AboutPage() {
    return (
        <section className="container py-10">
            <div className="grid grid-cols-12 gap-8 pb-6">
                <div className="col-span-12 md:col-span-6">
                    <h3 className="text-2xl font-semibold">
                        Welcome to TrackReclaim,
                    </h3>
                    <p className="text-xl mt-3">
                        Your reliable platform for reuniting lost items with their rightful owners. We aim to make finding lost belongings easy and stress-free.
                    </p>

                    <div className="mt-5">
                        <h3 className="text-2xl font-bold mt-4 mb-2">Our Mission</h3>
                        <p className="text-lg">
                            We understand the frustration of losing valuable items. That’s why we created a community-driven site to help people find what they’ve lost quickly and efficiently.
                        </p>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-2xl font-bold mt-4 mb-2"> What We Offer</h3>
                        <div className="text-lg">
                            <p className="mb-2">
                                <b className="font-bold">Simple Reporting:</b> Easily report lost or found items with detailed descriptions and photos.
                            </p>
                            <p className="mb-2">
                                <b className="font-bold">Effective Search:</b> Browse our database to find lost belongings.
                            </p>
                            <p className="mb-2">
                                <b className="font-bold">Community Support:</b> Connect with others who might have information about your lost item.
                            </p>
                            <p className="mb-2">
                                <b className="font-bold">Alerts:</b> Get notifications when items matching your description are reported.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 flex justify-end">
                    <Image width={500} height={500} src={aboutImage} className="rounded-lg" alt="about" />
                </div>
            </div>
        </section>
    )
}
