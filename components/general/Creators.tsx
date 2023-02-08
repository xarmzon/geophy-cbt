import React from "react";
import { CREATORS } from "../../utils/constants";
import Image from "next/image";

const Creators = () => {
  return (
    <div className="">
      <h3 className="text-center text-primary/90 font-bold">Created By</h3>
      <div className="grid grid-cols-2 gap-5 justify-center">
        {CREATORS.map((creator) => (
          <div
            key={creator.name}
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="relative overflow-hidden h-16 w-16 border-[3px] border-t-secondary border-l-primary  border-r-green-800 rounded-full">
              <Image
                src={creator.avatar}
                layout="fill"
                alt={creator.name}
                // className="object-contain"
              />
            </div>
            <p className="text-center text-xs md:text-sm">{creator.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creators;
