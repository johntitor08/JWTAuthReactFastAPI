import React, { useEffect, useState } from "react";
import API from "./api";

const Protected = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/protected");
        setMessage(res.data.message);
      } catch (err) {
        setMessage("Not authorized. Please log in.");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Protected Page</h2>
      <p>{message}</p>
    </div>
  );
};

export default Protected;
