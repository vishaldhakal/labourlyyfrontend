"use client";
import SearchForm from "@/components/SearchForm";
import { useState } from "react";

function Home() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSubmit = (formData) => {
    if (formData.minCost === "" || formData.maxCost === "") {
      swal({
        title: "Error",
        text: "Please enter the cost range",
        icon: "error",
      });
      return;
    }
    if (formData.minCost > formData.maxCost) {
      swal({
        title: "Error",
        text: "Minimum cost cannot be greater than maximum cost",
        icon: "error",
      });
      return;
    }
    if (formData.requiredExpertise === "") {
      swal({
        title: "Error",
        text: "Please enter the expertise level",
        icon: "error",
      });
      return;
    }
    if (formData.workerType === "") {
      swal({
        title: "Error",
        text: "Please enter the worker type",
        icon: "error",
      });
      return;
    }

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

  function checkImage(image) {
    if (image === null) {
      return "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";
    } else {
      //image contains http return image else add https://labourlyy.onrender.com
      if (image.includes("http")) {
        return image;
      }
      return "https://labourlyy.onrender.com" + image;
    }
  }

  function getexpertise(expertise_level) {
    //exp level till 5
    let expertise = "";
    for (let i = 0; i < expertise_level; i++) {
      expertise += "⭐ ";
    }
    return expertise;
  }

  return (
    <>
      <div className="heroseg">
        <div className="container">
          <div>
            <div className="row row-cols-1 row-cols-md-2 justify-content-between align-items-center ">
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
                  <span className="bg-white badge text-dark p-2 fs-s shadow fw-normal d-none d-md-inline">
                    Welding
                  </span>
                </h5>
                <h1 className="fs-1 fw-bold main-title">
                  Hiring <span className="text-mine">Superpowers.</span>
                </h1>
                <div className="bg-labor mt-5">
                  <div className="col-12 col-md-9">
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
        {searchResults && (
          <h5 className="fw-bold main-subtitle2">
            {searchResults.length} Results found for your search of workers
          </h5>
        )}
        <div className="row row-cols-1 row-cols-md-4 mt-4">
          {searchResults &&
            searchResults.map((result) => (
              <div className="col">
                <a
                  className="text-decoration-none text-dark"
                  href={"/workers/" + result.id}
                >
                  <div className="afte-proj">
                    <div className="d-flex gap-5">
                      <div className="img-text">
                        <p className="m-0">
                          <span className="d-flex justify-content-between align-items-center fw-bold">
                            Rs {result.cost_per_day} / Day
                          </span>
                        </p>
                      </div>
                      <div className="img-text-propertytype">
                        <p className="m-0">
                          <span className="d-flex justify-content-between align-items-center fw-bold">
                            {result.work_category.name}
                          </span>
                        </p>
                      </div>
                    </div>
                    <img
                      src={checkImage(result.avatar)}
                      className="imghei"
                      alt={result.id}
                    />

                    <div className="card-textt card">
                      <p className="mb-0 card-price">{result.name}</p>
                      <p className="mb-0 text-s2 d-flex align-items-center">
                        <span className="d-flex justify-content-between align-items-center fw-bold">
                          Expertise : {getexpertise(result.expertise_level)}
                        </span>
                      </p>
                      <p className="mb-0 text-s">{result.address}</p>
                      <p className="mb-0 text-s">
                        {" "}
                        Working since : {result.working_since} Days
                      </p>
                      <button className="btn btn-outline-dark mt-2">
                        Book Now
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
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
              <div className="row row-cols-2 row-cols-md-4 g-2 mx-0 g-md-5">
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
                    <h5 className="fw-bold">Cleaners </h5>
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
