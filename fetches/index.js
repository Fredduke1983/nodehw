const {
  addContact,
  getContactById,
  listContacts,
  removeContact,
} = require("./fetchContacts");

module.exports = { listContacts, getContactById, addContact, removeContact };
