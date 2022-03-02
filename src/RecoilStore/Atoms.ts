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


export const searchKeyWordState = atom<string>({
  key:"searchKeyword",
  default:""
})

export const redirectionState = atom<boolean>({
  key:"redirection",
  default:false
})