import React, { useState } from 'react'
import type { NextPage } from "next"
import styles from '../styles/watch.module.scss'
import Image from 'next/image'

const Watch:NextPage = ({}) => {
  const [watchVersion, setwatchVersion] = useState<React.FC>(()=>{
    return(<div className='w-full'><Image height={700} width={400} src={`/img/display_s7__fj2bqp6brfiy_medium.jpg`} alt='series-7-watch-face'/></div>)
  })
  const [buttonBg, setButtonBg] = useState<number>(1)

  return (
     <div className='flex justify-center items-center w-full p-0 m-0 overflow-hidden'>
      <div className={styles.mainContainer}>
      <div className='w-full items-center justify-center flex flex-col'> 
       <div className='p-4'><Image src={`/img/logo_watch_s7__dnxp9zoaom82_medium.png`} height={55} width={135} alt="logo"/></div> 
       <div className="w-full flex flex-col justify-center items-center mt-2 p-4 relative xl:w-full">
        <h1 className='text-4xl'>Full screen ahead.</h1>
        <h1 className='text-2xl mt-2'>From 399$</h1>
        <button className='bg-blue-700 rounded-2xl w-14 mt-2'>
          <h1 className='text-white text-xl'>Buy</h1>
        </button> 
        <div className='flex flex-row space-x-3 mt-4'>
        <h1 className='text-blue-700 text-xl hover:underline'>Learn more</h1>
        <h1 className='text-blue-700 text-xl hover:underline'>Watch the movie</h1>
        </div>
       </div>
      </div>
       <div className={styles.imgBanner}></div>
       <div className='max-w-[654px] box-border h-[654px] m-8 p-5 bg-white relative flex flex-col rounded-3xl overflow-hidden md:grid md:grid-cols-8'>
        <h1 className='text-4xl p-2 w-72 font-bold text-[#808B96] md:m-4 md:col-span-4 md:text-5xl md:pt-20'>Over 50% more screen area than series 3</h1>
        <div className='w-[220px] mx-auto md:col-span-4 md:p-4 md:m-4 md:w-[300px]'>{watchVersion}</div>
        <div className='rounded-2xl space-x-reverse -space-x-4 flex-row-reverse flex w-[300px] md:absolute md:top-[470px]'>
        <button className={buttonBg === 1 ?
            `rounded-3xl flex flex-col w-[150px] h-12 text-black  justify-center items-center bg-[rgb(245,245,247)]`: 
          `rounded-3xl flex flex-col w-[150px] text-[rgb(245,245,247)] h-12  justify-center items-center bg-black`
          }
          onClick={()=>{
            setwatchVersion(()=>{
              return(<div className='w-full'><Image height={700} width={400} src={`/img/display_s7__fj2bqp6brfiy_medium.jpg`} alt='series-7-watch-face'/></div>)
            })
            setButtonBg(2)
          }}
        >Series 7</button>
        <button className={buttonBg === 2 ?
            `rounded-3xl flex flex-col w-[150px] h-12 text-black justify-center items-center bg-[rgb(245,245,247)]`: 
          `rounded-3xl flex flex-col w-[150px] text-[rgb(245,245,247)]  h-12 justify-center items-center bg-black`
          }
          onClick={()=>{
            setwatchVersion(()=>{
              return(<div className='w-full'><Image height={700} width={400} src={`/img/display_s3__f9n138ohv7e6_medium.jpg`} alt='series-7-watch-face'/></div>)
            })
            setButtonBg(1)
          }}
        >Series 3</button>
        </div>
       </div>
      </div>      
    </div>
  )
}

export default Watch; 
