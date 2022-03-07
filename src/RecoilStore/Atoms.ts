import { atom } from "recoil";

export const topicIdState = atom<string>({
  key:"topicId",
  default:""
})


interface ITopicInfos {
  topicTitle:string
  topicDescription:string
}

export const topicInfoState = atom<ITopicInfos>({
  key:"topicInfo",
  default:{
    topicTitle:"",
    topicDescription:""
  }
})

interface ISearchQuery {
  query:string
  orientation:string|undefined
  color:string|undefined
  orderBy:string|undefined
}

export const searchQueryState = atom<ISearchQuery>({
  key:"searchQuery",
  default:{
    query:"",
    orientation:undefined,
    color:undefined,
    orderBy:undefined
  }
})

export const redirectionState = atom<boolean>({
  key:"redirection",
  default:false
})