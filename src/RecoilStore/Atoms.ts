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