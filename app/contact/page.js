function Contact() {
  return (
    <>
      {/* tab option */}
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          {/* image wala part */}
          <ul className="nav nav-tabs row row-cols-2 d-flex justify-content-between">
            <li className="nav-item col ">
              <a
                className="nav-link active d-flex justify-content-start align-items-center"
                href="../signup"
              >
                <img src="/img/profile-stick.png" alt="prof-icon"></img>
                <h2>Personal Info</h2>
              </a>
            </li>
            <li className="col d-flex">
              <a
                href="#contact"
                className="nav-link d-flex justify-content-start align-items-center"
              >
                <img src="/img/profile-stick.png" alt="prof-icon"></img>
                <h2>Contact Info</h2>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-2"></div>
      </div>
      {/* tab option finished */}

      <div className="row" id="personalinfosec">
        {/* space deko */}
        <div className="col-2"></div>
        <div className="col-8">
          {/* form wala part */}
          <form>
            <div className="mb-3">
              <label for="getFullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="getFullName"
                placeholder="Enter your full name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="getemil" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control py-2"
                id="getemil"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label for="getPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control py-2"
                id="getPassword"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <label for="getPassword" className="form-label">
                Upload citizenship photo
              </label>
              <input
                type="password"
                className="form-control py-2"
                id="getPassword"
                placeholder="Password"
              />
            </div>
            <div>
              <form
                action="/upload"
                method="post"
                encType="multipart/form-data"
              >
                <div className="form-group">
                  <label htmlFor="image">Upload Photo</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="image"
                    name="image"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </form>
            </div>
          </form>
          {/* form part end */}
        </div>

        <div className="col-2"></div>
      </div>
    </>
  );
}
export default Contact;
