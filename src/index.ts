import ContactsListView from './ContactsListView';
import ContactsCollection from './ContactsCollection';
import '../styles/main.scss';

namespace app {
  export const init = ():void => {
      const $contactList = document.getElementsByClassName('contacts__list')[0];
      const $search = document.getElementsByClassName('contacts-header__search')[0];
      const $addNew = document.getElementsByClassName('contacts-header__new')[0];

      let contactsList = ContactsCollection();
      contactsList.add('Peter', '0885643482', '08874563', 'peter@gmail.com', true);
      contactsList.add('Petia', '08874511', '08967543', 'petia@gmail.com', false);
      contactsList.add('Pesho', '08874521', '08967544', 'pesho@gmail.com', true);
      contactsList.add('Sonia', '08874512', '08967541', 'sonia@gmail.com', false);
      contactsList.add('Ilona', '08874531', '08967542', 'ilona@gmail.com', false);

      let contactsListView = ContactsListView($contactList, contactsList.get());

      contactsListView.render();
      const validateInput = (value:string):boolean => {
          return typeof value == 'string' && value.trim().length > 0;
      }
      $search.addEventListener('onchange', (event) => {
        console.log(event)
        //coudn't do it in other way cause of linters
          let value: string= (<any>$search)['value'];
          console.log(value)

          //console.log('Event Object:', event);
          if (validateInput(value)) {
              contactsList.getItemsByName(value);
              contactsListView = ContactsListView($contactList, contactsList.get());
              contactsListView.render();
              value = '';
          }
      });
      console.log('init app');
  }
}

app.init();
