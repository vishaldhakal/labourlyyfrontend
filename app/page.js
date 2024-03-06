"use client";
import SearchForm from "@/components/SearchForm";
import { useState } from "react";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSubmit = (formData) => {
    //fetch without cors issue
    fetch("https://labourlyy.onrender.com/api/match-laborers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        min_cost_per_day: formData.minCost,
        max_cost_per_day: formData.maxCost,
        required_expertise: formData.requiredExpertise,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data); // Assuming your API returns data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <div className="row row-cols-2">
        <div className="col-4">
          <h5 className="fw-bold text-start pb-1 pt-5">
            Your Daily Wage Labourers
          </h5>
          <SearchForm onSubmit={handleSubmit} />
        </div>
        <div className="col-8">
          {searchResults && (
            <div className="mt-4">
              <h2>Search Results</h2>
              <div class="row">
                {searchResults &&
                  searchResults.map((result) => (
                    <div class="col-md-4 mb-4">
                      <div class="card">
                        <img
                          src={"https://labourlyy.onrender.com" + result.avatar}
                          class="card-img-top"
                          alt="Labour Avatar"
                        />
                        <div class="card-body">
                          <h5 class="fs-3 fw-bold card-title">{result.name}</h5>
                          <p class="card-text">
                            <strong>Cost Per Day:</strong> {result.cost_per_day}
                          </p>
                          <p class="card-text">
                            <b>Expertise Level:</b> {result.expertise_level}
                          </p>
                          <p class="card-text">
                            <b>Average Sentiment Score:</b>{" "}
                            {result.avg_sentiment_score}
                          </p>
                          <p class="card-text">
                            <b>Average Weighted Score:</b>{" "}
                            {result.weighted_score}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* <pre>{JSON.stringify(searchResults, null, 2)}</pre> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
