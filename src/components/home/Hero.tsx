import { Button } from "antd";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-stone-800 text-white py-44">
            <div className="container flex flex-col gap-8">
                <h3 className="text-center font-bold text-5xl">
                    Find what you lost, reunite what you found!
                </h3>

                <p className="text-center text-lg md:w-3/4 mx-auto">

                    Welcome to the TrackReclaim,
                    where lost treasures find their way back home! Whether you&apos;ve misplaced something valuable or stumbled upon a lost item, we&apos;re here to help you reconnect with what&apos;s rightfully yours.
                </p>

                <div className="flex justify-center gap-6 mt-4">
                    <Link href="/report-item/lost">
                        <Button size="large">Report a Lost Item</Button>
                    </Link>
                    <Link href="/report-item/found">
                        <Button size="large">Report a Found Item</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
