import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DetailPresenter() {
  let navigate = useNavigate()

  const onDismiss = () => {
    navigate(-1)
  }
  return (
    <section className='w-[90vw] h-[70vh] bg-amber-200 absolute top-10'>

    </section>
  )
}
