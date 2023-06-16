import { ContactsModel } from "../models/contacts.model.js";

const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactsModel.findAll();

    return res.json(contacts);
  } catch {
    return res.status(500).json({ error: "Não existem contactos." });
  }
};

const createContact = async (req, res) => {
  try {
    const { id, classe, type, content } = req.body;

    const newContact = await ContactsModel.create({
      id: id,
      classe: classe,
      type: type,
      content: content,
    });
    // Send a success response
    // Envie uma resposta com o cabeçalho CORS permitindo o domínio do frontend

    return (
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500") &
      res.status(201).json({ message: "Contato criado com sucesso" })
    );
  } catch (error) {
    // Handle any errors
    console.error("Error adding contact:", error);
    return res.status(500).json({ message: "Failed to add contact" });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete the element from the database using Sequelize
    await ContactsModel.destroy({ where: { id } });
    res.sendStatus(204); // Successfully deleted
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Contact" });
  }
};

const editContact = async (req, res) => {
  const { id } = req.params;
  const { newContent } = req.body;

  try {
    const updatedContact = await ContactsModel.update(
      {
        contacts: newContent,
      },
      { where: { id } }
    );
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: "Failed to edit element" });
  }
};

export { getAllContacts, createContact, deleteContact, editContact };
