import React from "react";
import PieChart from "../components/PieChart";

function TokenDistribution() {
  return (
    <section className="d-flex justify-content-center align-items-center tryourtech">
      <div className="container">
        <h2 className="text-center mb-5">Token Distribution</h2>
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
            <PieChart />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenDistribution;
