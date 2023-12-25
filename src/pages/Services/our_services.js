import React from "react";
import Home from "../Home/homeHeader";
import Footer from "../Footer/footer";
import "../../Styles/styles.css";
import "../../Styles/styles-copy.css";
const OurServices = () => {
  return (
    <div>
      <Home />
      <div class="clearfix"></div>

      <div id="main">
        <div class="container" role="navigation" aria-label="Breadcrumb">
          <ul class="breadcrumbs clearfix">
            <li>
              <a href="/services">Services</a>
              <span> &raquo; </span>
            </li>
            <li>
              <a href="/services/our-services">Our Services</a>
            </li>
          </ul>
        </div>

        <main>
          <article>
            <div class="container">
              <h1 style={{ textAlign: "left" }}>Our Services</h1>
            </div>

            <div class="content">
              <div class="container" style={{ textAlign: "left" }}>
                <p>
                  We have extensive experience fitting a wide range of patients
                  with a diverse selection of prostheses and orthoses. A patient
                  may have various needs for our expertise, whether it is due
                  to&nbsp;an illness or because of a traumatic event. Whatever
                  the situation, we are available to assist you in any way we
                  can.&nbsp;
                  <span style={{ lineHeight: "1.625" }}>
                    From the very first visit we dedicate our time learning
                    about you and your lifestyle, so that together we can
                    determine what type of device is&nbsp;
                  </span>
                  <span style={{ lineHeight: "1.625" }}>
                    best for you. Most importantly we focus on fitting the
                    appropriate device to your unique needs that will allow you
                    to get back to doing the things you love the most.
                  </span>
                </p>{" "}
              </div>

              <div class="sections">
                <section class="section  clearfix">
                  <div class="container">
                    <div class="section-content">
                      <h2 class="section-title" style={{ textAlign: "left" }}>
                        Prosthetics
                      </h2>
                      <p>
                        <span style={{ lineHeight: "1.625" }}>
                          <img
                            alt=""
                            src="/storage/images/Orion1.jpg"
                            style={{
                              width: "200px",
                              height: "448px",
                              marginRight: "10px",
                              marginLeft: "10px",
                              float: "left",
                            }}
                          />
                          <strong style={{ textAlign: "left" }}>
                            Balance Prosthetics &amp; Orthotics
                          </strong>{" "}
                          offers a variety of Prosthetics services for our
                          patients.&nbsp;
                        </span>
                        <span
                          style={{ lineHeight: "1.625", textAlign: "left" }}
                        >
                          Your prosthetic device may be similar to many others,
                          however the way you use and wear it may be different.
                          &nbsp;Our devices are custom fit to cater to each
                          person needs and wants. We understand this, and our
                          knowledgeable and compassionate staff makes every
                          effort to exceed the expectations you have, even for
                          yourself. There are many upper and lower extremity
                          prosthetic options available, that will allow you to
                          continue many of your favorite activities.&nbsp;
                        </span>
                      </p>{" "}
                    </div>
                  </div>
                </section>
                <section class="section  clearfix">
                  <div class="container">
                    <div class="section-content">
                      <h2 class="section-title">Orthotics</h2>
                      <p>
                        <strong>Balance Prosthetics &amp; Orthotics</strong>{" "}
                        offers a variety of orthotic services for our patients.
                        &nbsp;
                      </p>
                      <p>
                        <strong style={{ textAlign: "left" }}>
                          Upper-limb orthoses:
                        </strong>
                      </p>
                      <p>
                        <img
                          alt=""
                          src="/storage/images/townsend_rebel.gif"
                          style={{
                            width: "375px",
                            height: "375px",
                            marginRight: "10px",
                            marginLeft: "10px",
                            float: "right",
                          }}
                        />
                      </p>
                      <ul style={{ textAlign: "left" }}>
                        <li>Clavicular and shoulder orthoses</li>
                        <li>Arm orthoses</li>
                        <li>Functional arm orthoses</li>
                        <li>Elbow orthoses</li>
                        <li>Forearm-wrist orthoses</li>
                        <li>Forearm-wrist-thumb orthoses</li>
                        <li>Forearm-wrist-hand orthoses</li>
                        <li>Hand orthoses</li>
                        <li>
                          Upper-extremity orthoses (with special functions)
                        </li>
                      </ul>
                      <p>
                        <strong style={{ textAlign: "left" }}>
                          Lower-limb Orthoses:
                        </strong>
                      </p>
                      <ul style={{ textAlign: "left" }}>
                        <li>Foot orthoses</li>
                        <li>Ankle-foot othtosis (AFO)</li>
                        <li>Knee-ankle-foot orthosis (KAFOs)</li>
                        <li>Knee orthosis (KO)</li>
                      </ul>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>{" "}
                    </div>
                  </div>
                </section>
                <section class="section  clearfix">
                  <div class="container">
                    <div class="section-content">
                      <h2 class="section-title" style={{ textAlign: "left" }}>
                        Diabetic Shoes
                      </h2>
                      <p>
                        <span style={{ lineHeight: "1.625" }}>
                          <img
                            alt=""
                            src="/storage/images/contentonly2_aspx.gif"
                            style={{
                              width: "275px",
                              height: "275px",
                              marginRight: "10px",
                              marginLeft: "10px",
                              float: "left",
                            }}
                          />
                          <strong>Balance Prosthetics &amp; Orthotics</strong>{" "}
                          offers diabetic shoes&nbsp;
                        </span>
                        <span
                          style={{ lineHeight: "1.625", textAlign: "left" }}
                        >
                          and inserts for our patients. D
                        </span>
                        <span
                          style={{ lineHeight: "1.625", textAlign: "left" }}
                        >
                          iabetic shoes and custom-molded inserts work together
                          as a preventative system to help diabetics avoid foot
                          injuries and improve mobility.
                        </span>
                      </p>
                      <p>&nbsp;</p>{" "}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default OurServices;
