import React from "react";

import productImage from "../images/botdemo.gif";

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
              In today's world, there are countless technologies available for
              every imaginable purpose, each one claiming to be the best. With
              so many options, it can be difficult to differentiate between
              genuine innovation and empty promises. That's why we believe in
              letting our technology speak for itself. We're confident that once
              you try it, you'll see just how accurate and effective it truly
              is.
            </p>
            <p className="lead tryTechText">
              Our commitment to providing a product that delivers on its
              promises is what sets us apart from the competition. We understand
              that in order to earn your trust, we need to demonstrate the value
              of our technology firsthand. That's why we invite you to take
              advantage of our offer and see for yourself what sets us apart.
              Our team has put in countless hours to develop technology that is
              truly game-changing, and we believe that once you see the results,
              you'll never look back. So why wait? Try our technology today and
              join the countless individuals who have already experienced the
              difference it can make in their lives.
            </p>
            <p className="lead tryTechText">
              In conclusion, we're confident that our technology is the best on
              the market, and we're eager to prove it to you. We invite you to
              take advantage of our offer and try our technology for yourself.
              With our commitment to accuracy and effectiveness, we're confident
              that you'll see the difference that sets us apart from the
              competition. Don't just take our word for it - try our technology
              today and experience the results firsthand.
            </p>
            <a
              href="https://t.me/astro_guru_ai_bot"
              className="btn btn-lg btn-secondary fw-bold border-white bg-black botDemoText"
            >
              Telegram Bot Demo
            </a>
          </div>
          <div className="col-md-5">
            <img
              src={productImage}
              width={400}
              height={648}
              alt="Product"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TryOurTech;
