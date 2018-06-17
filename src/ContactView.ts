import ContactModel from './ContactModel';
const ContactView = (contact:ContactModel) => {
    const render = () => {
        const { id, name, phoneNumber, phoneNumberWork, email, isMale=false } = contact;

        return `<div class="contact" data-id="${id}">
                  <span>${name}</span>
                  <span>${phoneNumber}</span>
                  <span>${phoneNumberWork}</span>
                  <span>${email}</span>
                </div>`;
    };

    return {
        render
    };
};

export default ContactView;
