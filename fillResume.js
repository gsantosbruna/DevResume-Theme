import { conectResume } from "./conectResume.js";

export default function fillHeader(data) {
  const resumeName = document.querySelector(".resume-name");
  const resumeTagLine = document.querySelector(".resume-tagline");
  const resumeTel = document.querySelector("[data-tel]");
  const resumeEmail = document.querySelector("[data-email]");
  const resumeWebSite = document.querySelector("[data-site]");
  const resumeCity = document.querySelector("[data-city]");
  const aboutMe = document.querySelector("[data-aboutMe]");

  resumeName.textContent = data.name;
  resumeTagLine.textContent = data.tagline;
  resumeTel.textContent = data.phone;
  resumeEmail.textContent = data.email;
  resumeWebSite.textContent = "gsantosbruna/portfolio";
  resumeCity.textContent = "Paris, FR";
}

async function filExperience() {
  const data = await conectResume();
  fillHeader(data);
}

filExperience();
