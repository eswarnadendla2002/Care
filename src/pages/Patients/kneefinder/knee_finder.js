import React from "react";
import Home from "../../Home/homeHeader";
import Footer from "../../Footer/footer";

const KneeFinder = () => {
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
              <a href="/patients/knee-finder">Knee Finder</a>
            </li>
          </ul>
        </div>

        <main>
          <article>
            <div class="container clearfix">
              <h1>Knee Finder</h1>

              <aside class="finder-sidebar">
                <h2>Filter Your Results</h2>

                <div class="finder-group collapsible open">
                  <h3>Brand</h3>
                  <label class="checkbox">
                    <input type="checkbox" name="brands[]" value="Endolite" />{" "}
                    Endolite{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="brands[]" value="Freedom" />{" "}
                    Freedom{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="brands[]" value="Medi" /> Medi{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="brands[]" value="Ossur" />{" "}
                    Ossur{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="brands[]" value="Ottobock" />{" "}
                    Ottobock{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="brands[]" value="ST&amp;G" />{" "}
                    ST&amp;G{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="brands[]" value="Trulife" />{" "}
                    Trulife{" "}
                  </label>
                </div>

                <div class="finder-group">
                  <h3>
                    Patient Weight <span>lbs</span>
                  </h3>
                  <input
                    type="range"
                    id="weight"
                    name="weight"
                    min="1"
                    max="365"
                    value="183"
                    data-slider-div="#weight_range"
                  />
                  <div id="weight_range"></div>
                </div>

                <div class="finder-group collapsible">
                  <h3>Style</h3>
                  <label class="checkbox">
                    <input type="checkbox" name="styles[]" value="4" />{" "}
                    Hydraulic{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="styles[]" value="9" /> Knee
                    Disarticulation{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="styles[]" value="7" />{" "}
                    Microprocessor -Swing Only{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="styles[]" value="3" />{" "}
                    Microprocessor- Swing + Stance{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="styles[]" value="6" />{" "}
                    Pediatric{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="styles[]" value="2" />{" "}
                    Pneumatic{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="styles[]" value="1" />{" "}
                    Polycentric{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="styles[]" value="5" /> SAFE{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="styles[]" value="8" /> Water
                    Proof{" "}
                  </label>
                </div>

                <div class="finder-group">
                  <h3>Microprocessor</h3>
                  <label class="radio">
                    <input
                      type="radio"
                      name="microprocessor"
                      value=""
                      checked="checked"
                    />{" "}
                    N/A
                  </label>
                  <label class="radio">
                    <input type="radio" name="microprocessor" value="yes" /> Yes
                  </label>
                  <label class="radio">
                    <input type="radio" name="microprocessor" value="no" /> No
                  </label>
                </div>

                <div class="finder-group">
                  <h3>Stance Phase</h3>
                  <label class="radio">
                    <input
                      type="radio"
                      name="stance"
                      value=""
                      checked="checked"
                    />{" "}
                    N/A
                  </label>
                  <label class="radio">
                    <input type="radio" name="stance" value="yes" /> Yes
                  </label>
                  <label class="radio">
                    <input type="radio" name="stance" value="no" /> No
                  </label>
                </div>

                <div class="finder-group">
                  <h3>Swing Phase</h3>
                  <label class="radio">
                    <input
                      type="radio"
                      name="swing"
                      value=""
                      checked="checked"
                    />{" "}
                    N/A
                  </label>
                  <label class="radio">
                    <input type="radio" name="swing" value="yes" /> Yes
                  </label>
                  <label class="radio">
                    <input type="radio" name="swing" value="no" /> No
                  </label>
                </div>

                <div class="finder-group collapsible">
                  <h3>L Codes</h3>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="23" /> 5611{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="36" /> 5613{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="44" /> 5616{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="34" /> 5810{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="35" /> 5811{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="33" /> 5812{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="30" /> 5813{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="38" /> 5814{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="37" /> 5816{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="51" /> 5818{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="43" /> 5820{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="28" /> 5822{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="42" /> 5824{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="31" /> 5826{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="16" /> 5828{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="45" /> 5830{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="29" /> 5840{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="17" /> 5845{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="18" /> 5848{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="19" /> 5850{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="20" /> 5856{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="46" /> 5857{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="50" /> 5858{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="49" /> 5859{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="40" /> 5925{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="21" /> 5930{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="32" /> 5994{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="39" /> 5999{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="47" /> 7367{" "}
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" name="codings[]" value="22" /> 7368{" "}
                  </label>
                </div>

                <div class="finder-group">
                  <h3>Trial Period</h3>
                  <select name="trial">
                    <option value="">Select One</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>{" "}
                </div>

                <div class="finder-group">
                  <h3>Warranty</h3>
                  <select name="warranty">
                    <option value="">Select One</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                  </select>{" "}
                </div>

                <p>
                  <a
                    href="javascript:;"
                    onclick="$('.finder-group :input').removeAttr('checked').not(':checkbox').val(''); $('#weight_range').slider('value', 0); $('#weight').val(0); $('.finder-group :input').one().trigger('change');"
                  >
                    Clear all
                  </a>
                </p>
              </aside>

              <div class="finder-content">
                <h2 class="line">
                  <img
                    src="/media/hosted/images/encyclopedia-logo.png"
                    alt="Encyclopedia"
                  />
                </h2>

                <div class="finder-overview">
                  <h3 class="arrow">
                    Begin by specifying if you would like to search for
                    microprocessor knees{" "}
                  </h3>
                  <div class="finder-group-wrap">
                    <div class="finder-group">
                      <div class="filter filter-microprocessor">
                        <h3>Microprocessor Knee</h3>
                        <p>
                          <label class="radio">
                            <input
                              type="radio"
                              name="microprocessor"
                              value="yes"
                            />{" "}
                            Yes
                          </label>
                          <label class="radio">
                            <input
                              type="radio"
                              name="microprocessor"
                              value="no"
                            />{" "}
                            No
                          </label>
                        </p>
                      </div>
                    </div>
                    <div class="extra">
                      <a href="/patients/socket-finder">
                        <img src="/media/hosted/images/socket-finder.png" />
                      </a>
                    </div>
                  </div>
                  <div class="slider clearfix">
                    <img src="/media/hosted/images/slider.png" alt="Slider" />{" "}
                  </div>
                </div>

                <div class="finder-results">
                  <div class="listing-paging">
                    <span class="listing-showing"></span>
                    <span class="listing-navigation">
                      <a
                        class="navigation-link disabled navigation_link_back"
                        href="javascript:;"
                      >
                        &laquo; Back
                      </a>
                      |
                      <a
                        class="navigation-link disabled navigation_link_next"
                        href="javascript:;"
                      >
                        Next &raquo;
                      </a>
                    </span>
                  </div>
                  <div class="products"></div>
                  <div class="listing-paging">
                    <span class="listing-showing"></span>
                    <span class="listing-navigation">
                      <a
                        class="navigation-link disabled navigation_link_back"
                        href="javascript:;"
                      >
                        &laquo; Back
                      </a>
                      |
                      <a
                        class="navigation-link disabled navigation_link_next"
                        href="javascript:;"
                      >
                        Next &raquo;
                      </a>
                    </span>
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

export default KneeFinder;
