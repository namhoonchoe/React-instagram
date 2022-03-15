import React from "react";
import { useQuery } from "react-query";
import { getPublicProfile } from "@Api";
import { useParams } from "react-router-dom";
import ProfileImage from "@Components/Display/ProfileImage";

export default function ProfileHeader() {
  let { username } = useParams();
  const {
    data: ProfileInfo,
    isError,
    isLoading,
  } = useQuery<IProfileInfo | undefined>(["profileInfo", username], () =>
    getPublicProfile(username as string)
  );

  return (
    <section className="flex flex-col justify-center items-start px-10  border-green-400 border-2 w-full h-48">
      {ProfileInfo !== null && (
        <div className="flex flex-row items-center justify-start w-2/3 h-10 mt-1">
          <ProfileImage
            width={"w-32"}
            height={"h-32"}
            source={ProfileInfo?.profile_image.large}
          />
          <section className="flex flex-col justify-start items-start h-32 ml-4">
            <p className=" text-3xl ">{ProfileInfo?.name}</p>
            <p className=" italic ">{ProfileInfo?.bio}</p>
          </section>
        </div>
      )}
    </section>
  );
}
