import React from "react";

function RoadMap() {
  return (
    <section className="d-flex justify-content-center align-items-center roadMap">
      <div className="container">
        <h2 className="text-center mb-5 aaiRoadmapText">$AAI Token Roadmap</h2>
        <div className="row">
          <div className="col-md-12 ">
            <div className="row timeline mt-5">
              <div className="col-md-6 ">
                <div className="card mb-5 animate">
                  <div className="card-header bg-dark text-white text-center roadTop">
                    <h4>Quarter 1</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-left topCard">
                      <ul>
                        <li>Public sale & launch of $AAI tokens</li>
                        <li>
                          Initial marketing push to attract new users and
                          investors
                        </li>
                        <li>Deployment of core platform features</li>
                        <li>
                          Hiring additional development and marketing team
                          members
                        </li>
                      </ul>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-5 animate">
                  <div className="card-header bg-dark text-white text-center roadTop">
                    <h4>Quarter 2</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-left topCard">
                      <ul>
                        <li>
                          Launch of DOB NFTs and integration with platform
                        </li>
                        <li>
                          Begin burning of $AAI tokens, with a target of burning
                          up to 50% of tokens used for buying items and
                          consulting with astrologers
                        </li>
                        <li>
                          Increase marketing efforts to attract more users to
                          the platform
                        </li>
                        <li>
                          Begin planning for the onboarding of astrologers in Q3
                        </li>
                      </ul>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-5 animate">
                  <div className="card-header bg-dark text-white text-center roadTop">
                    <h4>Quarter 3</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-left topCard">
                      <ul>
                        <li>
                          Onboarding of professional astrologers to provide
                          1-to-1 consultations to users
                        </li>
                        <li>
                          Launch of a more extensive marketplace for
                          astrological products and services
                        </li>
                        <li>
                          Expansion of the platform to include more advanced
                          astrology features
                        </li>
                        <li>
                          Hiring additional team members to support the growth
                          of the platform
                        </li>
                      </ul>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-5 animate">
                  <div className="card-header bg-dark text-white text-center roadTop">
                    <h4>Quarter 4</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-left topCard">
                      <ul>
                        <li>
                          Launch of a mobile app for the platform, integrating
                          all existing features and providing a better user
                          experience
                        </li>
                        <li>
                          Focus on user acquisition and retention, with
                          additional marketing efforts and customer support
                        </li>
                        <li>
                          Planning and development of future platform features
                          and improvements
                        </li>
                        <li>Release of a new roadmap for the upcoming year</li>
                      </ul>
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
