import React from "react";

const LoadingAnimation = ({count = 8}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-5">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card w-[320px] h-[400px] bg-base-100 shadow-sm overflow-hidden">
          <div className="skeleton w-150 h-100 object-cover p-5 rounded-lg"></div>
          <div className="card-body flex flex-col items-center p-4 h-1/3">
            <div className="skeleton card-title mb-4 text-center"></div>
            <div className="flex justify-between w-full">
              <div className="skeleton"></div>
              <div className="skeleton"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingAnimation;
