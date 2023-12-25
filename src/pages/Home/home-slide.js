import React from "react";
import "../../Styles/styles.css";
import Carosuels from "./carosuel";
const HomeSlide = () => {
  return (
    <div>
      <div class="clearfix"></div>

      <div id="main">
        <div class="container" role="navigation" aria-label="Breadcrumb">
          <ul class="breadcrumbs clearfix">
            <li></li>
          </ul>
        </div>

        <main>
          <article>
            <div class="container">
              <section class="section section-right section-home clearfix">
                <div class="section-media section-gallery">
                  <div class="section-wrap">
                    <div
                      class="cycle-slideshow"
                      data-cycle-timeout="5000"
                      data-cycle-pause-on-hover="true"
                      data-cycle-slides="> .slide"
                      data-cycle-swipe="true"
                      data-cycle-auto-height="-1"
                      data-cycle-pager=".cycle-pager"
                      data-cycle-prev=".cycle-prev"
                      data-cycle-next=".cycle-next"
                    >
                      <Carosuels />
                    </div>
                  </div>
                  <div class="cycle-pager"></div>
                  <div class="paging">
                    <span class="cycle-prev"></span>
                    <span class="cycle-next"></span>
                  </div>
                </div>
                <div class="section-content">
                  <h1 class="section-title">
                    <em>Life is better when things are in balance</em>
                  </h1>
                  <p>
                    We focus on personalized care that will get you started on
                    your path to recovery and get you back to living your life
                    your way. In addition to providing prefabricated orthopedic
                    devices and diabetic shoes. Balance Prosthetics and
                    Orthotics designs, fabricates, and fits custom prosthetic
                    and orthotic devices.
                  </p>
                  <p>
                    <a href="http://www.balancepo.com/services" class="btn">
                      Learn More About Our Services
                    </a>
                  </p>
                </div>
              </section>
            </div>

            <div class="home-cols clearfix">
              <div class="container">
                <div class="col">
                  <h3>Our Mission</h3>
                  <p>
                    We are committed to being at the forefront of providing our
                    patients with the highest quality bracing and artificial
                    limb technology.
                  </p>
                  <p>
                    <a href="http://www.balancepo.com/about/about-our-practice">
                      Read more
                    </a>
                  </p>
                </div>
                <div class="col">
                  <h3>Reach your potential...</h3>
                  <p>
                    Partnering with the right prosthetist or orthotist is one of
                    the most important steps you will take in reaching your full
                    potential.
                  </p>
                </div>
                <div class="col">
                  <h3>Our Services</h3>
                  <p>
                    We have extensive experience fitting a wide range of
                    patients with a diverse selection of prostheses and
                    orthoses.
                  </p>
                  <p>
                    <a href="http://www.balancepo.com/services">Read more</a>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default HomeSlide;
