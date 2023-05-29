import { conectResume } from "./conectResume.js";

const skillsResume = document.querySelector("[data-skills]");

export default function createSkillsItem(type) {
  const itemSkills = document.createElement("div");
  itemSkills.classList.add("item");

  const itemTitle = document.createElement("h4");
  itemTitle.classList.add("item-title");
  itemTitle.textContent = type.category;
  itemSkills.appendChild(itemTitle);

  const itemSkillsList = document.createElement("ul");
  itemSkillsList.classList.add(
    "list-unstyled",
    "resume-skills-list",
    "skills-list"
  );

  type.skills.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.classList.add("mb-2",  "skills-item");
    skillItem.textContent = skill;
    itemSkillsList.appendChild(skillItem);
  });

  itemSkills.appendChild(itemSkillsList);

  return itemSkills;
}

async function fillSkills() {
  const data = await conectResume();

  for (const category in data.skills) {
    const skillsItem = createSkillsItem({
      category,
      skills: data.skills[category],
    });
    skillsResume.appendChild(skillsItem);
  }
}

fillSkills();
