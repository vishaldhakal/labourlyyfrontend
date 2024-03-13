"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import axios from "axios";

export default function Login() {
  let route = useRouter();
  const [loginerror, setLoginerror] = useState(null);
  const [logedin, setLogedin] = useState(false);

  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
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
      username: credentials.username.split("@")[0],
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
          localStorage.setItem("username", credentials.username);
          setLoginerror("Sucessfully Logged in");
          setcredentials({
            username: "",
            password: "",
          });
          setLogedin(true);
          route.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status === 401) {
          setLoginerror("Email or Password Incorrect");
        } else if (error.response.status === 404) {
          setLoginerror("Email or Password Doesnot Exists");
        } else {
          setLoginerror("Email or Password Incorrect");
        }
      });
    e.preventDefault();
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogedin(true);
    } else {
      setLogedin(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="py-5 my-5">
        <div className="d-flex align-items-center justify-content-between">
          {!logedin && (
            <section className="container col-12 col-sm-6 col-md-5 col-lg-4">
              {loginerror && (
                <div
                  className="alert alert-danger d-flex justify-content-between mb-5"
                  role="alert"
                >
                  {loginerror}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setLoginerror(null)}
                  ></button>
                </div>
              )}

              <div className="mb-5 d-flex justify-content-center">
                <h5 className="fw-bold main-subtitle">
                  Login with your Account
                </h5>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control bg-white"
                  id="username"
                  placeholder="Username"
                  value={credentials.username}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control bg-white"
                  id="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button
                className="btn btn-register shadow-lg btn-lg w-100 text-light p-2 mt-4"
                onClick={(e) => handleSubmit(e)}
              >
                Log in
                <img
                  src="/arrow-right.svg"
                  alt="right arrow"
                  className="img-fluid rarr"
                />
              </button>
              <div className="my-3">
                <p className="fw-bold text-center">
                  Don't have a account ?{" "}
                  <Link href="/signup">Register now</Link>{" "}
                </p>
              </div>
            </section>
          )}
          {logedin && (
            <section className="container col-12 col-sm-6 col-md-5 col-lg-4">
              <h5 className="mb-4 text-center">Loged in</h5>
              <button
                className="btn bg-dark w-100 text-light p-2 mt-4"
                onClick={(e) => handleLogout(e)}
              >
                Logout
              </button>
            </section>
          )}
        </div>
      </div>

      <div className="py-3"></div>
    </>
  );
}
