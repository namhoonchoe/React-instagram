import React from "react";
import ImageCard from "@Components/Display/ImageCard";
import ProfileImage from "@Components/Display/ProfileImage";
import { Link } from "react-router-dom";

interface ICollectionProps {
  collectionInfo?: ICollection;
  collectionPhotos?: Array<ICoverPhoto>;
}

const CollectionPresenter: React.FC<ICollectionProps> = ({
  collectionInfo,
  collectionPhotos,
}) => {
  return (
    <section className="page__container flex-col ">
      <section className="flex flex-col justify-center items-start px-4  border-green-400 border-2 w-full h-48">
        <p className="text-5xl font-thin">{collectionInfo?.title}</p>
        <div className="flex flex-col items-start justify-center w-full h-20 mt-3">
          {collectionInfo?.description !== null && (
            <p className="italic text-gray-500	">{collectionInfo?.description}</p>
          )}
          {collectionInfo?.user !== null && (
            <div className="flex flex-row items-center justify-start w-2/3 h-10 mt-1">
              <ProfileImage
                width={"w-10"}
                height={"h-10"}
                source={collectionInfo?.user.profile_image.medium}
              />
              <p className="font-semibold text-md capitalize ml-1">
                {collectionInfo?.user.name}
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="masonry-md w-full ">
        {collectionPhotos !== undefined &&
          collectionPhotos.map((collectionPhoto: ICoverPhoto) => {
            return (
              <Link
                key={collectionPhoto.id}
                to={`/detail/${collectionPhoto.id}`}
              >
                <div className="break-inside mb-6">
                  <ImageCard
                    width={collectionPhoto.width}
                    height={collectionPhoto.height}
                    source={collectionPhoto.urls.regular}
                  />
                </div>
              </Link>
            );
          })}
      </section>
    </section>
  );
};

export default CollectionPresenter;
