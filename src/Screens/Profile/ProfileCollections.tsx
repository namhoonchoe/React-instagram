import React from 'react'
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getUsersCollection } from "@Api"
import { useParams } from 'react-router-dom';
import ThumbNails from "@Components/Display/ThumbNails";

export default function ProfileCollections() {
  let { username } = useParams()
  const { data:profileCollections, isError, isLoading } = useQuery<Array<ISearchCollection> | undefined>(['userCollection',username], () => getUsersCollection(username as string))
  return (
    <section className="basic__grid gap-y-6 gap-x-4">
    {profileCollections !== undefined &&
      profileCollections.map((collection) => {
        return (
          <Link to={`/collection/${collection.id}`}>
          <section className="center__container--column w-72 justify-self-center">
            <ThumbNails
              sourceOne={collection.preview_photos[0].urls.regular}
              sourceTwo={collection.preview_photos[1].urls.regular}
              sourceThree={collection.preview_photos[2].urls.regular}
            />
            <section className="w-full h-24 border-2 border-cyan-400 flex-col items-start justify-center px-1">
              <p className="text-lg font-semibold capitalize">
                {collection.title}
              </p>
              <div className="flex flex-row items-center justify-start text-sm text-slate-500	 mt-1">
                <p>{collection.total_photos}</p>
                <p className="mx-1"> Photos</p>
                <p className="mr-1 text-xs">Curated by</p>
                <p className=" font-semibold">{collection.user.name}</p>
              </div>
              <div className="flex flex-row items-center justify-start mt-2">
                {collection.tags.slice(3).map((tag) => {
                  return (
                    <div className="bg-slate-300 rounded-md  mr-1 px-1">
                      <p className="text-sm p-1">{tag.title}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </section>
          </Link>
          
        );
      })}
  </section>
  )
}
