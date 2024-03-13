"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import swal from "sweetalert";

export default function Navbar() {
  const [token, setToken] = useState(null);
  const handleLogout = (e) => {
    e.preventDefault();
    swal("Are you sure you want to logout?", {
      buttons: {
        cancel: "No",
        catch: {
          text: "Yes",
          value: "catch",
        },
      },
    }).then((value) => {
      switch (value) {
        case "catch":
          localStorage.removeItem("token");
          setToken(null);
          break;
        default:
          swal("Your are still logged in");
      }
    });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white py-1 shadow-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="/logo.svg" alt="" className="img-fluid small-img" />
        </Link>
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
              <Link className="nav-link" href="/workers">
                All Workers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                How it Works ?
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-lg shadow nodec" href="/">
                    Bookings
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-lg bg-dark nodec text-white shadow"
                    onClick={handleLogout}
                  >
                    Logout
                    <img
                      src="/arrow-right.svg"
                      alt="right arrow"
                      className="img-fluid rarr"
                    />
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-lg shadow nodec" href="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-lg bg-dark nodec text-white shadow"
                    href="/signup"
                  >
                    Signup
                    <img
                      src="/arrow-right.svg"
                      alt="right arrow"
                      className="img-fluid rarr"
                    />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
