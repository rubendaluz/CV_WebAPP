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
  const HardSkillsConteiner = document.querySelector(".hard_skills_conteiner");
  const HardSkillsForm = document.querySelector(".form_hard_skills");
  const btnCloseHardSkillsForm = document.querySelector(
    "#close_hard_skills_form"
  );
  let id_hard_skill = 1;
  const max_hard_skilss = 6;

  // Variaveis correspondentes a secção de Experiencia Profissional
  const btnAddWorkXP = document.querySelector("#add_work_xp");
  const WorkXPConteiner = document.querySelector(".prof_xp_conteiner");
  const WorkXPForm = document.querySelector(".form_add_work_xp");
  const btnCloseWorkXPForm = document.querySelector("#close_work_xp_form");
  let id_workXP = 1;
  const max_WorkXPs = 6;

  // Funções correspondentes a secção de Linguagens de programação
  let insertLang = (nome, exp, id) => {
    langsConteiner.innerHTML += `
    <div class="lang" id="lang${id}">
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
  let insertHardSkill = (nome, id) => {
    HardSkillsConteiner.innerHTML += `<li id=hard_skill_${id}>
    ${nome}
    </li>`;
    console.log(`hard_skill_${id}`);
  };

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
  });

  HardSkillsForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário por padrão

    // Obter os valores dos campos
    let skill_name = document.querySelector("#hard_skill_name").value;

    if (id_hard_skill <= max_hard_skilss) {
      console.log("working...");
      insertHardSkill(skill_name, id_hard_skill);
      id_hard_skill++;
      console.log("Hard skill inserida com sucesso");
    }

    //fecha a janela do formulario
    closeHardSkillsForm();

    // // Limpar os campos do formulário
    document.querySelector("#hard_skill_name").value = "";
  });

  // Secção de Experiencia Profissional

  // Funções correspondentes a secção

  let insertWorkXP = (
    nome,
    entrance_year,
    exit_year,
    job_title,
    job_desc,
    id
  ) => {
    WorkXPConteiner.innerHTML += `<div class="work_xp" id="work_xp_${id}">
    <div>
      <h2 class="Company_name">${nome}</h2>
      <p>${entrance_year}-${exit_year}</p>
    </div>
    <div class="job_info">
      <h2 class="job_title">${job_title}</h2>
      <p class="job_description">
        ${job_desc}
      </p>
    </div>
  </div>`;
  };

  let openWorkXPForm = () => {
    WorkXPForm.style.display = "block";
  };

  let closeWorkXPForm = () => {
    WorkXPForm.style.display = "none";
  };

  btnCloseWorkXPForm.addEventListener("click", (e) => {
    closeWorkXPForm();
  });

  btnAddWorkXP.addEventListener("click", (e) => {
    openWorkXPForm();
  });

  WorkXPForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário por padrão
    // Obter os valores dos campos
    let company_name = document.querySelector("#company_name").value;
    let entrance_date = document.querySelector("#entrance_date").value;
    let exit_date = document.querySelector("#exit_date").value;
    let job_name = document.querySelector("#job_name").value;
    let job_description = document.querySelector("#job_description").value;

    if (id_workXP <= max_WorkXPs) {
      console.log("working...");
      insertWorkXP(
        company_name,
        entrance_date,
        exit_date,
        job_name,
        job_description,
        id_workXP
      );
      id_workXP++;
    }
    // // Limpar os campos do formulário
    document.querySelector("#company_name").value = "";
    document.querySelector("#job_name").value = "";
    document.querySelector("#job_description").value = "";
    document.querySelector("#entrance_date").value = "";
    document.querySelector("#exit_date").value = "";
    //fecha a janela do formulario
    closeWorkXPForm();
  });

  // Secção de Contactos
  // Variaveis correspondentes a Secção de Contactos
  const btnAddContact = document.querySelector("#add_contact");
  const contactsConteiner = document.querySelector(".conteiner_contacts");
  const contactsForm = document.querySelector(".form_add_contact");
  const btnClosecontactsForm = document.querySelector("#close_contacts_form");
  let id_contacts = 1;
  const max_contacts = 6;

  // Funções correspondentes a secção

  let addEmail = (email) => {
    contactsConteiner.innerHTML += `
    <div class="contact" id="contact_email">
    <i class="fas fa-envelope-open"></i>
    <p>${email}</p>
    <div class="edit_remove">
      <i class="fas fa-edit"></i>
      <i class="fas fa-trash-alt"></i>
    </div>
  </div>
    `;
  };

  let addPhone = (phone) => {
    contactsConteiner.innerHTML += `
    <div class="contact" id="contact_phone_number">
      <i class="fas fa-phone-alt"></i>
      <p>${phone}</p>
      <div class="edit_remove">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
    `;
  };

  let addWhatsapp = (whats) => {
    contactsConteiner.innerHTML += `
    <div class="contact" id="contact_whatsapp">
      <i class="fab fa-whatsapp"></i>
      <p>${whats}</p>
      <div class="edit_remove">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
    `;
  };

  let openContactsForm = () => {
    contactsForm.style.display = "block";
  };

  let closeContactsForm = () => {
    contactsForm.style.display = "none";
  };

  btnClosecontactsForm.addEventListener("click", (e) => {
    closeContactsForm();
  });

  let selectedContactType;
  btnAddContact.addEventListener("click", (e) => {
    openContactsForm();
    selectedContactType = checkSelectedContactType();
    hideInputsContacts(selectedContactType);
  });

  document
    .querySelector("#contact_type_selection")
    .addEventListener("change", (e) => {
      selectedContactType = checkSelectedContactType();
      hideInputsContacts(selectedContactType);
    });

  let checkSelectedContactType = () => {
    let selectContactWhats = document.querySelector("#selectContactWhats");
    let selectContactPhone = document.querySelector("#selectContactPhone");
    let selectContactEmail = document.querySelector("#selectContactEmail");
    if (selectContactWhats.checked) return "whats_selected";
    else if (selectContactPhone.checked) return "phone_selected";
    else if (selectContactEmail.checked) return "email_selected";
  };

  let hideInputsContacts = (selected) => {
    let insert_email = document.querySelector(".insert_email");
    let insert_phone = document.querySelector(".insert_number");
    let insert_whats = document.querySelector(".insert_whats");

    switch (selected) {
      case "phone_selected":
        insert_phone.style.display = "block";
        insert_email.style.display = "none";
        insert_whats.style.display = "none";
        break;

      case "email_selected":
        insert_email.style.display = "block";
        insert_phone.style.display = "none";
        insert_whats.style.display = "none";
        break;

      case "whats_selected":
        insert_whats.style.display = "block";
        insert_email.style.display = "none";
        insert_phone.style.display = "none";
        break;

      default:
        break;
    }
  };

  contactsForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário por padrão
    // Obter os valores dos campos
    let whats = document.querySelector("#whatsapp").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    console.log("working...");

    switch (checkSelectedContactType()) {
      case "phone_selected":
        addPhone(phone);
        break;

      case "email_selected":
        addEmail(email);
        break;

      case "whats_selected":
        addWhatsapp(whats);
        break;

      default:
        break;
    }

    //fecha a janela do formulario
    closeContactsForm();
  });

  // Secção de Contactos
  // Variaveis correspondentes a Secção de Contactos
  const btnAddSocial = document.querySelector("#add_social");
  const socialConteiner = document.querySelector(".conteiner_socials");
  const socialsForm = document.querySelector(".form_add_social");
  const btnCloseSocialsForm = document.querySelector("#close_social_form");
  // let id_socials = 1;
  // const ma = 6;

  // Funções correspondentes a secção

  let addTelegram = (telegram) => {
    socialConteiner.innerHTML += `
    <div class="contact" id="social_telegram">
    <i class="fas fa-paper-plane"></i>
    <p>${telegram}</p>
    <div class="edit_remove">
      <i class="fas fa-edit"></i>
      <i class="fas fa-trash-alt"></i>
    </div>
  </div>
    `;
  };

  let addYoutube = (channel) => {
    csocialConteiner.innerHTML += `
    <div class="contact" id="social_youtube">
    <i class="fab fa-youtube"></i>
      <p>${channel}</p>
      <div class="edit_remove">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
    `;
  };

  let addLinkedin = (link) => {
    socialConteiner.innerHTML += `
    <div class="contact" id="contact_whatsapp">
      <i class="fab fa-linkedin"></i>
      <p>${link}</p>
      <div class="edit_remove">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
    `;
  };

  let addGithub = (link) => {
    socialConteiner.innerHTML += `
    <div class="contact" id="contact_whatsapp">
      <i class="fab fa-github"></i>
      <p>${link}</p>
      <div class="edit_remove">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
    `;
  };

  let addFacebook = (link) => {
    socialConteiner.innerHTML += `
    <div class="contact" id="contact_whatsapp">
      <i class="fab fa-facebook-square"></i>
      <p>${link}</p>
      <div class="edit_remove">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
    `;
  };

  let openSocialsForm = () => {
    socialsForm.style.display = "block";
  };

  let closeSocialsForm = () => {
    socialsForm.style.display = "none";
  };

  btnCloseSocialsForm.addEventListener("click", (e) => {
    closeSocialsForm();
  });

  let selectedSocialType;
  btnAddSocial.addEventListener("click", (e) => {
    openSocialsForm();
    selectedSocialType = checkSelectedSocialType();
    hideInputsSocials(selectedSocialType);
  });

  document
    .querySelector("#social_type_selection")
    .addEventListener("change", (e) => {
      selectedSocialType = checkSelectedSocialType();
      hideInputsSocials(selectedSocialType);
    });

  let checkSelectedSocialType = () => {
    let selectSocialTelegram = document.querySelector("#selectSocialTelegram");
    let selectSocialYoutube = document.querySelector("#selectSocialYoutube");
    let selectSocialLinkedin = document.querySelector("#selectSocialLinkedin");
    let selectSocialGithub = document.querySelector("#selectSocialGithub");
    let selectSocialFacebook = document.querySelector("#selectSocialFacebook");
    if (selectSocialFacebook.checked) return "facebook_selected";
    else if (selectSocialGithub.checked) return "github_selected";
    else if (selectSocialLinkedin.checked) return "linkedin_selected";
    else if (selectSocialTelegram.checked) return "telegram_selected";
    else if (selectSocialYoutube.checked) return "youtube_selected";
  };

  let hideInputsSocials = (selected) => {
    let insert_telegram = document.querySelector(".insert_telegram");
    let insert_youtube = document.querySelector(".insert_youtube");
    let insert_linkedin = document.querySelector(".insert_linkedin");
    let insert_github = document.querySelector(".insert_github");
    let insert_facebook = document.querySelector(".insert_facebook");

    switch (selected) {
      case "telegram_selected":
        insert_telegram.style.display = "block";
        insert_youtube.style.display = "none";
        insert_linkedin.style.display = "none";
        insert_github.style.display = "none";
        insert_facebook.style.display = "none";
        break;

      case "youtube_selected":
        insert_telegram.style.display = "none";
        insert_youtube.style.display = "block";
        insert_linkedin.style.display = "none";
        insert_github.style.display = "none";
        insert_facebook.style.display = "none";
        break;

      case "linkedin_selected":
        insert_telegram.style.display = "none";
        insert_youtube.style.display = "none";
        insert_linkedin.style.display = "block";
        insert_github.style.display = "none";
        insert_facebook.style.display = "none";
        break;

      case "github_selected":
        insert_telegram.style.display = "none";
        insert_youtube.style.display = "none";
        insert_linkedin.style.display = "none";
        insert_github.style.display = "block";
        insert_facebook.style.display = "none";
        break;
      case "facebook_selected":
        insert_telegram.style.display = "none";
        insert_youtube.style.display = "none";
        insert_linkedin.style.display = "none";
        insert_github.style.display = "none";
        insert_facebook.style.display = "block";
        break;

      default:
        break;
    }
  };

  socialsForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário por padrão
    // Obter os valores dos campos
    let telegram = document.querySelector("#telegram").value;
    let youtube = document.querySelector("#youtube").value;
    let linkedin = document.querySelector("#linkedin").value;
    let github = document.querySelector("#github").value;
    let facebook = document.querySelector("#facebook").value;

    console.log("working...");

    switch (checkSelectedSocialType()) {
      case "telegram_selected":
        addTelegram(telegram);
        break;

      case "youtube_selected":
        addYoutube(youtube);
        break;

      case "linkedin_selected":
        addLinkedin(linkedin);
        break;

      case "github_selected":
        addGithub(github);
        break;
      case "facebook_slected":
        addFacebook(facebook);
        break;

      default:
        break;
    }
    //fecha a janela do formulario
    closeSocialsForm();
  });

  // Secção perfil
  let btnEditInfoText = document.querySelector("#btn_edit_info_text");
  let infoForm = document.querySelector(".edit_info_form");
  let btnCloseInfoForm = document.querySelector("#close_info_form");
  let text = document.querySelector("#info_text").innerHTML;
  let input_info = document.querySelector("#input_info");

  let openInfoForm = () => {
    infoForm.style.display = "block";
  };

  btnCloseInfoForm.addEventListener("click", (e) => {
    infoForm.style.display = "none";
  });

  btnEditInfoText.addEventListener("click", (e) => {
    openInfoForm();
    input_info.innerHTML = text;
  });

  infoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário por padrão
    nextText = document.querySelector("#input_info").value;
    input_info.innerHTML = "";
    input_info.innerHTML = nextText;
  });
});
