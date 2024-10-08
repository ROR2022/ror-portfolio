//import { url } from "inspector";

import { url } from "inspector";

//pediatrician

export const dataProblemSolution = [
  {
    id: "hackerRankProjectEuler",
    title: "HackerRank Project Euler",
    shortDescription: "HackerRank Project Euler Solutions in JavaScript",
    description: `This repository contains the solutions to the Project Euler challenges I have completed on HackerRank. The solutions are written in JavaScript and are designed to be efficient and easy to understand. The challenges cover a wide range of topics, including algorithms, data structures, and problem-solving.`,
    url: "https://github.com/ROR2022/hackerRank-ProjectEuler",
    imageURL: "/hackerRankLogo.png",
    codeLink: "https://github.com/ROR2022/hackerRank-ProjectEuler",
  },
  {
    id: "hackerrankBeautiful3Set",
    title: "HackerRank Beautiful 3 Set Problem Solution",
    shortDescription: "Beautiful 3 Set Problem Solution",
    description: `Function in JavaScript that returns the combination of valid triples given a number n. This combination should satisfy:
                        Each of its triples (x,y,z) satisfies x+y+z=n.
                        The set of x values are distinct, the set of y values are distinct, and the set of z values are distinct.
                        The cardinality k is the length of the combination of triples that meets these conditions.`,
    url: "https://docs.google.com/document/d/1spjKUK2LGp1j6SwscvVF-Rdu8jR3CxWVX7SOWx57eD8/edit?usp=sharing",
    imageURL: "/rorCodePNG_1000x800.png",
    codeLink: "https://codepen.io/Ramiro-Ocampo-Rodriguez/pen/poXzqLP",
  },
  {
    id: "hackerRankChallenges",
    title: "HackerRank Challenges",
    shortDescription: "HackerRank Challenges Solutions in JavaScript",
    description: `This repository contains the solutions to the challenges I have completed on HackerRank. The solutions are written in JavaScript and are designed to be efficient and easy to understand. The challenges cover a wide range of topics, including algorithms, data structures, and problem-solving.`,
    url: "https://github.com/ROR2022/hackerRankChallenges",
    imageURL: "/rorCodePNG_1000x800.png",
    codeLink: "https://github.com/ROR2022/hackerRankChallenges",
  },
];

