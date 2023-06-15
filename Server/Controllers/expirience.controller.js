import { ExperienceModel } from "../models/experience.model.js";

const getAllExperiences = async (req, res) => {
  try {
    const experiences = await ExperienceModel.findAll();

    res.json(experiences);
  } catch {
    res.status(500).json({ error: "Não possui experiencia." });
  }
};

const createExperience = async (req, res) => {
  try {
    const { id, company_name, entry_year, end_year, job, description } =
      req.body;

    const newExperience = await ExperienceModel.create({
      id: id,
      company_name: company_name,
      entry_year: entry_year,
      end_year: end_year,
      job: job,
      description: description,
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

export { getAllExperiences, createExperience };
