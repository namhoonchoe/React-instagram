import React from 'react'
import { useQuery } from 'react-query'
import { getRandomPhotos } from "@Api"
import ExplorePresenter from './ExplorePresenter'

export default function ExploreContainer() {
  const { data:randomPhotos, isError, isLoading } = useQuery('randomPhotos', getRandomPhotos)

  return (
    <ExplorePresenter randomPhotos={randomPhotos} error={isError} isLoading={isLoading} />
  )
}
