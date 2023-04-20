import React from "react";

function RoadMap() {
  const roadmapData = [
    {
      quarter: "Quarter 2",
      items: [
        "Public sale & launch of $AAI tokens",
        "Initial marketing push to attract new users and investors",
        "Deployment of core platform features",
        "Hiring additional development and marketing team members",
      ],
    },
    {
      quarter: "Quarter 3",
      items: [
        "Launch of DOB NFTs and integration with platform",
        "Begin burning of $AAI tokens, with a target of burning up to 50% of tokens used for buying items and consulting with astrologers",
        "Increase marketing efforts to attract more users to the platform",
        "Begin planning for the onboarding of astrologers in Q3",
      ],
    },
    {
      quarter: "Quarter 4",
      items: [
        "Onboarding of professional astrologers to provide 1-to-1 consultations to users",
        "Launch of a more extensive marketplace for astrological products and services",
        "Expansion of the platform to include more advanced astrology features",
        "Hiring additional team members to support the growth of the platform",
      ],
    },
    {
      quarter: "2024",
      items: [
        "Launch of a mobile app for the platform, integrating all existing features and providing a better user experience",
        "Focus on user acquisition and retention, with additional marketing efforts and customer support",
        "Planning and development of future platform features and improvements",
        "Release of a new roadmap for the upcoming year",
      ],
    },
  ];

  return (
    <section className="roadMap">
      <div className="container">
        <h2 className="text-center aaiRoadmapText mt-5 mb-5">
          $AAI Token Roadmap
        </h2>
        <div className="timeline">
          {roadmapData.map((data, index) => (
            <div key={index} className="timeline-row">
              <div className="timeline-date">
                <div className="timeline-circle"></div>
                <h4>{data.quarter}</h4>
              </div>
              <ul className="timeline-content">
                {data.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
