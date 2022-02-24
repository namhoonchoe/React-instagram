import React from "react";
import ImageCard from "@Components/Display/ImageCard";

interface IHomeProps {
  randomPhotos?: Array<IRandom>
  isLoading: boolean;
  error: boolean;
}

const HomePresenter: React.FC<IHomeProps> = ({
  isLoading,
  error,
  randomPhotos,
}) => {
  return (
    <section className="page__container">
      {randomPhotos !== undefined && (
        <section className="center__container--column">
          {randomPhotos.map((randomPhoto:IRandom) => {
            return <ImageCard source={randomPhoto.urls.regular} width={randomPhoto.width} height={randomPhoto.height} />;
          })}
        </section>
      )}
    </section>
  );
};

export default HomePresenter;
