import { Download } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Installation = () => {
  const [install, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("install"));
    if (savedList) setInstalled(savedList);
  }, []);

  const sortedItem = (() => {
    const convertDownloadsToNumber = (downloadStr) => {
      if (!downloadStr) return 0;

      const str = downloadStr.toUpperCase();

      if (str.includes('M')) {
        return parseFloat(str) * 1000000;
      } else {
        return parseFloat(str) || 0;
      }
    };

    if (sortOrder === 'ascending') {
      return [...install].sort((a, b) => convertDownloadsToNumber(a.downloads) - convertDownloadsToNumber(b.downloads));
    } else if (sortOrder === 'descending') {
      return [...install].sort((a, b) => convertDownloadsToNumber(b.downloads) - convertDownloadsToNumber(a.downloads));
    } else {
      return install;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem('install'));
    let updatedList = existingList.filter(a => a.id !== id);
    setInstalled(updatedList);
    localStorage.setItem('install', JSON.stringify(updatedList));
    toast.success('App is Deleted from the list');
  };

  return (
    <div className="w-11/12 mx-auto">
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
      />
      
      {/* Header Section */}
      <div className="w-full mt-6 md:mt-[40px] text-center px-2">
        <h1 className="text-3xl md:text-5xl font-bold">Your Installed Apps</h1>
        <p className="mt-4 md:mt-[20px] text-gray-400 font-normal text-sm md:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Controls Section */}
      <div className="w-full mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 md:mt-8 mb-4">
        <h3 className="font-bold text-lg">({sortedItem.length}) Apps Found</h3>
        <label className="form-control w-full sm:max-w-xs">
          <select 
            className="select select-bordered w-full" 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="ascending">Lowest-&gt;Highest</option>
            <option value="descending">Highest-&gt;Lowest</option>
          </select>
        </label>
      </div>

      {/* Apps List */}
      <div className="pb-8">
        {sortedItem.map((a) => (
          <div key={a.id} className="card bg-base-100 shadow-sm overflow-hidden mt-4 md:mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 md:p-5 gap-4">
              {/* App Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
                <img
                  className="w-20 h-20 sm:w-30 sm:h-30 object-cover rounded-lg mx-auto sm:mx-0"
                  src={a.image}
                  alt={a.title}
                />
                <div className="flex-col p-3 sm:p-5 text-center sm:text-left w-full sm:w-auto">
                  <h2 className="card-title mb-3 sm:mb-4 text-lg sm:text-xl">{a.title}</h2>
                  <div className="flex justify-center sm:justify-start items-center gap-3 sm:gap-5 flex-wrap">
                    <div className="text-[#00D390] flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">{a.downloads}</span>
                    </div>
                    <div className="text-[#FF8811] flex items-center gap-1">
                      <img src={"/star.png"} alt="rating" className="w-4 h-4" />
                      <span className="text-sm">{a.ratingAvg}</span>
                    </div>
                    <div className="text-gray-400 text-sm">{a.size} MB</div>
                  </div>
                </div>
              </div>
              
              {/* Action Button */}
              <button 
                onClick={() => handleRemove(a.id)} 
                className="btn btn-primary w-full sm:w-auto mt-2 sm:mt-0 text-sm py-2 px-4"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;