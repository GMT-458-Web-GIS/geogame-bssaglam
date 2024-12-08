const clues = [
    {country: "Italy", dish: "Pizza", person: "Leonardo da Vinci", place: "Colosseum", dishImage: "images/pizza.jpg", personImage: "images/leonardo.jpg", placeImage: "images/colosseum.jpg", funFact: "The Vatican City, an independent country within Rome, is the smallest country in the world by both area and population."},
    {country: "Japan",dish: "Sushi", person: "Hayao Miyazaki", place: "Mount Fuji", dishImage: "images/sushi.jpg", personImage: "images/miyazaki.jpg", placeImage: "images/mountfuji.jpg", funFact: "Home to the world’s oldest company, Kongo Gumi, founded in 578 AD."},
    {country: "Turkey",dish: "Baklava", person: "Aziz Sancar", place: "Ephesus", dishImage: "images/baklava.jpg", personImage: "images/azizsancar.jpg", placeImage: "images/ephesus.jpg", funFact: "The city, which straddles both Europe and Asia, is the only city in the world located on two continents."},
    {country: "France",dish: "Ratatouille", person: "Rousseau", place: "Arc de Triomphe", dishImage: "images/ratatouille.jpg", personImage: "images/rousseau.jpg", placeImage: "images/arcdetriomphe.jpg", funFact: "The Louvre Museum is the largest art museum in the world and houses the famous painting, the Mona Lisa."},
    {country: "England",dish: "Shepherd's Pie", person: "Sting", place: "Stonehenge", dishImage: "images/pie.jpg", personImage: "images/sting.jpg", placeImage: "images/stonehenge.jpg", funFact: "Home to the world’s first industrial revolution, which began in the late 18th century, shaping global industrialization."},
    {country: "China",dish: "Dumplings", person: "Bruce Lee", place: "Great Wall", dishImage: "images/dumplings.jpg", personImage: "images/brucelee.jpg", placeImage: "images/greatwall.jpg", funFact: "Has the longest continuous civilization in the world, with over 4,000 years of recorded history."},
    {country: "Austria",dish: "Apfelstrudel", person: "Sigmund Freud", place: "Saint Stephan Cathedral", dishImage: "images/apfelstrudel.jpg", personImage: "images/freud.jpg", placeImage: "images/cathedral.jpg", funFact: "Alps cover more than 60% of the country, making it a top destination for skiing and mountain sports."},
    {country: "Russia",dish: "Solyanka", person: "Maria Sharapova", place: "Kremlin", dishImage: "images/solyanka.jpg", personImage: "images/sharapova.jpg", placeImage: "images/kremlin.jpg", funFact: "So vast that it spans 11 time zones, making it the largest country in the world by land area."},
    {country: "Brazil",dish: "Moqueca", person: "Adriana Lima", place: "Statue Jesus", dishImage: "images/moqueca.jpg", personImage: "images/adrianalima.jpg", placeImage: "images/statuejesus.jpg", funFact: "The Amazon Rainforest, located mostly, is the largest tropical rainforest in the world and produces 20% of the Earth's oxygen."},
    {country: "Mexico",dish: "Tacos", person: "Frida Kahlo", place: "Chichén Itzá", dishImage: "images/tacos.jpg", personImage: "images/fridakahlo.jpg", placeImage: "images/chichenitza.jpg", funFact: "Home to the ancient Mayan city of Chichen Itza, one of the New Seven Wonders of the World."},
    {country: "Spain",dish: "Churros", person: "Enrique Iglesias", place: "La Sagrada Familia", dishImage: "images/churros.jpg", personImage: "images/iglesias.webp", placeImage: "images/sagradafamilia.jpg", funFact: "The Sagrada Familia in Barcelona, designed by architect Antoni Gaudí, has been under construction for over 140 years and is expected to be completed in 2026."},
    {country: "Egypt",dish: "Babagannoush", person: "Mohamed Salah", place: "Giza", dishImage: "images/babag.jpg", personImage: "images/salah.jpg", placeImage: "images/giza.jpg", funFact: "The Great Pyramid of Giza is the only remaining wonder of the original Seven Wonders of the Ancient World."},
    {country: "Kazakhstan",dish: "Beshbarmak", person: "Nursultan Nazarbayev", place: "Bayterek Tower", dishImage: "images/beshbarmak.jpg", personImage: "images/nazarbayev.webp", placeImage: "images/bayterek.jpg", funFact: "The largest landlocked country in the world and the ninth largest overall by land area."},
    {country: "South Korea",dish: "Kimchi", person: "Kim Min-Jae", place: "Gyeong", dishImage: "images/kimchi.jpg", personImage: "images/minjae.jpg", placeImage: "images/gyeong.jpg", funFact: "A global leader in technology, home to the headquarters of companies like Samsung and LG."},
    {country: "Nigeria",dish: "Jollof", person: "Emanuel Emenike", place: "Gallery", dishImage: "images/jollof.jpg", personImage: "images/emenike.jpg", placeImage: "images/gallery.jpg", funFact: "The most populous country in Africa, with over 200 million people, and it has over 500 distinct ethnic groups."},
    {country: "Peru",dish: "Saltado", person: "Mario Vargas", place: "Machu Picchu", dishImage: "images/saltado.jpg", personImage: "images/vargas.webp", placeImage: "images/machu.jpg", funFact: "Home to Machu Picchu, an ancient Inca city located high in the Andes mountains, one of the most visited tourist attractions in the world."},
  ];

