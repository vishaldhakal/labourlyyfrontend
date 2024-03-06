import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/empire-canal-logo.png"
            alt="Logo of Empire Canals, a community nestled between the Welland Canal"
            className="img-fluid"
          />
        </a>
        <button
          className="navbar-toggler nav-small"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 align-items-start align-items-md-center mt-4 mt-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" href="#about">
                About
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" href="#renderings">
                Renderings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#plans">
                Plans & Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#location">
                Location
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn my-2 my-sm-0 ms-md-3 d-flex text-dark"
                href="telto:16474024100"
              >
                <span
                  className="d-flex flex-column justify-content-start"
                  id="utility__phone-msg"
                >
                  <b id="utility__phone-number text-dark">(647) 402‑4100</b>
                  <span className="d-block travel__expert fs-vsmall text-dark">
                    Call your Home Specialists
                  </span>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-lg btn-register shadow" href="#contact">
                Register Now
                <img
                  src="/arrow-right.svg"
                  alt="right arrow"
                  className="img-fluid rarr"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
