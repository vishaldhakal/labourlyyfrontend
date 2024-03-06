import Link from "next/link";
import PreconSchema from "@/components/PreconSchema";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  keywords:
    "Empire Canals, Empire Communities, Empire, Pre-Construction, Towns, Townhouses, Townhomes, Detached, Detached Homes, Welland Canals, Welland Canals Homes, Empire Canals in Welland, Master-Planned Community, Coming Soon, Towns and Detached, Townhomes and Detached Homes, Coming to Dain City, Towns and Detached Coming Soon, Towns Coming Soon, Townhomes Coming Soon, Townhouses Coming Soon, Detached Coming Soon, Detached Homes Coming Soon, Detached Houses Coming Soon, Coming Soon to Welland, Coming to Welland, Coming Soon to Dain City, Towns for Sale, Detached Homes for Sale, Townhomes for Sale, Homes for Sale, Welland Towns, Welland Homes, Welland Real Estate, Ontario Towns, Ontario Homes, GTA Homes, GTA Towns, Register Here, Register Now",
  title: "Empire Canals - NEW PHASE NOW SELLING FROM $589,990",
  description:
    "New Towns & Detached In Welland From $589,990. Family-friendly streetscapes, on-site schools, community amenities and scenic trails, creeks and parks",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: "/rendering1.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  category: "real estate",
};
export default function Home() {
  return (
    <main>
      <div className="floating fixxcont2">
        <Link
          href="#contact"
          className="btn bgggggggg d-flex align-items-center btn-lg text-light rounded-2 w-100 shadow align-items-center justify-content-center text-decoration-none"
        >
          <div className="text-center d-flex flex-column">
            <div>
              <span className="textvsmall">Starting from </span>
              <span className="text-big">$590K</span>
            </div>
            <span>
              Send a message{" "}
              <img
                src="/arrow-right.svg"
                alt="right arrow"
                className="img-fluid rarr"
              />
            </span>
          </div>
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PreconSchema()),
        }}
      />
      <div className="b-patt py-md-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 py-2 py-md-5 d-flex align-items-center">
            <div className="col order-1 order-md-0">
              <div className="position-relative">
                <div className="text-start">
                  <h1 className="page-title">
                    <strong className="fs-large">
                      EMPIRE<span className="text-secondary">CANALS</span>{" "}
                    </strong>
                  </h1>
                  <h2 className="page-subtitle">
                    A community nestled between the Welland Canal
                  </h2>
                </div>
                <section className="mt-5">
                  <div className="d-flex justify-content-start">
                    <ul className="row row-cols-1 row-cols-md-2 col-12 g-4 justify-content-center iconn">
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Home"></span>
                        <p>Townhomes &amp; Detached</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Storeys"></span>
                        <p>2 Stories</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Size"></span>
                        <p>1,235 – 2,625 sq. ft.</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Bedrooms"></span>
                        <p>3 – 4 Bedrooms</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Bathrooms"></span>
                        <p>2.5 – 3.5 Bathrooms</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Location"></span>
                        <p>Welland | Niagara Region</p>
                      </li>
                    </ul>
                  </div>
                </section>
                <div className="d-flex flex-column flex-md-row mt-5 gap-4 align-items-md-center justify-content-start">
                  <div className="d-flex justify-content-start gap-2">
                    <div className="offer1">
                      <img
                        src="/des1.png"
                        alt="Empire canals TOWNS STARTING FROM $589,990 offer"
                        className="img-fluid"
                      />
                    </div>
                    <div className="offer2">
                      <img
                        src="/des2.png"
                        alt="Empire canals DETACHED STARTING FROM $739,990 offer"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <Link
                    className="btn btn-lg btn-register shadow"
                    href="#contact"
                  >
                    Register Now
                    <img
                      src="/arrow-right.svg"
                      alt="right arrow"
                      className="img-fluid rarr"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <video
                src="/empire_canals_desktop.mp4"
                type="video/mp4"
                autoPlay={true}
                loop={true}
                playsInline={true}
                muted={true}
                className="img-fluid hero-video"
              ></video>
            </div>
          </div>
        </div>
      </div>

      <section className="container" id="renderings">
        <div>
          <div className="container pt-3 " id="gallery">
            <div className="my-md-5 my-3"></div>
            <div className="pt-md-5 pt-5">
              <h2 className="fw-bold fs-1 pb-3  ps-3 ps-md-0 d-flex justify-content-center brand-color">
                Empire Canals : Models and Renderings
              </h2>
            </div>
            <div className="rounded-3">
              <div className="d-flex justify-content-between pb-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center g-4">
                  <div className="col">
                    <div className="afte">
                      <img
                        loading="lazy"
                        src="/rendering1.jpeg"
                        alt="Empire Wyndfield Rendering 1"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="afte">
                      <img
                        loading="lazy"
                        src="/rendering2.jpeg"
                        alt="Empire Wyndfield Rendering 2"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div href="#" className="afte">
                      <img
                        loading="lazy"
                        src="/rendering3.jpeg"
                        alt="Empire Wyndfield Rendering 3"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="afte">
                      <img
                        loading="lazy"
                        src="/rendering4.jpeg"
                        alt="Empire Wyndfield Rendering 4"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="afte">
                      <img
                        loading="lazy"
                        src="/rendering5.jpeg"
                        alt="Empire Wyndfield Rendering 5"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="afte">
                      <img
                        loading="lazy"
                        src="/rendering6.jpeg"
                        alt="Empire Wyndfield  Rendering 6"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="b-patt pb-5" id="plans">
        <div className="container pt-5" id="plans">
          <div className="my-md-5 my-3"></div>
          <div className="pt-md-5 pt-5">
            <h2 className="fw-bold fs-1 pb-3  ps-3 ps-md-0 d-flex justify-content-center custom-underline brand-color">
              Empire Canals :Floor Plans
            </h2>
            <div>
              <div className="row me-0 row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 me-0 d-flex justify-content-center">
                <div className="col ">
                  <div className="card border-0 shadow-lg rounded-mine floorbtns">
                    <img
                      loading="lazy"
                      src="empire-floorplan1.gif"
                      className="card-img-top py-4 rounded-top-mine"
                      alt="Empire canals floorplans 1"
                    />
                  </div>
                </div>
                <div className="col ">
                  <div className="card border-0 shadow-lg rounded-mine floorbtns">
                    <img
                      loading="lazy"
                      src="empire-floorplan2.gif"
                      className="card-img-top py-4 rounded-top-mine"
                      alt="Empire canals floorplans 2"
                    />
                  </div>
                </div>
                <div className="col ">
                  <div className="card border-0 shadow-lg rounded-mine floorbtns">
                    <img
                      loading="lazy"
                      src="empire-floorplan3.gif"
                      className="card-img-top py-4 rounded-top-mine"
                      alt="Empire canals floorplans 3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="location">
        <div className="container pt-md-5 pt-5" id="location">
          <div className="pt-md-5 pt-5"></div>
          <div className="py-5">
            <h2 className="fw-bold fs-1 mb-0 text-center justify-content-center brand-color">
              Empire Canals : Project Location
            </h2>
            <span className="small-text text-center d-flex justify-content-center custom-underline pb-3">
              635 Canal Bank St, Welland, ON L0S 1K0, Canada
            </span>
            <div>
              <div className="bg-white p-1   rounded-mine d-flex justify-content-center ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.260529397992!2d-79.25010492397651!3d42.95171389751798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3364cf3e2ed39%3A0x96818e24310daf4!2s635%20Canal%20Bank%20St%2C%20Welland%2C%20ON%20L0S%201K0%2C%20Canada!5e0!3m2!1sen!2snp!4v1709468941292!5m2!1sen!2snp"
                  width="900"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5"></div>
      <section id="contact">
        <div className="pt-5" id="Contact">
          <div className="pt-5 mt-5">
            <div className="row mx-0 mb-4">
              <h6 className="text-center fs-1 fw-bold pt-3 register ">
                {" "}
                Register today!
              </h6>
              <div className="registertext px-4 d-flex justify-content-center align-items-center  text-center">
                <p>
                  Register today to get the updated information such as floor
                  <br className="d-none d-md-inline" /> plan, pricing &amp;
                  availability of Empire Canals
                </p>
              </div>
            </div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <img
        src="/footer-seperator.svg"
        alt="footer seperator for rmpire canals page"
        className="img-fluid footsep"
      />
      <footer className="footerr  pb-5 mb-4">
        <div className="container ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-1 justify-content-between ">
            <div className="col-md-5 my-3 fotwidth center-sm px-4 px-md-0">
              <p className=" ">
                <img
                  src="empire-canal-logo.png"
                  className="img-fluid navbar-brand"
                  alt="Empire canal logo in footer"
                />
              </p>
              <span className=" justifyy">
                We do not represent the builder. All renderings, incentives,
                pricing are subject to terms &amp; conditions and may change at
                anytime without notice – see sales representatives for more
                details. not intended to solicit those under contract with
                another brokerage. All inquiries will go to Salima Nazir, real
                estate agent at HOMELIFE GALAXY REAL ESTATE LTD. in TORONTO,
                Ontario.{" "}
              </span>
              <div className="list pt-md-5 pt-3 d-md-block d-none">
                <p className="">
                  Website designed by{" "}
                  <a
                    href="https://www.sixdesign.ca/"
                    target="_blank"
                    className="text-dark text-decoration-none"
                  >
                    <strong>SixDesign.</strong>{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-1 "></div>
            <div className="col-md-4 mt-md-4 py-md-5 py-5 center-sm px-4 px-md-5 ">
              <div>
                <h5 className="text-dark fw-bold mt-3 mb-3">About</h5>
                <div className="list d-block ">
                  <p className="mybot pb-md-0 pb-0">
                    Builder : Empire Communities
                  </p>
                  <p className="mybot pb-md-0 pb-0">
                    Location : 635 Canal Bank St, Welland, ON L0S 1K0, Canada
                  </p>

                  <p className="mybot pb-md-0 pb-0">
                    House Type : Detached &amp; Towns
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2 mt-md-5 pt-md-5 mt-sm-0 pt-4 center-sm d-flex justify-content-start justify-content-md-center px-4 text-center">
              <img
                src="/empire-logo.png"
                className="img-fluid footer-logo"
                alt="Empire Communities Logo which is a developer of empire canals project"
              />
            </div>
          </div>

          <div className="list mt-5 pt-5 d-md-none d-block center-sm px-2">
            <p className="">
              Website designed by{" "}
              <a
                href="https://www.sixdesign.ca/"
                target="_blank"
                className="text-dark text-decoration-none"
              >
                <strong>SixDesign.</strong>{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
