let messageIndex = 0;

const messages = [
  "No? 😳",
  "Are you sure?? 🥺",
  "Think again… 😇",
  "I made this just for you 💗",
  "Okay, now you’re just teasing 😅",
  "Last chance… 🙈"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const message = document.getElementById("message");

  // Update message
  message.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Make YES bigger
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.25}px`;

  // Move NO to random place on the screen
  noButton.style.position = "fixed";

  const padding = 20;
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth - padding * 2) + padding;
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight - padding * 2) + padding;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

document.querySelector(".no-button").addEventListener("click", handleNoClick);
document.querySelector(".yes-button").addEventListener("click", handleYesClick);
