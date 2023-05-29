import { conectResume } from "./conectResume.js";

const sideResume = document.querySelector("[data-side]");

export function createLanguage(languages) {
  const languageItem = document.createElement("section");
  languageItem.classList.add("skills-section", "py-3");

  const itemTitle = document.createElement("h4");
  itemTitle.classList.add("text-uppercase", "resume-section-heading", "mb-4");
  itemTitle.textContent = "Languages";
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
  itemTitle.textContent = "Certification";
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
