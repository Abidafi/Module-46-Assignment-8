import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import { ToastContainer, toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const handleInstall = () => {
    setIsInstalled(true);
    toast.success("App installed successfully! 🎉", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const { id } = useParams();
  const { app, loading, error } = useApps();
  const desiredApp = app.find((a) => String(a.id) === id);
  if (loading) return <p>Loading ....</p>;
  if (error) return <p>Error: {error}</p>;

  const { image, title, downloads, ratingAvg, companyName, reviews, size, description } = desiredApp;
  const chartData = desiredApp?.ratings ? [...desiredApp.ratings]
  .sort((a, b) => parseInt(b.name) - parseInt(a.name))
  .map(item => ({
    ...item,
    count: parseInt(item.count) || 0
  })) 
  : [];

  const barColor = (rating) =>{
    const ratingNum = parseInt(rating);
        if (ratingNum >= 4) return "#22c55e"; 
        if (ratingNum >= 3) return "#eab308"; 
        if (ratingNum >= 2) return "#f97316"; 
        return "#ef4444";
  };

  const handleInstallation = () =>{
        const existingList = JSON.parse(localStorage.getItem('install')) 
        let updatedList = []
        if(existingList){
            const isDuplicate = existingList.some(a=> a.id === desiredApp.id)
            if(isDuplicate) {
            toast.warning ('App is Already Installed'); 
            return;
            }            
        updatedList = [...existingList, desiredApp]
        }else{
            updatedList.push(desiredApp)
        }
        localStorage.setItem('install', JSON.stringify(updatedList))
  }

  return (
    <div className="w-11/12 mx-auto px-2 sm:px-4">
      {/* Apps Primary Information with Download Button */}
      <div className="card lg:card-side flex flex-col lg:flex-row">
        <figure className="w-full lg:w-1/4 p-4 lg:p-6 flex justify-center">
          <img 
            src={image} 
            alt={title} 
            className="max-w-[200px] lg:max-w-full h-auto rounded-lg shadow-md" 
          />
        </figure>
        <div className="card-body w-full lg:w-3/4 p-4 lg:p-6">
          <div className="flex-1 mb-4 lg:mb-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm sm:text-base mb-2">
              Developed By: <span className="text-cyan-500 font-bold">{companyName}</span>
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
            <div className="text-center">
              <div className="flex justify-center">
                <img src="/icon-downloads.png" alt="Downloads" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xs sm:text-sm font-normal mt-1 sm:mt-2">Downloads</h3>
              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold mt-1 sm:mt-2">{downloads}</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <img src="/icon-ratings.png" alt="Ratings" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xs sm:text-sm font-normal mt-1 sm:mt-2">Average Ratings</h3>
              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold mt-1 sm:mt-2">{ratingAvg}</p>
            </div>
            <div className="text-center col-span-2 sm:col-span-1">
              <div className="flex justify-center">
                <img src="/icon-review.png" alt="Reviews" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xs sm:text-sm font-normal mt-1 sm:mt-2">Total Reviews</h3>
              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold mt-1 sm:mt-2">{reviews}</p>
            </div>
          </div>
          
          {/* Install Button */}
          <div className="card-actions justify-center lg:justify-start">
            <button
              className={`btn btn-primary btn-lg w-full sm:w-auto ${
                isInstalled 
                ? "btn-disabled bg-green-600 text-white" 
                : "bg-navy-blue text-white hover:bg-blue-800"
              }`}
              onClick={ () => {
                 handleInstall();
                 handleInstallation();
              }}
              disabled={isInstalled}
            >
              {isInstalled ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Installed
                </>
              ) : (
                `Install ${size} MB`
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Rating Chart */}
      <div className="mt-6 lg:mt-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 lg:mb-6">Ratings</h2>
        <div className="h-64 sm:h-72 lg:h-80 bg-gray-50 rounded-lg p-3 sm:p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <XAxis 
                type="number" 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={60}
                tick={{ fontSize: 12 }} 
                tickFormatter={(value) => `${value} star${value !== '1' ? 's' : ''}`}
              />
              <Tooltip 
                formatter={(value) => [`${value} reviews`, 'Count']}
                labelFormatter={(label) => `${label} star${label !== '1' ? 's' : ''}`}
              />
              <Bar 
                dataKey="count" 
                radius={[0, 4, 4, 0]}
                barSize={20}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={barColor(entry.name)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Apps Description */}
      <div className="mt-6 lg:mt-8 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 lg:mb-6">Description</h2>
        <div className="description">
          {Array.isArray(description) 
            ? description.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-gray-500 font-light text-sm sm:text-base mb-3 sm:mb-4 last:mb-0"
                >{paragraph}</p>
              ))
            : <p className="text-gray-500 font-light text-sm sm:text-base">{description}</p> 
          }
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default AppDetails;