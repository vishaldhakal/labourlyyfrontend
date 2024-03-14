import { notFound } from "next/navigation";
import ReviewForm from "@/components/ReviewForm";

async function getData(id) {
  const res = await fetch("https://labourlyy.onrender.com/api/labours/" + id, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getLabours() {
  const res = await fetch("https://labourlyy.onrender.com/api/labours/", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const page = async ({ params }) => {
  const data = await getData(params.id);
  const labours = await getLabours();

  function checkImage(image) {
    if (image === null) {
      return "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";
    } else {
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

  function checkSentiment(val) {
    if (val > 55) {
      return <span className="badge bg-success fw-normal">Positive</span>;
    } else if (val < 30) {
      return <span className="badge bg-danger fw-normal">Negative</span>;
    }
    return <span className="badge bg-warning fw-normal">Neutral</span>;
  }

  function avgSentiment() {
    let sum = 0;
    data.reviews.map((review) => {
      sum += parseInt(parseFloat(review.split("=")[1]) * 100);
    });
    return parseInt(sum / data.reviews.length);
  }

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
                      src={checkImage(data.avatar)}
                      className=" detail-img-border-golo"
                      alt="image"
                    />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-center align-items-start">
                    <div className="fs-5 fw-bold">
                      {data.work_category.name}
                    </div>
                    <div>{data.name}</div>
                  </div>
                </div>
              </div>

              <div className="col button-flex-right flex-fill">
                <button type="button" className="btn btn-register">
                  Book {data.name} Now
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
                    <p className="cardd-subtitle_bg-black">City</p>
                  </div>
                  <div className="col-5 col-md border-bottom py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">
                      {data.city + " " + data.state}
                    </p>
                  </div>
                  <div className="col-7 col-md border-bottom py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">Worker type</p>
                  </div>
                  <div className="col-5 col-md border-bottom py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">
                      {data.work_category.name}
                    </p>
                  </div>
                </div>
                <div className="row row-cols-2  row-cols-md-4 w-100 flex-nowrap prp-gap">
                  <div className="col-7 col-md border-bottom py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">Expertise </p>
                  </div>
                  <div className="col-5 col-md border-bottom py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">
                      {getexpertise(data.expertise_level)}
                    </p>
                  </div>
                  <div className="col-7 col-md border-bottom py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">Cost</p>
                  </div>
                  <div className="col-5 col-md border-bottom py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">
                      {data.cost_per_day} / Day
                    </p>
                  </div>
                </div>
                <div className="row row-cols-2  row-cols-md-4 w-100 flex-nowrap prp-gap">
                  <div className="col-7 col-md border-bottom border-sm   py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">Phone</p>
                  </div>
                  <div className="col-5 col-md border-bottom border-sm py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">
                      xxxxxxxxxx
                    </p>
                  </div>
                  <div className="col-7 col-md border-bottom py-2 py-md-3">
                    <p className="cardd-subtitle_bg-black">Email</p>
                  </div>
                  <div className="col-5 col-md border-bottom py-2 py-md-3">
                    <p className="fw-bold cardd-subtitle_bg-black">
                      {data.email}
                    </p>
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
              <ReviewForm laborer_id={data.id}></ReviewForm>
              <div className="mt-2">
                {data.reviews.length > 0 &&
                  data.reviews.map((review) => (
                    <div
                      className="d-flex flex-row align-items-center gap-3 p-3"
                      key={review}
                    >
                      <img
                        src="https://i.imgur.com/zQZSWrt.jpg"
                        width="40"
                        height="40"
                        className="rounded-circle mr-3"
                      />
                      <div className="w-100">
                        <p className="text-justify comment-text mb-0">
                          {review.split("=")[0]}
                        </p>

                        <div className="d-flex flex-row align-items-center user-feed">
                          <div className="me-2">
                            Sentiment score :{" "}
                            {parseInt(parseFloat(review.split("=")[1]) * 100)}
                            /100
                          </div>
                          {checkSentiment(
                            parseInt(parseFloat(review.split("=")[1]) * 100)
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="py-3"></div>
            <div className="py-3"></div>

            <h4 className="mb-0 main-subtitle">
              Related <span className="text-mine">Workers</span>
            </h4>
            <div className="row row-cols-1 row-cols-md-3 mt-4">
              {labours &&
                labours.slice(0, 3).map((result) => (
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

          <div className="col-sm-4">
            <div className="floating-right">
              <div className="bg-white p-3 shadow-lg rounded-3">
                <div className="pb-3">Copy Workers Profile Link</div>

                <div className="input-group mb-3 main-subtitle3">
                  {"https://labourlyy.vercel.app/workers/" + data.id}
                </div>
              </div>

              <div className="py-3"></div>
              <div className="bg-white p-3 shadow-lg rounded-3">
                <p> Majdoor's Location </p>
                <p> Map here</p>
              </div>
              <div className="py-3"></div>

              <div className="bg-white shadow-lg p-3">
                <div>
                  Labor Score : {avgSentiment()}/100 [ Based on your reviews ]
                </div>
                {checkSentiment(avgSentiment())}
              </div>
              <div className="bg-white shadow-lg p-3">
                <button type="button" className="btn btn-register w-100 py-3">
                  Book {data.name} Now
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
