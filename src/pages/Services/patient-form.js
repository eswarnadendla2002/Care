import React from "react";
import Home from "../Home/homeHeader";
import Footer from "../Footer/footer";

const PatientForm = () => {
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
              <a href="/services/patient-forms">Patient Forms</a>
            </li>
          </ul>
        </div>

        <main>
          <article>
            <div class="container" style={{ textAlign: "left" }}>
              <h1>Patient Forms</h1>
            </div>

            <div class="content">
              <div class="container" style={{ textAlign: "left" }}>
                <p>
                  You can save time by downloading, printing, and completing
                  paperwork before coming to your appointment. Just remember to
                  bring your completed forms with you to your appointment.
                </p>{" "}
              </div>

              <div class="files container clearfix">
                <table>
                  <tr>
                    <td>Balance Patient Survey PDF.pdf</td>
                    <td>
                      <img
                        src="/media/backend/images/icons/pdf.gif"
                        alt="File image icon"
                      />
                    </td>
                    <td class="min">
                      <a href="https://www.balancepo.com/storage/New folder/Balance Patient Survey PDF.pdf?download">
                        DOWNLOAD
                      </a>
                    </td>
                    <td class="min">
                      <a href="https://www.balancepo.com/storage/New folder/Balance Patient Survey PDF.pdf">
                        VIEW
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Patient Information Form1.rtf</td>
                    <td>
                      <img
                        src="/media/backend/images/icons/file.gif"
                        alt="File image icon"
                      />
                    </td>
                    <td class="min">
                      <a href="https://www.balancepo.com/storage/files/Patient Information Form1.rtf?download">
                        DOWNLOAD
                      </a>
                    </td>
                    <td class="min">
                      <a href="https://www.balancepo.com/storage/files/Patient Information Form1.rtf">
                        VIEW
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PatientForm;
