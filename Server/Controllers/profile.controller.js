import { ProfileModel } from "../models/profile.model.js";

const getAllProfile = async (req, res) => {
  try {
    const profile = await ProfileModel.findAll();

    res.json(profile);
  } catch {
    res.status(500).json({ error: "Perfil indisponivel." });
  }
};

const editInfo = async (req, res) => {
  // const {} = req.params;
  const { id, text } = req.body;

  try {
    const profile = await ProfileModel.findByPk(id);
    console.log(id);

    if (!profile) {
      return res.status(404).json({ error: `User profile not found  ${id}` });
    }

    profile.description = text;

    await profile.save();

    res.json(profile);
  } catch {
    res.status(500).json({ error: "Perfil indisponivel." });
  }
};

export { getAllProfile, editInfo };
