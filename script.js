// Elements
const giftBox = document.getElementById("giftBox");
const card = document.getElementById("card");
const confettiContainer = document.getElementById("confetti");
const yesBtn = document.getElementById("yesBtn");
const handsomeBtn = document.getElementById("handsomeBtn");
const celebration = document.getElementById("celebration");

// Event Listeners
giftBox.addEventListener("click", openGift);
yesBtn.addEventListener("click", celebrate);
handsomeBtn.addEventListener("click", celebrate);

// Functions
function openGift() {
  giftBox.classList.add("hidden"); // Hide the gift box
  card.classList.remove("hidden"); // Show the Valentine's card
  playSong(); // Start the song
}

function celebrate() {
  card.classList.add("hidden"); // Hide the card
  celebration.classList.remove("hidden"); // Show the celebration
  showConfetti();
  showStarryNight();
  sendNotification("Yes");
}

function playSong() {
  const audio = new Audio("https://your-audio-link.com/pov.mp3");
  audio.play();
}

function showConfetti() {
  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.animationDelay = Math.random() * 2 + "s";
    piece.style.backgroundColor = getRandomColor();
    confettiContainer.appendChild(piece);
  }
}

function showStarryNight() {
  document.body.style.backgroundColor = "#000";
}

function getRandomColor() {
  const colors = ["#ff6f61", "#ffb347", "#faff70", "#d4fc79", "#70f4ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function sendNotification(response) {
  // Replace with your actual email notification setup
  fetch("https://your-webhook-url.com", {
    method: "POST",
    body: JSON.stringify({ answer: response }),
    headers: { "Content-Type": "application/json" },
  }).catch(() => console.error("Notification failed"));
}