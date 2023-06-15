let addEmail,
  addPhone,
  addGithub,
  addFacebook,
  addWhatsapp,
  addLinkedin,
  addYoutube,
  addTelegram;
let insertLang;
let insertHardSkill;
let insertWorkXP;
let edit_info;
let insertHab;

let id_contacts = 1;
let id_langs = 1;
let id_hard_skill = 1;
let id_workXP = 1;
let id_habs = 1;

// Função para carregar o conteúdo protegido
let loadProtectedContent = () => {
  if (isTokenValid()) {
    // Carregue o conteúdo protegido
    console.log(isTokenValid());
    document.querySelector(".edit_remove").style.display = "block";
    document.querySelector(".fa-plus").style.display = "block";
  } else {
    // Redirecione para a página de login
    //window.location.href = "../auth_page/index.html";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getAllContacts();
  getAllLangs();
  getAllSkills();
  getAllProfile();
  loadProtectedContent();
  getAllExperiences();
  getAllHabs();

  // Variaveis correspondentes a secção de Linguagens de programação
  const btnAddLang = document.querySelector("#addLang");
  const langsConteiner = document.querySelector(".langs_container");
  const langsForm = document.querySelector(".form_add_lang");
  const btnCloseLangsForm = document.querySelector("#close_langs_form");
  const max_langs = 10;

  // Variaveis correspondentes a secção de Hard skills
  const btnAddHardSkill = document.querySelector("#add_hard_skill");
  const HardSkillsConteiner = document.querySelector(".hard_skills_conteiner");
  const HardSkillsForm = document.querySelector(".form_hard_skills");
  const btnCloseHardSkillsForm = document.querySelector(
    "#close_hard_skills_form"
  );
  const max_hard_skilss = 6;

  // Variaveis correspondentes a secção de Experiencia Profissional
  const btnAddWorkXP = document.querySelector("#add_work_xp");
  const WorkXPConteiner = document.querySelector(".prof_xp_conteiner");
  const WorkXPForm = document.querySelector(".form_add_work_xp");
  const btnCloseWorkXPForm = document.querySelector("#close_work_xp_form");
  const max_WorkXPs = 6;

  // Funções correspondentes a secção de Linguagens de programação
  insertLang = (nome, exp, id) => {
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
      createLang(id_langs, lang_name, lang_xp);
      id_langs++;
    }
    // // Limpar os campos do formulário
    document.querySelector("#lang_name").value = "";
    document.querySelector("#lang_xp").value = "";
    //fecha a janela do formulario
    closeLangsForm();
  });

  // Funções correspondentes a secção de Hard Skills
  insertHardSkill = (nome, id) => {
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
      createSkill(id_hard_skill, skill_name);
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

  insertWorkXP = (nome, entrance_year, exit_year, job_title, job_desc, id) => {
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
      createExperience(
        id_workXP,
        company_name,
        entrance_date,
        exit_date,
        job_name,
        job_description
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
  const max_contacts = 6;

  // Funções correspondentes a secção

  addEmail = (email) => {
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

  addPhone = (phone) => {
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

  addWhatsapp = (whats) => {
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
        createContact(id_contacts, "personal", "number", phone);
        ++id_contacts;
        break;

      case "email_selected":
        addEmail(email);
        createContact(id_contacts, "personal", "email", email);
        ++id_contacts;
        break;

      case "whats_selected":
        addWhatsapp(whats);
        createContact(id_contacts, "personal", "whatsapp", whats);
        ++id_contacts;
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

  addTelegram = (telegram) => {
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

  addYoutube = (channel) => {
    socialConteiner.innerHTML += `
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

  addLinkedin = (link) => {
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

  addGithub = (link) => {
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

  addFacebook = (link) => {
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
        createContact(id_contacts, "social", "telegram", telegram);
        ++id_contacts;
        break;

      case "youtube_selected":
        addYoutube(youtube);
        createContact(id_contacts, "social", "youtube", youtube);
        ++id_contacts;
        break;

      case "linkedin_selected":
        addLinkedin(linkedin);
        createContact(id_contacts, "social", "linkedin", linkedin);
        ++id_contacts;
        break;

      case "github_selected":
        addGithub(github);
        createContact(id_contacts, "social", "github", github);
        ++id_contacts;
        break;
      case "facebook_slected":
        addFacebook(facebook);
        createContact(id_contacts, "social", "facebook", facebook);
        ++id_contacts;
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

  let closeInfoForm = () => {
    infoForm.style.display = "none";
  };

  btnCloseInfoForm.addEventListener("click", (e) => {
    infoForm.style.display = "none";
  });

  btnEditInfoText.addEventListener("click", (e) => {
    openInfoForm();
    input_info.innerHTML = text;
  });

  edit_info = (info) => {
    const conteiner = document.querySelector("#info_text");
    conteiner.innerHTML = info;
    closeInfoForm();
  };

  infoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário por padrão
    const nextText = document.querySelector("#input_info").value;
    edit_info(nextText);
    editProfileInfo(1, nextText);
  });

  // Secção Educação

  let btnAddEdu = document.querySelector("#add_edu");
  let eduForm = document.querySelector(".form_add_hab");
  let btnCloseEduForm = document.querySelector("#close_habs_form");
  let habsConteiner = document.querySelector(".habs_conteiner");

  insertHab = (
    institute,
    grade,
    entry_year,
    end_year,
    course_name,
    type_course,
    id
  ) => {
    habsConteiner.innerHTML += `<div class="habs" id="hab_${id}">
    <div>
      <h2 class="institute_name">${institute}</h2>
      <p>${grade}</p>
      <p>${entry_year}-${end_year}</p>
    </div>
    <div class="hab_info">
      <h2 class="job_title">${course_name}</h2>
      <p class="job_description">
        ${type_course}
      </p>
    </div>
  </div>`;
  };

  btnAddEdu.addEventListener("click", (e) => {
    eduForm.style.display = "block";
  });

  let closeEduForm = () => {
    eduForm.style.display = "none";
  };

  btnCloseEduForm.addEventListener("click", (e) => {
    closeEduForm();
  });

  eduForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const institute = document.querySelector("#institute").value;
    const grade = document.querySelector("#grade").value;
    const type_course = document.querySelector("#type_course").value;
    const course_name = document.querySelector("#course_name").value;
    const entry_year = document.querySelector("#entry_year").value;
    const end_year = document.querySelector("#end_year").value;

    console.log("working");
    insertHab(
      institute,
      grade,
      entry_year,
      end_year,
      course_name,
      type_course,
      1
    );
    createHab(
      id_habs,
      grade,
      institute,
      type_course,
      entry_year,
      end_year,
      course_name,
      type_course
    );
    id_habs++;

    closeEduForm();
  });

  //

  document.querySelector("#download").addEventListener("click", (e) => {
    e.preventDefault();
    downloadAsPDF();
  });
});

// Verifica se o token está presente e válido
let isTokenValid = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    // Token não está presente
    console.log("Token não está presente");
    return false;
  }

  // Verifique o token no servidor (exemplo: usando a biblioteca jsonwebtoken)
  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("O token é válido");
    return true;
  } catch (error) {
    // O token é inválido ou expirou
    console.log("O token não é válido");
    return false;
  }
};

let getAllContacts = () => {
  // Fazer uma requisição AJAX para obter as informações dos produtos
  const xhr = new XMLHttpRequest();
  // Replace with your login endpoint URL
  const url = "http://localhost:4242/api/contacts/getAllContacts";
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const contacts = JSON.parse(xhr.responseText);
      console.log(contacts);
      // Atualizar o conteúdo do elemento com as informações dos produtos
      contacts.forEach((contact) => {
        if (contact["classe"] == "personal") {
          if (contact["type"] == "email") {
            addEmail(contact["content"]);
            ++id_contacts;
          } else if (contact["type"] == "number") {
            addPhone(contact["content"]);
            ++id_contacts;
          } else if (contact["type"] == "whatsapp") {
            addWhatsapp(contact["content"]);
            ++id_contacts;
          }
        } else if (contact["classe"] == "social") {
          if (contact["type"] == "telegram") {
            addTelegram(contact["content"]);
            ++id_contacts;
          } else if (contact["type"] == "github") {
            addGithub(contact["content"]);
            ++id_contacts;
          } else if (contact["type"] == "youtube") {
            addYoutube(contact["content"]);
            ++id_contacts;
          } else if (contact["type"] == "linkedin") {
            addLinkedin(contact["content"]);
            ++id_contacts;
          } else if (contact["type"] == "facebook") {
            addFacebook(contact["content"]);
            ++id_contacts;
          }
        }
      });
    } else {
      console.error("Erro ao obter os produtos:", xhr.status);
    }
  };
  xhr.send();
};

// let createContact = (id, classe, tipo, content) => {
//   // Fazer uma requisição AJAX para obter as informações dos produtos
//   const data = { id, classe, tipo, content };
//   const xhr = new XMLHttpRequest();
//   // Replace with your login endpoint URL

//   const url = "http://localhost:4242/api/contacts/createContact";
//   xhr.open("POST", url, true);
//   xhr.setRequestHeader("Content-Type", "application/json");

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 201) {
//       const response = JSON.parse(xhr.responseText);
//       console.log(response);
//     } else if (xhr.readyState === 4) {
//       console.error(
//         "Erro ao fazer a solicitação. Código de status: " + xhr.status
//       );
//     }
//   };

//   const dataJSON = JSON.stringify({ data });
//   console.log(dataJSON);

//   xhr.send(dataJSON);
// };

let createContact = (id, classe, type, content) => {
  const data = { id, classe, type, content };
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:4242/api/contacts/createContact";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
      } else {
        console.error(
          "Erro ao fazer a solicitação. Código de status: " + xhr.status
        );
      }
    }
  };

  const dataJSON = JSON.stringify(data);
  console.log(dataJSON);

  xhr.send(dataJSON);
};

let getAllLangs = () => {
  // Fazer uma requisição AJAX para obter as informações dos produtos
  const xhr = new XMLHttpRequest();
  // Replace with your login endpoint URL
  const url = "http://localhost:4242/api/langs/getAllLangs";
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const langs = JSON.parse(xhr.responseText);
      console.log(langs);
      // Atualizar o conteúdo
      langs.forEach((lang) => {
        insertLang(lang["nome"], lang["exp"], lang["id"]);
        ++id_langs;
      });
    } else {
      console.error("Erro ao obter os produtos:", xhr.status);
    }
  };
  xhr.send();
};

let createLang = (id, nome, exp) => {
  const data = { id, nome, exp };
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:4242/api/langs/createLang";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
      } else {
        console.error(
          "Erro ao fazer a solicitação. Código de status: " + xhr.status
        );
      }
    }
  };

  const dataJSON = JSON.stringify(data);
  console.log(dataJSON);

  xhr.send(dataJSON);
};

let getAllSkills = () => {
  // Fazer uma requisição AJAX para obter as informações dos produtos
  const xhr = new XMLHttpRequest();
  // Replace with your login endpoint URL
  const url = "http://localhost:4242/api/skills/getAllSkills";
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const skills = JSON.parse(xhr.responseText);
      console.log(skills);
      // Atualizar o conteúdo
      skills.forEach((skill) => {
        insertHardSkill(skill["name"], skill["id"]);
        id_hard_skill++;
      });
    } else {
      console.error("Erro ao obter os produtos:", xhr.status);
    }
  };
  xhr.send();
};

let createSkill = (id, name) => {
  const data = { id, name };
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:4242/api/skills/createSkill";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
      } else {
        console.error(
          "Erro ao fazer a solicitação. Código de status: " + xhr.status
        );
      }
    }
  };

  const dataJSON = JSON.stringify(data);
  console.log(dataJSON);

  xhr.send(dataJSON);
};

let getAllProfile = () => {
  // Fazer uma requisição AJAX para obter as informações dos produtos
  const xhr = new XMLHttpRequest();
  const myName = document.querySelector("#myName");
  const myJob = document.querySelector("#myJob");
  // Replace with your login endpoint URL
  const url = "http://localhost:4242/api/profile/getAllProfile";
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const profile = JSON.parse(xhr.responseText);
      console.log(profile);
      // Atualizar o conteúdo
      profile.forEach((profile) => {
        edit_info(profile["description"]);
        myName.innerHTML = profile["name"];
        myJob.innerHTML = profile["job"];
      });
    } else {
      console.error("Erro ao obter os produtos:", xhr.status);
    }
  };
  xhr.send();
};

const editProfileInfo = async (id, text) => {
  const url = `http://localhost:4242/api/profile/editInfo`;

  try {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log(response);
        } else {
          console.error("Erro na solicitação. Código de status:", xhr.status);
        }
      }
    };

    const data = JSON.stringify({ id, text });
    xhr.send(data);
  } catch (error) {
    console.error("Erro durante a solicitação:", error);
  }
};

let getAllExperiences = () => {
  // Fazer uma requisição AJAX para obter as informações dos produtos
  const xhr = new XMLHttpRequest();
  // Replace with your login endpoint URL
  const url = "http://localhost:4242/api/experiences/getAllExperiences";
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const expirences = JSON.parse(xhr.responseText);
      console.log(expirences);
      // Atualizar o conteúdo
      expirences.forEach((expirence) => {
        insertWorkXP(
          expirence["company_name"],
          expirence["entry_year"],
          expirence["end_year"],
          expirence["job"],
          expirence["description"],
          expirence["id"]
        );
        id_workXP++;
      });
    } else {
      console.error("Erro ao obter os produtos:", xhr.status);
    }
  };
  xhr.send();
};

let createExperience = (
  id,
  company_name,
  entry_year,
  end_year,
  job,
  description
) => {
  const data = {
    id,
    company_name,
    entry_year,
    end_year,
    job,
    description,
  };
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:4242/api/experiences/createExperiences";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
      } else {
        console.error(
          "Erro ao fazer a solicitação. Código de status: " + xhr.status
        );
      }
    }
  };

  const dataJSON = JSON.stringify(data);
  console.log(dataJSON);

  xhr.send(dataJSON);
};

