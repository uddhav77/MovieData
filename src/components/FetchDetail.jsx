import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsTable from "./DetailsTable";

const FetchDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=66f5919e810330e8457ceab84b6dc34c`
      );
      const value = await response.json();
      console.log(value);
      setData(value);
    } catch (err) {
      console.log("Error occured");
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div>
      <DetailsTable data={data} />
    </div>
  );
};

export default FetchDetail;
