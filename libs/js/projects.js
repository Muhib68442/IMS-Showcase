document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.getElementById("projectContainer");
  
    // Loop through the projectData array
    projectData.forEach((project) => {
      const projectElement = document.createElement("a");
      projectElement.classList.add("project");
      projectElement.href = project.projectLink;
  
      const projectImage = document.createElement("div");
      projectImage.classList.add("project-image");
  
      const image = document.createElement("img");
      image.src = project.projectImg;
      image.alt = "project";
      projectImage.appendChild(image);
  
      const projectText = document.createElement("div");
      projectText.classList.add("project-text");
  
      const projectName = document.createElement("h3");
      projectName.classList.add("text-h");
      projectName.textContent = project.projectName;
  
      const projectDescription = document.createElement("p");
      projectDescription.classList.add("text-p");
      projectDescription.textContent = project.projectDetailsS;
  
      projectText.appendChild(projectName);
      projectText.appendChild(projectDescription);
  
      projectElement.appendChild(projectImage);
      projectElement.appendChild(projectText);
  
      projectContainer.appendChild(projectElement);
    });
  });
  