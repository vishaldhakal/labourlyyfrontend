"use client";
import SearchForm from "@/components/SearchForm";
import { useState } from "react";

function Home() {
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
        work_category: formData.workerType,
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
    <>
      <div className="heroseg">
        <div className="container">
          <div>
            <div className="row row-cols-2 justify-content-between align-items-center ">
              <div className="col mt-5 py-3">
                <h5 className="bef-light display-inline text-dark d-flex gap-2">
                  <span className="bg-white badge text-dark p-2 fs-s shadow fw-normal">
                    Construction
                  </span>
                  <span className="bg-white badge text-dark p-2 fs-s shadow fw-normal">
                    Plumbing
                  </span>
                  <span className="bg-white badge text-dark p-2 fs-s shadow fw-normal">
                    Electrician
                  </span>
                  <span className="bg-white badge text-dark p-2 fs-s shadow fw-normal">
                    Cleaning
                  </span>
                  <span className="bg-white badge text-dark p-2 fs-s shadow fw-normal">
                    Welding
                  </span>
                </h5>
                <h1 className="fs-1 fw-bold main-title">
                  Hiring <span className="text-mine">Superpowers.</span>
                </h1>
                <div className="bg-labor mt-5">
                  <div className="col-9">
                    <SearchForm onSubmit={handleSubmit} />
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-end">
                <img src="/hero.png" alt="search guy" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-2"></div>
      </div>
      <div className="container">
        <div className="mb-5 mt-5 ">
          <div className="row row-cols-2 justify-content-between align-items-center pb-4 align-items-center">
            <div className="col fs-2 fw-bold">
              Explore by <span className="text-mine">categories</span>
            </div>
            <div className="col text-end">
              <a href="alljobs"> Show all jobs &rarr;</a>
            </div>
          </div>
          <div className="row">
            <div className="text-start">
              <div className="row row-cols-4 g-5">
                <div className="col rounded-3">
                  <div className="shadow-lg p-3 rounded-3">
                    <img
                      src="/1.png"
                      alt="masons"
                      className="img-fluid img-small"
                    />
                    <h5 className="fw-bold">Masons</h5>
                    <h7>25+ workers available &rarr;</h7>
                  </div>
                </div>
                <div className="col rounded-3">
                  <div className="shadow-lg p-3 rounded-3">
                    <img
                      src="/2.png"
                      alt="carpenters"
                      className="img-fluid img-small"
                    />
                    <h5 className="fw-bold">Carpenters</h5>
                    <h7>25+ workers available &rarr;</h7>
                  </div>
                </div>
                <div className="col rounded-3">
                  <div className="shadow-lg p-3 rounded-3">
                    <img
                      src="/3.png"
                      alt="electric"
                      className="img-fluid img-small"
                    />
                    <h5 className="fw-bold"> Electricians</h5>
                    <h7>25+ workers available &rarr;</h7>
                  </div>
                </div>
                <div className="col rounded-3">
                  <div className="shadow-lg p-3 rounded-3">
                    <img
                      src="/4.png"
                      alt="plumber"
                      className="img-fluid img-small"
                    />
                    <h5 className="fw-bold">Plumber </h5>
                    <h7>25+ workers available &rarr;</h7>
                  </div>
                </div>
                <div className="col rounded-3">
                  <div className="shadow-lg p-3 rounded-3">
                    <img
                      src="/5.png"
                      alt="welders"
                      className="img-fluid img-small"
                    />
                    <h5 className="fw-bold">Welder</h5>
                    <h7>25+ workers available &rarr;</h7>
                  </div>
                </div>
                <div className="col rounded-3">
                  <div className="shadow-lg p-3 rounded-3">
                    <img
                      src="/6.png"
                      alt="painter"
                      className="img-fluid img-small"
                    />
                    <h5 className="fw-bold">Painter </h5>
                    <h7>25+ workers available &rarr;</h7>
                  </div>
                </div>
                <div className="col rounded-3">
                  <div className="shadow-lg p-3 rounded-3">
                    <img
                      src="/7.png"
                      alt="janitor"
                      className="img-fluid img-small"
                    />
                    <h5 className="fw-bold">Janitors & cleaners </h5>
                    <h7>25+ workers available &rarr;</h7>
                  </div>
                </div>
                <div className="col rounded-3">
                  <div className="shadow-lg p-3 rounded-3">
                    <img
                      src="/8.png"
                      alt="porter"
                      className="img-fluid img-small"
                    />
                    <h5 className="fw-bold">Porter </h5>
                    <h7>25+ workers available &rarr;</h7>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5"></div>
        <div className="py-5"></div>
      </div>
    </>
  );
}
export default Home;
