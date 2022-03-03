import React from "react";

interface IThumbNailProps {
  sourceOne: string;
  sourceTwo: string;
  sourceThree: string;
}

const ThumbNails: React.FC<IThumbNailProps> = ({
  sourceOne,
  sourceTwo,
  sourceThree,
}) => {
  return (
    <section className="w-72 h-48 grid grid-cols-3 grid-rows-2 rounded-xl justify-self-center shadow-md">
      <div className="col-span-2 row-span-2  rounded-l-md border border-white">
        <img src={sourceOne} alt="" className="object-center w-full h-full  rounded-l-md" />
      </div>
      <div className="col-span-1 row-span-1 rounded-tr-md border border-white">
        <img src={sourceTwo} alt="" className="object-center w-full h-full rounded-tr-md" />
      </div>
      <div className="col-span-1 row-span-1 rounded-br-md border border-white">
        <img src={sourceThree} alt="" className="object-center w-full h-full rounded-br-md" />
      </div>
    </section>
  );
};

export default ThumbNails;
