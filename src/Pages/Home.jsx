import React from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";
import Banner from "../Components/Banner";

const Home = () => {
  const apps = useLoaderData();
  const featuredApps = apps.slice(7,15)
  console.log(apps);
  return (
    <div>
      <Banner></Banner>
      <div className="w-full mt-[80px] mb-[80px] text-center">
        <h1 className="text-5xl font-bold">Trending Apps</h1>
        <p className="mt-[20px] text-gray-400 font-normal">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-5">
        {featuredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/apps">
          <button className="btn w-[145px] h-[50px] mt-[80px] bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600 text-white">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
