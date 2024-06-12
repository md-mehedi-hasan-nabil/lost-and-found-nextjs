import { Metadata } from "next"
import AboutUs from "@/components/AboutUs"

export const metadata: Metadata = {
    title: 'About Page',
}

export default function AboutPage() {
    return (
        <section className="container py-10">
            <AboutUs />
        </section>
    )
}
