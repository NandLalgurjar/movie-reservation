import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const StarRating = ({ rating }) => {
    // Calculate full stars, half stars, and empty stars
    const fullStars = Math.floor(rating / 2); // Full stars (rating/2 because it's out of 10)
    const totalStars = 5; // Total stars to display

    // Create an array to hold star icons
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
        if (i < fullStars) {
            stars.push(<li key={i} className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>);
        } else {
            stars.push(<li key={i} className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>);
        }
    }

    return (
        <ul className="list-inline mb-0">
            {stars}
            <li className="list-inline-item ms-2 h6 fw-light mb-0">{rating}/10</li>
        </ul>
    );
};

export default StarRating;

