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