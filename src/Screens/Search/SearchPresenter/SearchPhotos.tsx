import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { searchKeyWordState } from "@RecoilStore/Atoms";
import { searchPhotos } from "@Api";
import ImageCard from "@Components/Display/ImageCard";

export default function SearchPhotos() {
  const searchKeyword = useRecoilValue(searchKeyWordState);

  const {
    data: photos,
    isError,
    isLoading,
  } = useQuery<Array<ISearchPhoto> | undefined>(
    ["searchPhotos", searchKeyword],
    () => searchPhotos(searchKeyword)
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
