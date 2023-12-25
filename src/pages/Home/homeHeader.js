// import React, { useState } from "react";
// import "../../Styles/styles.css";
// import "../../Styles/styles-copy.css";

// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();
//   const [activePage, setActivePage] = useState(false);
//   const handleNavigate = (e) => {
//     const selected = e.target.value;

//     navigate(selected);
//   };

//   const bgChange = () => {
//     setActivePage(true);
//   };
//   return (
//     <>
//       <div id="wrap">
//         <div class="border"></div>
//         <header>
//           <div class="container clearfix">
//             <a id="logo" href="/">
//               <img
//                 src="https://www.balancepo.com/storage/New folder/Screen Shot 2015-07-07 at 9_40_43 AM.png"
//                 alt="Balance Prosthetics &amp; Orthotics, Inc. | Pennsylvania"
//               />
//             </a>
//             <nav>
//               <ul>
//                 <li
//                   class={activePage === true ? " sfHover " : "sfHover "}
//                   onClick={bgChange}
//                 >
//                   <a href="/">Home</a>
//                   <ul>
//                     <li class="menu-item-current sf-breadcumb"></li>
//                   </ul>
//                 </li>
//                 <li
//                   class={
//                     activePage === true ? " sfHover " : "sfHover sf-breadcumb"
//                   }
//                 >
//                   <a href="/about" onclick={bgChange}>
//                     About
//                   </a>
//                   <ul>
//                     <li class="menu-item-current">
//                       <a href="/about/about-our-practice">About Our Practice</a>
//                     </li>
//                     <li class="menu-item-current">
//                       <a href="/about/staff">Staff</a>
//                     </li>
//                     <li class="menu-item-current">
//                       <a href="/about/locations">Locations</a>
//                     </li>
//                     <li class="menu-item-current">
//                       <a href="/about/contact-us">Contact Us</a>
//                     </li>
//                   </ul>
//                 </li>
// <li class="">
//   <a href="/services">Services</a>
//   <ul>
//     <li class="">
//       <a href="/services/our-services">Our Services</a>
//     </li>
//     <li class="">
//       <a href="/services/accepted-insurance-plans">
//         Accepted Insurance Plans
//       </a>
//     </li>
//     <li class="">
//       <a href="/services/patient-forms">Patient Forms</a>
//     </li>
//   </ul>
// </li>
// <li class="">
//   <a href="/patients">Patients</a>
//   <ul>
//     <li class="">
//       <a href="/patients/catalog">Care Manuals</a>
//     </li>
//     <li class="">
//       <a href="/patients/foot-finder">Foot Finder</a>
//     </li>
//     <li class="">
//       <a href="/patients/knee-finder">Knee Finder</a>
//     </li>
//     <li class="">
//       <a href="/patients/socket-finder">Socket Finder</a>
//     </li>
//     <li class="">
//       <a href="/patients/inspirational-stories">
//         Inspirational Stories
//       </a>
//     </li>
//     <li class="">
//       <a href="/patients/useful-links1">Useful Links</a>
//     </li>
//     <li class="">
//       <a href="/patients/glossary">Glossary</a>
//     </li>
//     <li class="">
//       <a href="/patients/industry-magazines">
//         Industry Magazines
//       </a>
//     </li>
//   </ul>
// </li>
// <li class="">
//   <a href="/professionals">Professionals</a>
//   <ul>
//     <li class="">
//       <a href="/professionals/otsorthotic-finder">
//         OTS Orthotic Finder
//       </a>
//     </li>
//     <li class="">
//       <a href="/professionals/research-center">
//         Research Center
//       </a>
//     </li>
//     <li class="">
//       <a href="/professionals/presentations">Presentations</a>
//     </li>
//     <li class="">
//       <a href="/professionals/resources">Resources</a>
//     </li>
//     <li class="">
//       <a href="/professionals/lmn">Medical Necessity</a>
//     </li>
//     <li class="">
//       <a href="/professionals/physician-documentation-resource">
//         Physician Documentation Resource
//       </a>
//     </li>
//     <li class="">
//       <a href="/professionals/outcome-measures">
//         Outcome Measures
//       </a>
//     </li>
//     <li class="login-btn">
//       <a href="javascript:authenticateUser(2,'/professionals');">
//         Login
//       </a>
//     </li>
//   </ul>
// </li>
//               </ul>
//               <select onChange={handleNavigate}>
//                 <option>-Menu-</option>
//                 <option value="/home">&nbsp;&nbsp;&nbsp;Home</option>
//                 {/* <option value="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option> */}
//                 <option value="/about">&nbsp;&nbsp;&nbsp;About</option>
//                 <option value="/about/about-our-practice">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Our Practice
//                 </option>
//                 <option value="/about/staff">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Staff
//                 </option>
//                 <option value="/about/locations">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Locations
//                 </option>
//                 <option value="/about/contact-us">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Us
//                 </option>
//                 <option value="/services">&nbsp;&nbsp;&nbsp;Services</option>
//                 <option value="/services/our-services">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Services
//                 </option>
//                 <option value="/services/accepted-insurance-plans">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accepted Insurance Plans
//                 </option>
//                 <option value="/services/patient-forms">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Patient Forms
//                 </option>
//                 <option value="/patients">&nbsp;&nbsp;&nbsp;Patients</option>
//                 <option value="/patients/catalog">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Care Manuals
//                 </option>
//                 <option value="/patients/foot-finder">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foot Finder
//                 </option>
//                 <option value="/patients/knee-finder">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Knee Finder
//                 </option>
//                 <option value="/patients/socket-finder">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Socket Finder
//                 </option>
//                 <option value="/patients/inspirational-stories">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inspirational Stories
//                 </option>
//                 <option value="/patients/useful-links1">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Useful Links
//                 </option>
//                 <option value="/patients/glossary">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Glossary
//                 </option>
//                 <option value="/patients/industry-magazines">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Industry Magazines
//                 </option>
//                 <option value="/professionals">
//                   &nbsp;&nbsp;&nbsp;Professionals
//                 </option>
//                 <option value="/professionals/otsorthotic-finder">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OTS Orthotic Finder
//                 </option>
//                 <option value="/professionals/research-center">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Research Center
//                 </option>
//                 <option value="/professionals/presentations">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Presentations
//                 </option>
//                 <option value="/professionals/resources">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resources
//                 </option>
//                 <option value="/professionals/lmn">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medical Necessity
//                 </option>
//                 <option value="/professionals/physician-documentation-resource">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Physician Documentation
//                   Resource
//                 </option>
//                 <option value="/professionals/outcome-measures">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outcome Measures
//                 </option>
//                 <option value="javascript:authenticateUser(2,&#039;/professionals&#039;);">
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login
//                 </option>
//               </select>
//             </nav>
//           </div>
//         </header>
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Styles/styles.css";
import "../../Styles/styles-copy.css";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(null);

  const handleNavigate = (selected) => {
    setActivePage(selected);
    navigate(selected);
  };

  const toggleSubMenu = (selected) => {
    setActivePage(selected === activePage ? null : selected);
  };

  // Set activePage on initial mount and whenever location changes
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div id="wrap">
        <div className="border"></div>
        <header>
          <div className="container clearfix">
            <a id="logo" href="/">
              <img
                src="https://www.balancepo.com/storage/New folder/Screen Shot 2015-07-07 at 9_40_43 AM.png"
                alt="Balance Prosthetics &amp; Orthotics, Inc. | Pennsylvania"
              />
            </a>
            <nav>
              <ul>
                <li className={activePage === "/" ? "sfHover" : ""}>
                  <a href="/" onClick={() => toggleSubMenu("/")}>
                    Home
                  </a>
                  <ul className={activePage === "/" ? "sf-breadcumb" : ""}>
                    <li className="menu-item-current sf-breadcumb"></li>
                  </ul>
                </li>
                <li
                  className={
                    activePage && activePage.startsWith("/about")
                      ? "sfHover"
                      : ""
                  }
                >
                  <a href="/about" onClick={() => toggleSubMenu("/about")}>
                    About
                  </a>
                  <ul
                    className={
                      activePage && activePage.startsWith("/about")
                        ? "sf-breadcumb"
                        : ""
                    }
                  >
                    <li
                      className={
                        activePage === "/about/about-our-practice"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/about/about-our-practice">About Our Practice</a>
                    </li>
                    <li
                      className={
                        activePage === "/about/staff" ? "menu-item-current" : ""
                      }
                    >
                      <a href="/about/staff">Staff</a>
                    </li>
                    <li
                      className={
                        activePage === "/about/locations"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/about/locations">Locations</a>
                    </li>
                    <li
                      className={
                        activePage === "/about/contact-us"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/about/contact-us">Contact Us</a>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    activePage && activePage.startsWith("/services")
                      ? "sfHover"
                      : ""
                  }
                >
                  <a
                    href="/services"
                    onClick={() => toggleSubMenu("/services")}
                  >
                    Services
                  </a>
                  <ul
                    className={
                      activePage && activePage.startsWith("/services")
                        ? "sf-breadcumb"
                        : ""
                    }
                  >
                    <li
                      className={
                        activePage === "/services/our-services"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/services/our-services">Our Services</a>
                    </li>
                    <li
                      className={
                        activePage === "/services/accepted-insurance-plans"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/services/accepted-insurance-plans">
                        Accepted Insurance Plans
                      </a>
                    </li>
                    <li
                      className={
                        activePage === "/services/patient-forms"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/services/patient-forms">Patient Forms</a>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    activePage && activePage.startsWith("/patients")
                      ? "sfHover"
                      : ""
                  }
                >
                  <a
                    href="/patients"
                    onClick={() => toggleSubMenu("/patients")}
                  >
                    Patients
                  </a>
                  <ul
                    className={
                      activePage && activePage.startsWith("/patients")
                        ? "sf-breadcumb"
                        : ""
                    }
                  >
                    <li
                      className={
                        activePage === "/patients/caremanual"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/patients/caremanual">Care Manuals</a>
                    </li>
                    <li
                      className={
                        activePage === "/patients/foot-finder"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/patients/foot-finder">Foot Finder</a>
                    </li>
                    <li
                      className={
                        activePage === "/patients/knee-finder"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/patients/knee-finder">Knee Finder</a>
                    </li>
                    <li
                      className={
                        activePage === "/patients/socket-finder"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/patients/socket-finder">Socket Finder</a>
                    </li>
                    <li
                      className={
                        activePage === "/patients/inspirational-stories"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/patients/inspirational-stories">
                        Inspirational Stories
                      </a>
                    </li>
                    <li
                      className={
                        activePage === "/patients/useful-links"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/patients/useful-links">Useful Links</a>
                    </li>
                    <li
                      className={
                        activePage === "/patients/glossary"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/patients/glossary">Glossary</a>
                    </li>
                    <li
                      className={
                        activePage === "/patients/industry-magazines"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/patients/industry-magazines">
                        Industry Magazines
                      </a>
                    </li>
                    {/* Add similar logic for other patient sub-routes */}
                  </ul>
                </li>

                <li
                  className={
                    activePage && activePage.startsWith("/professionals")
                      ? "sfHover"
                      : ""
                  }
                >
                  <a
                    href="/professionals"
                    onClick={() => toggleSubMenu("/professionals")}
                  >
                    Professionals
                  </a>
                  <ul
                    className={
                      activePage && activePage.startsWith("/professionals")
                        ? "sf-breadcumb"
                        : ""
                    }
                  >
                    <li
                      className={
                        activePage === "/professionals/otsorthotic-finder"
                          ? "menu-item-current"
                          : ""
                      }
                    >
                      <a href="/professionals/otsorthotic-finder">
                        OTS Orthotic Finder
                      </a>
                    </li>
                    {/* Add similar logic for other professionals sub-routes */}
                  </ul>
                </li>
              </ul>
              <select
                onChange={(e) => handleNavigate(e.target.value)}
                value={activePage || ""}
              >
                <option value="/">-Menu-</option>
                <option value="/home">&nbsp;&nbsp;&nbsp;Home</option>
                <option value="/about">&nbsp;&nbsp;&nbsp;About</option>
                <option value="/about/about-our-practice">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Our Practice
                </option>
                <option value="/about/staff">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Staff
                </option>
                <option value="/about/locations">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Locations
                </option>
                <option value="/about/contact-us">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Us
                </option>
                <option value="/services">&nbsp;&nbsp;&nbsp;Services</option>
                <option value="/services/our-services">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Services
                </option>
                <option value="/services/accepted-insurance-plans">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accepted Insurance Plans
                </option>
                <option value="/services/patient-forms">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Patient Forms
                </option>
                <option value="/patients">&nbsp;&nbsp;&nbsp;Patients</option>
                <option value="/patients/caremanual">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Care Manuals
                </option>
                <option value="/patients/foot-finder">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foot Finder
                </option>
                <option value="/patients/knee-finder">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Knee Finder
                </option>
                <option value="/patients/socket-finder">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Socket Finder
                </option>
                <option value="/patients/inspirational-stories">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inspirational Stories
                </option>
                <option value="/patients/useful-links1">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Useful Links
                </option>
                <option value="/patients/glossary">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Glossary
                </option>
                <option value="/patients/industry-magazines">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Industry Magazines
                </option>
                <option value="/professionals">
                  &nbsp;&nbsp;&nbsp;Professionals
                </option>
                <option value="/professionals/otsorthotic-finder">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OTS Orthotic Finder
                </option>
                <option value="/professionals/research-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Research Center
                </option>
                <option value="/professionals/presentations">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Presentations
                </option>
                <option value="/professionals/resources">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resources
                </option>
                <option value="/professionals/lmn">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medical Necessity
                </option>
                <option value="/professionals/physician-documentation-resource">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Physician Documentation
                  Resource
                </option>
                <option value="/professionals/outcome-measures">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outcome Measures
                </option>
                <option value="javascript:authenticateUser(2,&#039;/professionals&#039;);">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login
                </option>
              </select>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Home;
