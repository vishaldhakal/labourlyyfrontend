import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/legacy/image";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import swal from "sweetalert";
let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function Profile() {
  let route = useRouter();
  const [refetch, setRefetch] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    brokerage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (profileImage) {
      formData.append("image_u", profileImage);
    }
    const url = `${baseUrl}/accounts/update-img/`;
    axios
      .post(url, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        mode: "no-cors",
      })
      .then((res) => {
        console.log(res);
        setProfile({
          firstName: res.data.realtor.user.first_name,
          lastName: res.data.realtor.user.last_name,
          brokerage: res.data.realtor.realtor_association,
        });
        setProfileImage(res.data.realtor.image);
        swal("Profile Image Uploaded", "success");
      })
      .catch((err) => console.log(err.response.data.error));
    setTimeout(function () {
      e.target.innerText = "Updating...";
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("first_name", profile.firstName);
    formData.append("last_name", profile.lastName);
    formData.append("realtor_association", profile.brokerage);
    if (profileImage) {
      formData.append("image_u", profileImage);
    }
    const url = `${baseUrl}/accounts/update-profile/`;
    axios
      .post(url, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        mode: "no-cors",
      })
      .then((res) => {
        console.log(res);
        setProfile({
          firstName: res.data.realtor.user.first_name,
          lastName: res.data.realtor.user.last_name,
          brokerage: res.data.realtor.realtor_association,
        });
        setProfileImage(res.data.realtor.image);
        swal("Updated Sucessfully", "success");
      })
      .catch((err) => console.log(err.response.data.error));
    setTimeout(function () {
      e.target.innerText = "Update Profile";
    }, 3000);
  };

  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("token") == "undefined"
    ) {
      route.push("/portal/login");
    } else {
      axios
        .get(`${baseUrl}/accounts/get-realtor/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setProfile({
            firstName: res.data.realtor.user.first_name,
            lastName: res.data.realtor.user.last_name,
            brokerage: res.data.realtor.realtor_association,
          });
          setProfileImage(res.data.realtor.image);
        })
        .catch((err) => console.log(err));
    }
  }, [refetch]);

  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>
      <Navbar borderrr="sticky-top"></Navbar>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <div>
            <p className="text-center">Done with Profile Update ?</p>
            <div className="d-flex justify-content-center mb-4">
              <Link href={"/portal"}>
                <button className="btn btn-outline-light text-dark shadow-lg d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  &nbsp; Get Back to dashboard
                </button>
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              {profileImage != null && (
                <img
                  src={profileImage}
                  alt=""
                  className="img-fluid profile-img2"
                />
              )}
              {profileImage == null && (
                <img
                  src="/noimage.webp"
                  alt=""
                  className="img-fluid profile-img2"
                />
              )}
            </div>
            <form onSubmit={handleImageSubmit} encType="multipart/form-data">
              <div className="w-100 mt-3">
                <label htmlFor="image" className="text-center d-block fs-5">
                  Select new profile Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="image_u"
                  id="image_u"
                  onChange={handleImageChange}
                />
              </div>
              <div className="d-flex justify-content-center my-3">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary text-white btn-block d-flex w-100 justify-content-center"
                >
                  Update Profile Image
                </button>
              </div>
            </form>
            <form action={handleSubmit} method="POST">
              <div className="row row-cols-2">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      name="firstName"
                      value={profile.firstName}
                      onChange={handleChange}
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
                      id="floatingInput"
                      name="lastName"
                      value={profile.lastName}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    name="brokerage"
                    value={profile.brokerage}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingInput">Brokerage</label>
                </div>
              </div>
              <div className="form-group mb-3">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block d-flex w-100 justify-content-center"
                  onClick={(e) => handleSubmit(e)}
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-5 my-5"></div>

      <div className="py-3"></div>
      <Image
        src="/line.png"
        alt="Line image"
        height="4"
        width="100"
        layout="responsive"
        className="img-fluid foot-up-img"
      />
      <Footer />
    </>
  );
}
