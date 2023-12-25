import React from "react";
import Home from "../Home/homeHeader";
import Footer from "../Footer/footer";
import "../../Styles/styles.css";
import "../../Styles/styles-copy.css";
const Location = () => {
  return (
    <div>
      <Home />
      <div id="main">
        <div class="container" role="navigation" aria-label="Breadcrumb">
          <ul class="breadcrumbs clearfix">
            <li>
              <a href="/about">About</a>
              <span> &raquo; </span>
            </li>
            <li>
              <a href="/about/locations">Locations</a>
            </li>
          </ul>
        </div>

        <article>
          <div class="container">
            <h1 style={{ textAlign: "left" }}>Locations</h1>
          </div>

          <div class="content">
            <div class="sections">
              <section
                class="section section-left section-contact clearfix"
                data-address="3601 Chichester Ave., Ste. 108 Boothwyn PA 19061"
              >
                <div class="container">
                  <div class="section-media">
                    <div class="map"></div>
                    <div class="directions">
                      <button>GET DIRECTIONS</button>
                      <input type="text" placeholder="Enter address" />
                    </div>
                  </div>
                  <div class="section-content" style={{ textAlign: "left" }}>
                    <h2 class="section-title">Main Office</h2>
                    <p>
                      3601 Chichester Ave., Ste. 108
                      <br />
                      Boothwyn, PA 19061{" "}
                    </p>
                    <p>
                      484-489-1000
                      <br />
                      484-489-1001 (fax)
                    </p>
                    <p>
                      We are conveniently located in Boothwyn, PA just north of
                      Delaware, not far from Philadelphia and South Jersey.{" "}
                    </p>
                    <p>Email: chris@balancepo.com</p>{" "}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
};

export default Location;
