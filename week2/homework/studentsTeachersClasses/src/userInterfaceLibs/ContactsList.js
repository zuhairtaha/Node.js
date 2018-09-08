import {Contact} from "../libs/Contact";

export class ContactsList {
    constructor() {
        this.list = [];
        this.elementsType = 'contact';
        this.instace = Contact;
    }

    /**
     * add a new contact to contacts list
     * @param {Contact} contact
     * @returns {number} - last index of inserted item
     */
    add(contact) {
        if (!(contact instanceof this.instace)) {
            throw `Error: ${this.elementsType} must be an instance of ${this.elementsType}`;
        }
        if (this.search(contact.name) !== -1) {
            throw `Error: a ${this.elementsType} with the name ${contact.name} already exists`;
        }
        if (this.search(contact.phone, 'phone') !== -1) {
            throw `Error: a ${this.elementsType} with the phone ${contact.phone} already exists`;
        }
        this.list.push(contact);
        //return this.list.length - 1;
    }

    /**
     * search for a contact by key (key=name by default)
     * @param {String} value
     * @param {String} key?
     * @returns {number} - index
     */
    search(value, key = 'name') {
        return this.list.findIndex(contact => contact[key] === value);
    }

    /**
     * delete contact from list by name
     * @param {String} contactName
     */
    delete(contactName) {
        const index = this.search(contactName);
        if (index === -1) {
            throw `Error: Element is not fond in ${this.elementsType} list`;
        }
        else {
            this.list.splice(index, 1);
        }
    }
}