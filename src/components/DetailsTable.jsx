import React, { useState } from "react";

const DetailsTable = ({ data }) => {
  const [status, setStatus] = useState("Hold List");
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <div>{data.title}</div>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        width={100}
        height={130}
      />
      <div>
        <input
          type="radio"
          name="status"
          value="Hold List"
          onChange={handleChange}
        />
        Hold List
        <input
          type="radio"
          name="status"
          value="Watching"
          onChange={handleChange}
        />
        Watching
        <input
          type="radio"
          name="status"
          value="Completed"
          onChange={handleChange}
        />
        Completed
      </div>
      <div>{status}</div>
    </div>
  );
};

export default DetailsTable;
