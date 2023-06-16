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

const deleteHab = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete the element from the database using Sequelize
    await HabModel.destroy({ where: { id } });
    res.sendStatus(204); // Successfully deleted
  } catch (error) {
    res.status(500).json({ error: "Failed to delete" });
  }
};

const editHab = async (req, res) => {
  const { id } = req.params;
  const {
    newGrade,
    newInstitute,
    newType_course,
    newCourse_name,
    newEntry_year,
    newEnd_year,
  } = req.body;

  try {
    const updatedHab = await HabModel.update(
      {
        grade: newGrade,
        institute: newInstitute,
        type_course: newType_course,
        course_name: newCourse_name,
        entry_year: newEntry_year,
        end_year: newEnd_year,
      },
      { where: { id } }
    );
    res.json(updatedHab);
  } catch (error) {
    res.status(500).json({ error: "Failed to edit element" });
  }
};

export { getAllHabs, createHab, deleteHab, editHab };
