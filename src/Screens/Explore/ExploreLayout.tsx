import React from "react";
import Main from "./Main";
import ExploreHeader from "./ExploreHeader";
import DrawerNavigation from "./DrawerNavigation";


const ExploreLayout: React.FC = () => {
 
  return (
    <>
      <section className="page__container flex-col ">
        <section className="flex flex-row justify-start items-center border-green-400 border-2 w-full h-48">
          <ExploreHeader />
        </section>
        <section className="w-full h-screen border-2 ">
          <Main />
        </section>
      </section>
      <div className="fixed right-3	 top-1/2 w-10 h-10">
        <DrawerNavigation />
      </div>
    </>
  );
};

export default ExploreLayout;
