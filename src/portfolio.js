/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sakib's Portfolio",
  description:
    "A passionate individual who always thrives to work on Machine Learning and NLP based research to create impact.",
  og: {
    title: "Nazmus Sakib Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Nazmus Sakib",
  logo_name: "NAZMUS_SAKIB",
  nickname: "",
  subTitle:
    "Passionate about AI, always exploring new ideas to make a difference. Specialized in Machine Learning, Deep Learning, Generative AI, and LLM",
  resumeLink:
    "https://drive.google.com/file/d/1dZ8mVfShgi9djLpGPDZO3VUOM4DUC78d/view?usp=sharing",
  portfolio_repository: "https://github.com/sns-sakib",
  githubProfile: "https://github.com/sns-sakib",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/sns-sakib",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sns-sakib/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:nazmusakib.01@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & Generative AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Fine-tuning language models for domain-specific applications and improving performance.  ",
        "⚡ Prompt engineering and optimization for effective utilization of generative AI models.",
        "⚡ Applying generative AI for automation and real-world problem-solving.",
        "⚡ Developing agentic LLM solutions for adaptive decision-making in complex systems.",
        "⚡ Building and deploying scalable deep learning models for diverse NLP and Computer Vision use cases.",
        "⚡ Integrating advanced AI techniques into practical, impactful applications.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Huggingface",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        " ⚡ Building dynamic and responsive web applications using frameworks like Flask, Django, and React.",
        "⚡ Developing RESTful APIs and backend systems for seamless integration and scalability.  ",
        " ⚡ Database management with MySQL and MongoDB for robust data handling.  ",
        "⚡ Interactive user interfaces with modern frontend tools like JavaScript, HTML5, and CSS3.",
        "⚡ Deploying full-stack solutions using Docker for containerized environments. ",
        " ⚡Integrating machine learning models with web applications for AI-driven functionality.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/sakib01",
    },
  ],
};

const degrees = {
  degrees: [
    // {
    //   title: "Indian Institute of Information Technology Kurnool",
    //   subtitle: "B.Tech. in Computer Engineering",
    //   logo_path: "iiitk_logo.png",
    //   alt_name: "IIITDM Kurnool",
    //   duration: "2016 - 2020",
    //   descriptions: [
    //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
    //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
    //   ],
    //   website_link: "http://iiitk.ac.in",
    // },
    {
      title: "University of Idaho",
      subtitle: "PhD Student in Computer Science",
      logo_path: "uidaho_logo.png",
      alt_name: "University of Idaho",
      duration: "2023 - Present",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence, Graph Machine Learning, NLP, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. ",
      ],
      website_link: "https://www.uidaho.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link: "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "AI for medical diagnosis",
      subtitle: "- deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Deep learning specialization",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "mlcourse.ai ",
      subtitle: "- Open Data Science ",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate Machine Learning Engineer",
          company: "Next Solution Lab",
          company_url: "https://nextsolutionlab.com/",
          logo_path: "next_solution_logo.png",
          duration: "June 2022 - 2023",
          location: "Dhaka, Bangladesh",
          description:
            "  Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },

        {
          title: "Graduate Teaching Assistant",
          company: "University Idaho",
          company_url: "https://www.uidaho.edu/",
          logo_path: "uidaho_logo.png",
          duration: "Aug 2023 - May 2024",
          location: "Idaho, USA",
          description:
            "Conducting lab sessions and evaluating assignments and homeworks.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",
          company: "IIDS, University Idaho",
          company_url: "https://www.uidaho.edu/",
          logo_path: "uidaho_logo.png",
          duration: "May 2024 - Present",
          location: "Idaho, USA",
          description:
            "Solving research problems with real life data leveraging AI. Automating the administrative processes with Artificial Intelligence.",
          color: "#000000",
        },

        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
      // },
      // {
      //   title: "Volunteerships",
      //   experiences: [
      //     {
      //       title: "Google Explore ML Facilitator",
      //       company: "Google",
      //       company_url: "https://about.google/",
      //       logo_path: "google_logo.png",
      //       duration: "June 2019 - April 2020",
      //       location: "Hyderabad, Telangana",
      //       description:
      //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
      //       color: "#4285F4",
      //     },

      //   {
      //     title: "Developer Program Member",
      //     company: "Github",
      //     company_url: "https://github.com/",
      //     logo_path: "github_logo.png",
      //     duration: "July 2019 - PRESENT",
      //     location: "Work From Home",
      //     description:
      //       "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
      //     color: "#181717",
      //   },
      // ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Pneumonia",
      name:
        "Pneumonia Detection Using Deep Transfer Learning in Gender Specific Chest X-ray Images",
      createdAt: "2021",
      description: "Paper published in IEEE conference",
      url: "https://ieeexplore.ieee.org/abstract/document/9641281",
    },
    {
      id: "pneumonia_efficacy",
      name:
        "Efficacy of Transfer Learning Models in Pneumonia Detection with Scarce Local Healthcare Data",
      createdAt: "2022",
      description: "Paper published in IEEE conference",
      url: "https://ieeexplore.ieee.org/document/10088848",
    },
    {
      id: "anti_social",
      name:
        "A Machine Learning Approach to Classify Anti-social Bengali Comments on Social Media",
      createdAt: "2022",
      description: "Paper published in IEEE conference",
      url: "https://ieeexplore.ieee.org/document/9836407",
    },
    {
      id: "credit_card_class",
      name:
        "Classification Using Random Forest on Imbalanced Credit Card Transaction Data",
      createdAt: "2021",
      description: "Paper published in IEEE conference",
      url: "https://ieeexplore.ieee.org/document/9732553",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_image.jpg",
    description: "Reach out to me for any research queries you have.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Idaho, USA",
    locality: "",
    country: "USA",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
