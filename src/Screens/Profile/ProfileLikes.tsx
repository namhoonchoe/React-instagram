import React from 'react'
import { useQuery } from "react-query";
import { getUsersLikedPhoto } from "@Api"
import { useParams } from 'react-router-dom';

export default function ProfileLikes() {
  let { username } = useParams()
  const { data, isError, isLoading } = useQuery< Array<ICoverPhoto> | undefined>(['userLikedPhoto',username], () => getUsersLikedPhoto(username as string))

  return (
    <div>ProfileLikes</div>
  )
}
