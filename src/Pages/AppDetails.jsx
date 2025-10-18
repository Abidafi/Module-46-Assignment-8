import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import { ToastContainer, toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell }from "recharts";

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
    <div className="w-11/12 mx-auto">
      {/* Apps Primary Information with Download Button */}
      <div className="card lg:card-side">
        <figure className="lg:w-1/4 p-6">
          <img src={image} alt="" className="" />
        </figure>
        <div className="card-body lg:w-3/4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="mb-2">Developed By: <span className="text-cyan-500 font-bold">{companyName}</span></p>
          </div>
          <div className="w-[400px] flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <img src="/icon-downloads.png" alt="" />
              <h3 className="text-sm font-normal mt-2">Downloads</h3>
              <p className="text-2xl font-extrabold mt-2">{downloads}</p>
            </div>
            <div>
              <img src="/icon-ratings.png" alt="" />
              <h3 className="text-sm font-normal mt-2">Average Ratings</h3>
              <p className="text-2xl font-extrabold mt-2">{ratingAvg}</p>
            </div>
            <div>
              <img src="/icon-review.png" alt="" />
              <h3 className="text-sm font-normal mt-2">Total Reviews</h3>
              <p className="text-2xl font-extrabold mt-2">{reviews}</p>
            </div>
          </div>
          <div className="card-actions">
            <button
              className={`btn btn-primary btn-lg ${
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
      <div className="mt-8">
       <h2 className="text-2xl font-bold mb-6">Ratings</h2>
        <div className="h-80 bg-gray-50 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
             data={chartData}
             layout="vertical"
             margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            >
                <XAxis type="number" />
                <YAxis 
                type="category" 
                dataKey="name" 
                width={80} 
                tick={{ fontSize: 14 }} 
                tickFormatter={(value) => `${value} star${value !== '1' ? 's' : ''}`}
                />
                <Tooltip 
                   formatter={(value) => [`${value} reviews`, 'Count']}
                   labelFormatter={(label) => `${label} star${label !== '1' ? 's' : ''}`}
                />
                <Bar 
                dataKey="count" 
                radius={[0, 4, 4, 0]}
                barSize={30} 
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
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Description</h2>
        <div className="description">
            {Array.isArray(description) 
                ? description.map((paragraph, index) => (
                    <p 
                    key={index}
                    className="text-gray-500 font-light mb-4 last:mb-0"
                    >{paragraph}</p>
                ))
                : <p className="text-gray-500 font-light">{description}</p> 
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
