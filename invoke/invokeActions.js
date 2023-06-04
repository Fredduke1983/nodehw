const contactsFetches = require("../fetches");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contactsFetches.listContacts();
      return console.log(contactsList);

    case "get":
      const contactById = await contactsFetches.getContactById(id);
      return console.log("contact", contactById);

    case "add":
      await contactsFetches.addContact(name, email, phone);
      return console.log("added new contact");

    case "remove":
      await contactsFetches.removeContact(id);
      return console.log(`contact removed`);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

module.exports = invokeAction;