let getAllHabs = () => {
  // Fazer uma requisição AJAX para obter as informações dos produtos
  const xhr = new XMLHttpRequest();
  // Replace with your login endpoint URL
  const url = "http://localhost:4242/api/habs/getAllHabs";
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const habs = JSON.parse(xhr.responseText);
      console.log(habs);
      // Atualizar o conteúdo
      habs.forEach((hab) => {
        insertHab(
          hab["institute"],
          hab["grade"],
          hab["entry_year"],
          hab["end_year"],
          hab["course_name"],
          hab["type_course"],
          hab["id"]
        );
        id_habs++;
      });
    } else {
      console.error("Erro ao obter os produtos:", xhr.status);
    }
  };
  xhr.send();
};

let createHab = (
  id,
  grade,
  institute,
  type_course,
  course_name,
  entry_year,
  end_year
) => {
  const data = {
    id,
    grade,
    institute,
    type_course,
    course_name,
    entry_year,
    end_year,
  };
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:4242/api/habs/createHab";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
      } else {
        console.error(
          "Erro ao fazer a solicitação. Código de status: " + xhr.status
        );
      }
    }
  };

  const dataJSON = JSON.stringify(data);
  console.log(dataJSON);

  xhr.send(dataJSON);
};

function downloadAsPDF() {
  //import jsPDF from "jspdf";
  // Cria um novo objeto jsPDF
  const pdf = new jsPDF();

  // Obtém o conteúdo HTML da página atual
  const htmlContent = document.documentElement;

  // Converte o conteúdo HTML para PDF
  pdf.html(htmlContent, {
    callback: function () {
      // Salva o PDF como um arquivo
      pdf.save("pagina.pdf");
    },
  });
}
