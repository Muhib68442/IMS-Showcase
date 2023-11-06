// JS - Array Execution - Project Download
document.addEventListener("DOMContentLoaded", function () {
    // Debug
    console.log("DOMC Project Download");
  
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
        document.querySelector(".projectBg").src = project.backgroundImg;
        document.querySelector(".text-h.projectName").textContent = projectName; 
        document.querySelector(".text-h.projectNameX").textContent = projectName; 
        document.querySelector(".projectDetails").textContent = project.projectDetails;

        document.querySelector(".imsVer").textContent = project.imsVer;
        document.querySelector(".lastUpdate").textContent = project.lastUpdate;
        document.querySelector(".resolution").textContent = project.resolution;
        
        document.querySelector(".ext-download-link").href = project.extDownLink;

        document.querySelector(".dbName").textContent = project.dbName;
        document.querySelector(".dbNameX").textContent = project.dbName;

        document.querySelector(".folderName").textContent = project.folderName;
        document.querySelector(".folderNameX").textContent = project.folderName;

        document.querySelector(".userManual").href = project.userManual;

        document.querySelector(".level1Username").textContent = project.level1Username;
        document.querySelector(".level1Password").textContent = project.level1Password;
        document.querySelector(".level2Username").textContent = project.level2Username;
        document.querySelector(".level2Password").textContent = project.level2Password;
        document.querySelector(".level3Username").textContent = project.level3Username;        
        document.querySelector(".level3Password").textContent = project.level3Password;



      } else {
        // Handle the case where projectIndex is out of range
        console.error("Invalid project index");
      }
    }
  });
