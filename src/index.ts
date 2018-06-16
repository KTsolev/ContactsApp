import ContactModel from './ContactModel';
import ContactsCollection from './ContactsCollection';

namespace app {
  export const init = ():void => {
      const $contact = document.getElementsByClassName('contact-list');
      const $search = document.getElementsByClassName('contact-list__search');
      const $addNew = document.getElementsByClassName('contact-list__new');

      // const validateInput = (value:string):boolean =>{
      //     return typeof value == 'string' && value.trim().length > 0;
      // }

      console.log('init app');
  }
}

app.init();
