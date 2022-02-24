import React from 'react'

interface IImageProps {
  width:number
  height:number
  source:string
}


const ImageCard:React.FC<IImageProps> = ({ width, height, source }) =>  {
  const ratio = Math.round((height / width)*100)/100
  return (
    <div className={`w-64 h-[${16*ratio}rem]  centered__box--column justify-self-center content-center`}>
      <img src={source} alt="" className='w-full h-full'/>
    </div>
  )
}

export default ImageCard