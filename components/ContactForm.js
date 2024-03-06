"use client";
import { useState } from "react";
import swal from "sweetalert";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data?.success) {
        swal(
          "Thank you for reaching out to us. We will get back to you soon.",
          {
            icon: "success",
          }
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else if (data?.success == false) {
        swal("Error sending email", {
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear validation errors when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 mx-0 g-5 pb-md-5">
      <div className="col-md-3"></div>
      <div className="col-md-6 px-md-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-control py-4 bg-lighter ${
                errors.name && "is-invalid"
              }`}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="row row-cols-1 row-cols-sm-2">
            <div className="col">
              <div className="mb-3">
                <input
                  type="text"
                  aria-describedby="emailHelp"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-control py-4 bg-lighter ${
                    errors.phone && "is-invalid"
                  }`}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <input
                  type="text"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control py-4 bg-lighter ${
                    errors.email && "is-invalid"
                  }`}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className={`form-control py-4 bg-lighter mess ${
                  errors.message && "is-invalid"
                }`}
                rows={4}
              ></textarea>
              {errors.message && (
                <div className="invalid-feedback">{errors.message}</div>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <p className="text-muted sm-text text-center mt-0">
              I consent to receive future communications about Empire Canals in
              Welland. I understand I can opt out at anytime by sending an
              email.
            </p>
          </div>
          <div className="row">
            <div className="col text-center">
              <button
                type="submit"
                className="btn btn-register btn-lg w-100 p-2 px-4 btn-lg py-3 shadow"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row-cols-md-3"></div>
    </div>
  );
}

export default ContactForm;
