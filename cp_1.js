// ===== STEP 1: SELECT ALL ELEMENTS WE NEED =====
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");

const nameCount = document.getElementById("name-count");
const emailCount = document.getElementById("email-count");
const commentsCount = document.getElementById("comments-count");


// ===== STEP 2: CHARACTER COUNT FUNCTION =====
function updateCharCount(inputElement, countElement) {
  const length = inputElement.value.length;
  countElement.textContent = `${length} characters`;
}


// ===== STEP 3: ATTACH INPUT EVENT LISTENERS =====
nameInput.addEventListener("input", function() {
  updateCharCount(nameInput, nameCount);
});

emailInput.addEventListener("input", function() {
  updateCharCount(emailInput, emailCount);
});

commentsInput.addEventListener("input", function() {
  updateCharCount(commentsInput, commentsCount);
});

// ===== TOOLTIP =====
const tooltip = document.getElementById("tooltip");
const formGroups = document.querySelectorAll(".form-group");

formGroups.forEach(function(group) {
  
  group.addEventListener("mouseover", function(event) {
    const text = group.dataset.tooltip;
    tooltip.textContent = text;
    tooltip.style.display = "block";
    event.stopPropagation();
  });

  group.addEventListener("mouseout", function(event) {
    tooltip.style.display = "none";
    event.stopPropagation();
  });

  group.addEventListener("mousemove", function(event) {
    tooltip.style.top = `${event.clientY + 14}px`;
    tooltip.style.left = `${event.clientX + 14}px`;
  });

});