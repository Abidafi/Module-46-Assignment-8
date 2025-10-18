import React, { useEffect, useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";
import LoadingAnimation from "../Components/LoadingAnimation";
import NoAppsFound from "../Components/NoAppsFound";

const Products = () => {
  const { app, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? app.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : app;

  useEffect(() => {
    if (term) {
      setSearchLoading(true);
      const timer = setTimeout(() => {
        setSearchLoading(false);
      }, 200);
      return () => clearTimeout(timer);
    }else {
      setSearchLoading(false);
    }
  }, [term]);

  return (
    <>
      <div className="w-full mt-6 md:mt-[40px] px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our All Applications</h1>
        <p className="mt-4 md:mt-[20px] text-gray-400 font-normal text-sm md:text-base px-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="w-11/12 mx-auto mt-6 md:mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="font-bold text-lg sm:text-base">({searchedApps.length}) Apps Found</h3>
        <label className="floating-label">
          <span className="sr-only">Apps</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="input input-md"
          />
        </label>
      </div>

      {loading || searchLoading ? (
        <LoadingAnimation count={20} />
      ) : searchedApps.length === 0 ? (
        <NoAppsFound searchTerm={search} />
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-11/12 mx-auto mt-5 md:mt-6">
          {searchedApps.map((app) => (
            <Link key={app.id} to={`/apps/${app.id}`}>
              <AppCard key={app.id} app={app} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
