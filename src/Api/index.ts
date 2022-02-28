import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_API_KEY as string,
});


export const getRandomPhotos = async() => {
  const { response } = await unsplash.photos.getRandom({ count:9 })
  return response as IRandom[] | undefined 
}

export const getTopics = async() => {
  const { response } = await unsplash.topics.list({ perPage:20, orderBy:"featured" })
  return response?.results  as Array<ITopic> | undefined 
}

export async function getTopicPhotos(topicId:string) {
  const { response } = await unsplash.topics.getPhotos({ topicIdOrSlug:topicId, perPage:10})
  return response?.results as Array<ITopicPhoto> | undefined
}

export const searchPhotos = async(query:string) => {
  const { response } = await unsplash.search.getPhotos({query})
  return response
}

export const getPublicProfile = async(username:string) => {
  const { response } = await unsplash.users.get({username})
  return response
}

export const getUsersPhoto = async(username:string) => {
  const { response } = await unsplash.users.getPhotos({username})
  return response
}


export const getUsersLikedPhoto = async(username:string) => {
  const { response } = await unsplash.users.getLikes({username})
  return response
}


export const getUsersCollection = async(username:string) => {
  const { response } = await unsplash.users.getCollections({username})
  return response
}

