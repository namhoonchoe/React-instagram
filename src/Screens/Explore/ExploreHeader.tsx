import React from 'react'
import { useRecoilValue } from 'recoil'
import { topicInfoState } from '@RecoilStore/Atoms'
const ExploreHeader:React.FC = () => {
  const { topicTitle, topicDescription } = useRecoilValue(topicInfoState)
  return (
    <section className="flex flex-col justify-center items-start px-4  border-green-400 border-2 w-full h-48">
        <p className="text-5xl font-thin capitalize">{topicTitle}</p>
        <div className="flex flex-col items-start justify-center w-full h-20 mt-3">
          {topicDescription !== null && (
            <p className="italic text-gray-500	">{topicDescription}</p>
          )}
        </div>
      </section>
  )
}


export default ExploreHeader