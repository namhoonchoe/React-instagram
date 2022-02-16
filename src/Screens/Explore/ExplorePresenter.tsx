import React from "react";
import ImageCard from "@Components/Display/ImageCard";
export default function ExplorePresenter() {
  return (
    <div className="page__container  ">
      <section className="w-full grid grid-cols-3	gap-6	">
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
      </section>
    </div>
  );
}
