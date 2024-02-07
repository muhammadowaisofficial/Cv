const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Diploma",
        degree: "Web Developement",
        detail:
          "Completed Web Development Diploma from System Inspire.",
        year: "2017-2018",
      },
      {
        id: 1,
        title: "Mirpur Khas Degree College",
        degree: "HSSC, Computer Science",
        detail:
          "Completed FSC part 1 and part 2 in Computer Science from Mirpur Khas Degree College.",
        year: "2017-2019",
      },
      {
        id: 2,
        title: "Sawt-ul-Sharq",
        degree: "Matriculation",
        detail:
          "Completed SSC part 1 and part 2 in Science subjects from Sawt-ul-Sharq Public School",
        year: "2005-2017",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Ecommerce Inside Pvt.",
        role: "CMS Manager",
        url: "https://www.ecommerceinside.co",
        desc: "I have also working as a Frontend Reactjs, Nextjs, Wordpress, Custom Theme development, Headless Wordpress , Shopify, Shopify Plus, Custom Theme development, Headless Shopify, Wix, Webflow,SquareSpace & FlutterFlow at Ecommerce Inside(Pvt) Ltd.",
        year: "24/ Aug /2022 - Present",
        location: "Karachi, Pakistan",
      },
      {
        id: 2,
        title: "Sassol Digital Hub Pvt Ltd.",
        role: "Team Lead Development",
        url: "https://sas-sol.com",
        desc: "I have also working as a Frontend, Wordpress, Custom Theme development , Shopify, Shopify Plus, Custom Theme development, Wix, Webflow & SquareSpace at Sassol Digital Hub Pvt Ltd.",
        year: "08/ Jan /2022 - 17/ Aug /2022",
        location: "Karachi, Pakistan",
      },
      {
        id: 3,
        title: "Olive Digital Pvt Ltd.",
        role: "Sr. Wordpress Developer",
        url: "https://www.olivedigital.com",
        desc: "I have also working as a Frontend, Wordpress, Custom Theme development , Shopify, Custom Theme development, Wix, Webflow & SquareSpace at Olive Digital Pvt Ltd.",
        year: "19/ Mar /2020 - 08/ Jan /2022",
        location: "Karachi, Pakistan",
      },
      {
        id: 4,
        title: "Ziltex Pvt Ltd.",
        role: "Wordpress Developer",
        url: "https://ziltex.co",
        desc: "I have also working as a Frontend, Wordpress, Shopify, & SquareSpace at Ziltex Pvt Ltd.",
        year: "03/ Dec /2020 - 18/ Mar /2020",
        location: "Karachi, Pakistan",
      },
      {
        id: 5,
        title: "Outsource Mantra.",
        role: "Frontend Developer",
        url: "https://outsourcemantra.com",
        desc: "I have also working as a Frontend, Wordpress, Shopify, & SquareSpace at Outsource Mantra.",
        year: "01/ Feb /2020 - 03/ Dec /2020",
        location: "Karachi, Pakistan",
      },
      {
        id: 6,
        title: "System Inspire.",
        role: "Frontend Developer",
        url: "https://systeminspire.com",
        desc: "I have also working as a Frontend Web Developer at System Inspire.",
        year: "06/ Jun /2018 - 23/ Sep /2019",
        location: "Karachi, Pakistan",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
