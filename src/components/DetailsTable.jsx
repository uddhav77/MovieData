import React, { useState } from "react";
import StatusInput from "./StatusInput";

const DetailsTable = ({ data }) => {
  return (
    <div className="p-4 w-full flex flex-col items-center">
      <div className="flex w-full justify-center">
        <div>
          <div className="font-bold text-4xl w-72">{data.title}</div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.title}
        />
      </div>
      <StatusInput />
    </div>
  );
};

export default DetailsTable;
