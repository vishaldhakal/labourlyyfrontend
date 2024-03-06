"use client";
import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [minCost, setMinCost] = useState("");
  const [maxCost, setMaxCost] = useState("");
  const [requiredExpertise, setRequiredExpertise] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ minCost, maxCost, requiredExpertise });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 form-floating">
        <input
          type="number"
          className="form-control"
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
          className="form-control"
          id="maxCost"
          value={maxCost}
          onChange={(e) => setMaxCost(e.target.value)}
        />
        <label htmlFor="maxCost" className="form-label">
          Maximum Cost per Day
        </label>
      </div>
      <div className="mb-3 form-floating">
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
      <button type="submit" className="btn btn-primary w-100">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
