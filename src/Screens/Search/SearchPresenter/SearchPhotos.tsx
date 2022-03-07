import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { searchQueryState } from "@RecoilStore/Atoms";
import { searchPhotos } from "@Api";
import ImageCard from "@Components/Display/ImageCard";

export default function SearchPhotos() {
  const searchQuery = useRecoilValue(searchQueryState);
  const {
    data: photos,
    isError,
    isLoading,
  } = useQuery<Array<ISearchPhoto> | undefined>(
    ["searchPhotos", searchQuery],
    () => searchPhotos({...searchQuery})
  );
  return (
    <section className="masonry-md ">
      {photos !== undefined &&
        photos.map((photo: ISearchPhoto) => {
          return (
            <div className="break-inside mb-4">
              <ImageCard
                width={photo.width}
                height={photo.height}
                source={photo.urls.regular}
              />
            </div>
          );
        })}
    </section>
  );
}
