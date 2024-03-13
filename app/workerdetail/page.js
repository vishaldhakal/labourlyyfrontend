import React from "react";

const page = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-8 box-area">
            <div className="row row-cols-2 shadow-lg mb-5 bg-white rounded py-4">
              <div className="col">
                <div className="row row-cols-2 align-items-center">
                  <div className="col-3">
                    <img
                      className=" detail-img-border-golo"
                      src="/1.png "
                      alt="..."
                    />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-center align-items-start">
                    <div className="fs-5 fw-bold">Constructor</div>
                    <div>Harka gurung</div>
                  </div>
                </div>
              </div>

              <div className="col button-flex-right flex-fill">
                <button type="button" className="btn btn-register">
                  Book Harka Now
                  <img
                    src="/arrow-right.svg"
                    alt="right arrow"
                    className="img-fluid rarr"
                  />
                </button>
              </div>
            </div>

            <div>
              <div className="border border-0 p-4  rounded-3 bg-light">
                <h3 className="fw-bold cardd-title pb-3">Description</h3>
                <div className="row row-cols-2  row-cols-md-4 w-100 flex-nowrap prp-gap">
                  <div className="col-7 col-md border-bottom py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">
                      Last check for updates
                    </p>
                  </div>
                  <div className="col-5 col-md border-bottom py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">
                      16 hours ago
                    </p>
                  </div>
                  <div className="col-7 col-md border-bottom py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">Property type</p>
                  </div>
                  <div className="col-5 col-md border-bottom py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">
                      Comm Element Condo
                    </p>
                  </div>
                </div>
                <div className="row row-cols-2  row-cols-md-4 w-100 flex-nowrap prp-gap">
                  <div className="col-7 col-md border-bottom py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">Style </p>
                  </div>
                  <div className="col-5 col-md border-bottom py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">Apartment</p>
                  </div>
                  <div className="col-7 col-md border-bottom py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">Community</p>
                  </div>
                  <div className="col-5 col-md border-bottom py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">
                      Henry Farm
                    </p>
                  </div>
                </div>
                <div className="row row-cols-2  row-cols-md-4 w-100 flex-nowrap prp-gap">
                  <div className="col-7 col-md border-bottom border-sm   py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">Lot size</p>
                  </div>
                  <div className="col-5 col-md border-bottom border-sm py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">0 Sqft</p>
                  </div>
                  <div className="col-7 col-md border-bottom py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">Garage spaces</p>
                  </div>
                  <div className="col-5 col-md border-bottom py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">N/A</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3"></div>
            <div className="py-3"></div>
            <div className="py-3"></div>
            <h5 className="fw-bold main-subtitle">
              Your reviews will help others to make a better decision
            </h5>
            <div className="card">
              <div className="row row-cols-2 mx-0 gx-3 p-4">
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control bg-light py-3 shadow-lg"
                    placeholder="Enter your review"
                  />
                </div>
                <button className="btn btn-register col-4">
                  Submit review
                </button>
              </div>

              <div className="mt-2">
                <div className="d-flex flex-row align-items-center gap-3 p-3">
                  <img
                    src="https://i.imgur.com/zQZSWrt.jpg"
                    width="40"
                    height="40"
                    className="rounded-circle mr-3"
                  />
                  <div className="w-100">
                    <p className="text-justify comment-text mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>

                    <div className="d-flex flex-row align-items-center user-feed">
                      Sentiment score : 56/100
                      <span className="badge bg-warning fw-normal ms-2">
                        Neutral
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center gap-3 p-3">
                  <img
                    src="https://i.imgur.com/zQZSWrt.jpg"
                    width="40"
                    height="40"
                    className="rounded-circle mr-3"
                  />
                  <div className="w-100">
                    <p className="text-justify comment-text mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>

                    <div className="d-flex flex-row align-items-center user-feed">
                      Sentiment score : 56/100
                      <span className="badge bg-warning fw-normal ms-2">
                        Neutral
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center gap-3 p-3">
                  <img
                    src="https://i.imgur.com/zQZSWrt.jpg"
                    width="40"
                    height="40"
                    className="rounded-circle mr-3"
                  />
                  <div className="w-100">
                    <p className="text-justify comment-text mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>

                    <div className="d-flex flex-row align-items-center user-feed">
                      Sentiment score : 56/100
                      <span className="badge bg-warning fw-normal ms-2">
                        Neutral
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3"></div>
            <div className="py-3"></div>

            <h4 className="mb-0 main-subtitle">
              Related <span className="text-mine">Workers</span>
            </h4>
            <div className="row row-cols-3">
              <div className="col">
                <a
                  className="text-decoration-none text-dark"
                  href="/ontario/toronto/C8137214"
                >
                  <div className="afte-proj">
                    <div className="d-flex gap-5">
                      <div className="img-text ">
                        <p className="m-0 "> Plumber</p>
                      </div>
                      <div className="img-text-propertytype ">
                        <p className="m-0 ">3 Reviews</p>
                      </div>
                    </div>
                    <img src="/1.png" className="imghei" alt="C8137214" />
                    <div className="card-textt card">
                      <p className="mb-0 card-price">Prajwal KC</p>
                      <p className="mb-0 text-s2 d-flex align-items-center">
                        <span className="d-flex justify-content-between align-items-center">
                          Expertise : Begineer
                        </span>
                        <span className="d-flex justify-content-between align-items-center ps-4 fw-bold">
                          Rs 120 / Day
                        </span>
                      </p>
                      <p className="mb-0 text-s">Kalnki, Kathmandu</p>
                      <p className="mb-0 text-s"> Working since : 12 Days</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a
                  className="text-decoration-none text-dark"
                  href="/ontario/toronto/C8137214"
                >
                  <div className="afte-proj">
                    <div className="d-flex gap-5">
                      <div className="img-text ">
                        <p className="m-0 "> Plumber</p>
                      </div>
                      <div className="img-text-propertytype ">
                        <p className="m-0 ">3 Reviews</p>
                      </div>
                    </div>
                    <img src="/1.png" className="imghei" alt="C8137214" />
                    <div className="card-textt card">
                      <p className="mb-0 card-price">Prajwal KC</p>
                      <p className="mb-0 text-s2 d-flex align-items-center">
                        <span className="d-flex justify-content-between align-items-center">
                          Expertise : Begineer
                        </span>
                        <span className="d-flex justify-content-between align-items-center ps-4 fw-bold">
                          Rs 120 / Day
                        </span>
                      </p>
                      <p className="mb-0 text-s">Kalnki, Kathmandu</p>
                      <p className="mb-0 text-s"> Working since : 12 Days</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a
                  className="text-decoration-none text-dark"
                  href="/ontario/toronto/C8137214"
                >
                  <div className="afte-proj">
                    <div className="d-flex gap-5">
                      <div className="img-text ">
                        <p className="m-0 "> Plumber</p>
                      </div>
                      <div className="img-text-propertytype ">
                        <p className="m-0 ">3 Reviews</p>
                      </div>
                    </div>
                    <img src="/1.png" className="imghei" alt="C8137214" />
                    <div className="card-textt card">
                      <p className="mb-0 card-price">Prajwal KC</p>
                      <p className="mb-0 text-s2 d-flex align-items-center">
                        <span className="d-flex justify-content-between align-items-center">
                          Expertise : Begineer
                        </span>
                        <span className="d-flex justify-content-between align-items-center ps-4 fw-bold">
                          Rs 120 / Day
                        </span>
                      </p>
                      <p className="mb-0 text-s">Kalnki, Kathmandu</p>
                      <p className="mb-0 text-s"> Working since : 12 Days</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="floating-right">
              <div className="bg-white p-3 shadow-lg rounded-3">
                <div className="pb-3">Copy Workers Profile Link</div>

                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="http://localhost:3000/detailpage"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    Copy Link
                  </span>
                </div>
              </div>

              <div className="py-3"></div>
              <div className="bg-white p-3 shadow-lg rounded-3">
                <p> Majdoor's Location </p>
                <p> Map here</p>
              </div>
              <div className="py-3"></div>

              <div className="bg-white shadow-lg p-3">
                <div>Labor Score : 60/100 [ Based on your reviews ]</div>
                <span className="badge bg-success">Postive</span>
              </div>
              <div className="bg-white shadow-lg p-3">
                <button type="button" className="btn btn-register w-100 py-3">
                  Book Harka Now
                  <img
                    src="/arrow-right.svg"
                    alt="right arrow"
                    className="img-fluid rarr"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5"></div>
        <div className="py-5"></div>
        <div className="py-5"></div>
        <div className="py-5"></div>
        <div className="py-5"></div>
      </div>
    </>
  );
};

export default page;
