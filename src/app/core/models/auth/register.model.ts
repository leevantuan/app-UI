export default class RegisterModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsletter: boolean;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    newsletter: boolean
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.newsletter = newsletter;
    this.password = password;
  }
}
