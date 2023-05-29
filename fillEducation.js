import { conectResume } from "./conectResume.js";

const educationContainer = document.querySelector("[data-education]");

export default function buildEducation(education) {
  const educationItem = document.createElement("div");
  educationItem.classList.add("item", "mb-3");

  const educationHeader = document.createElement("div");
  educationHeader.classList.add(
    "item-heading",
    "row",
    "align-items-center",
    "mb-2"
  );

  const educationTitle = document.createElement("h4");
  educationTitle.classList.add(
    "item-title",
    "col-12",
    "col-md-6",
    "col-lg-8",
    "mb-2",
    "mb-md-0"
  );
  educationTitle.textContent = education.degree;

  educationHeader.appendChild(educationTitle);

  const educationDate = document.createElement("div");
  // <div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Open Source</div>
  educationDate.classList.add(
    "item-meta",
    "col-12",
    "col-md-6",
    "col-lg-4",
    "text-muted",
    "text-start",
    "text-md-end"
  );
  educationDate.textContent = education.startYear + " - " + education.endYear;

  educationHeader.appendChild(educationDate);

  const educationDescription = document.createElement("div");
  educationDescription.classList.add("item-content");
  educationDescription.innerHTML = `<p>${education.institution}</p>
  `;

  educationItem.appendChild(educationHeader);
  educationItem.appendChild(educationDescription);

  return educationItem;
}

async function fillEducation() {
  const data = await conectResume();
  data.education.forEach((education) => {
    educationContainer.appendChild(buildEducation(education));
  });
}

fillEducation();
