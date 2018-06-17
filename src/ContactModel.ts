export default class ContactModel {
  name:string;
  phoneNumber:string;
  phoneNumberWork?:string;
  email?:string;
  isMale?:boolean;
  id?:number;


  constructor (name:string, phoneNumber:string, phoneNumberWork:string, email:string, isMale:boolean, id:number) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.phoneNumberWork = phoneNumberWork;
    this.email = email;
    this.isMale = isMale;
  }
}
