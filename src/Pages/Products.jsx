import React, { useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";

const Products = () => {
  const { app } = useApps();  
  const [ search, setSearch ] = useState(''); 
  const term = search.trim() .toLocaleLowerCase()
  const searchedApps = term ? app.filter(app => app.title.toLocaleLowerCase().includes(term)) : app
    

  return (
    <>
      <div className="w-full mt-[40px] text-center">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="mt-[20px] text-gray-400 font-normal">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h3 className="font-bold">({searchedApps.length}) Apps Found</h3>
        <label className="floating-label">
          <span>Apps</span>
          <input 
          value={search}
          onChange={(e)=> setSearch(e.target.value)} 
          type="search" 
          placeholder="Search Apps" className="input input-md"/>
        </label>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-5">
        {searchedApps.map((app) => (
        <Link key={app.id} to={`/apps/${app.id}`}>
          <AppCard key={app.id} app={app} />
        </Link>
        ))}
      </div>  
    </>
  );
};

export default Products;
