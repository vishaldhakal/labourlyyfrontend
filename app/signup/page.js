"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import swal from "sweetalert";

export default function Register() {
  let route = useRouter();
  const [registererror, setRegistererror] = useState(null);
  const [loginerror, setLoginError] = useState(null);
  const [logedin, setLogedin] = useState(false);

  const [credentials, setcredentials] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setcredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setLogedin(false);
  };

  const handleSubmit = (e) => {
    const payload = JSON.stringify({
      first: credentials.first,
      last: credentials.last,
      email: credentials.email,
      password: credentials.password,
      password2: credentials.password2,
    });
    e.preventDefault();
    let isEmpty = false;
    let emptyyy = [];
    let myarr = Object.keys(credentials);
    myarr.forEach((ele) => {
      if (credentials[ele] === "") {
        console.log(credentials[ele]);
        isEmpty = true;
        emptyyy.push(ele);
      }
    });
    if (isEmpty) {
      swal("Blank Field", `${emptyyy[0]}  Is Empty`, "warning");
    } else {
      var configg = {
        method: "POST",
        credentials: "include",
        url: "https://labourlyy.onrender.com" + `/api/users/`,
        headers: { "Content-Type": "application/json" },
        data: payload,
      };
      axios(configg)
        .then((res) => {
          setRegistererror("Sucessfully Registered in");
          handleLoginSubmit(e);
          setLogedin(true);
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status === 401) {
            setLoginError("Email or Password Incorrect");
            swal("Error", "Email or Password Incorrect", "error");
          } else if (error.response.status === 404) {
            setLoginError("Email or Password Does Not Exist");
            swal("Error", "Email or Password Does Not Exist", "error");
          } else if (error.response.status === 400) {
            setLoginError("Missing Fields");
            swal("Error", "Missing Fields", "error");
          } else if (error.response.status === 409) {
            setLoginError("Email or Username Already Exists");
            swal("Error", "Email or Username Already Exists", "error");
          } else {
            setLoginError("Something Went Wrong. Please Try Again Later");
            swal(
              "Error",
              "Something Went Wrong. Please Try Again Later",
              "error"
            );
          }
        });
    }
  };

  const handleLoginSubmit = (e) => {
    const payload = JSON.stringify({
      username: credentials.email.split("@")[0],
      password: credentials.password,
    });
    var configg = {
      method: "POST",
      credentials: "include",
      url: "https://labourlyy.onrender.com" + `/api/api-token-auth/`,
      headers: { "Content-Type": "application/json" },
      data: payload,
    };
    console.log("https://labourlyy.onrender.com");
    axios(configg)
      .then((res) => {
        if (res.data.token != undefined) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", credentials.email.split("@")[0]);
          setLoginError("Sucessfully Logged in");
          route.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status === 401) {
          setLoginError("Email or Password Incorrect");
        } else if (error.response.status === 404) {
          setLoginError("Email or Password Doesnot Exists");
        } else {
          setLoginError("Email or Password Incorrect");
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogedin(true);
      route.push("/");
    } else {
      setLogedin(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>

      <div className="py-5 my-5">
        <div className="d-flex align-items-center justify-content-between">
          {!logedin && (
            <section className="container col-12 col-sm-6 col-md-5 col-lg-4">
              {registererror && (
                <div
                  className="alert alert-danger d-flex justify-content-between mb-5"
                  role="alert"
                >
                  {registererror}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setRegistererror(null)}
                  ></button>
                </div>
              )}

              <div className="mb-5 d-flex justify-content-center">
                <h5 className="fw-bold fs-4 main-subtitle">
                  Register with your Account
                </h5>
              </div>
              <div className="row row-cols-2">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="first"
                      name="first"
                      value={credentials.first}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <label htmlFor="floatingInput">First Name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="last"
                      name="last"
                      value={credentials.last}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={(e) => handleChange(e)}
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={(e) => handleChange(e)}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mt-3">
                <input
                  type="password"
                  className="form-control"
                  id="password2"
                  name="password2"
                  value={credentials.password2}
                  onChange={(e) => handleChange(e)}
                  required
                />
                <label htmlFor="floatingPassword">Repeat Password</label>
              </div>
              <button
                className="btn btn-register btn-lg shadow-lg w-100 text-light p-2 mt-4"
                onClick={(e) => handleSubmit(e)}
              >
                Register now
                <img
                  src="/arrow-right.svg"
                  alt="right arrow"
                  className="img-fluid rarr"
                />
              </button>
              <div className="my-3">
                <p className="fw-bold text-center">
                  Already have a account ? <Link href="/login">Login now</Link>{" "}
                </p>
              </div>
            </section>
          )}
          {logedin && (
            <section className="container col-12 col-sm-6 col-md-5 col-lg-4">
              <h5 className="mb-4 text-center">Loged in</h5>
              <Link href="/">
                <button className="btn bg-dark w-100 text-white p-2 mt-4">
                  Go to Dashboard
                </button>
              </Link>
            </section>
          )}
        </div>
      </div>

      <div className="py-3"></div>
    </>
  );
}
