import React from "react";
import Home from "../Home/homeHeader";
import "../../Styles/styles.css";
import "../../Styles/styles-copy.css";
import Footer from "../Footer/footer";
const Staff = () => {
  return (
    <>
      <Home />

      <div id="main">
        <div class="container" role="navigation" aria-label="Breadcrumb">
          <ul class="breadcrumbs clearfix">
            <li>
              <a href="/about">About</a>
              <span> &raquo; </span>
            </li>
            <li>
              <a href="/about/staff">Staff</a>
            </li>
          </ul>
        </div>

        <main>
          <article>
            <div class="container">
              <h1 style={{ textAlign: "left" }}>Staff</h1>
            </div>

            <div class="content">
              <div class="sections">
                <section class="section section-left section-wide">
                  <div class="container clearfix">
                    <div class="section-content" style={{ textAlign: "left" }}>
                      <h2 class="section-title">Christopher Michalowski</h2>
                      <p class="person-title">Owner</p>
                      <p>
                        484-489-1000
                        <br />
                        484-489-1001 (fax)
                        <br />
                        <a href="mailto:chris@balancepo.com">
                          chris@balancepo.com
                        </a>
                        <br />
                      </p>
                      <p>
                        Balance P&amp;O, Inc. is owned and operated by Chris
                        Michalowski, ABC certified Prosthetist and Orthotist.
                        Chris started his career in P&amp;O at A.I. DuPont
                        Hospital in 1992. In 1996, after finishing his education
                        at Northwestern University in Chicago, IL; Chris
                        returned to the Pennsylvania &amp; Delaware area to work
                        with patients needing assistance.
                      </p>
                      <p>&nbsp;PA Licensed Prosthetist &amp; Orthotist</p>{" "}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Staff;
