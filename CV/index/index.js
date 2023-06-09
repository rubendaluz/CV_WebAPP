document.addEventListener("DOMContentLoaded", () => {
  // Variaveis correspondentes a secção de Linguagens de programação
  const btnAddLang = document.querySelector("#addLang");
  const langsConteiner = document.querySelector(".langs_container");
  const langsForm = document.querySelector(".form_add_lang");
  const btnCloseLangsForm = document.querySelector("#close_langs_form");
  let id_langs = 1;
  const max_langs = 6;

  // Variaveis correspondentes a secção de Hard skills
  const btnAddHardSkill = document.querySelector("#add_hard_skill");
  // const langsConteiner = document.querySelector(".langs_container");
  const HardSkillsForm = document.querySelector(".form_hard_skills");
  const btnCloseHardSkillsForm = document.querySelector(
    "#close_hard_skills_form"
  );
  let id_hard_skill = 1;
  const max_hard_skilss = 6;

  // Funções correspondentes a secção de Linguagens de programação
  let insertLang = (nome, exp, id) => {
    langsConteiner.innerHTML += `<div class="lang" id="lang${id}">
    <p class="lang_name">${nome}</p>
    <div class="skill_bar">
      <div class="lang1_amount" id="lang${id}_amount"></div>
    </div>
    <div class="edit_remove">
      <i class="fas fa-edit"></i>
      <i class="fas fa-trash-alt"></i>
    </div>
    </div>`;
    console.log(`lang${id}_amount`);
    const bar = document.querySelector(`#lang${id}_amount`);
    bar.style.width = `${exp}%`;
  };

  let openLangsForm = () => {
    langsForm.style.display = "block";
  };

  let closeLangsForm = () => {
    langsForm.style.display = "none";
  };

  btnCloseLangsForm.addEventListener("click", (e) => {
    closeLangsForm();
  });

  btnAddLang.addEventListener("click", (e) => {
    openLangsForm();
  });
  langsForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário por padrão
    // Obter os valores dos campos
    let lang_name = document.querySelector("#lang_name").value;
    let lang_xp = document.querySelector("#lang_xp").value;

    if (id_langs <= max_langs) {
      console.log("working...");
      insertLang(lang_name, lang_xp, id_langs);
      id_langs++;
    }
    // // Limpar os campos do formulário
    document.querySelector("#lang_name").value = "";
    document.querySelector("#lang_xp").value = "";
    //fecha a janela do formulario
    closeLangsForm();
  });
  // Funções correspondentes a secção de Hard Skills
  // let insertHardSkill = (nome, exp, id) => {
  //   langsConteiner.innerHTML += `<div class="lang" id="lang${id}">
  //   <p class="lang_name">${nome}</p>
  //   <div class="skill_bar">
  //     <div class="lang1_amount" id="lang${id}_amount"></div>
  //   </div>
  //   <div class="edit_remove">
  //     <i class="fas fa-edit"></i>
  //     <i class="fas fa-trash-alt"></i>
  //   </div>
  //   </div>`;
  //   console.log(`lang${id}_amount`);
  //   const bar = document.querySelector(`#lang${id}_amount`);
  //   bar.style.width = `${exp}%`;
  // };

  let openHardSkillsForm = () => {
    HardSkillsForm.style.display = "block";
  };

  let closeHardSkillsForm = () => {
    HardSkillsForm.style.display = "none";
  };

  btnCloseHardSkillsForm.addEventListener("click", (e) => {
    closeHardSkillsForm();
  });

  btnAddHardSkill.addEventListener("click", (e) => {
    openHardSkillsForm();
    HardSkillsForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede o envio do formulário por padrão

      // Obter os valores dos campos
      let skill_name = document.querySelector("#hard_skill_name").value;

      if (id_hard_skill <= max_hard_skilss) {
        // console.log("working...");
        // insertLang(lang_name, lang_xp, id);
        // id++;
        console.log("Hard skill inserida com sucesso");
      }

      //fecha a janela do formulario
      closeHardSkillsForm();

      // // Limpar os campos do formulário (opcional)
      // document.querySelector("#lang_name").value = "";
      // document.querySelector("#lang_xp").value = "";
    });
  });
});
