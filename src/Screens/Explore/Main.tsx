import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom'
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getTopicPhotos } from "@Api";
import { topicIdState } from "@RecoilStore/Atoms";
import ImageCard from "@Components/Display/ImageCard";

const Main: React.FC = () => {
  let location = useLocation()
  const selectedId = useRecoilValue(topicIdState);
  const [topicId, setTopicId] = useState<string>("9QVREH9A3DU");
  const {
    data: topicPhotos,
    isError,
    isLoading,
  } = useQuery<Array<ITopicPhoto> | undefined>(["topicPhotos", topicId], () =>
    getTopicPhotos(topicId)
  );

  const checkTopicId = () => {
    if (selectedId !== "") {
      setTopicId(selectedId);
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      checkTopicId();
    }

    return () => {
      mounted = false;
    };
  }, [selectedId, topicId]);

  return (
    <section className="masonry-md ">
      {topicPhotos !== undefined &&
        topicPhotos.map((topicPhoto: ITopicPhoto) => {
          return (
            <Link
            key={topicPhoto.id}
            to={`/detail/${topicPhoto.id}`}
            state={{ backgroundLocation: location }}
          >
            <div className="break-inside mb-4">
              <ImageCard
                width={topicPhoto.width}
                height={topicPhoto.height}
                source={topicPhoto.urls.regular}
              />
            </div>
            </Link>
          );
        })}
    </section>
  );
};

export default Main;
