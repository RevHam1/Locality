import React, { Component } from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends Component {
  render() {
    if (this.props.businesses) {
      return (
        <div className="BusinessList">
          {this.props.businesses.map(business => {
            return <Business key={business.id} business={business} />;
          })}
        </div>
      );
    }
    return null;
  }
}

export default BusinessList;
