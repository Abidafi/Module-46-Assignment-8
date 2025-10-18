import React from "react";
import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import Banner from "../Components/Banner";
import useApps from "../hooks/useApps";
import LoadingAnimation from "../Components/LoadingAnimation";

const Home = () => {
  const { app, loading, error } = useApps();

  const featuredApps = app.slice(7, 15);

  return (
    <div className="min-h-screen">
      <Banner></Banner>

      <div className="w-full px-4 mt-12 mb-16 md:mt-[80px] md:mb-[80px] text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Trending Apps</h1>
        <p className="mt-4 text-sm text-gray-400 font-normal sm:text-base md:mt-[20px] md:text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-11/12 mx-auto px-2 sm:px-0">
          {featuredApps.map((app) => (
            <Link 
            key={app.id} 
            to={`/apps/${app.id}`}
            className="block transform transition-transform hover:scale-105"
            >
              <AppCard key={app.id} app={app} />
            </Link>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center px-4">
        <Link to="/apps">
          <button className="btn w-[145px] h-[50px] mt-[80px] bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600 text-white text-xl">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
