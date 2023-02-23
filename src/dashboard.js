import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data.json";

import "./App.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const [genderFilter, setGenderFilter] = useState("");

  const handleGenderFilter = (event) => {
    setGenderFilter(event.target.value);
  };

  let filteredData = data.users.filter(
    (item) =>
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filteredData = filteredData.filter((item) =>
    genderFilter ? item.gender === genderFilter : true
  );

  return (
    <div>
      <div className="Navbar">
        <h2 className="logo">FreJun Task</h2>
        <button className="logout" onClick={handleLogout}>
          <p className="logout-text">Logout</p>
        </button>
      </div>
      <div className="conatainer">
        <div className="filter-container">
          <div className="search">
            <input
              className="searchfield"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            />
          </div>
          <div className="gender">
            <select
              className="genderfilter"
              value={genderFilter}
              onChange={handleGenderFilter}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              {/* <option value="other">Other</option> */}
            </select>
          </div>
        </div>

        <div className="Table">
          <table>
            <thead>
              <tr>
                <th className="userhead">
                  <p className="headtext">User</p>
                </th>
                <th className="emailhead">
                  <p className="headtext">Email</p>
                </th>
                <th className="agehead">
                  <p className="headtext">Age</p>
                </th>
                <th className="genderhead">
                  <p className="headtext">Gender</p>
                </th>
              </tr>
            </thead>
            <tbody
              style={{
                display: "block",
                height: "308px",
                width: "640px",
                overflowY: "scroll",
              }}
            >
              {filteredData.map((item, index) => (
                <tr className="datarow" key={index}>
                  {/* <td>{item.image}</td> */}
                  <td className="userrow">
                    <img className="userimg" src={item.image} alt="Userimage" />
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="emailrow">{item.email}</td>
                  <td className="agerow">{item.age}</td>
                  <td className="genderrow">{item.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
