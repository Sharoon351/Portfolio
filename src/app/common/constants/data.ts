export class User {
    firstName: string;
    lastName: string;
    fullName : string;
    email: string;
    profileImg: string;
    typewiterText: string[];
    basicDescription: string;
    whatIDos: WhatIDo[];

    constructor(){
        this.firstName = 'Sharoon';
        this.lastName = 'Niaz';
        this.fullName = this.firstName + ' ' + this.lastName;
        this.email = 'sharonniaz93@gmail.com';
        this.profileImg = 'assets/images/profileImages/sharoon-portfolio-image.jpeg';
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
        this.basicDescription = `Hey there! I'm a dedicated software engineer with three years of proven experience. Over the years, I've had the privilege of working with various clients and projects, honing my skills and delivering successful outcomes. If you're in search of a hardworking and experienced software engineer to join your team, let's connect and embark on a journey of progress together.`
    }
}

export interface WhatIDo {
    name: string,
    description: string,
    icon: string
}