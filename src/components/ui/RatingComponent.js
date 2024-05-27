"use client";
import React, { useState } from "react";
import StarRatings from 'react-star-ratings';

export const RatingComponent = () => {
  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
    // You can add logic here to submit the rating to your backend or handle it as needed
  };
  return (
    <div className="flex">
      {" "}
      <StarRatings
        rating={rating}
        starRatedColor="orange"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
      />
    </div>
  );
};
