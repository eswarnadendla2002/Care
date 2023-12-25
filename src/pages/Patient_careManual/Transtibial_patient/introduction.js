import React from "react";
import Home from "../../Home/homeHeader";
import Footer from "../../Footer/footer";
import Sidebar from "../../Patients/sidebar/sidebar";
const Introduction = () => {
  return (
    <div>
      <Home />
      <div class="clearfix"></div>

      <div id="main">
        <div class="container" role="navigation" aria-label="Breadcrumb">
          <ul class="breadcrumbs clearfix">
            <li>
              <a href="/patients">Patients</a>
              <span> &raquo; </span>
            </li>
            <li>
              <a href="/patients/catalog">Care Manuals</a>
              <span> &raquo; </span>
            </li>
            <li>
              <a href="/patients/catalog/transtibial_patient">
                Transtibial Patient
              </a>
              <span> &raquo; </span>
            </li>
            <li>
              <a href="/patients/catalog/transtibial_patient/introduction">
                Introduction
              </a>
            </li>
          </ul>
        </div>

        <main>
          <article>
            <div class="container">
              <h1>Care Manuals</h1>

              <Sidebar />

              <div class="page-content">
                <h2>Introduction</h2>
                <div class="content">
                  <p>
                    <em>
                      An amputation can be both physically and emotionally
                      challenging for anyone. It is important to understand that
                      many new amputees function very well and pursue the same
                      active lifestyle as prior to limb loss.
                    </em>
                    <br />
                    &nbsp;
                  </p>
                  <p>
                    <em>
                      <img
                        alt="An Introduction to Transtibial Patient Care"
                        src="//opmarketing.com/storage/Patient%20Care%20Manual/Transtibial/01_Introduction.jpg"
                        style={{ height: "300px", width: "600px" }}
                      />
                    </em>
                  </p>
                  <p>
                    <br />
                    This booklet aims to provide you with answers to many of the
                    questions that arise before and after an amputation. When
                    speaking with your healthcare provider, it is important to
                    know which questions to ask and have an idea of what to
                    expect. Many questions will arise throughout the
                    rehabilitation process. This booklet will answers to some of
                    them and give you resources to get further information.
                    Having the answers to commonly asked questions readily
                    available will help you prepare for the steps and procedures
                    that will occur before, during, and after your amputation.
                    This information can assist you in your return to the things
                    you need and hopefully enjoy participating in.
                  </p>
                  <p>
                    This booklet also provides many other resources that you may
                    find useful in your recovery. There are many organizations
                    that offer a variety of assistance that range from driving
                    devices to sports related activities. This booklet attempts
                    to turn your disability into a possibility by sharing the
                    collective rehabilitative experiences of others with you.
                  </p>{" "}
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Introduction;
