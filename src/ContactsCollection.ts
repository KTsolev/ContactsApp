import ContactModel from './ContactModel';

const ContactsCollection = (...titleArr:ContactModel[]) => {
    let collection:ContactModel[] = titleArr.map( (contact, index) => {
        return new ContactModel( index + 1, contact.name, contact.phoneNumber, contact.phoneNumberWork, contact.email);
    });

    const get = ():ContactModel[]=>{
        return collection;
    };

    const add = (name:string, phoneNumber:number, phoneNumberWork:number, email:string):void =>{
        const id = collection.length+1;
        collection = [...collection, new  ContactModel(id, name, phoneNumber, phoneNumberWork, email)];
    };

    const remove = (id:number):void=>{
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

    return {
        get,
        add,
        remove,
        getItemById,
    };
};

export default ContactsCollection;