let currentClueIndex = 0;
let currentStage = 0;
let score = 0;
let round = 1;

const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');
const stageProgress = document.getElementById('stage-progress');
const mainClueImage = document.getElementById("main-clue-image");
const clueTitle = document.getElementById("clue-title");
const userInput = document.getElementById("user-answer");
const feedback = document.getElementById("feedback");
const submitButton = document.getElementById("submit-answer");
const passButton = document.getElementById("pass-question");
const prevClueButton = document.getElementById("previous-clue");
const nextClueButton = document.getElementById("next-clue");

const scoreElement = document.getElementById("score");
const roundElement = document.getElementById("round");

function showClue() {
  const currentClue = clues[currentClueIndex];
  const clueTypes = ["dish", "person", "place"];
  const clueTitles = ["Definitely needs a taste", "Who's this dude?", "I know there from TV"];

  mainClueImage.src = currentClue[`${clueTypes[currentStage]}Image`];
  clueTitle.textContent = clueTitles[currentStage];
  stageProgress.textContent = `${currentStage + 1}/3`;

  prevClueButton.disabled = currentStage === 0;
  nextClueButton.disabled = currentStage === 2;
}

function updateScoreboard() {
  scoreElement.textContent = score;
  roundElement.textContent = round;
}

function showAnswerFeedback(isCorrect) {
  feedback.textContent = isCorrect ? "Correct! Smooth guess!" : "Wrong! Try somewhere else";
  feedback.style.color = isCorrect ? "limegreen" : "red";

  const existingFlag = feedback.querySelector("img");
  if (existingFlag) {
    feedback.removeChild(existingFlag);
  }

  const countryFlag = document.createElement("img");
  countryFlag.src = `flags/${clues[currentClueIndex].country.toLowerCase()}.svg`;
  countryFlag.alt = `${clues[currentClueIndex].country} Flag`;
  countryFlag.style.width = "90px";
  countryFlag.style.height = "auto";
  countryFlag.style.marginTop = "20px";
  countryFlag.style.borderRadius = "5px";

  const flagContainer = document.getElementById('flag-container');
  flagContainer.innerHTML = ''; 
  
  flagContainer.appendChild(countryFlag);

  const funFactContainer = document.getElementById('fun-fact-text');
  funFactContainer.innerText = clues[currentClueIndex].funFact;

  feedback.style.transition = "opacity 0.5s ease-in-out";
  feedback.style.opacity = 1;

  setTimeout(() => {
    feedback.style.opacity = 0;
  }, 3000);
}

function checkAnswer() {
  const userAnswer = userInput.value.trim().toLowerCase();
  const correctAnswer = clues[currentClueIndex].country.toLowerCase();

  if (!userAnswer) {
    feedback.textContent = "Please enter a guess!";
    feedback.style.color = "orange";
    feedback.style.background = "black";
    feedback.style.opacity = 1;
    return;
  }

  if (userAnswer === correctAnswer) {
    showAnswerFeedback(true);
    score += 1000;
    correctSound.play();
    setTimeout(nextClue, 2000);
  } else {
    showAnswerFeedback(false);
    wrongSound.play();
  }

  updateScoreboard();
}

function passQuestion() {
  feedback.textContent = "Question skipped!";
  feedback.style.color = "orange";
  feedback.style.background = "black";
  feedback.style.borderRadius = "4px";
  feedback.style.opacity = 1;
  setTimeout(nextClue, 2000);
}

function nextClue() {
  currentClueIndex++;
  if (currentClueIndex < clues.length) {
    currentStage = 0;
    userInput.value = "";
    feedback.textContent = "";
    round++;
    fadeInClue();
    showClue();
  } else {
    endGame();
  }
  updateScoreboard();
}

function fadeInClue() {
  mainClueImage.style.opacity = 0;
  clueTitle.style.opacity = 0;
  setTimeout(() => {
    mainClueImage.style.transition = "opacity 0.75s";
    clueTitle.style.transition = "opacity 0.75s";
    mainClueImage.style.opacity = 1;
    clueTitle.style.opacity = 1;
  }, 100);
}

function endGame() {
  feedback.textContent = "Game over! Restarting...";
  feedback.style.color = "blue";

  setTimeout(() => {
    currentClueIndex = 0;
    currentStage = 0;
    score = 0;
    round = 1;
    userInput.value = "";
    feedback.textContent = "";
    submitButton.disabled = false;
    passButton.disabled = false;
    showClue();
    updateScoreboard();
  }, 3000);
}

function showNextClue() {
  if (currentStage < 2) {
    currentStage++;
    fadeInClue();
    showClue();
  }
}

function showPreviousClue() {
  if (currentStage > 0) {
    currentStage--;
    showClue();
  }
}

showClue();
updateScoreboard();
submitButton.addEventListener("click", checkAnswer);
passButton.addEventListener("click", passQuestion);
nextClueButton.addEventListener("click", showNextClue);
prevClueButton.addEventListener("click", showPreviousClue);
