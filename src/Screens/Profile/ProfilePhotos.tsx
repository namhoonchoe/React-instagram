import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from "react-query";
import { getUsersPhoto } from "@Api"
import { useParams } from 'react-router-dom';
import ImageCard from '@Components/Display/ImageCard';

export default function ProfilePhotos() {
  let { username } = useParams()
  let location = useLocation()

  const { data:userPhotos, isError, isLoading } = useQuery<Array<ICoverPhoto> | undefined>(['userPhoto',username], () => getUsersPhoto(username as string))

  return (
    <section className="masonry-md ">
      {userPhotos !== undefined &&
        userPhotos.map((photo: ICoverPhoto) => {
          return (
            <Link
            key={photo.id}
            to={`/detail/${photo.id}`}
            state={{ backgroundLocation: location }}
          >
            <div className="break-inside mb-6">
              <ImageCard
                width={photo.width}
                height={photo.height}
                source={photo.urls.regular}
              />
            </div>
            </Link>
          );
        })}
    </section>
  )
}
