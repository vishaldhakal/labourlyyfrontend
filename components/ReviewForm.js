"use client";
import { useState } from "react";
import Swal from "sweetalert";

export default function ReviewForm({ laborer_id }) {
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    await fetch("https://labourlyy.onrender.comapi/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ text: review, laborer_id: laborer_id }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit review");
      }
      return response.json();
    });
    setReview("");
    Swal({
      title: "Review submitted",
      text: "Your review has been submitted successfully",
      icon: "success",
    });
  };

  return (
    <div className="row row-cols-2 mx-0 gx-3 p-4">
      <div className="col-8">
        <input
          type="text"
          className="form-control bg-light py-3 shadow-lg"
          placeholder="Enter your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <button className="btn btn-register col-4" onClick={handleSubmit}>
        Submit review
      </button>
    </div>
  );
}
