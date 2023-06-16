import { HardSkillModel } from "../models/hardskills.model.js";

const getAllSkills = async (req, res) => {
  try {
    const Skills = await HardSkillModel.findAll();

    res.json(Skills);
  } catch {
    res.status(500).json({ error: "Não possui skills." });
  }
};

const createSkill = async (req, res) => {
  try {
    const { id, name } = req.body;

    const newSkill = await HardSkillModel.create({
      id: id,
      name: name,
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

const deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete the element from the database using Sequelize
    await HardSkillModel.destroy({ where: { id } });
    res.sendStatus(204); // Successfully deleted
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Lang" });
  }
};

const editSkill = async (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;

  try {
    const updatedSkill = await HardSkillModel.update(
      {
        name: newName,
      },
      { where: { id } }
    );
    res.json(updatedSkill);
  } catch (error) {
    res.status(500).json({ error: "Failed to edit" });
  }
};

export { getAllSkills, createSkill, deleteSkill, editSkill };
