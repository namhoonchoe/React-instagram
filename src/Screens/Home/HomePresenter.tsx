import React from "react";
import ImageCard from "@Components/Display/ImageCard";
import ProfileImage from "@Components/Display/ProfileImage";
import { Link } from "react-router-dom";

interface IHomeProps {
  randomPhotos?: Array<IRandom>;
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
      <section className="w-full grid gap-3 grid-cols-6 grid-rows-3 absolute top-0 ">
        <div className="col-span-4 row-span-3 ">
          {randomPhotos !== undefined && (
            <section className="center__container--column w-full	">
              {randomPhotos.map((randomPhoto: IRandom) => {
                return (
                  <section className="flex flex-col justify-start mb-8 bg-white w-full  border border-slate-300">
                    <Link to={`/profile/${randomPhoto.user.username}`}>
                      <section className="flex flex-row items-center justify-start px-1 py-2 w-full">
                        <ProfileImage
                          width="w-12"
                          height="h-12"
                          source={randomPhoto.user.profile_image.medium}
                        />
                        {randomPhoto.location.city !== null ? (
                          <div className="flex flex-col items-start ml-2">
                            <p className="text-sm font-semibold	">
                              {randomPhoto.user.name}
                            </p>
                            <p className="text-sm text-slate-500	">
                              {randomPhoto.location.city}
                            </p>
                          </div>
                        ) : (
                          <>
                            <p className="text-sm font-semibold	ml-2">
                              {randomPhoto.user.name}
                            </p>
                          </>
                        )}
                      </section>
                    </Link>

                    <ImageCard
                      source={randomPhoto.urls.regular}
                      width={randomPhoto.width}
                      height={randomPhoto.height}
                    />
                  </section>
                );
              })}
            </section>
          )}
        </div>
        <div className="col-span-2 row-span-2 ">
          {randomPhotos !== undefined && (
            <section className="center__container--column w-full border 	">
              {randomPhotos.slice(-4).map((randomPhoto: IRandom) => {
                return (
                  <section className="flex flex-row items-center justify-start px-1 py-2 w-full ">
                    <ProfileImage
                      width="w-12"
                      height="h-12"
                      source={randomPhoto.user.profile_image.medium}
                    />

                    <p className="text-sm font-semibold	ml-2">
                      {randomPhoto.user.name}
                    </p>
                  </section>
                );
              })}
            </section>
          )}
        </div>
      </section>
    </section>
  );
};

export default HomePresenter;
