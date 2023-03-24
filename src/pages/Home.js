import React from "react";

function Home() {
  return (
    <section className="d-flex justify-content-center align-items-center">
      <div className="text-center text-white">
        <div className="cover-text">
          <h1>The Future is Now </h1>
          <p className="lead tryTechText">
            Our astrology app harnesses the power of AI to provide you with
            accurate and advanced predictions about your future. With
            personalized readings based on your birth chart and astrological
            data, you can discover your true potential and path in life.
            Experience the future of astrology today and unlock the secrets of
            the stars with our AI-powered predictions.
          </p>
          <p className="lead">
            <a
              href="https://www.google.com"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white learnMoreText"
            >
              Buy $AAI Now!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
