import React, { useState } from "react";
import Home from "../../Home/homeHeader";
import Footer from "../../Footer/footer";
import ClearAllButton from "./clearAll";

const FootFinder = () => {
  const [brand, setBrand] = useState(true);
  const [weight, setWeight] = useState(150); // Set a default weight value
  const [checkedStyles, setCheckedStyles] = useState(true);
  const [codes,setCodes]=useState(true)
  const [colors,setColors]=useState(true)
  const brands = [
    "Blatchford",
    "College Park",
    "Endolite",
    "Fillauer",
    "Freedom",
    "Ossur",
    "Ottobock",
    "OWW",
    "Proteor USA",
    "Roadrunner",
    "ST&G",
    "Trulife",
  ];
  const footSizes = [
    { value: "", label: "Select One" },
    { value: "71", label: "12" },
    { value: "64", label: "13" },
    { value: "65", label: "14" },
    { value: "66", label: "15" },
    { value: "24", label: "16" },
    { value: "25", label: "17" },
    { value: "26", label: "18" },
    { value: "27", label: "19" },
    { value: "28", label: "20" },
    { value: "11", label: "21" },
    { value: "12", label: "22" },
    { value: "13", label: "23" },
    { value: "14", label: "24" },
    { value: "15", label: "25" },
    { value: "16", label: "26" },
    { value: "17", label: "27" },
    { value: "18", label: "28" },
    { value: "19", label: "29" },
    { value: "20", label: "30" },
    { value: "63", label: "31" },
    { value: "67", label: "32" },
    { value: "68", label: "33" },
    { value: "69", label: "34" },
    { value: "23", label: "Custom" },
    { value: "70", label: "Low Profile" },
    { value: "21", label: "One Size" },
    { value: "22", label: "Tall" },
  ];

  const clearanceOptions = [
    "0.5",
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "3.5",
    "4",
    "4.5",
    "5",
    "5.5",
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
    "13",
    "13.5",
    "14",
    "14.5",
    "15",
    "15.5",
    "16",
    "16.5",
    "17",
    "17.5",
    "18",
    "18.5",
    "19",
    "19.5",
    "20",
    "20.5",
    "21",
  ];

  const stylesData = [
    { value: 8, label: 'Adjustable Heel Height' },
    { value: 22, label: 'Axial Rotation' },
    { value: 17, label: 'Dynamic Pylon' },
    { value: 5, label: 'Energy Storing Energy Return' },
    { value: 10, label: 'Flexible Keel' },
    { value: 16, label: 'Hydraulic Ankle' },
    { value: 21, label: 'K2' },
    { value: 15, label: 'Microprocessor Foot/Ankle' },
    { value: 9, label: 'Multiaxial' },
    { value: 18, label: 'Partial Foot/Symes' },
    { value: 11, label: 'Pediatric' },
    { value: 7, label: 'Rotation Torsion' },
    { value: 13, label: 'Running Specific' },
    { value: 14, label: 'Specialty' },
    { value: 24, label: 'Sports Foot' },
    { value: 20, label: 'Ultra Light' },
    { value: 6, label: 'Vertical Shock' },
    { value: 23, label: 'Waterproof' },
  ];

  const codingsData = [
    { value: 46, label: 'L5781' },
    { value: 47, label: 'L5781' },
    { value: 45, label: 'L5962' },
    { value: 39, label: 'L5968' },
    { value: 13, label: 'L5970' },
    { value: 14, label: 'L5971' },
    { value: 10, label: 'L5972' },
    { value: 38, label: 'L5973' },
    { value: 15, label: 'L5974' },
    { value: 9, label: 'L5976' },
    { value: 40, label: 'L5978' },
    { value: 6, label: 'L5979' },
    { value: 11, label: 'L5980' },
    { value: 8, label: 'L5981' },
    { value: 43, label: 'L5982' },
    { value: 5, label: 'L5984' },
    { value: 41, label: 'L5985' },
    { value: 4, label: 'L5986' },
    { value: 3, label: 'L5987' },
    { value: 42, label: 'L5988' },
    { value: 7, label: 'L5990' },
    { value: 12, label: 'L5999' },
    { value: 44, label: 'L7368' },
  ];

  const colorsData = [
    { value: 7, label: 'Beige' },
    { value: 5, label: 'Black' },
    { value: 6, label: 'Brown' },
    { value: 8, label: 'Buff' },
    { value: 1, label: 'Caucasian' },
    { value: 15, label: 'Custom' },
    { value: 12, label: 'Dark' },
    { value: 3, label: 'Dark Brown' },
    { value: 13, label: 'Ebony' },
    { value: 4, label: 'Jet Black' },
    { value: 11, label: 'Light' },
    { value: 2, label: 'Light Brown' },
    { value: 9, label: 'Medium Brown' },
    { value: 10, label: 'Tan' },
    { value: 14, label: 'Translucent' },
  ];


  const brandChange = () => {
    setBrand(!brand);
  };

  const handleWeightChange = (event) => {
    setWeight(parseInt(event.target.value, 10));
  };
  
  const styleChange=()=>{
    setCheckedStyles(!checkedStyles)
  }
  const codesChange=()=>{
    setCodes(!codes)
  }
  const colorsChange=()=>{
    setColors(!colors)
  }

  // Handle checkbox change
 
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
              <a href="/patients/foot-finder">Foot Finder</a>
            </li>
          </ul>
        </div>

        <main>
          <article>
            <div class="container clearfix">
              <h1>Foot Finder</h1>

              <aside class="finder-sidebar">
                <h2>Filter Your Results</h2>

                <div
                  className="finder-group collapsible open"
                  style={{ textAlign: "left" }}
                >
                  <h3 onClick={brandChange}>Brand</h3>
                  {brand &&
                    brands.map((brand) => (
                      <label key={brand} className="checkbox">
                        <input type="checkbox" name="brands[]" value={brand} />{" "}
                        {brand}
                      </label>
                    ))}
                </div>

                <div className="finder-group">
                  <h3>
                    Patient Weight <span>lbs</span>
                  </h3>
                  <input
                    type="range"
                    id="weight"
                    name="weight"
                    min="1"
                    max="500"
                    value={weight}
                    onChange={handleWeightChange}
                    data-slider-div="#weight_range"
                  />
                  <div id="weight_range">{weight} lbs</div>
                </div>
                <div className="finder-group">
                  <h3>Foot Size</h3>
                  <select name="size">
                    {footSizes.map((size) => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="finder-group">
                  <h3>Clearance</h3>
                  <select name="clearance">
                    <option value="">Select One</option>
                    {clearanceOptions.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                <div class="finder-group collapsible">
                  <h3 onClick={styleChange}>Style</h3>
                  {checkedStyles &&
  stylesData.map((item) => (
    <div key={item.value} style={{textAlign:'left'}}>
      <label>
        <input type="checkbox" name="styles[]" value={item.value} />
        &nbsp;
        {item.label}
      </label>
    </div>
  ))}


                      
                </div>

                <div class="finder-group">
                  <h3>Sandal Toe</h3>
                  <label class="radio">
                    <input
                      type="radio"
                      name="sandal_toe"
                      value=""
                      checked="checked"
                    />{" "}
                    N/A
                  </label>
                  <label class="radio">
                    <input type="radio" name="sandal_toe" value="yes" /> Yes
                  </label>
                  <label class="radio">
                    <input type="radio" name="sandal_toe" value="no" /> No
                  </label>
                </div>

                <div class="finder-group collapsible">
                  <h3 onClick={codesChange}>L Codes</h3>
                  {codes && codingsData.map((item) => (
        <label key={item.value} className="checkbox">
          <input type="checkbox" name="codings[]" value={item.value} /> {item.label}{' '}
        </label>
      ))}
                </div>

                <div class="finder-group">
                  <h3>Trial Period</h3>
                  <select name="trial">
                    <option value="">Select One</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>{" "}
                </div>

                <div class="finder-group collapsible">
                  <h3 onClick={colorsChange}>Foot Shell Color</h3>
                  {colors && colorsData.map((item) => (
        <label key={item.value} className="checkbox">
          <input type="checkbox" name="colors[]" value={item.value} /> {item.label}{' '}
        </label>
      ))}
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
                {/* <p>
                  <a href="javascript:;" onClick={handleClearAll}>
                    Clear all
                  </a>
                </p> */}
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
                    Begin by specifying the clearance distance between your
                    socket and foot
                  </h3>
                  <div class="finder-group-wrap">
                    <div class="finder-group">
                      <div class="filter">
                        <h3>Clearance Calculator</h3>
                        {/* <select name="clearance">
                          <option value="">Select One</option>
                          <option value="0.5">0.5</option>
                          <option value="1">1</option>
                          <option value="1.5">1.5</option>
                          <option value="2">2</option>
                          <option value="2.5">2.5</option>
                          <option value="3">3</option>
                          <option value="3.5">3.5</option>
                          <option value="4">4</option>
                          <option value="4.5">4.5</option>
                          <option value="5">5</option>
                          <option value="5.5">5.5</option>
                          <option value="6">6</option>
                          <option value="6.5">6.5</option>
                          <option value="7">7</option>
                          <option value="7.5">7.5</option>
                          <option value="8">8</option>
                          <option value="8.5">8.5</option>
                          <option value="9">9</option>
                          <option value="9.5">9.5</option>
                          <option value="10">10</option>
                          <option value="10.5">10.5</option>
                          <option value="11">11</option>
                          <option value="11.5">11.5</option>
                          <option value="12">12</option>
                          <option value="12.5">12.5</option>
                          <option value="13">13</option>
                          <option value="13.5">13.5</option>
                          <option value="14">14</option>
                          <option value="14.5">14.5</option>
                          <option value="15">15</option>
                          <option value="15.5">15.5</option>
                          <option value="16">16</option>
                          <option value="16.5">16.5</option>
                          <option value="17">17</option>
                          <option value="17.5">17.5</option>
                          <option value="18">18</option>
                          <option value="18.5">18.5</option>
                          <option value="19">19</option>
                          <option value="19.5">19.5</option>
                          <option value="20">20</option>
                          <option value="20.5">20.5</option>
                          <option value="21">21</option>
                        </select>{" "} */}
                      </div>
                    </div>
                    <div class="extra">
                      <a href="/patients/socket-finder">
                        <img
                          src="/media/hosted/images/socket-finder.png"
                          alt="Socket finder"
                        />{" "}
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

export default FootFinder;
