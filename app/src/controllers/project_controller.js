import { generateElement } from "./element_controller.js";
import { projectService } from "../services/projects_service.js";
import { elementService } from "../services/element_service.js";

function createProjectCard(project) {
  const projectCard = generateElement("div", "main__project");
  const projectBanner = createProjectBanner(project.banner);
  const projectContent = createProjectContent(
    project.title,
    project.description
  );

  projectCard.appendChild(projectBanner);
  projectCard.appendChild(projectContent);

  return projectCard;
}

function generateProjects(projects) {
  const projectsWrapper = document.querySelector(
    "[data-element='projects-list']"
  );

  elementService.clearContent(projectsWrapper);

  projects.forEach((project) => {
    let p = createProjectCard(project);
    setTimeout(() => {
      projectsWrapper.appendChild(p);
    }, 500);
  });
}

function createProjectBanner(src) {
  const projectBanner = generateElement("img", "main__project__banner");
  projectBanner.setAttribute("src", src);
  return projectBanner;
}

function createProjectContent(title, desc) {
  const projectContent = generateElement("div", "main__project__content");
  const projectTitle = generateElement("h3", "main__project__title");
  const projectDesc = generateElement("p", "main__project__description");
  const projectButtons = createProjectButtons();

  projectTitle.textContent = title;
  projectDesc.textContent = desc;

  projectContent.appendChild(projectTitle);
  projectContent.appendChild(projectDesc);
  projectContent.appendChild(projectButtons);

  return projectContent;
}

function createProjectButtons() {
  const buttons = generateElement("div", "main__project__buttons");
  const repoBtn = generateElement("button", "main__project__button");
  const demoBtn = generateElement("button", "main__project__button");

  repoBtn.textContent = "Repositório";
  buttons.appendChild(repoBtn);

  demoBtn.textContent = "Ver Demo";
  buttons.appendChild(demoBtn);

  return buttons;
}

function renderProjects() {
  projectService.getProjects().then((projects) => {
    generateProjects(projects);
  });
}

export { renderProjects };
