import { LangsModel } from "../models/langs.model.js";

const getAllLangs = async (req, res) => {
  try {
    const Langs = await LangsModel.findAll();

    res.json(Langs);
  } catch {
    res.status(500).json({ error: "Não possui linguagens de programação." });
  }
};

const createLang = async (req, res) => {
  try {
    const { id, nome, exp } = req.body;

    const newLang = await LangsModel.create({
      id: id,
      nome: nome,
      exp: exp,
    });
    // Send a success response
    // Envie uma resposta com o cabeçalho CORS permitindo o domínio do frontend

    return (
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500") &
      res.status(201).json({ message: "Lang adicionada com sucesso" })
    );
  } catch (error) {
    // Handle any errors
    console.error("Error adding contact:", error);
    return res.status(500).json({ message: "Failed to add lang" });
  }
};

const deleteLang = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete the element from the database using Sequelize
    await LangsModel.destroy({ where: { id } });
    res.sendStatus(204); // Successfully deleted
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Lang" });
  }
};

const editLang = async (req, res) => {
  const { id } = req.params;
  const { newName, newExp } = req.body;

  try {
    const updatedLang = await LangsModel.update(
      {
        nome: newName,
        exp: newExp,
      },
      { where: { id } }
    );
    res.json(updatedLang);
  } catch (error) {
    res.status(500).json({ error: "Failed to edit element" });
  }
};

export { getAllLangs, createLang, deleteLang, editLang };
