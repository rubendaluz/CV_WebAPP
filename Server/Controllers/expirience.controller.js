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

const deleteExperience = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete the element from the database using Sequelize
    await ExperienceModel.destroy({ where: { id } });
    res.sendStatus(204); // Successfully deleted
  } catch (error) {
    res.status(500).json({ error: "Failed to delete" });
  }
};

const editExperience = async (req, res) => {
  const { id } = req.params;
  const {
    newCompany_name,
    newEntry_year,
    newEnd_year,
    newJob,
    newDescription,
  } = req.body;

  try {
    const updatedExp = await ExperienceModel.update(
      {
        company_name: newCompany_name,
        entry_year: newEntry_year,
        end_year: newEnd_year,
        job: newJob,
        description: newDescription,
      },
      { where: { id } }
    );
    res.json(updatedExp);
  } catch (error) {
    res.status(500).json({ error: "Failed to edit element" });
  }
};

export {
  getAllExperiences,
  createExperience,
  deleteExperience,
  editExperience,
};
