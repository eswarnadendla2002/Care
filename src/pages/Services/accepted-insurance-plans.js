import React from "react";
import Home from "../Home/homeHeader";
import Footer from "../Footer/footer";
import "../../Styles/styles.css";
import "../../Styles/styles-copy.css";
const AcceptedInsurancePlans = () => {
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
              <a href="/services/accepted-insurance-plans">
                Accepted Insurance Plans
              </a>
            </li>
          </ul>
        </div>

        <main>
          <article>
            <div class="container">
              <h1 style={{ textAlign: "left" }}>Accepted Insurance Plans</h1>
            </div>

            <div class="content">
              <div class="container" style={{ textAlign: "left" }}>
                <p>ABC Accredited Facility Over 23 years of experience.</p>
                <div class="groups clearfix">
                  <div class="col">
                    <ul>
                      <li>
                        <h2>A</h2>
                        <ul>
                          <li>Advantra</li>
                          <li>Aetna</li>
                          <li>Aetna Better Health (MCO)</li>
                          <li>AmeriHealth</li>
                        </ul>
                      </li>

                      <li>
                        <h2>B</h2>
                        <ul>
                          <li>Blue Cross Blue Shield DE</li>
                        </ul>
                      </li>

                      <li>
                        <h2>C</h2>
                        <ul>
                          <li>Cigna-HealthSpring(Bravo)</li>
                        </ul>
                      </li>

                      <li>
                        <h2>G</h2>
                        <ul>
                          <li>Geisinger Health Plan</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul>
                      <li>
                        <h2>H</h2>
                        <ul>
                          <li>Health Options (MCO)</li>
                          <li>HealthAmerica (Coventry)</li>
                          <li>Highmark BS (FEP)</li>
                        </ul>
                      </li>

                      <li>
                        <h2>I</h2>
                        <ul>
                          <li>Independence Blue Cross</li>
                        </ul>
                      </li>

                      <li>
                        <h2>K</h2>
                        <ul>
                          <li>Keystone Health Plan East</li>
                        </ul>
                      </li>

                      <li>
                        <h2>M</h2>
                        <ul>
                          <li>Mail Handlers Benefit Plan (MHBP)</li>
                          <li>Medicaid (DE, MD, &amp; PA)</li>
                          <li>Medicare</li>
                          <li>Multi-Plan</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul>
                      <li>
                        <h2>T</h2>
                        <ul>
                          <li>TriCare</li>
                        </ul>
                      </li>

                      <li>
                        <h2>V</h2>
                        <ul>
                          <li>VA</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AcceptedInsurancePlans;
