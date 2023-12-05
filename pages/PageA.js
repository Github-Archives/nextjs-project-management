import React, { useEffect, useState } from "react";
import getData from "./database";

const PageA = () => {
  const [databaseVersion, setDatabaseVersion] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getData();
        // console.log(`response:`, response);
        const { version } = response[0]; // Extract the 'version' property
        console.log(`Database Version:\n`, version);
        setDatabaseVersion(version);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Database Version:</h1>
      <p>{databaseVersion}</p>
    </div>
  );
};

export default PageA;
