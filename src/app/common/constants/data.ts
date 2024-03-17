export class User {
    firstName: string;
    lastName: string;
    fullName : string;
    email: string;
    emailMsg: string;
    mobile: string;
    mobileMsg: string;
    location: string;
    locationMsg: string;
    profileImg: string;
    typewiterText: string[];
    basicDescription: string;
    whatIDos: WhatIDo[];
    projects: Project[];
    emailDetails: emailDetails;
    phoneDetails: phoneDetails;
    locationDetails: locationDetails;

    constructor(){
        this.firstName = 'Sharoon';
        this.lastName = 'Niaz';
        this.fullName = this.firstName + ' ' + this.lastName;
        this.email = 'sharonniaz93@gmail.com';
        this.emailMsg = `I prefer emails and usually reply swiftly. I'm fluent in English and Urdu.`
        this.emailDetails = {icon: 'bi bi-envelope', title: this.email, msg: this.emailMsg};
        this.profileImg = 'assets/images/profileImages/sharoon-portfolio-image.jpeg';
        this.mobile = "+923034212033";
        this.mobileMsg = `I'm usually best reached over email but please call or text me if your case is urgent.`;
        this.phoneDetails = {icon: 'bi bi-phone', title: this.mobile, msg: this.mobileMsg }
        this.location = "Pakistan & Remote";
        this.locationMsg = `I'm happy to work on-site or remote depending on the project requirements.`;
        this.locationDetails = {icon: 'bi bi-pin-map', title: this.location, msg: this.locationMsg };
        this.typewiterText = ['Software Engineer.', 'Full-Stack Web Developer.', 'Frontend Developer.', 'ASP.NET Core Developer.'];
        this.whatIDos = [
            {icon: 'bi bi-braces', name: "Full-Stack Web Development", description: "Proficient in developing web applications using a variety of technologies including ASP.NET Core, Angular, Vue.js, React, and AngularJS."},
            {icon: 'bi bi-database', name: "Database Management", description: "Experienced in working with both relational databases like Microsoft SQL Server and PostgreSQL, as well as cloud-based database services like Azure SQL Database."},
            {icon: 'bi bi-code-square', name: "API Development", description: "Skilled in designing and implementing RESTful APIs using ASP.NET Core for backend services, enabling seamless communication between client-side and server-side components."},
            {icon: 'bi bi-filetype-html', name: "Frontend Development", description: "Capable of building modern and responsive user interfaces using Angular, Vue.js, React and AngularJS, ensuring a smooth and intuitive user experience across different devices and screen sizes."},
            {icon: 'bi bi-cloud-download', name: "Cloud Computing", description: "Knowledgeable in deploying and managing applications on cloud platforms such as Microsoft Azure, leveraging cloud services for scalability, reliability, and performance optimization."},
            {icon: 'bi bi-lightbulb', name: "Problem Solving", description: "Proficient in troubleshooting and debugging complex issues in software applications, employing analytical skills and systematic approaches to identify and resolve technical challenges efficiently."},
            {icon: 'bi bi-book', name: "Continuous Learning", description: "Committed to staying updated with the latest technologies and industry trends, continuously enhancing skills through self-learning, online courses, and participation in tech communities."},
            {icon: 'bi bi-people', name: "Collaborative Team Player", description: "Effective communicator and team player, experienced in collaborating with cross-functional teams including developers, designers, and stakeholders to deliver high-quality software solutions."},
        ];
        this.projects = [
            {icon: 'bi bi-airplane', name: 'ATC', description: `ATC, or Air Traffic Controller, is a management tool developed for project handling and HR management tasks internally. It serves as a centralized hub for storing and accessing accurate information across different channels. It is built for functions like invoicing, emails, SMTP, messaging, and SignalR for real-time `, techs: ['ASP .NET Core', 'Vue js', 'Postgre SQL', 'Azure', 'Javascript', 'C#']},
            {icon: 'bi bi-car-front', name: 'AutoBuffy', description: ``, techs: ['Rails', 'Angular', 'SQLite', 'AWS', 'Typescript', 'Ruby']},
            {icon: 'bi bi-people', name: 'KDGRM', description: `KDGRM is a sophisticated project management application designed to facilitate efficient tracking and management of tasks, bugs, backlogs, and more. As a Full Stack Software Engineer at KDGRM, my primary responsibility is to contribute to the development and enhancement of this comprehensive platform`, techs: ['ASP .NET Core', 'Microsoft SQL Server', 'Azure', 'Typescript', 'Angular', 'C#']},
            {icon: 'bi bi-telephone', name: 'One40 Connect', description: `One40 Connect is a versatile CRM platform with integrated SMS messaging capabilities, ideal for customer support and SMS marketing. This application streamlines customer interactions, enhances marketing efforts, and offers a user-friendly interface for efficient communication and targeted messaging.`, techs: ['ASP .NET Core', 'Microsoft SQL Server', 'Azure', 'Javascript', 'Angular Js', 'C#']},
            {icon: 'bi bi-droplet', name: 'LaundyMST', description: `LaundyMST is an e-laundry system tailored for urban households, offering convenient laundry management with scheduled pickups, order tracking, and doorstep delivery. Simplifying the laundry process, LaundyMST ensures a seamless experience for users, providing quality service and timely solutions to meet their laundry needs.`, techs: ['ASP .NET Core', 'Microsoft SQL Server', 'Azure', 'Javascript', 'Angular Js', 'C#']},
        ]

        this.basicDescription = `Hey there! I'm a dedicated software engineer with three years of proven experience. Over the years, I've had the privilege of working with various clients and projects, honing my skills and delivering successful outcomes. If you're in search of a hardworking and experienced software engineer to join your team, let's connect and embark on a journey of progress together.`
    }
}

export interface WhatIDo {
    name: string,
    description: string,
    icon: string
}

export interface Project{
    name: string,
    icon: string, 
    description: string
    techs: string[]
}

export interface emailDetails{
    icon: string,
    title: string,
    msg: string,
}

export interface phoneDetails {
    icon: string,
    title: string,
    msg: string,
}

export interface locationDetails {
    icon: string,
    title: string,
    msg: string,
}