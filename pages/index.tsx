import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [x, setX] = useState<React.FC>(()=>{
    return(
      <div>Hello World</div>
    )
  })

  return (
    <div className='flex justify-center items-center'>
      <div className='text-red-900 hover:underline'><a className='text-5xl cursor-pointer'>Welcome to next.js tofunmi</a></div>
    </div>
  )
}

export default Home
