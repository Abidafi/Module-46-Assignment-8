import { Download } from "lucide-react";
import React from "react";

const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg  } = app
  return (
    <div className="card w-[320px] h-[400px] bg-base-100 shadow-sm overflow-hidden hover:scale-105 transition ease-in-out">
      <figure>
        <img
        className="w-150 h-100 object-cover p-5 rounded-lg"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body flex flex-col items-center p-4 h-1/3">
        <h2 className="card-title mb-4 text-center">
            {title}
        </h2>
        <div className="flex justify-between w-full">
            <div className="btn bg-[#F1F5E8] text-[#00D390]"><Download className="w-5" />{downloads}</div>
            <div className="btn bg-[#FFF0E1] text-[#FF8811]"><img src={'/star.png'} alt="" />{ratingAvg}</div>
        </div>
       </div>
    </div>
  );
};

export default AppCard;
