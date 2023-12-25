import React from "react";

const Footer = () => {
  // Ensure that the googleTranslateElementInit function is defined globally
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false, // Add this line to prevent auto-display
      },
      "google_translate_element"
    );
  };

  return (
    <footer className="clearfix">
      <div className="container">
        <div className="left">
          <div className="block">
            <h2>About Us</h2>
            <p>
              We service the needs of patients in the Delaware, Maryland, New
              Jersey, and Pennsylvania areas.
            </p>
          </div>
          <div className="block">
            <h2>Our Services</h2>
            <p>
              We have extensive experience fitting a wide range of patients with
              a diverse selection of prostheses and orthoses.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="tagline">Give us a call</div>
          <div className="phone">Call 484-489-1000 or 302-691-7301</div>
          <div className="address">
            3601 Chichester Ave. <br />
            Suite 108
            <br />
            Boothwyn, PA 19061
          </div>
        </div>
        <div className="copyright">
          &copy; 2023 Balance Prosthetics &amp; Orthotics, Inc., developed by OP
          Solutions
        </div>
        <div className="navigation">
          <div id="google_translate_element"></div>
          <p className="social">
            <a
              href="https://www.facebook.com/BalanceProsthetics"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </p>
          <a href="/">Home</a> | <a href="/about">About</a> |{" "}
          <a href="/services">Services</a> | <a href="/patients">Patients</a> |{" "}
          <a href="/professionals">Professionals</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
