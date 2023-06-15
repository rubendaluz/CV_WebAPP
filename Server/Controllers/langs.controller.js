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

export { getAllLangs, createLang };
