import React from "react";

const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg } = app
  return (
    <div className="card w-[320px] bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
      <figure>
        <img
        className="w-64 h-48 p-2 object-cover"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">
            {title}
        </h2>
        <div className="flex justify-between w-full">
            <div className="btn bg-[#F1F5E8] text-[#00D390]"><img src={'/download.png'} alt="" />{downloads}</div>
            <div className="btn bg-[#FFF0E1] text-[#FF8811]"><img src={'/star.png'} alt="" />{ratingAvg}</div>
        </div>
       </div>
    </div>
  );
};

export default AppCard;
