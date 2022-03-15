import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from "react-query";
import { getUsersLikedPhoto } from "@Api"
import { useParams } from 'react-router-dom';
import ImageCard from '@Components/Display/ImageCard';

export default function ProfileLikes() {
  let location = useLocation()
  let { username } = useParams()
  const { data:likedPhotos, isError, isLoading } = useQuery< Array<ICoverPhoto> | undefined>(['userLikedPhoto',username], () => getUsersLikedPhoto(username as string))

  return (
    <section className="masonry-md ">
    {likedPhotos !== undefined &&
      likedPhotos.map((photo: ICoverPhoto) => {
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
