import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-full mt-[40px] mb-[80px] text-center">
      <h1 className="text-5xl font-bold">
        We Build <br></br>
        <span className="text-purple-700 font-extrabold">Productive</span> Apps
      </h1>
      <p className="mt-[20px] text-gray-400 font-normal">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.<br></br>Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="mt-[40px] flex justify-center items-center gap-5">
        <Link
          to="https://play.google.com/store/games?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn bg-blue-100">
            <img className="w-[15px]" src={"/Playstore.png"} alt="" />
            Google Play
          </button>
        </Link>
        <Link
          to="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn bg-gray-100">
            <img className="w-[15px]" src={"/AppStore.png"} alt="" />
            App Store
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="mt-[40px] w-[850px] h-[475px]"
          src={"/hero.png"}
          alt=""
        />
      </div>
      <div className="h-[300px] max-w-full bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 flex flex-col justify-center items-center space-y-10">
        <h1 className="text-white font-bold text-5xl">Trusted by Millions, Built for You</h1>
        <div className="flex justify-center items-center gap-20">
            <div className="space-y-2">
                <h4 className="text-white">Total Downloads</h4>
                <h2 className="text-white text-5xl font-extrabold">29.6M</h2>
                <h4 className="text-white">21% more than last month</h4>
            </div>
            <div className="space-y-2">
                <h4 className="text-white">Total Reviews</h4>
                <h2 className="text-white text-5xl font-extrabold">906K</h2>
                <h4 className="text-white">46% more than last month</h4>
            </div>
            <div className="space-y-2">
                <h4 className="text-white">Active Apps</h4>
                <h2 className="text-white text-5xl font-extrabold">132+</h2>
                <h4 className="text-white">31 more will Launch</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
