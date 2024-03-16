export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
}

export class User implements IUser {
    firstName: string;
    lastName: string;
    email: string;

    constructor(){
        this.firstName = 'Sharoon';
        this.lastName = 'Niaz';
        this.email = 'sharonniaz93@gmail.com'
    }
}