import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsTable from "./DetailsTable";

const FetchDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=66f5919e810330e8457ceab84b6dc34c`
      );
      const value = await response.json();
      console.log(value);
      setData(value);
      setLoading(false);
    } catch (err) {
      console.log("Error occured");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <FaSpinner className="animate-spin" size={40} />
        <p className="mt-4 text-gray-600">Loading Movies...</p>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <DetailsTable data={data} />
    </div>
  );
};

export default FetchDetail;
