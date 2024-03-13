"use client";
import { useState, useEffect } from "react";

const SearchFormHor = ({ onSubmit }) => {
  const [minCost, setMinCost] = useState("");
  const [maxCost, setMaxCost] = useState("");
  const [workerType, setWorkerType] = useState("All");
  const [workerTypes, setWorkerTypes] = useState("");
  const [requiredExpertise, setRequiredExpertise] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ minCost, maxCost, requiredExpertise, workerType });
  };

  useEffect(() => {
    fetch(
      "https://af6b-2404-7c00-44-8d8a-4ba-f42d-16d1-4c8b.ngrok-free.app/api/work-category/"
    )
      .then((response) => response.json())
      .then((data) => {
        setWorkerTypes(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="row row-cols-5 gx-2">
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
      <button type="submit" className="btn btn-register2 mb-3">
        Search
      </button>
    </form>
  );
};

export default SearchFormHor;
