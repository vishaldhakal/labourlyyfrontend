"use client";
import { useEffect, useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [minCost, setMinCost] = useState("");
  const [maxCost, setMaxCost] = useState("");
  const [workerType, setWorkerType] = useState("All");
  const [workerTypes, setWorkerTypes] = useState("");
  const [requiredExpertise, setRequiredExpertise] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ minCost, maxCost, requiredExpertise, workerType });
  };

  //fetch work cateogries
  useEffect(() => {
    fetch("https://labourlyy.onrender.com/api/work-category/")
      .then((response) => response.json())
      .then((data) => {
        setWorkerTypes(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 form-floating">
        <select
          type="text"
          className="form-control shadow-lg"
          id="workerType"
          value={workerType}
          onChange={(e) => setWorkerType(e.target.value)}
        >
          <option value="All">All</option>
          {workerTypes &&
            workerTypes.map((workerType) => (
              <option key={workerType.id} value={workerType.name}>
                {workerType.name}
              </option>
            ))}
        </select>
        <label htmlFor="workerType" className="form-label">
          {" "}
          Work Category
        </label>
      </div>
      <div className="mb-3 form-floating">
        <input
          type="number"
          className="form-control shadow-lg"
          id="minCost"
          value={minCost}
          onChange={(e) => setMinCost(e.target.value)}
        />
        <label htmlFor="minCost" className="form-label">
          Minimum Cost per Day
        </label>
      </div>
      <div className="mb-3 form-floating">
        <input
          type="number"
          className="form-control shadow-lg"
          id="maxCost"
          value={maxCost}
          onChange={(e) => setMaxCost(e.target.value)}
        />
        <label htmlFor="maxCost" className="form-label">
          Maximum Cost per Day
        </label>
      </div>
      <div className="mb-3 form-floating shadow-lg">
        <select
          name="exper"
          id="requiredExpertise"
          className="form-select"
          value={requiredExpertise}
          onChange={(e) => setRequiredExpertise(e.target.value)}
        >
          <option value="1">Beginner</option>
          <option value="2">Intermediate</option>
          <option value="3">Advanced</option>
          <option value="4">Expert</option>
          <option value="5">Master</option>
        </select>
        <label htmlFor="requiredExpertise" className="form-label">
          Required Expertise
        </label>
      </div>
      <button type="submit" className="btn btn-register btn-lg w-100">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
