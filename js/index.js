
const wheel = document.querySelector(".wheel");
const modal = document.getElementById("resultModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");

const prizes = [
   "$3500", "WILD", "$900", "$700","?$1000","$650", "GIFT","$700",
  "ONE MILLION", "$600", "$550", "$500","$600", "BANKRUPT","$650",
  "FREE PLAY",  "?$1000", "LOSE A TURN","$800", "PRIZE", "$650","$500","$600"
];

function Spin() {
  const randomDegree = 360 * 5 + Math.floor(Math.random() * 360);
  wheel.style.transition = "none";
  wheel.style.transform = "rotate(0deg)";

  setTimeout(() => {
    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = `rotate(${randomDegree}deg)`;
  }, 50);


  setTimeout(() => {
    const actualDegree = randomDegree % 360;
    const prizeIndex = Math.floor((360 - actualDegree) / 15) % prizes.length;
    const prize = prizes[prizeIndex];

    modalTitle.textContent = " Result";
    modalMessage.textContent = `You got: ${prize}`;
    modal.classList.remove("hidden");
  }, 4500);
}

function closeModal() {
  modal.classList.add("hidden");
}

