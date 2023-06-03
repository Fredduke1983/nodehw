const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "..", "db", "contacts.json");

/**
 * отримуємо список контактів з локальної database та повертаємо у JSON форматі
 * @returns {JSON}
 */
const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * отримуємо об'єкт одного контакту по його id
 * @param {id:string} contactId
 * @returns {Array}
 */
const getContactById = async contactId => {
  try {
    const contactsArr = await listContacts();

    return contactsArr.find(el => el.id === contactId);
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * видаляємо об'єкт одного контакту за його id
 * @param {id:string} contactId
 */
const removeContact = async contactId => {
  try {
    const contactsArr = await listContacts();

    const filteredContactsArr = contactsArr.filter(el => el.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(filteredContactsArr, null, 2));
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * додаємо новий контакт
 * @param {String} name
 * @param {String} email
 * @param {Number} phone
 */
const addContact = async (name, email, phone) => {
  try {
    const contactsArr = await listContacts();

    contactsArr.push({ id: nanoid(), name, email, phone });
    fs.writeFile(contactsPath, JSON.stringify(contactsArr, null, 2));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { listContacts, getContactById, addContact, removeContact };
