import React from 'react'
import { useQuery } from "react-query";
import { getUsersCollection } from "@Api"
import { useParams } from 'react-router-dom';

export default function ProfileCollections() {
  let { username } = useParams()
  const { data, isError, isLoading } = useQuery<Array<ISearchCollection> | undefined>(['userCollection',username], () => getUsersCollection(username as string))
  return (
    <div>ProfileCollections</div>
  )
}
