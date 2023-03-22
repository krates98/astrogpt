import React from "react";

import productImage from "../images/product.png";

function TryOurTech() {
  return (
    <section className="d-flex justify-content-center align-items-center tryourtech">
      <div className="container">
        <h2 className="text-center mb-5 tryTechHead">
          Unlock the Power of Astrology with AI ( DEMO )
        </h2>
        <div className="row">
          <div className="col-md-7 ">
            <p className="lead tryTechText">
              Don't Just Take Our Word for It - Try Our Technology and See the
              Results for Yourself. We're confident in the accuracy and
              effectiveness of our technology, and we want you to experience it
              firsthand. With so many claims out there without any proof to back
              them up, we're proud to offer a product that delivers on its
              promises. Try our technology today and see the difference for
              yourself.
            </p>
            <a
              href="#"
              className="btn btn-lg btn-secondary fw-bold border-white bg-black botDemoText"
            >
              Telegram Bot Demo
            </a>
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
