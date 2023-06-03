import { conectResume } from "./conectResume.js";

const sideResume = document.querySelector("[data-side]");

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var jsonLink = "resume";
var idioma = getUrlParameter("lang");
var languageTitle = "Languages";
var certificationTitle = "Certification";
switch (idioma) {
  case "en":
    languageTitle = "Languages";
    certificationTitle = "Certification";
    break;
  case "pt-br":
    languageTitle = "Idiomas";
    certificationTitle = "Certificação";
    break;
  case "fr":
    languageTitle = "Langues";
    certificationTitle = "Certification";
    break;
}

export function createLanguage(languages) {
  const languageItem = document.createElement("section");
  languageItem.classList.add("skills-section", "py-3");

  const itemTitle = document.createElement("h4");
  itemTitle.classList.add("text-uppercase", "resume-section-heading", "mb-4");
  itemTitle.textContent = languageTitle;
  languageItem.appendChild(itemTitle);

  const languageList = document.createElement("ul");
  languageList.classList.add("list-unstyled", "resume-lang-list");

  languages.forEach((item) => {
    const languageItem = document.createElement("li");
    languageItem.classList.add("mb-2");
    languageItem.textContent = item.language;
    // <span class="text-muted">(Professional)</span>

    const levelItem = document.createElement("span");
    levelItem.classList.add("text-muted");
    levelItem.textContent = ` (${item.proficiency})`;
    languageItem.appendChild(levelItem);

    languageList.appendChild(languageItem);
  });

  languageItem.appendChild(languageList);

  return languageItem;
}

export function createCertification(certification) {
  const certificationItem = document.createElement("section");
  certificationItem.classList.add("skills-section", "py-3");

  const itemTitle = document.createElement("h4");
  itemTitle.classList.add("text-uppercase", "resume-section-heading", "mb-4");
  itemTitle.textContent = certificationTitle;
  certificationItem.appendChild(itemTitle);

  const certificationList = document.createElement("ul");
  certificationList.classList.add("list-unstyled", "resume-lang-list");

  certification.forEach((item) => {
    const certificationItem = document.createElement("li");
    certificationItem.classList.add("mb-2");
    certificationItem.textContent = item;

    certificationList.appendChild(certificationItem);
  });

  certificationItem.appendChild(certificationList);

  return certificationItem;
}

async function fillSkills() {
  const data = await conectResume();

  sideResume.appendChild(createLanguage(data.languages));
  sideResume.appendChild(createCertification(data.certifications));
}

fillSkills();
