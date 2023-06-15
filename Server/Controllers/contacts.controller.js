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

export { getAllContacts, createContact };
