export class Contact {
    /**
     * contact
     * @param {String} name - contact name (required)
     * @param {String} phone - at least 8 characters
     */
    constructor(name, phone) {
        if (arguments.length !== 2) throw "Error: wrong number of arguments";
        if (typeof name !== 'string' || name.length === 0) {
            throw "Error: name is not a string or is too short";
        }
        if (typeof phone !== 'string' || phone.length < 8) {
            throw "Error: phone is not a string or is too short";
        }
        this.name = name;
        this.phone = phone;
    }
}