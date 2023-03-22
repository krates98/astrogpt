import React from "react";

import productImage from "../images/product.png";

function TryOurTech() {
  return (
    <section className="d-flex justify-content-center align-items-center tryourtech">
      <div className="container">
        <h2 className="text-center mb-5">Try our Tech</h2>
        <div className="row">
          <div className="col-md-7 ">
            <p className="lead ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus tellus sit amet velit malesuada, sed cursus mauris dictum.
              Sed sed congue elit, id laoreet massa. Sed viverra sit amet massa
              et volutpat. Vestibulum malesuada est vel tincidunt tristique.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus tellus sit amet velit malesuada, sed cursus mauris dictum.
              Sed sed congue elit, id laoreet massa. Sed viverra sit amet massa
              et volutpat. Vestibulum malesuada est vel tincidunt tristique.
            </p>
          </div>
          <div className="col-md-5">
            <img src={productImage} alt="Product" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TryOurTech;
