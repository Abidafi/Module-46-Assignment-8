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
    <div>
      <Banner></Banner>

      <div className="w-full mt-[80px] mb-[80px] text-center">
        <h1 className="text-5xl font-bold">Trending Apps</h1>
        <p className="mt-[20px] text-gray-400 font-normal">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-5">
          {featuredApps.map((app) => (
            <Link key={app.id} to={`/apps/${app.id}`}>
              <AppCard key={app.id} app={app} />
            </Link>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center">
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
