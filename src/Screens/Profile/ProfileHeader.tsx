import React from 'react'
import { useQuery } from "react-query";
import { getPublicProfile } from "@Api"
import { useParams } from 'react-router-dom';

export default function ProfileHeader() {
  let { username } = useParams()
  const { data, isError, isLoading } = useQuery<IProfileInfo|undefined>(['profileInfo',username], () => getPublicProfile(username as string))

  return (
    <div>ProfileHeader</div>
  )
}
