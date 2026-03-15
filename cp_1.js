// ===== SELECT ALL ELEMENTS WE NEED =====
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");

const nameCount = document.getElementById("name-count");
const emailCount = document.getElementById("email-count");
const commentsCount = document.getElementById("comments-count");

// ===== CHARACTER COUNT FUNCTION =====
function updateCharCount(inputElement, countElement) {
  const length = inputElement.value.length;
  countElement.textContent = `${length} characters`;
}

// ===== ATTACH INPUT EVENT LISTENERS =====
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

// ===== VALIDATION & SUBMISSION =====
const form = document.getElementById("feedback-form");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const commentsError = document.getElementById("comments-error");

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (commentsInput.value.trim() === "") {
    commentsError.textContent = "Comments are required.";
    isValid = false;
  } else {
    commentsError.textContent = "";
  }

  return isValid;
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const isValid = validateForm();

  if (isValid) {
    appendFeedback();
    form.reset();
    nameCount.textContent = "0 characters";
    emailCount.textContent = "0 characters";
    commentsCount.textContent = "0 characters";
  }
});

function appendFeedback() {
  const feedbackDisplay = document.getElementById("feedback-display");

  if (feedbackDisplay.children.length === 0) {
    const heading = document.createElement("h2");
    heading.textContent = "Submitted Feedback";
    feedbackDisplay.appendChild(heading);
  }

  const card = document.createElement("div");
  card.className = "feedback-card";

  const namePara = document.createElement("p");
  namePara.textContent = `Name: ${nameInput.value}`;

  const emailPara = document.createElement("p");
  emailPara.textContent = `Email: ${emailInput.value}`;

  const commentsPara = document.createElement("p");
  commentsPara.textContent = `Comments: ${commentsInput.value}`;

  card.appendChild(namePara);
  card.appendChild(emailPara);
  card.appendChild(commentsPara);
  feedbackDisplay.appendChild(card);
}

// ===== EVENT DELEGATION =====
form.addEventListener("input", function(event) {
  if (event.target.matches("#name")) {
    updateCharCount(nameInput, nameCount);
  } else if (event.target.matches("#email")) {
    updateCharCount(emailInput, emailCount);
  } else if (event.target.matches("#comments")) {
    updateCharCount(commentsInput, commentsCount);
  }
});

// ===== STOP PROPAGATION ON FORM =====
form.addEventListener("click", function(event) {
  event.stopPropagation();
});


// ===== BACKGROUND CLICK =====
document.body.addEventListener("click", function() {
  nameError.textContent = "";
  emailError.textContent = "";
  commentsError.textContent = "";
});