import React from "react";
import ImageCard from "@Components/Display/ImageCard";
interface IExploreProps {
  randomPhotos?: Array<IRandom>;
  isLoading: boolean;
  error: boolean;
}

const ExplorePresenter: React.FC<IExploreProps> = ({
  randomPhotos,
  isLoading,
  error,
}) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}

      {error && <p>An Error has occured</p>}

      {randomPhotos !== undefined && (
        <div className="page__container  ">
          <section className="w-full grid grid-cols-3	gap-6	">
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </section>
        </div>
      )}
    </>
  );
};

export default ExplorePresenter;
