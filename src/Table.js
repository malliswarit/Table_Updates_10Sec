import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
  };

  console.log(data);
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
