import React from 'react'
import { useQuery } from "react-query";
import { getUsersPhoto } from "@Api"
import { useParams } from 'react-router-dom';

export default function ProfilePhotos() {
  let { username } = useParams()
  const { data, isError, isLoading } = useQuery<Array<ICoverPhoto> | undefined>(['userPhoto',username], () => getUsersPhoto(username as string))

  return (
    <div>ProfilePhotos</div>
  )
}
