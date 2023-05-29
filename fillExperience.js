import { conectResume } from "./conectResume.js";

const resumeExperiences = document.querySelector("[data-experience]");

export default function createExperience(experience) {
  const experienceItem = document.createElement("div");
  experienceItem.classList.add("item", "mb-3");

  const experienceHeader = document.createElement("div");
  experienceHeader.classList.add(
    "item-heading",
    "row",
    "align-items-center",
    "mb-2"
  );

  const experienceTitle = document.createElement("h4");
  experienceTitle.classList.add(
    "item-title",
    "col-12",
    "col-md-6",
    "col-lg-8",
    "mb-2",
    "mb-md-0"
  );
  experienceTitle.textContent = experience.title;

  const experienceCompanyAndDate = document.createElement("div");
  experienceCompanyAndDate.classList.add(
    "item-meta",
    "text-muted",
    "text-start",
    "text-md-end",
    "col-12",
    "col-md-6",
    "col-lg-4"
  );
  experienceCompanyAndDate.textContent = `${experience.company} | ${experience.startDate} - ${experience.endDate}`;

  experienceHeader.appendChild(experienceTitle);
  experienceHeader.appendChild(experienceCompanyAndDate);

  const experienceContent = document.createElement("div");
  experienceContent.classList.add("item-content");

  const experienceDescription = document.createElement("ul");
  experienceDescription.classList.add("resume-list");

  experience.description.forEach((desc) => {
    const experienceDescriptionItem = document.createElement("li");
    experienceDescriptionItem.textContent = desc;
    experienceDescription.appendChild(experienceDescriptionItem);
  });

  experienceContent.appendChild(experienceDescription);

  experienceItem.appendChild(experienceHeader);
  experienceItem.appendChild(experienceContent);
  return experienceItem;
}

async function fillExperience() {
  const data = await conectResume();
  data.experience.forEach((exp) => {
    resumeExperiences.appendChild(createExperience(exp));
  });
}

fillExperience();
