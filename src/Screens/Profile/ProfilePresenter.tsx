import React from "react";
import { Outlet, Link } from "react-router-dom";
const ProfilePresenter: React.FC = () => {
  return (
    <section className="w-[944px] flex flex-col justify-center items-center border border-cyan-400">
      <section className="w-full h-64 flex flex-row items-center justify-start">
        <div className="center__container--row w-1/3 h-full  border border-blue-400">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Profile image"
            className="w-44 h-44 rounded-full"
          />
        </div>
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
