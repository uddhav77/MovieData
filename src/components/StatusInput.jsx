import React, { useState } from "react";

const StatusInput = () => {
  const [status, setStatus] = useState("Hold List");
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
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

export default StatusInput;
