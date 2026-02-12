const ProjectsDetail = [
    {
        title: "The Collaboration Hub (A Platform for collaborating and sharing Resources)",
        description: "The Collaboration Hub is a robust, full-stack community ecosystem engineered with a React frontend and a Django REST Framework backend, backed by a relational PostgreSQL database. The platform facilitates knowledge-sharing by allowing users to post technical Topics and curate Resources—ranging from GitHub repositories to YouTube tutorials—while featuring a dual-layer security architecture with protected React routes and custom Django authentication classes. Unauthenticated users can explore the five core public pages to discover content, while authenticated members gain access to an interactive dashboard equipped with advanced data visualization—using Pie and Bar charts to analyze personal engagement metrics, like/dislike ratios, and monthly activity trends. To ensure industrial-grade scalability, the application implements server-side pagination for optimized data fetching and provides complete CRUD functionality through a personalized user portal, allowing for seamless management of resources, nested comments, and social voting, all while maintaining high-fidelity public profiles that showcase a contributor's community impact.",
        project_type: "Full Stack Web Project",
        status: "Completed",
        repo_link: "https://github.com/ZohaibKhanDeveloper/CollaborativeResourceHub-Backend"
    },
    {
        title: "SentinelData-Automated Content Moderation & Dataset Engineering",
        description: "SentinelData is a specialized data engineering project developed for the PakTube video platform to architect a secure content environment through large-scale automated data extraction. Utilizing Selenium for dynamic browser automation and Beautiful Soup for high-precision HTML parsing, I engineered a robust web scraping pipeline that successfully harvested over 341,000 records from Wikipedia’s expansive database. The project focused on curating a comprehensive dataset of article titles, metadata, and descriptive content while implementing a rigorous automated filtering system to identify and exclude harmful or restricted keywords (such as explicit content and sensitive themes). By leveraging Python and Pandas, I transformed this raw unstructured web data into structured JSON and CSV formats, providing the core dataset for PakTube’s content safety layer. This project demonstrates advanced proficiency in handling large-scale data collection, ensuring data integrity for safety-critical applications, and optimizing automated workflows for high-volume information retrieval.",
        project_type: "Web Scraping and mining (Data Engineering)",
        status: "Completed",
        repo_link: "https://github.com/ZohaibKhanDeveloper/PakTubeDatasetProject"
    },
    {
        title: "SmartChoice- AI-Powered Semantic Theme Recommender",
        description:"SmartChoice is an intelligent recommendation engine engineered to solve the choice overload problem for web developers and business owners searching for the perfect website template. Leveraging a meticulously curated dataset of 19,951 unique records scraped from TemplateMonster—spanning categories like WordPress, Shopify, and HTML5—I developed a high-precision recommendation system using Natural Language Processing (NLP). At the core of the engine is the SpaCy en_core_web_md pre-trained model, which I utilized to calculate semantic similarity between user intent and product descriptions, moving beyond simple keyword matching to understand the actual meaning behind a user's request. The backend is built with Django, where I implemented an optimized pipeline to serve real-time recommendations by loading pre-trained Pickle models. To provide a complete user experience, I designed a responsive frontend using HTML, CSS, and Vanilla JavaScript, integrated with Chart.js to provide dynamic data analytics and visual insights into the theme rankings. This project showcases my proficiency in the full AI lifecycle: from automated data mining and NLP model implementation to creating a production-ready web interface for complex decision-making. Private Repository | Can be delivered upon request...",
        project_type:"Full Stack NLP Project",
        status:"Completed",
        repo_link:"https://github.com/ZohaibKhanDeveloper/SmartThemeRecomenderSystemInNLP"
    },
    {
        title: "MarketSense- E-Commerce Intelligence & Competitor Analysis Dataset",
        description: "MarketSense is an advanced data acquisition and market intelligence project designed to analyze trends within the premium digital asset industry. Utilizing a sophisticated scraping architecture powered by Python, Selenium, and Beautiful Soup, I meticulously extracted and structured a comprehensive dataset of 19,951 unique records from the global e-commerce platform TemplateMonster. The pipeline dynamically navigated complex categories—including WordPress, Shopify, and HTML5—to capture critical business metrics such as product pricing, vendor identity, sales volume, and user ratings. To ensure data consistency, I developed a custom merging algorithm using Pandas that unified disparate category-specific CSV files into a single, high-integrity master dataset. This project highlights my ability to transform vast amounts of unstructured web data into actionable business intelligence, providing deep insights into vendor performance, pricing strategies, and market demand for digital products.",
        project_type: "Web Scraping and mining (Data Engineering)",
        status: "Completed",
        repo_link: "https://github.com/ZohaibKhanDeveloper/ThemesDatasetCreationFromTemplateMonster"
    },
];
export default ProjectsDetail;