export const dataProjects = [
  {
    id: "portalMinisoloveMX",
    title: "Register Minisolove MX",
    shortDescription: "MERN Webapp with CentOS",
    description:
      "The web application is responsible for managing the registration of new users on the Miniso Mexico platform. Its main functionality lies in receiving user data inputted via a form and registering it both in the VTEX e-commerce platform and the internal Aptos CRM, as well as storing it in MongoDB. This system is deployed on a CentOS server on-premises.",
    url: "https://minisolove.miniso.com.mx/",
    imageURL: "/logoMinisoIco.webp",
    codeLink: "",
  },
  {
    id: "clientCornerStore",
    title: "Corner Store Client",
    shortDescription: "Basic Prototype PWA with Next.js",
    description:
      "Corner Store App is a progressive web application (PWA) developed using Next.js and Nest.js, designed to serve small businesses or medium-sized corporations managing multiple branches, inventories, employees, and sales. It leverages AWS S3 for secure image storage, MongoDB Atlas for flexible data management, and uses JWT and bcrypt for secure user authentication and authorization. With an intuitive UI and responsive design, the app ensures optimal performance through server-side rendering and static site generation. The main goal is to provide a scalable, functional, and secure platform that can adapt to the evolving needs of businesses, enhancing user experience and operational efficiency.",
    url: "https://clientcornerstore.vercel.app/",
    imageURL: "/logoShop.png",
    codeLink: "https://github.com/ROR2022/clientcornerstore",
  },
  {
    id: "serverCornerStore",
    title: "Corner Store Server",
    shortDescription: "Basic Prototype API with Nest.js",
    description:
      "The Corner Store API is designed to handle the backend functionality of the Corner Store application. It is built with Nest.js and deployed on Railway. The API is designed to be scalable and efficient, providing a seamless experience for users.",
    url: "https://prodigy-wd-05-kappa.vercel.app/",
    imageURL: "/logoBusinessOwner.png",
    codeLink: "https://github.com/ROR2022/servercornerstore",
  },
  {
    id: "prodigyInternship",
    title: "Prodigy Internship",
    shortDescription: "Web Development Internship",
    description:
      "During my internship at Prodigy, I had the opportunity to work on several key projects that significantly enhanced my web development skills. I developed a weather application integrated with the OpenWeather API, where I not only implemented real-time weather data retrieval but also optimized the user interface for a seamless experience. Additionally, I created a stopwatch and a Tic-Tac-Toe game using React.js, which honed my abilities in state management, component-based architecture, and responsive design. These projects provided me with practical experience in applying best practices in coding, debugging, and version control. Moreover, I gained valuable insights into effective collaboration within a team environment, learning to communicate clearly, manage tasks efficiently, and contribute meaningfully to group objectives. This internship solidified my passion for web development and equipped me with a strong foundation to tackle more complex challenges in the future.",
    url: "https://prodigy-wd-05-e8rxmdoec-ror2022s-projects.vercel.app/",
    imageURL: "/logoProdigy.jpeg",
    codeLink: "https://github.com/ROR2022/PRODIGY_WD_05",
  },
  {
    id: "rorApi",
    title: "ROR NEST-API",
    shortDescription: "API with Nest.js and Railway",
    description: ` 
    API Documentation - ROR
Overview
This API is developed using NestJS, a progressive Node.js framework that allows the creation of scalable and efficient applications. The API follows SOLID principles to ensure maintainable and extensible code. It is designed to serve as the backend for several frontend applications developed with Next.js, including Estetica Pink, Endodoncista-Cuernavaca, and Pediatra-Cuernavaca. Additionally, the API integrates with Azure Blob Storage to manage and store large amounts of unstructured data, such as images and documents, ensuring scalable and secure file storage solutions.

Main Modules
AppModule The AppModule is the root module of the application, responsible for orchestrating and interconnecting the other modules. It is the foundation on which the application is built, allowing the integration of all services and functionalities provided by the API.

AuthModule The AuthModule manages everything related to authentication and authorization of users. It implements a system based on JWT (JSON Web Tokens) to handle user sessions, ensuring secure access to the API's various routes and resources. User passwords are securely stored in the database using bcrypt for hashing, ensuring their confidentiality.

UsersModule The UsersModule is responsible for managing the User entity, providing services for the creation, updating, retrieval, and deletion of users. This module is designed to efficiently handle the CRUD (Create, Read, Update, Delete) operations associated with the application's users, ensuring data integrity and consistency.

VerificationModule The VerificationModule handles user verification, focusing particularly on email confirmation. It uses the Nodemailer tool to send verification emails to users, ensuring that only verified users can access certain functionalities of the application.

ReviewsModule The ReviewsModule groups the necessary services for managing user reviews. This module allows users to create, update, retrieve, and delete reviews, providing a simple and efficient interface for handling feedback and ratings in the various applications that use this API.

AzureBlobModule The AzureBlobModule manages the integration with Azure Blob Storage, providing a robust solution for storing and retrieving unstructured data such as images, videos, and documents. This module handles the connection to Azure services, enabling the API to efficiently upload, download, and manage files within the cloud, ensuring data is securely stored and readily accessible.

Integration with Frontend Applications
The API is designed to integrate efficiently with frontend applications developed in Next.js. Some of the applications currently using this API include:

Estetica Pink: An application oriented towards the beauty and aesthetics sector.
Endodoncista-Cuernavaca: A platform focused on managing appointments and reviews for an endodontics clinic.
Pediatra-Cuernavaca: An application aimed at managing patients and reviews in a pediatric clinic.
Technical Considerations
Database: The API uses MongoDB as the primary database system, leveraging its flexibility and scalability to handle unstructured data.
File Storage: Azure Blob Storage is used for managing and storing files, providing a scalable and secure environment for handling large volumes of unstructured data.
Security: Best security practices are implemented, such as encrypted password storage and user validation through email.
Architecture: The API follows a modular approach, making it easy to maintain and scale, allowing functionalities to be added or modified without affecting the overall system.
    `,
    url: "https://ror-api-production.up.railway.app/",
    imageURL: "/logoRorApi.jpg",
    codeLink: "https://github.com/ROR2022/ror-api",
  },
  {
    id: "greyballChallenge",
    title: "Greyball Challenge",
    shortDescription: "Greyball Challenge Solution",
    description: `This project is an e-commerce application developed with Next.js and Tailwind CSS, designed to efficiently display a list of products while providing a modern user experience. The application includes several key features:

Product Listings with Server-Side Rendering (SSR): It uses getServerSideProps to fetch data from an API, enabling quick product display to users, with a focus on optimized SEO.

Responsive User Interface: The interface, built with Tailwind CSS, is fully responsive, offering a seamless experience across both mobile devices and desktops.

Cart and Checkout: The application includes a shopping cart feature where users can add products, view the total items and price, all managed using Redux for centralized state management.

Pagination and Infinite Scroll: It implements pagination for navigating through products, along with the option to load more products as the user scrolls down the page using IntersectionObserver.

Product Filtering and Sorting: Users can search for products by title and sort the list based on criteria such as price or rating, with real-time updates to the results.

Automated Testing: The project includes tests written with Jest and React Testing Library to ensure the stability and functionality of key components, such as the shopping cart.

Redux for State Management: Redux is used for managing the application's state, ensuring that data like cart contents and user preferences are handled consistently and efficiently.

This project serves as a comprehensive example of building a modern e-commerce application using current technologies, with a focus on efficiency, scalability, and user experience.`,
    url: "https://greyball-challenge.vercel.app/",
    imageURL: "/logoGreyball.png",
    codeLink: "https://github.com/ROR2022/greyballChallenge",
  },
  {
    id: "esteticaPink",
    title: "Estetica Pink",
    shortDescription: "Webapp with Next.js, Typescript, Tailwind UI and Vercel",
    description:
      "This Web Application is designed to provide users with information about the services offered by Estetica Pink. It is built with Next.js and deployed on Vercel. The application is designed to be responsive and user-friendly, providing a seamless experience for clients.",
    url: "https://estetica-pink.vercel.app/",
    imageURL: "/logoEstetica1.jpg",
    codeLink: "https://github.com/ROR2022/estetica-pink",
  },
  {
    id: "pediatra-cuernavaca",
    title: "Pediatra - Cuernavaca",
    shortDescription: "Webapp with Next.js, Typescript, Material UI and Vercel",
    description:
      "This Web Application is designed to provide users with information about the services offered by Dra. Marha Iris Ocampo, pediatrician. It is built with Next.js and deployed on Vercel. The application is designed to be responsive and user-friendly, providing a seamless experience for clients.",
    url: "https://pediatra-cuernavaca.vercel.app/",
    imageURL: "/logoPediatra1.jpg",
    codeLink: "https://github.com/ROR2022/pediatra-cuernavaca",
  },
  {
    id: "endodoncistaBereniceOcampoPwa",
    title: "Endodoncista - Dra. Berenice Ocampo",
    shortDescription: "PWA with Next.js, Typescript, Material UI and Vercel",
    description:
      "The Progressive Web Application (PWA) is designed to provide users with information about the services offered by Dra. Berenice Ocampo, a dental specialist. It is built with Next.js and deployed on Vercel. The application is designed to be responsive and user-friendly, providing a seamless experience for clients.",
    url: "https://endodoncista-pwa.vercel.app/",
    imageURL: "/logoEndoBere.png",
    codeLink: "https://github.com/ROR2022/endodoncista-pwa",
  },
  {
    id: "clientChismografo",
    title: "Chismografo Client",
    shortDescription: "PWA with Next.js and Vercel",
    description:
      "The Progressive Web Application (PWA) is designed to provide users with a platform to share their secrets and read those of others. It is built with Next.js and deployed on Vercel. The application is designed to be responsive and user-friendly, providing a seamless experience for users.",
    url: "https://clientchismografo.vercel.app/",
    imageURL: "/logoChismes1.png",
    codeLink: "https://github.com/ROR2022/clientchismografo",
  },
  {
    id: "serverChismografo",
    title: "Chismografo Server",
    shortDescription: "API with Nest.js and Railway",
    description:
      "The API is designed to handle the backend functionality of the Chismografo application. It is built with Nest.js and deployed on Railway. The API is designed to be scalable and efficient, providing a seamless experience for users.",
    url: "https://serverchismografo-production.up.railway.app/",
    imageURL: "/apiLogo.png",
    codeLink: "https://github.com/ROR2022/serverchismografo",
  },
  {
    id: "jobinderAppROR",
    title: "Jobinder",
    shortDescription: "Job search app with React",
    description:
      "This web application is designed to help users find job opportunities based on their preferences. It is built with React.js, and is deployed on AWS EC2 using S3 bucket for Images. The application is designed to be responsive and user-friendly, providing a seamless experience for job seekers. ",
    url: "http://18.222.55.217",
    imageURL: "/logoJOB.png",
    codeLink: "https://github.com/ROR2022/jobinder",
  },
  {
    id: "loginAppROR",
    title: "LoginApp",
    shortDescription: "Basic login app with MERN",
    description:
      "This web application, developed with the MERN stack (MongoDB, Express.js, React.js, Node.js), aims to showcase the basic functionality of a login system. In addition to allowing users to authenticate themselves, it also provides an intuitive and responsive interface to explore other potential features. Currently, it is deployed on an AWS EC2 instance, ensuring its availability and scalability.",
    url: "http://18.116.42.126/",
    imageURL: "/sunset-1226414_1280.jpg",
    codeLink: "https://github.com/ROR2022/loginApp",
  },
  {
    id: "pediatraAppROR",
    title: "PediatraApp",
    shortDescription: "Pediatric consultation app",
    description:
      "This application is hosted on Vercel, with its primary function being to showcase information about a pediatrician and the services they offer. Developed using React.js and deployed on Vercel, the application is responsive and user-friendly, ensuring a seamless experience for clients.",
    url: "https://cardiofront.vercel.app/",
    imageURL: "/logoCardio1.png",
    codeLink: "https://github.com/ROR2022/cardiofront",
  },
  {
    id: "barbacoaAppROR",
    title: "Barbacoa Mena",
    shortDescription: "Restaurant menu and services",
    description:
      "This web application is designed to showcase the menu and services of Barbacoa Mena, a local restaurant. It is built with React.js, and is deployed on GitHub Pages. The website is designed to be responsive and user-friendly, providing a seamless experience for customers.",
    url: "https://ror2022.github.io/barbacoa-mena/",
    imageURL: "/logoBarbacoa1.jpg",
    codeLink: "https://github.com/ROR2022/barbacoa-mena",
  },
  {
    id: "dentalAppROR",
    title: "Dental Las Palmas",
    shortDescription: "Dental clinic website",
    description:
      "This website is designed to showcase the services and information of Dental Las Palmas, a local dental clinic. It is built with React.js, and is deployed on Vercel. The website is designed to be responsive and user-friendly, providing a seamless experience for clients.",
    url: "https://ror2022.github.io/dental-las-palmas2/",
    imageURL: "/logoDental1.png",
    codeLink: "https://github.com/ROR2022/dental-las-palmas2",
  },
  {
    id: "rancheroAppROR",
    title: "El Ranchero",
    shortDescription: "Sale of chorizo ​​and pork meat",
    description:
      "This web application is designed to showcase the products and services of El Ranchero, a local store specializing in the sale of chorizo and pork meat. It is built with React.js, and is deployed on GitHub Pages. The website is designed to be responsive and user-friendly, providing a seamless experience for customers.",
    url: "https://ror2022.github.io/el-ranchero/",
    imageURL: "/qrcodeRanchero.png",
    codeLink: "https://github.com/ROR2022/el-ranchero",
  },
  {
    id: "triviaAppROR",
    title: "Trivia Game",
    shortDescription: "Game to test your knowledge",
    description:
      "This web application is designed to test your knowledge with a trivia game. It is built with React.js, and is deployed on GitHub Pages. The game is designed to be responsive and user-friendly, providing a seamless experience for players.",
    url: "https://ror2022.github.io/trivia-game/",
    imageURL: "/logoTrivia.webp",
    codeLink: "https://github.com/ROR2022/trivia-game",
  },
  {
    id: "memoriaAppROR",
    title: "Memoria Game",
    shortDescription: "Game to test your memory",
    description:
      "This web application is designed to test your memory with a memory game. It is built with React.js, and is deployed on GitHub Pages. The game is designed to be responsive and user-friendly, providing a seamless experience for players.",
    url: "https://ror2022.github.io/memoria-game/",
    imageURL: "/logoAmnesia.png",
    codeLink: "https://github.com/ROR2022/memoria-game",
  },
];

