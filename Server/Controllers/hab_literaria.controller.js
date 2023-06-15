import { HabModel } from "../models/hab_literarias.model.js";

const getAllHabs = async (req, res) => {
  try {
    const habs = await HabModel.findAll();

    res.json(habs);
  } catch {
    res.status(500).json({ error: "Não possui experiencia." });
  }
};

const createHab = async (req, res) => {
  try {
    const {
      id,
      grade,
      institute,
      type_course,
      course_name,
      entry_year,
      end_year,
    } = req.body;

    const newHab = await HabModel.create({
      id: id,
      grade: grade,
      institute: institute,
      type_course: type_course,
      course_name: course_name,
      entry_year: entry_year,
      end_year: end_year,
    });
    // Send a success response
    // Envie uma resposta com o cabeçalho CORS permitindo o domínio do frontend

    return (
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500") &
      res.status(201).json({ message: "Edu adicionada com sucesso" })
    );
  } catch (error) {
    // Handle any errors
    console.error("Error adding contact:", error);
    return res.status(500).json({ message: "Failed to add edu" });
  }
};

export { getAllHabs, createHab };
