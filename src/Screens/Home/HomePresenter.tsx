import React from "react";


interface IHomeProps {
  isLoading?:boolean
  error?:boolean
  topics?:any
  topicPhotos?:any
}

const HomePresenter: React.FC<IHomeProps> = ({ isLoading, error, topics,  }) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}

      {error && <p>An Error has occured</p>}

    
    </>
  );
};

export default HomePresenter;
