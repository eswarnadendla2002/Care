import React from "react";
import "../../Styles/styles.css";
import "../../Styles/styles-copy.css";
import Home from "../Home/homeHeader";
import Footer from "../Footer/footer";
import image from "../../assests/images/logo2.png";
const About = () => {
  return (
    <div>
      <Home />
      <div class="clearfix"></div>
      <div id="main">
        <div class="container" role="navigation" aria-label="Breadcrumb">
          <ul class="breadcrumbs clearfix">
            <li>
              <a href="/about">About</a>
              <span> &raquo; </span>
            </li>
            <li>
              <a href="/about/about-our-practice">About Our Practice</a>
            </li>
          </ul>
        </div>

        <article>
          <div class="container">
            <h1>About Our Practice</h1>
          </div>

          <div class="page-header">
            <div class="container  ">
              <div class="">
                <img src={image} alt="" />
              </div>
            </div>
          </div>

          <div class="banner">
            <div class="container">
              Serving the orthotic and prosthetic community for over 23 years.{" "}
            </div>
          </div>

          <div class="content">
            <div class="container">
              <h3>
                <br />
                We are committed to being at the forefront of providing our
                patients with the highest quality bracing and artificial limb
                technology.&nbsp; Through a quality oriented philosophy we are
                also committed to meeting the personal needs and improving the
                quality of life to our patients within the local and surrounding
                communities.&nbsp; This is achieved through careful evaluation
                of our patients&rsquo; needs and close communication with the
                patient, doctor and therapist.
              </h3>
              <ul>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Is committed to respect those whom we serve as persons of
                    dignity and worth regardless of race, sex, creed, or social
                    status.
                  </h3>
                </li>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Shall strive to fulfill or surpass industry established
                    levels of excellence in patient care.
                  </h3>
                </li>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Is committed to maintaining a unique quality level of
                    professionalism between staff and patient.
                  </h3>
                </li>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Shall selectively pursue the highest standards of technical
                    excellence appropriate to the needs of our community.
                  </h3>
                </li>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Shall seek involvement in innovative organizational forms of
                    patient care.
                  </h3>
                </li>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Is committed to operating as a privately owned health care
                    organization under the direction of a dedicated governing
                    body and professional care givers.
                  </h3>
                </li>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Is committed to providing an environment conducive to a
                    maximum level of efficiency and satisfaction for clinical
                    staff and employees.
                  </h3>
                </li>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Shall seek to exit as a strong, cost effective organization.
                  </h3>
                </li>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Shall participate in and carry on research and educational
                    activities supportive to the mission.
                  </h3>
                </li>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Shall seek relationships appropriated to the accomplishment
                    of this mission with other community health care providers.
                  </h3>
                </li>
                <li>
                  <h3 style={{ textAlign: "left" }}>
                    Shall seek opportunities of service unique to its
                    geographically-centered urban location.
                  </h3>
                </li>
              </ul>{" "}
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default About;
