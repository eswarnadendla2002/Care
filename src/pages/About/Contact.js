import React from "react";
import Home from "../Home/homeHeader";
import Footer from "../Footer/footer";
import "../../Styles/styles.css";
import "../../Styles/styles-copy.css";
const Contact = () => {
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
              <a href="/about/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>

        <article>
          <div class="container">
            <h1 style={{ textAlign: "left" }}>Contact Us</h1>
          </div>

          <div class="content">
            <div class="container" style={{ textAlign: "left" }}>
              <p>
                <strong>
                  Balance Prosthetics &amp; Orthotics Inc
                  <img
                    alt=""
                    src="/storage/images/help.jpg"
                    style={{
                      borderWidth: "12px",
                      borderStyle: "solid",
                      width: "400px",
                      height: "215px",
                      float: "right",
                    }}
                  />
                </strong>
              </p>
              <p>3601 Chichester Ave.,&nbsp; Ste.108&nbsp;</p>
              <p>
                <span style={{ lineHeight: "1.625" }}>Boothwyn, PA 19061</span>
              </p>
              <p>CAll US: 484- 489-1000</p>
              <p>FAX US: 484-489-1001</p>
              <p>
                EMAIL US:&nbsp;
                <a href="mailto:chris@balancepo.com?subject=Contact%20Us">
                  chris@balancepo.com
                </a>
              </p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>{" "}
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
