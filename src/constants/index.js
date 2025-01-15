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
    mk,
    mb,
    dr
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
      title: "User Interface Designer",
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
      title: "Interface Designer",
      company_name: "Wah Dudem",
      icon: WDD,
      iconBg: "#383E56",
      date: "2022 - 2023",
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
      image: mb,
    },
    {
      testimonial:
        "Tommy is a dedicated professional who consistently prioritizes customer satisfaction. A true asset to our team.",
      name: "MK Smith",
      designation: "Director of Application Services",
      company: "Seattle University",
      image: mk,
    },
    {
      testimonial:
        "Tommy consistently went above and beyond to use his skills in animation and his commitment to an iterative design process to create user experiences that are as intuitive as they are fun to use.",
      name: "Deana Rutherford",
      designation: "Digital Organizer",
      company: "The People's Lobby",
      image: dr,
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
      source_code_link: "https://dribbble.com/shots/21132089-Archidekt-Wrapped?utm_source=Clipboard_Shot&utm_campaign=tommyzumstein&utm_content=Archidekt%20Wrapped&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=tommyzumstein&utm_content=Archidekt%20Wrapped&utm_medium=Social_Share",
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
          name: "motion design",
          color: "green-text-gradient",
        },
        {
          name: "high-fidelity prototype",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://dribbble.com/shots/21122118-Wah-Dudem-World?utm_source=Clipboard_Shot&utm_campaign=tommyzumstein&utm_content=Wah%20Dudem%20World&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=tommyzumstein&utm_content=Wah%20Dudem%20World&utm_medium=Social_Share",
    },
    {
      name: "Microburst",
      description:
        "A multiplayer party game where players face off in bite-sized micro-games to see who is the last man standing. Currently in development, more to come soon!",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "godot",
          color: "green-text-gradient",
        },
        {
          name: "high-fidelity prototype",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://dribbble.com/shots/25481688-Microburst?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=tommyzumstein&utm_content=Microburst&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=tommyzumstein&utm_content=Microburst&utm_medium=Social_Share",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };