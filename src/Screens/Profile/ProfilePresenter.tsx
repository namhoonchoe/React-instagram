import React from "react";
import { Outlet, Link } from "react-router-dom";
const ProfilePresenter: React.FC = () => {
  return (
    <section className="w-[944px] flex flex-col justify-center items-center border border-cyan-400">
      <section className="w-full h-64 flex flex-row items-center justify-start">
        
        <section className="w-2/3 h-full flex flex-col justify-start items-start pt-7 border border-green-700">
          <div className="w-full flex flex-row items-center justify-between">
            <div>Profile Name</div>
            <div>editProfile button</div>
            <div>setting button</div>
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <div>
              <p>게시물</p>
            </div>
            <div>
              <p>팔로워</p>
            </div>
            <div>
              <p>팔로우</p>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full h-64 flex flex-row items-start justify-start">
        <div className="w-full h-12 center__container--row">
          <Link to="">
            <p>게시물 </p>
          </Link>
          <Link to="saved">
            <p>저장됨 </p>
          </Link>
          <Link to="tagged">
            <p>태그됨 </p>
          </Link>
        </div>
      </section>
      <Outlet />
    </section>
  );
};

export default ProfilePresenter;
