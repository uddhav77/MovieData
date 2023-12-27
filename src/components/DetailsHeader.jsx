import React from "react";

const DetailsHeader = ({ data }) => {
  return (
    <div>
      <div className="flex w-full justify-center gap-2 pb-4">
        <div>
          <div className="font-extrabold leading-tight text-6xl w-80">
            {data.title}
          </div>
          <div className="text-xl mt-2 text-gray-500">{data.tagline}</div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.title}
        />
      </div>
      <div className="flex gap-2 justify-center mt-2">
        {data.genres?.map((items) => (
          <div
            key={items.id}
            className="bg-gray-600 px-2 py-1 border-gray-100 border-solid border-2 rounded-lg text-white cursor-pointer hover:bg-black"
          >
            {items.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsHeader;
