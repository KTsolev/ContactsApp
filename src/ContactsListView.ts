import ContactModel from './ContactModel';
import ContactsCollection from './ContactsCollection';
import ContactView from './ContactView';

// Here coudn't make it work without $el:any and didn't found any reason
// Type script was throwing error that needs implicit cast to any
const ContactsListView = ($el:any, ...contactsArr:ContactModel[]) => {
    let contactsColleciton = ContactsCollection(...contactsArr);
    console.log(contactsColleciton.get())
    const render = ():void => {
        const $list = contactsColleciton.get().map((contact) => {
            return ContactView(contact).render();
        }).join('');
        $el.innerHTML = `<section>${$list}</section>`;
    };

    return {
        render,
    };
};

export default ContactsListView;
