import React, { useState } from "react";

const StatusInput = () => {
  const [status, setStatus] = useState("Select Status");
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <div className="flex border-2 justify-between px-2 mt-2 text-lg font-normal">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="status"
            value="Hold List"
            onChange={handleChange}
          />
          <p className="text-red-600">Hold List</p>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="status"
            value="Watching"
            onChange={handleChange}
          />
          <p className="text-orange-500">Watching</p>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="status"
            value="Completed"
            onChange={handleChange}
          />
          <p className="text-green-500">Completed</p>
        </div>
      </div>
      <div className="text-center font-semibold text-xl mt-2">
        Your Status: {status}
      </div>
    </div>
  );
};

export default StatusInput;
