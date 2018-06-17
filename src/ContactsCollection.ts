import ContactModel from './ContactModel';

const ContactsCollection = (...titleArr:ContactModel[]) => {
    let collection:ContactModel[] = titleArr.map( (contact, index) => {
        return new ContactModel(
           contact.name,
           contact.phoneNumber,
           contact.phoneNumberWork,
           contact.email,
           contact.isMale,
           index + 1);
    });

    const get = ():ContactModel[]=>{
        return collection;
    };

    const add = (name:string, phoneNumber:string, phoneNumberWork:string, email:string, isMale:boolean):void => {
        const id = collection.length+1;
        collection = [...collection, new  ContactModel(name, phoneNumber, phoneNumberWork, email, isMale, id)];
    };

    const remove = (id:number):void => {
        collection = collection.filter((contact) => {
            return contact.id !== id;
        });
    }

    const getItemById = (id:number):ContactModel => {
         let item;
         collection.forEach((contact) => {
             if (contact.id === id) {
                item = contact;
             }
         });
         return item;
     };

     const getItemsByName = (name:string):ContactModel[] => {
        return collection.filter((contact) => contact.name.indexOf(name) !== -1);
      };

    return {
        get,
        add,
        remove,
        getItemById,
        getItemsByName,
    };
};

export default ContactsCollection;
