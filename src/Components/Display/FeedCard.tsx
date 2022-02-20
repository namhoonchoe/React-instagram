import React from 'react'
import ProfileImage from './ProfileImage'
export default function FeedCard() {
  return (
    <div className='w-full centered__box--column justify-self-center content-center'>
      <div className='w-full h-16	bg-white flex flex-row items-center justify-start px-3 py-1'>
        <ProfileImage width={'w-14'} height={'h-14'} source={'../assets/Profile.jpg'}/>
        <p className='font-medium	ml-2.5'>ProfileName</p>
      </div>
      <img src={require("../assets/monica-ballester-sa73tolGKUs-unsplash (1).jpg")} alt="example" className='w-full h-full'/>
    </div>
  )
}
