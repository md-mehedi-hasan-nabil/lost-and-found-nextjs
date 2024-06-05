import Image from "next/image"
import purposeMission from "../../assets/purpose-mission.jpg"

export default function About() {
    return (
        <section className='py-10 mt-5'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-6 items-center'>
                    <div className='col-span-12 md:col-span-6'>
                        <h3 className='text-4xl font-bold'>Purpose and Mission:</h3>
                        <h2 className='text-2xl font-bold mt-5'>Welcome to TrackReclaim,</h2>
                        <p className='text-xl mt-4'>
                            your go-to platform for reuniting lost items with their owners.
                            Our mission is to simplify the process of reporting lost and found items, helping you recover your belongings swiftly and efficiently.
                        </p>
                    </div>
                    <div className='col-span-12 md:col-span-6 flex justify-end'>
                        <Image width={400} height={400} src={purposeMission} className="rounded-lg" alt="purpose Mission" />
                    </div>
                </div>
            </div>
        </section>
    )
}
