"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React, { useState } from 'react'

const AuthButton = () => {
   const [isLoading, setIsloading] = useState(false)

  return (
    <div className=' flex gap-3 flex-1 md:flex-row flex-col relative z-50'>
      <RegisterLink className=' flex-1' onClick={()=> setIsloading(true)}>
      <Button className=' w-full bg-pink-500' variant={"outline"} disabled={isLoading}>
            Sign up
        </Button>
        </RegisterLink>
        <LoginLink className=' flex-1' onClick={()=> setIsloading(true)}>
        <Button className=' w-full bg-violet-500'  disabled={isLoading}>  Login</Button>
        </LoginLink>
        
      
    </div>
  )
}

export default AuthButton