//https://prodigy-wd-05-e8rxmdoec-ror2022s-projects.vercel.app/rorAWS.jpg
export const dataCertifications = [
  {
    id: "hackerRankFrontEnd",
    title: "Frontend Developer (React)",
    shortDescription:
      "HackerRank Frontend Developer Certificate of Accomplishment",
    description:
      "This certification validates the knowledge and skills required to effectively develop web applications using React.js.",
    url: "",
    imageURL: "/rorHackerRank1.png",
    codeLink: "",
  },
  {
    id: "rorProdigy",
    title: "Prodigy",
    shortDescription: "Web Development",
    description:
      "This certification validates the knowledge and skills required to effectively develop web applications using HTML, CSS, and JavaScript. ",
    imageURL: "/rorProdigy.jpeg",
    codeLink: "",
    url: "",
  },
  {
    id: "rorAWS",
    title: "AWS Practitioner",
    shortDescription: "AWS Cloud Practitioner Essentials",
    description:
      "This certification validates the knowledge and skills required to effectively demonstrate an overall understanding of the AWS Cloud, independent of specific technical roles addressed by other AWS Certifications. ",
    imageURL: "/rorAWS.jpg",
    codeLink: "",
    url: "",
  },
  {
    id: "rorEnglish",
    title: "EF SET English",
    shortDescription: "English as a second language",
    description:
      "This certification validates the knowledge and skills required to effectively communicate in English, both in written and spoken form. ",
    imageURL: "/rorEnglish.png",
    codeLink: "",
    url: "",
  },
  {
    id: "rorFullStack",
    title: "Full Stack JS",
    shortDescription: "Full Stack JavaScript Developer",
    description:
      "This certification validates the knowledge and skills required to effectively develop web applications using JavaScript, both on the client and server side. ",
    imageURL: "/rorFullStackJS.png",
    codeLink: "",
    url: "",
  },
  {
    id: "rorScrum",
    title: "Scrum Study",
    shortDescription: "Scrum Fundamentals Certified",
    description:
      "This certification validates the knowledge and skills required to effectively apply Scrum principles and practices in a team environment.",
    imageURL: "/rorScrum.jpg",
    codeLink: "",
    url: "",
  },
];
