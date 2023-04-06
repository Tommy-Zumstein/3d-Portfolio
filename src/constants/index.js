import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    sql,
    photoshop,
    docker,
    meta,
    starbucks,
    tesla,
    WDD,
    SU,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Interface Designer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Application Administrator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "photoshop",
      icon: photoshop,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Lead Interface Designer",
      company_name: "Wah Dudem Foundation",
      icon: WDD,
      iconBg: "#383E56",
      date: "2022 - Current",
      points: [
        "Led a team of designers to create an interactive prototype containing over 20 components for Wah Dudem World, an online safe space for suicide prevention and mental health resources",
        "Collaborated with 3 stakeholders to understand user needs and define project scope, created wireframes and user flows, and oversaw visual design and front-end development",
        "Aligned the foundation's online and print publications with organizational values and messaging by creating comprehensive style and branding guidelines, resulting in a 25% increase in engagement from target audiences",
        "Established interview scripts, recruited seven participants, and synthesized findings to inform product development decisions, resulting in a 15% reduction in research time and increased efficiency in the research process",
        "Conducted 5 in-depth user interviews with target demographic to gather feedback on product features and improve user experience",
      ],
    },
    {
      title: "Application Engineer",
      company_name: "Seattle University",
      icon: SU,
      iconBg: "#E6DEDD",
      date: "2019 - Current",
      points: [
        "Designed and implemented a suite of online forms, collaborating with over 20 stakeholders that reduced time spent processing forms by 66%",
        "Improved custom ERP processes and UI screens that saved users over 400 person-hours",
        "Produced 3 video trainings for the adoption of a new registration and course planning system serving a population of over 7,500 users",
        "Established more efficient service desk procedures that reduced ticket resolution time by 50%",
        "Consistently receive 5-star ratings on Jira tickets",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Need someone who can actually research and design usable, beautiful interfaces? And do you want that someone to be fun to work with? And bring out the best in people—even across teams? Me too. But Tommy’s not moving to NYC.",
      name: "Michael Bottomley",
      designation: "Associate Director of UX",
      company: "ASCAP",
      image: "https://media.licdn.com/dms/image/C4E03AQEIu4aeLnxTJw/profile-displayphoto-shrink_200_200/0/1661827021099?e=1685577600&v=beta&t=MhohhieOKuHK4kn9Ggn-UGfFTTZ0oqog-iWTsOacju4",
    },
    {
      testimonial:
        "Tommy is a dedicated professional who consistently prioritizes customer satisfaction. A true asset to our team.",
      name: "MK Smith",
      designation: "Director of Application Services",
      company: "Seattle University",
      image: "https://media.licdn.com/dms/image/C4E03AQF3vdF2k1LAZA/profile-displayphoto-shrink_200_200/0/1517680292285?e=1685577600&v=beta&t=OSgtP6EkxBGs47ni5UeEPeeRxPuEYGxZhaM4MAns0y8",
    },
    {
      testimonial:
        "Tommy consistently went above and beyond to use his skills in animation and his commitment to an iterative design process to create user experiences that are as intuitive as they are fun to use.",
      name: "Deana Rutherford",
      designation: "Digital Organizer",
      company: "The People's Lobby",
      image: "https://media.licdn.com/dms/image/C5603AQGqW0pBHVHOOA/profile-displayphoto-shrink_200_200/0/1517670541162?e=1685577600&v=beta&t=YwB5y5u4KA373vdguztUQkCfHV-fn6_zEoTAZnP4A18",
    },
  ];
  
  const projects = [
    {
      name: "Archidekt Wrapped",
      description:
        "Web-based platform that aggregates data from Archidekt to provide easy to digest insights into a user’s Magic: The Gathering decks.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "html/css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://dribbble.com/shots/21132089-Archidekt-Wrapped",
    },
    {
      name: "Wah Dudem World",
      description:
        "An online safe space for suicide prevention and mental health resources.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "photoshop",
          color: "green-text-gradient",
        },
        {
          name: "project management",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://dribbble.com/shots/21122118-Wah-Dudem-World",
    },
    {
      name: "Shane's Cards",
      description:
        "Online storefront for a local trading card and board game store. Currently in development.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "style-guide creation",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://dribbble.com/shots/21132116-Shane-s-Cards",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };