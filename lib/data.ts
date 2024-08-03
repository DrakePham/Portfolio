import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rubicGameImage from "@/public/2048-game.png";
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: 'Home',
    About: 'About',
    Projects: 'Projects',
    Skills: 'Skills',
    Experiences: 'Experiences',
}

export const experiencesData = [
    {
        title: "Software Engineering Fellow",
        location: React.createElement("span", {},
            
            "Remote - New York, New York"
        ),
        description:
            "Building 3+ AI apps and APIs using React.js, Next.js, OpenAI, AWS, StripeAPI. Contributing an accepted Pull Request (PR) to the Biome (13k Stars) open-source project with a team of 4.",


            
        icon: React.createElement(FaVuejs),
        date: "July 2024 - Present",
    },
    {
        title: "Technical Interview Prep Coach",
        location: React.createElement("span", {},
            
            "Remote - San Francisco, CA"
        ),
        description:
            "Coaching and mentoring 20 students in key computer science topics like Data Structures, Algorithms, and GraphTheory for software development internships. Facilitating discussions to increase student success and engagement, helping students build comfort and trust. Provided constructive feedback and encouraging words regularly to help students improve in areas they were struggling with during interview prep sessions.",

            
        icon: React.createElement(FaVuejs),
        date: "May 2024 – Present",
    },
    {
        title: "Software Engineer - Intern",
        location: React.createElement("span", {},
            
            "Remote - San Francisco, California"
        ),
        description:
            "Developed Python-based data migration functions independently, transferring 8000 events to the Appwrite’s database, leveraging Appwrite’s database system for optimal request performance (226.21 ms).  Implemented a RESTful API with Test-Driven Development (TDD) that allows users to query locations by their location. Configured and tested an SMTP mail server using Mailgun, enhancing email deliverability for organizational communication.",

            
        icon: React.createElement(FaVuejs),
        date: "February 2024 – May 2024",
    },
    {
        title: "Software Engineer - Intern",
        location: React.createElement("span", {},
            
            "Ho Chi Minh, Vietnam"
        ),
        description:
            "Implemented two search RESTful APIs (Typescript) across four categories by collaborating with a teammate and applying the coding best practices (Typescript), improving loading performance by 20%. Applied the design best practices (the Adjacency List Design Pattern) to consolidate three tables into one in DynamoDB, saving 40% cost, enhancing 30% performance, and simplifying queries. Utilized AWS CloudFormation to create Infrastructure as Code (IaC) files, integrating S3, CloudFront, OAI, API Gateway, Lambda (Typescript), and DynamoDB to establish a serverless framework for deploying a React app, resulting in a 90% reduction in deployment time.",

            
        icon: React.createElement(FaVuejs),
        date: "February 2024 – May 2024",
    },

]

export const experiencesDataZn = [
//     {
//         "title": "计算机与信息技术硕士",
//         "location": "英国圣安德鲁斯大学",
//         "description": "获得了计算机与信息技术硕士学位，在人机交互、计算机通信系统和信息安全等领域深入学习。培养了计算思维、以用户为中心的设计和数据可视化方面的强大能力，为在科技驱动的环境中有效应用做好了准备。",
//         icon: React.createElement(LuGraduationCap),
//         "date": "2023年9月 - 2024年8月"
//     },
//     {
//         "title": "前端实习生",
//         "location": "蔚来汽车（中国武汉）",
//         "description": "使用Vue3、TypeScript和百度地图API开发蔚来第三代换电站列表和详情页。在任务向导页面实施基于角色的访问控制，增强系统安全性。在Jira管理的环境中有效协作，利用Jenkins进行部署流程。",
//         "icon": React.createElement(FaVuejs),
//         "date": "2022年8月 - 2022年12月"
//     },
//     {
//         "title": "前端开发",
//         "location": "武汉大学大数据研究院",
//         "description": "使用umi（React框架）和Ant Design Pro开发和维护Finknow，一个金融知识图谱查询和分析平台。利用基于G6的React图分析工具包graphin开发了股权网络穿透图，增强了数据可视化功能。",
//         "icon": React.createElement(FaReact),
//         "date": "2022年5月 - 2022年7月"
//     },
//     {
//         "title": "数字出版学士",
//         "location": "武汉大学",
//         "description": "以3.81/4.0的GPA毕业，获得数字出版学士学位，掌握了数字媒体和出版技术的基础知识。",
//         "icon": React.createElement(LuGraduationCap),
//         "date": "2019年9月 - 2023年6月"
//     }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    
    {
        title: "HelpMate",
        title_zh: 'HelpMate',
        description:
            "A platform combined academic schedules, travel plans, weather updates, and social events into a single platform for bettermanagement of college student life.",
        desc_zh: "A platform combined academic schedules, travel plans, weather updates, and social events into a single platform for bettermanagement of college student life.",
        tags: ["React.js", "Javascript", " Node.js", "Express.js", "MySql"],
        imageUrl: typingSpeedImage,
        projectUrl: 'https://github.com/aliceKuang12/581_helpmate/tree/dataBase',
        demoUrl: '',
    },
    // {
    //     title: "Game Hub",
    //     title_zh: '游戏枢纽站',
    //     description: "A responsive game grid application that offers search and filter functionality, and features infinite scrolling using React Query. It also includes robust form validation with Zod and efficient state management with Zustand.",
    //     desc_zh: "使用React.js、TypeScript和ChakraUI构建的游戏聚合器。项目功能包括响应式游戏网格、搜索和过滤、使用React Query进行数据处理、使用Zod进行表单验证、使用Zustand进行状态管理、React Router进行导航以及实现无限滚动。",
    //     tags: ["React", "TypeScript", "Zod", "React Query", "Chakra UI"],
    //     imageUrl: gameHubImage,
    //     projectUrl: 'https://github.com/Codefreyy/New-Game-hub',
    //     demoUrl: 'https://joy-gamehub.netlify.app/',


    // },
    // {
    //     title: "Breddit",
    //     title_zh: "社交新闻论坛",
    //     description:
    //         `A modern full-stack Reddit clone features infinite scrolling, secure authentication via NextAuth and Google, and a custom feed for authenticated users. It utilizes Upstash Redis for advanced caching and React-Query for efficient data fetching, ensuring a responsive and user-friendly experience with optimistic updates.
    //         `,
    //     desc_zh: "一个现代且简洁的Reddit克隆项目，使用Next.js、TypeScript和Tailwind CSS构建。项目功能包括无限滚动动态加载帖子、NextAuth与Google认证、为认证用户提供自定义Feed、高级缓存、乐观更新、React-Query数据获取、美观的帖子编辑器、图片上传和链接预览、以及完整的评论功能。",
    //     tags: ["JavaScript", "HTML", "CSS3"],
    //     imageUrl: breadditImage,
    //     projectUrl: 'https://github.com/Codefreyy/Breddit',
    //     demoUrl: 'https://joy-breddit.vercel.app/',
    // },


]

export const skillsData = [
    "Python",
    "C++",
    "C",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Node",
    "Express",
    "Git",
    "Github",
    "MongoDB",
    "MySQL",
    "DynamoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CloudFormation",
    "HTML",
    "CSS",
    "Lamda",
    "S3",
    "CloudFront",
    "API Gateway",
    "Route 53",
    "Coginto",




  
] 
