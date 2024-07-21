import { Button } from '@/components/ui/button'
import React from 'react'

const AuthButton = () => {
  return (
    <div className=' flex gap-3 flex-1 md:flex-row flex-col relative z-50'>
        <Button className=' w-full bg-pink-500' variant={"outline"}>
            Sign up
        </Button>
        <Button className=' w-full bg-violet-500'> Login</Button>
    </div>
  )
}

export default AuthButton