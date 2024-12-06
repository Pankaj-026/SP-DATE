const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const loveScreen = document.querySelector(".Make__her__laugh");
const closeBtn = document.querySelector(".close");
const yesBanner = document.querySelector(".she-said-yes");
let i = 0;

const noContent = [
  "Really?? Again asking will you?",
  "Why not",
  "bruh",
  "just think about it",
  "PLEASEEEEE",
  "give it a chance :(",
  "you love me right?",
  "if that's what u want...",
  "why u still clicking?",
  "what kinda sadistic mf r u",
  "bro stop",
  "my misery is funny to u huh?",
  "go get a life",
  "Alright, uninstalling hope. Bye. 😒",
];

// Yessssssssssssssssssssssssss
yesBtn.addEventListener("click", () => {
  yesBanner.classList.add("she-said-yes-add");
  i = 0;
  loveScreen.innerHTML = "";
});

closeBtn.addEventListener("click", () => {
  yesBanner.classList.remove("she-said-yes-add");
});

// NOOOOOOOOOOOOOOOOOOOOOOOOOOO
noBtn.addEventListener("click", () => {
  loveScreen.innerHTML = `<div class="no__replies">${noContent[i]}</div>`;
  i = (i + 1) % noContent.length;
});
