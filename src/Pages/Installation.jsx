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

  const sortedItem = (
    () => {
    const convertDownloadsToNumber = (downloadStr) => {
        if (!downloadStr) return 0;

        const str = downloadStr.toUpperCase();

        if (str.includes('M')) {
            return parseFloat(str) * 1000000;
        } else {
           return parseFloat(str) || 0; 
        }
    };


    if(sortOrder === 'ascending') {
        return [...install].sort((a, b) =>convertDownloadsToNumber(a.downloads) - convertDownloadsToNumber(b.downloads)) 
    }else if(sortOrder === 'descending'){
        return [...install].sort((a, b) =>convertDownloadsToNumber(b.downloads) - convertDownloadsToNumber(a.downloads))
    }else {
        return install;
    }
  })()

  const handleRemove = (id) =>{
    const existingList = JSON.parse(localStorage.getItem('install')) 
    let updatedList = existingList.filter(a=> a.id !== id)
    setInstalled(updatedList) 
    localStorage.setItem('install', JSON.stringify(updatedList))
    toast.success('App is Deleted from the list');
    }

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
      <div className="w-full mt-[40px] text-center">
        <h1 className="text-5xl font-bold">Your Installed Apps</h1>
        <p className="mt-[20px] text-gray-400 font-normal">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h3 className="font-bold">({sortedItem.length}) Apps Found</h3>
        <label className="form-control w-full max-w-xs">
          <select className="select select-bordered" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="none">Sort by Downloads</option>
            <option value="ascending">Lowest-&gt;Highest</option>
            <option value="descending">Highest-&gt;Lowest</option>
          </select>
        </label>
      </div>

      <div>
        {sortedItem.map((a) => (
          <div className="card bg-base-100 shadow-sm overflow-hidden mt-8">
            <div className="flex justify-between items-center p-5">
              <div className="flex">
                <img
                  className="w-30 h-30 object-cover rounded-lg"
                  src={a.image}
                  alt=""
                />
                <div className="flex-col p-5">
                  <h2 className="card-title mb-4 text-center">{a.title}</h2>
                  <div className="flex items-center gap-5">
                    <div className="text-[#00D390]">
                      <Download className="w-5" />
                      {a.downloads}
                    </div>
                    <div className="text-[#FF8811]">
                      <img src={"/star.png"} alt="" />
                      {a.ratingAvg}
                    </div>
                    <div className="text-gray-400">{a.size} MB</div>
                  </div>
                </div>
              </div>
              <button onClick={()=> handleRemove(a.id)} className="btn btn-primary">Uninstall</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
