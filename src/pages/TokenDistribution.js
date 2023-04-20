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
                  <b>Public Round:</b> 40.0% of the tokens will be available for
                  purchase during the public sale round, allowing everyone to
                  participate in our platform.
                </li>
                <li>
                  <b>DEX Liquidity:</b> 24.0% of the tokens will be allocated
                  for liquidity on decentralized exchanges, which will help
                  ensure a healthy trading environment for our token.
                </li>
                <li>
                  <b>Team:</b> 6.0% of the tokens will be allocated to our team
                  members, who have worked tirelessly to bring our vision to
                  life.
                </li>
                <li>
                  <b>Advisors:</b> 3.0% of the tokens will be allocated to our
                  advisors, who have provided invaluable guidance and support
                  throughout our project's development.
                </li>
                <li>
                  <b>Marketing:</b> 5.0% of the tokens will be allocated to fund
                  further marketing efforts, which will help us reach a wider
                  audience and promote the benefits of our platform.
                </li>
                <li>
                  <b>Development/DAO:</b> 6% of the tokens will be allocated to
                  fund further development efforts, including the development of
                  our decentralized autonomous organization (DAO).
                </li>
                <li>
                  <b>Staking Rewards:</b> 8.0% of the tokens will be allocated
                  for staking rewards, which will incentivize token holders to
                  participate in the governance of our platform.
                </li>
                <li>
                  <b>CEX Listing:</b> 8.0% of the tokens will be allocated for
                  listing on centralized exchanges, which will help increase the
                  visibility and accessibility of our token.
                </li>
              </ul>
              <b>Total Tokens:</b> 100,000,000 $AAI
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
