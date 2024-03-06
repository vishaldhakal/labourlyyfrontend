import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Labourlyy
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
              <Link className="nav-link" href="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                How it Works ?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-lg btn-register shadow" href="/">
                Find Your Labour Now
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
