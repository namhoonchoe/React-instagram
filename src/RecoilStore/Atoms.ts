import { atom } from "recoil";


interface ITopicInfos {
  topicId:string
  topicTitle:string
  topicDescription:string
}

export const topicInfoState = atom<ITopicInfos>({
  key:"topicInfo",
  default:{
    topicId:"",
    topicTitle:"Entrepreneur",
    topicDescription:"Microsoft Surface is taking over the Entrepreneur Topic to applaud the tireless effort that goes into owning a business. Submit images from any part of the entrepreneurial journey — from starting on your couch with a laptop, to working late with endless cups of coffee. The image that highlights the struggle of the entrepreneur story the best will have the chance to win $500 USD."
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