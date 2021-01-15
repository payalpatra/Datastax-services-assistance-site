/// Content For Home Page

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextdesc: true,
  topLine: "Try For Free",
  headLine: "5GB For Free With Just Few Clicks",
  description:
    "Get access to our multicloud deployment services with open-source Apache Cassadra™ without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: require("../../Images/about.svg").default,
  alt: "about",
  dark: true,
  primary: true,
  darkText: false,
};

// Content For Discover Page

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextdesc: false,
  topLine: "Unlimited Access",
  headLine: "Open-Source, Scale-out,Cloud-Native No-Sql Database",
  description:
    "Build your cloud-native applications with the NoSQL database that has proven high performance, linear scalability and zero downtime across on-premises, hybrid, and multi-cloud environments. ",
  buttonLabel: "Learn More",
  imgStart: false,
  img: require("../../Images/discover.svg").default,
  alt: "Discover",
  dark: false,
  primary: false,
  darkText: true,
};

/// Content for Enterprise

export const homeObjThree = {
  id: "enterprise",
  lightBg: true,
  lightText: false,
  lightTextdesc: false,
  topLine: "Built on Apache Cassandra™",
  headLine: "The DataStax Enterprise ",
  description:
    "Astra simplifies cloud native cassandra deployment, gives enterprises the freedom of choice,simplicity and true cloud economics to deploy massive data via APIS ",
  buttonLabel: "Start Now",
  imgStart: false,
  img: require("../../Images/enterprise.svg").default,
  alt: "Enterprise",
  dark: false,
  primary: false,
  darkText: true,
};
