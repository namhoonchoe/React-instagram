import React, { useState } from 'react'
import HomePresenter from './HomePresenter'
import { useQuery } from 'react-query'
import { getRandomPhotos } from "@Api"

export default function HomeContainer() {
  const { data:randomPhotos, isError, isLoading } = useQuery<Array<IRandom>|undefined>('randomPhotos', getRandomPhotos)
  return (
    <HomePresenter randomPhotos={randomPhotos} error={isError} isLoading={isLoading} />
  )
}
