import Contact from "../pages/About/Contact";
import About from "../pages/About/about";
import Location from "../pages/About/location";
import Staff from "../pages/About/staff";

import HomeMain from "../pages/Home/homeMain";
import CommonUsedTechnology from "../pages/Patient_careManual/Transfemoral_patient/common_used_technology";
import Introduction from "../pages/Patient_careManual/Transtibial_patient/introduction";
import FootFinder from "../pages/Patients/FootFinder/footfinder";
import CareManual from "../pages/Patients/care-manual";
import KneeFinder from "../pages/Patients/kneefinder/knee_finder.js";

import AcceptedInsurancePlans from "../pages/Services/accepted-insurance-plans";
import OurServices from "../pages/Services/our_services";
import PatientForm from "../pages/Services/patient-form";

export const routes = [
  {
    path: "/",
    component: HomeMain,
  },
  {
    path: "/home",
    component: HomeMain,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/about/about-our-practice",
    component: About,
  },
  {
    path: "/about/staff",
    component: Staff,
  },
  {
    path: "/about/locations",
    component: Location,
  },
  {
    path: "/about/contact-us",
    component: Contact,
  },
  {
    path: "/services",
    component: OurServices,
  },
  {
    path: "/services/our-services",
    component: OurServices,
  },
  {
    path: "/services/accepted-insurance-plans",
    component: AcceptedInsurancePlans,
  },
  {
    path: "/services/patient-forms",
    component: PatientForm,
  },
  {
    path: "/patients",
    component: CareManual,
  },
  {
    path: "/patients/caremanual",
    component: CareManual,
  },
  {
    path: "/patients/catalog/transtibial-patient/introduction",
    component: Introduction,
  },
  {
    path: "/patients/catalog/transtibial-patient",
    component: Introduction,
  },
  {
    path: "/patients/catalog/transfemoral-patient/introduction",
    component: CareManual,
  },
  {
    path: "/patients/catalog/transfemoral-patient/commonly-used-terminology",
    component: CommonUsedTechnology,
  },

  {
    path: "/patients/foot-finder",
    component: FootFinder,
  },
  {
    path: "/patients/knee-finder",
    component: KneeFinder,
  },
];
