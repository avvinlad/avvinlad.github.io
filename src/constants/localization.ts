// SECTION TITLES ------------------------------------------------
export const ABOUT_ME_TITLE = "About";
export const EXPERIENCE_TITLE = "Work";
export const PROJECTS_TITLE = "Projects";

// SECTION SUBTITLES ------------------------------------------------
export const ABOUT_ME_SUBTITLE = "A quick glimpse of me.";
export const EXPERIENCE_SUBTITLE = "What I do best.";
export const PROJECTS_SUBTITLE = "On my spare time.";

// NAVIGATION ------------------------------------------------
export const NAV_HOME = "Home";
export const NAV_ABOUT = "About";
export const NAV_PROJECTS = "Projects";

// HERO ------------------------------------------------
export const HERO_GREETING = "Hi! I'm Avin.";
export const HERO_TAGLINE = "I like to create things!";
export const HERO_DESCRIPTION =
    "I'm a software engineer based in Toronto, aimed at positively impacting large scale products and services that are used throughout the world.";
export const HERO_CONNECT_BUTTON = "Let's connect!";

// ABOUT ME ------------------------------------------------
export const ABOUT_ME = {
    intro: "Currently a Software Developer at",
    currentCompany: "Brock Solutions",
    currentCompanyUrl: "https://www.brocksolutions.com/",
    rest: ", working with large scale systems that spans both frontend and backend development. Experienced with software development from all aspects, whether it's an initial design or deploying to production, I'm always interested in the processes of how we improve the world with technology and the different ways to do so. ",
    technologies: "Here are some technologies I've been using:",
    hobbies:
        "I'm always interested in learning new things and travelling to new places! No matter the place I love to explore. I enjoy playing video games, travelling, and sports! I'm an avid badminton player and lately I've been taking up golf."
};

// EXPERIENCE ------------------------------------------------
export const EXPERIENCE_JOBS = [
    {
        name: "Brock Solutions",
        imagePath: "brock_solutions.png",
        jobTitle: "Software Developer",
        date: "September 2022 - Present",
        description: [
            "Built data-driven features that improved access to flight and baggage information for airport staff, helping teams make faster, more informed decisions.",
            "Upgraded the UI/UX of a React application to make key operational data easier to understand, improving workflow speed for users.",
            "Added a new feature that helped staff manage service requests more efficiently by integrating the frontend with backend services.",
            "Improved system scalability and resilience by restructuring a core search feature using an event-driven approach.",
            "Increased application performance by reducing unnecessary state usage and optimizing React components for faster load and render times.",
            "Developed a modern web application using Next.js and Python to support manufacturing operations, improving data loading speed and overall user experience.",
            "Integrated manufacturing systems with communication tools to reduce downtime and improve equipment efficiency.",
            "Automated CI/CD pipelines to significantly speed up deployment times and streamline the release process."
        ]
    },
    {
        name: "NGen Canada",
        imagePath: "ngen_canada.png",
        jobTitle: "Data Analyst",
        date: "January 2022 - April 2022",
        description: [
            "Improved stakeholder productivity by uncovering insights in existing data and supporting more informed decision-making.",
            "Built interactive dashboards that helped stakeholders set clearer goals and monitor key metrics more effectively.",
            "Simplified data management by consolidating sources and automating exports, significantly reducing manual work."
        ]
    },
    {
        name: "LogiSense",
        imagePath: "logisense.png",
        jobTitle: "Software Developer",
        date: "May 2021 - August 2021",
        description: [
            "Improved overall user experience by building responsive interfaces and dynamic components that helped increase engagement.",
            "Helped ensure smooth, on-schedule releases by coordinating effectively across teams and removing development blockers early.",
            "Delivered high-quality applications by collaborating with cross-functional teams, incorporating feedback, and consistently refining code."
        ]
    },
    {
        name: "SoCast Digital",
        imagePath: "socast.png",
        jobTitle: "Junior Developer",
        date: "September 2020 - December 2020",
        description: [
            "Improved user satisfaction by fixing major bugs and adding helpful features, reducing the number of support issues.",
            "Strengthened data reliability and scalability by optimizing cloud-based data management and eliminating inconsistencies."
        ]
    },
    {
        name: "Hippos Software",
        imagePath: "hippos_software.png",
        jobTitle: "Junior Software Developer",
        date: "May 2019 - August 2020",
        description: [
            "Developed a mobile app for Clover Flex devices that improved restaurant workflow efficiency.",
            "Enhanced app speed and responsiveness by optimizing components and API interactions."
        ]
    }
];

// PROJECTS ------------------------------------------------
export const GITHUB = "GitHub";
export const PROJECTS = [
    {
        id: 0,
        name: "Spotify Analyzer",
        link: "https://github.com/avvinlad/spotify_analyzer",
        description: "An application for in-depth analysis into your Spotify playlists.",
        points: [
            "Uses OAuth 2.0 and Spotify API to retrieve account and music information.",
            "Extracts information such as song popularity, audio features (tempo, energy, danceability), and information.",
            "Ability to extract the data into a CSV for further data manipulation."
        ]
    },
    {
        id: 1,
        name: "Edgar Search",
        link: "https://github.com/avvinlad/edgar_search",
        description: "Tracking insider stock trades at your favourite companies.",
        points: [
            "Leverages the EDGAR Search and Access for publicly traded companies, showing who bought and sold stock.",
            "Provides a history of data for any recent or old trades which occurred."
        ]
    },
    {
        id: 2,
        name: "FindPi",
        link: "https://github.com/avvinlad/FindPi",
        description: "How is it we came up with the value of π ?",
        points: [
            "There are several ways to solve for π, this creative method is by using a certain number of data points from (0, 1) and a circle.",
            "Then find the amount of data points within a quarter circle and the total amount of data points gives an approximation."
        ]
    }
];
