import React from 'react'
import DetailPresenter from './DetailPresenter'
import { useParams } from 'react-router-dom'

export default function DetailContainer() {
  let { id } = useParams<"id">()



  
  return (
    <DetailPresenter/>
  )
}
