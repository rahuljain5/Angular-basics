export class ProfileForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    constructor(firstName: string = "", lastName: string = "", email: string = "", password: string= "") {
      this.firstName = firstName;
      this.lastName = lastName;
      this.password = password;
      this.email = email;
    }
  }