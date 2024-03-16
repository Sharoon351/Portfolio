export class User {
    firstName: string;
    lastName: string;
    fullName : string;
    email: string;
    profileImg: string;
    typewiterText: string[];
    basicDescription: string;

    constructor(){
        this.firstName = 'Sharoon';
        this.lastName = 'Niaz';
        this.fullName = this.firstName + ' ' + this.lastName;
        this.email = 'sharonniaz93@gmail.com';
        this.profileImg = 'assets/images/profileImages/sharoon-portfolio-image.jpeg';
        this.typewiterText = ['Software Engineer.', 'Full-Stack Web Developer.', 'Frontend Developer.', 'ASP.NET Core Developer.'];
        this.basicDescription = `Hey there! I'm a dedicated software engineer with three years of proven experience. Over the years, I've had the privilege of working with various clients and projects, honing my skills and delivering successful outcomes. If you're in search of a hardworking and experienced software engineer to join your team, let's connect and embark on a journey of progress together.`
    }
}