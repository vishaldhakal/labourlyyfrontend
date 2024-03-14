"use client";
import SearchFormHor from "@/components/SearchFormHor";
import { useEffect, useState } from "react";

function AllJobs() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSubmit = (formData) => {
    //fetch without cors issue
    console.log(formData);
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
      .then((response) =>
        response.json().then((data) => {
          setSearchResults(data);
        })
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch("https://labourlyy.onrender.com/api/labours/")
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
      <div className="container mt-4">
        <SearchFormHor onSubmit={handleSubmit}></SearchFormHor>
        <div className="container">
          <h5 className="fw-bold main-subtitle2">
            {searchResults && searchResults.length} Results found for your
            serach of workers with cost Rs 1000 to Rs 5000 per day
          </h5>
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
      </div>
    </>
  );
}

export default AllJobs;
