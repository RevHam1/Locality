import React, { Component } from "react";
import "./Business.css";

class Business extends Component {
  render() {
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt='"Sorry, nothing to show!"' />
        </div>
        <h2>{business.name}</h2>
        <h4>Phone Number {business.phone}</h4>

        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>
              {business.state} {business.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">Rating {business.rating}</h3>
            <p>Review Count {business.reviewCount}</p>
          </div>
        </div>
        <a
          className="Business-url"
          target="_blank"
          rel="noopener noreferrer"
          href={business.url}
        >
          To See Comment Reviews Click Here!
        </a>
      </div>
    );
  }
}

export default Business;
