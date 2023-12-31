import React, { useEffect, useState } from "react";
import getData from "../utils/database";

const PageA = () => {
  const [rowResponse, setRowResponse] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const getRowResponse = await getData();
        setRowResponse(getRowResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>First Row of Database:</h1>
      <p>{rowResponse.id}</p>
      <p>{rowResponse.name}</p>
      <p>{rowResponse.value}</p>
    </div>
  );
};

export default PageA;
