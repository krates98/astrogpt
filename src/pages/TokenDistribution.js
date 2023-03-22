import React from "react";
import PieChart from "../components/PieChart";

function TokenDistribution() {
  return (
    <section className="d-flex justify-content-center align-items-center tokenDistribution">
      <div className="container">
        <h2 className="text-center mb-5 tokenDistHead">Token Distribution</h2>
        <div className="row">
          <div className="col-md-7 ">
            <p className="lead tokenDistText">
              <ul>
                <li>
                  <b> Public Sale:</b> 50% of the tokens will be available for
                  public sale, providing an opportunity for everyone to get
                  involved in our platform.
                </li>
                <li>
                  <b>Team & Advisors:</b> 20% of the tokens will be allocated to
                  our team and advisors who have worked tirelessly to bring our
                  vision to life.
                </li>
                <li>
                  <b>Development & Marketing:</b> 15% of the tokens will be used
                  to fund further development and marketing efforts to help grow
                  our platform and bring it to a wider audience.
                </li>
                <li>
                  <b> Ecosystem Development:</b> 10% of the tokens will be
                  allocated towards ecosystem development, which includes
                  building partnerships with other projects in the space and
                  investing in technologies that will help us expand our
                  platform's capabilities.
                </li>
                <li>
                  <b>Partnerships:</b> 5% of the tokens will be reserved for
                  forming strategic partnerships with other companies in the
                  space, which will help us bring the benefits of our platform
                  to even more people.
                </li>
              </ul>
              <b>Total Tokens:</b> 1,000,000,000 $AAI
            </p>
          </div>
          <div className="col-md-5">
            <PieChart />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenDistribution;
