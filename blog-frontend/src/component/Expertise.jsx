import React from "react";

const expertiseData = [
  {
    title: "Movies",
    desc: "Latest reviews, trailers, and box-office updates.",
    icon: "🎬"
  },
  {
    title: "Web Series",
    desc: "Trending shows and binge-worthy recommendations.",
    icon: "📺"
  },
  {
    title: "Anime",
    desc: "News, reviews, and deep dives into anime culture.",
    icon: "🎌"
  },
  {
    title: "News",
    desc: "Breaking updates from the entertainment world.",
    icon: "📰"
  },
  {
    title: "Sports",
    desc: "Scores, highlights, and sports analysis.",
    icon: "🏆"
  },
  {
    title: "Entertainment",
    desc: "Celebrity buzz, events, and pop culture.",
    icon: "✨"
  }
];

function Expertise() {
  return (
    <section className="container my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">What you may find </h2>
        <p className="text-muted">
          Explore our main topics and specialties
        </p>
      </div>

      <div className="row g-4">
        {expertiseData.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 ">
            <div className="card h-100 shadow-sm border-0 text-center p-4 expertise-card">
              <div className="fs-1 mb-3">{item.icon}</div>
              <h5 className="fw-semibold">{item.title}</h5>
              <p className="text-muted small">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
