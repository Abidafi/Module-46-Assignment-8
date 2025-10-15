import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";

const Home = () => {
  const apps = useLoaderData();
  const featuredApps = apps.slice(7,15)
  console.log(apps);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-5">
        {featuredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Home;
