import React, { useState } from 'react'
import HomePresenter from './HomePresenter'
import { useQuery } from 'react-query'
import { getTopicPhotos, getTopics } from "@Api"

export default function HomeContainer() {
  const { data:topicPhotos } = useQuery('topicPhotos', () => getTopicPhotos("blabla"))
  const { data:topics } = useQuery('topics', getTopics)


  return (
    <HomePresenter  topicPhotos={topicPhotos} topics={topics} />
  )
}
