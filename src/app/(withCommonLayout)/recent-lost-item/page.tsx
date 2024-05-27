import React from 'react'

export default function LostItemsPage() {
    return (
        <section>
            <div className='container mt-10'>
                <h2 className='text-3xl font-semibold mb-8 text-center'>Lost Items Recently</h2>

                <div className='grid grid-cols-12 gap-6 mt-5'>
                    <div className='col-span-3'>1</div>
                    <div className='col-span-3'>2</div>
                    <div className='col-span-3'>3</div>
                    <div className='col-span-3'>4</div>
                </div>
            </div>
        </section>
    )
}
