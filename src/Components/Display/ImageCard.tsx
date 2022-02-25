import React from 'react'

interface IImageProps {
  width:number
  height:number
  source:string
  componentWidth?:string
}


const ImageCard:React.FC<IImageProps> = ({ width, height, source ,componentWidth = '16rem'}) =>  {
  const ratio = Math.round((height / width)*100)/100
  return (
    <div className={`w-[${componentWidth}] h-[${16*ratio}rem]  centered__box--column justify-self-center content-center`}>
      <img src={source} alt="" className='w-full h-full'/>
    </div>
  )
}

export default ImageCard