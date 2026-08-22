const button = document.getElementById("greet-btn");
const greetingText = document.getElementById("greeting");

button.addEventListener("click", function() {
  greetingText.textContent = "Hello, Gill! JavaScript just changed this text.";
});

const input = document.getElementById("new-skill-input");
const addButton = document.getElementById("add-skill-button");
const skillList = document.querySelector(".skill-list")
const selectLevel = document.getElementById("new-skill-level");

addButton.addEventListener("click", function() {
  const newSkill = input.value;
  const newSkillLevel = selectLevel.value;

  if (newSkill === "") {
    return; 
  }

  const newSkillObject = {
    name: newSkill,
    level: newSkillLevel
  };

  const newItem = document.createElement("li");
  newItem.textContent = newSkillObject.name + " (" + newSkillObject.level + ")";
  skillList.appendChild(newItem);

  input.value = "";

});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter"){
    addButton.click();
  }
});

const removeInput = document.getElementById("skill-remove-input");
const removeButton = document.getElementById("removeButton");


removeButton.addEventListener("click", function() {
  const skillToRemove = removeInput.value 
  

  if (skillToRemove === ""){
    return;
  }

 
  const allSkills = skillList.querySelectorAll("li");

  allSkills.forEach(function (skillItem){
    if (skillItem.textContent.startsWith(skillToRemove)){
      skillItem.remove(); 
    }
  });

 removeInput.value = "";
});


