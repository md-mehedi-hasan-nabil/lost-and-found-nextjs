'use client'

import { Button } from 'antd'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <h2 className='text-xl'>Something went wrong!</h2>
        <Button type='primary' className='mt-4'
          onClick={
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  )
}