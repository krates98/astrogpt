import React from "react";

function RoadMap() {
  return (
    <section className="d-flex justify-content-center align-items-center tryourtech">
      <div className="container">
        <h2 className="text-center mb-5">$AAI Token Roadmap</h2>
        <div className="row">
          <div className="col-md-12 ">
            <div className="row timeline mt-5">
              <div className="col-md-3 ">
                <div className="card mb-3 animate">
                  <div className="card-header bg-success text-white text-center">
                    <h4>Quarter 1</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-left topCard">
                      Launch and promote the FCI token on cryptocurrency
                      exchanges to increase its liquidity and accessibility
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-3 animate">
                  <div className="card-header bg-success text-white text-center">
                    <h4>Quarter 2</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-left topCard">
                      Expand the functionality of the token fairness detector to
                      include more advanced analytics and reporting tools
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-3 animate">
                  <div className="card-header bg-success text-white text-center">
                    <h4>Quarter 3</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-left topCard">
                      Launch a mobile app for the platform to increase
                      accessibility and user engagement
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-3 animate">
                  <div className="card-header bg-success text-white text-center">
                    <h4>Quarter 4</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-left topCard">
                      Integrate cross-chain functionality into the platform to
                      enable seamless transactions across different blockchain
                      networks
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
