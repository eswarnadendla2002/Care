import React from "react";
import Home from "../../Home/homeHeader";
import Footer from "../../Footer/footer";

const SocketFinder = () => {
  return (
    <>
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
              <a href="/patients/socket-finder">Socket Finder</a>
            </li>
          </ul>
        </div>

        <main>
          <article>
            <div class="container clearfix">
              <h1>Socket Finder</h1>

              <div class="content">
                <div class="container">
                  <h2 class="line">
                    <img
                      src="/media/hosted/images/encyclopedia-logo.png"
                      alt="Encyclopedia"
                    />
                  </h2>

                  <p>
                    Welcome to the socket finder. Use this peer reviewed tool to
                    show you the different types of prosthetic sockets, or
                    interfaces. The interface is the most crucial aspect of the
                    prosthesis. It protects your body, supports your weight
                    during walking, and assists you in controlling the
                    components. There are various mechanical principles that are
                    used in the design of your interface. A prosthetist’s
                    experience and knowledge of anatomy and physiology help
                    determine which design is best for you.
                  </p>

                  <div class="finder-types clearfix">
                    <div class="col">
                      <a href="/patients/socket-finder/transfemoral">
                        <img
                          src="https://opmarketing.com/storage/Transfemoral_btn.png"
                          alt="Transfemoral"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <a href="/patients/socket-finder/transtibial">
                        <img
                          src="https://opmarketing.com/storage/Transtibial_btn.png"
                          alt="Transtibial"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default SocketFinder;
