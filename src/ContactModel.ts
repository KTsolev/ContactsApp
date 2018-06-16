export default class ContactModel {
  id:number;
  name:string;
  phoneNumber:number;
  phoneNumberWork:number;
  email:string;

  constructor (id:number, name:string, phoneNumber:number, phoneNumberWork:number, email:string) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.phoneNumberWork = phoneNumberWork;
    this.email = email;
  }
}
