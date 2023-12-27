import React from "react";

const TableInputs = ({ data }) => {
  return (
    <div>
      <div className="mt-4">
        <p className="text-justify font-normal">{data.overview}</p>
      </div>
      <table className="w-full mt-4 mb-8 border-collapse border border-gray-400">
        <tbody>
          <tr className="border-b border-gray-400">
            <td className="font-bold p-2 border-r border-gray-400">
              Release Date:
            </td>
            <td className="p-2">{data?.release_date}</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="font-bold p-2 border-r border-gray-400">
              Total Budget:
            </td>
            <td className="p-2">{data?.budget}</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="font-bold p-2 border-r border-gray-400">Revenue:</td>
            <td className="p-2">{data?.revenue}</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="font-bold p-2 border-r border-gray-400">
              Popularity:
            </td>
            <td className="p-2">{data?.popularity}</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="font-bold p-2 border-r border-gray-400">
              Production Countries:
            </td>
            <td className="p-2">
              <div className="flex flex-wrap gap-2">
                {data?.production_countries &&
                  data.production_countries.map((items, index) => (
                    <div key={index}>{items.name}</div>
                  ))}
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="font-bold p-2 border-r border-gray-400">
              Production Companies:
            </td>
            <td className="p-2">
              <div className="flex flex-wrap gap-2">
                {data?.production_companies &&
                  data.production_companies.map((items, index) => (
                    <div key={index}>
                      {items.name}
                      <img
                        src={`https://image.tmdb.org/t/p/w500${items.logo_path}`}
                        alt={items.name}
                        width={200}
                      />
                    </div>
                  ))}
              </div>
            </td>
          </tr>
          <tr>
            <td className="font-bold p-2 border-r border-gray-400">
              Total RunTime:
            </td>
            <td className="p-2">{data?.runtime} minutes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableInputs;
