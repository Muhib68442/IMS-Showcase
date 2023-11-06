console.log("JS Connected from libs/js/exeArray.js");

// Declare a variable to store the project name
let projectName;


// JS - Array Execution - Project Details
document.addEventListener("DOMContentLoaded", function () {
  // Debug
  console.log("DOMC Project Details");

  // Extract the 'project' parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectParam = urlParams.get("project");

  // Check if the 'project' parameter exists
  if (projectParam) {
    // Convert the parameter to an integer to get the project index
    const projectIndex = parseInt(projectParam);

    // Ensure projectIndex is within the valid range of your projectData array
    if (projectIndex >= 0 && projectIndex < projectData.length) {
      // Get the corresponding project data
      const project = projectData[projectIndex];

      // Store the project name in the variable
      projectName = project.projectName;

      // Update HTML elements with the project data
      document.querySelector(".projectName").textContent = projectName; // Page Title
      document.querySelector(".text-h.projectName").textContent = projectName; // Project Name
      document.querySelector(".text-h.projectNameX").textContent = projectName; // Project Name
      document.querySelector(".projectDetails").textContent = project.projectDetails;
      document.querySelector(".text-p.projectDetails").textContent = project.projectDetails;
      document.querySelector(".projectDesc").textContent = project.projectDescription;
      document.querySelector(".projectBg").src = project.backgroundImg;
      document.querySelector(".projectImg").src = project.projectImg;
        // Options
      document.querySelector(".optionShot").src = project.optionShot;

      document.querySelector(".option1Name").textContent = project.option1Name;
      document.querySelector(".option2Name").textContent = project.option2Name;
      document.querySelector(".option3Name").textContent = project.option3Name;
      document.querySelector(".option4Name").textContent = project.option4Name;

      document.querySelector(".option1").textContent = project.option1;
      document.querySelector(".option2").textContent = project.option2;
      document.querySelector(".option3").textContent = project.option3;
      document.querySelector(".option4").textContent = project.option4;
      
      
      // !!!!!
      document.querySelector(".btn.ss").href = project.screenshotLink;
      document.querySelector(".btn.download").href = project.downloadLink;


      // Features-Disable
      const disabledFeatures = project.disabledFeatures || [];
      const featureElements = document.querySelectorAll(".feature");
        featureElements.forEach((feature, index) => {
        if (disabledFeatures.includes(index)) {
            feature.classList.add("disabled");
        }
        });

    } else {
      // Handle the case where projectIndex is out of range
      console.error("Invalid project index");
    }
  }
});


// JS - Array Execution - Project Screenshots
document.addEventListener("DOMContentLoaded", function () {
    // Debug
    console.log("DOMC Project Screenshots");
  
    // Extract the 'project' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectParam = urlParams.get("project");
  
    // Check if the 'project' parameter exists
    if (projectParam) {
      // Convert the parameter to an integer to get the project index
      const projectIndex = parseInt(projectParam);
  
      // Ensure projectIndex is within the valid range of your projectData array
      if (projectIndex >= 0 && projectIndex < projectData.length) {
        // Get the corresponding project data
        const project = projectData[projectIndex];
  
        // Store the project name in the variable
        projectName = project.projectName;
        
  
        // Update HTML elements with the project data
        document.querySelector(".text-h.projectName").textContent = projectName; 
        document.querySelector(".projectDetails").textContent = project.projectDetails;
        document.querySelector(".projectBg").src = project.backgroundImg;

  
          // Shots
          document.querySelector(".shot1Img").src = project.shot1Img;
          document.querySelector(".text-h.shot1Title").textContent = project.shot1Title;
          document.querySelector(".text-p.shot1Desc").textContent = project.shot1Desc;

          document.querySelector(".shot2Img").src = project.shot2Img;
          document.querySelector(".text-h.shot2Title").textContent = project.shot2Title;
          document.querySelector(".text-p.shot2Desc").textContent = project.shot2Desc;

          document.querySelector(".shot3Img").src = project.shot3Img;
          document.querySelector(".text-h.shot3Title").textContent = project.shot3Title;
          document.querySelector(".text-p.shot3Desc").textContent = project.shot3Desc;

          document.querySelector(".shot4Img").src = project.shot4Img;
          document.querySelector(".text-h.shot4Title").textContent = project.shot4Title;
          document.querySelector(".text-p.shot4Desc").textContent = project.shot4Desc;
  
  
      } else {
        // Handle the case where projectIndex is out of range
        console.error("Invalid project index");
      }
    }
  });


