import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 border-top">
        <h1 className="text-center fs-2">People</h1>
      </div>

      <div className="row mb-5 fs-6 d-flex flex-column flex-md-row align-items-center">
        <div className="col-12 col-md-6 p-5 text-center">
          <img
            src="/media/profile.jpg"
            className="rounded-circle img-fluid"
            style={{ maxWidth: "295px" }}
            alt="Nithin Kamath"
          />
          <h4 className="text-center mt-4 fs-3">Abhigyan Kumar</h4>
          <h6 className="text-center fs-6 text-muted">Developer</h6>
        </div>
        <div className="col-12 col-md-6 p-5 text-center text-md-start">
          <p>
            I developed this Zerodha clone as a personal front-end project to
            enhance my skills in modern web development. The application is
            built using React.js, with React Router enabling smooth and seamless
            navigation between different pages, mimicking the experience of a
            single-page application. This ensures users can switch between
            routes like Signup, Product, Pricing, and Support without full page
            reloads.
          </p>
          <p>
            For the design and layout, I used Tailwind CSS, which allowed me to
            create a clean, responsive, and consistent user interface
            efficiently. Tailwind’s utility-first approach helped in rapidly
            building modern UI components that align closely with Zerodha’s
            minimalist design.
          </p>
          <p>
            This project reflects my ability to recreate real-world applications
            with a focus on performance, user experience, and responsive design.
            It also demonstrates my proficiency in working with component-based
            architecture, client-side routing, and modern CSS frameworks.
          </p>
          <p>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/abhigyan-kumar-2aa944234/"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Portfolio
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/abhigyan07k"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
