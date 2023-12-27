import React, { useState } from "react";
import StatusInput from "./StatusInput";
import DetailsHeader from "./DetailsHeader";
import TableInputs from "./TableInputs";

const DetailsTable = ({ data }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="p-4 w-fit bg-stone-100">
      <DetailsHeader data={data} />
      <TableInputs data={data} />
      <button
        className="bg-amber-700 p-2 rounded-xl text-white font-semibold"
        onClick={() => setClicked(!clicked)}
      >
        Submit Your Status
      </button>
      {!clicked ? <StatusInput /> : null}
    </div>
  );
};

export default DetailsTable;
