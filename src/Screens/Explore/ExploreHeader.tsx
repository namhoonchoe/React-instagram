import React from 'react'

interface IHeaderProps {
  title:string
  description:string
}


const ExploreHeader:React.FC<IHeaderProps> = ({ title, description }) => {
  
  return (
    <div className='flex flex-col'>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}


export default ExploreHeader