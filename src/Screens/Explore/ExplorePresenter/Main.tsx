import React from "react";
import ImageCard from "@Components/Display/ImageCard";
import { useQuery } from "react-query";
import { getTopicPhotos } from "@Api";


export default function Main() {
  const {
    data: topicPhotos,
    isError,
    isLoading,
  } = useQuery<Array<ITopicPhoto> | undefined>("topicPhotos", () =>
    getTopicPhotos("9QVREH9A3DU")
  );

  return (
    <section className="masonry-md ">
      {topicPhotos !== undefined &&
        topicPhotos.map((topicPhoto) => {
          return (
            <div className="break-inside mb-4" >
              <ImageCard
                width={topicPhoto.width}
                height={topicPhoto.height}
                source={topicPhoto.urls.regular}
              />
            </div>
          );
        })}
    </section>
  );
}
