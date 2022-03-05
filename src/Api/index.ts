import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_API_KEY as string,
});

export const getRandomPhotos = async() => {
  const { response } = await unsplash.photos.getRandom({ count:20 , featured:true })
  return response as IRandom[] | undefined 
}

export async function getRelatedPhotos(topicIds:Array<string> ) {
  const { response } = await unsplash.photos.getRandom({ count:15 , topicIds:topicIds, featured:true })
  return response as IRandom[] | undefined 
}

export const getTopics = async() => {
  const { response } = await unsplash.topics.list({ perPage:20, orderBy:"featured" })
  return response?.results  as Array<ITopic> | undefined 
}

export async function getTopicPhotos(topicId:string) {
  const { response } = await unsplash.topics.getPhotos({ topicIdOrSlug:topicId, perPage:20})
  return response?.results as Array<ITopicPhoto> | undefined
}

export async function searchPhotos(query:string) {
  const { response } = await unsplash.search.getPhotos({query})
  return response?.results as Array<ISearchPhoto> | undefined
}

export async function searchCollections(query:string) {
  const { response } = await unsplash.search.getCollections({query})
  return response?.results as Array<ISearchCollection> | undefined
}

export async function searchUsers(query:string) {
  const { response } = await unsplash.search.getUsers({query})
  return response?.results as Array<ISearchUser> | undefined
}

export async function getPublicProfile(username:string) {
  const { response } = await unsplash.users.get({username})
  return response as any
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

export async function getCollection(id:string) {
  const { response } = await unsplash.collections.get({collectionId:id})
  return response
}


export async function getCollectionPhotos(id:string) {
  const { response } = await unsplash.collections.get({collectionId:id})
  return response
}

export async function getCollectionRelated(id:string) {
  const { response } = await unsplash.collections.get({collectionId:id})
  return response
}