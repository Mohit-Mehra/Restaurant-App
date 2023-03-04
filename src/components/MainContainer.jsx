import React from "react";
import Delivery from "../img/delivery.png";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] tracking-wide text-headingColor font-bold">
          The Fastest Delivery in <span className="text-orange-600 text-[3rem]">Your City</span>
        </p>

        <p className="text-base text-textColor text-center md:text-left">Get what you need, when you need it, delivered right to your door. Deliciously delivered to your door. Satisfy your cravings with our food delivery app</p>

        <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto
         px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
      </div>
      <div className="py-2 bg-blue-400 flex-1"></div>
    </div>
  );
};

export default MainContainer;
