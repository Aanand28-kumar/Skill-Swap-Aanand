const users = [
  { name: "Asha", offer: "JavaScript", wants: "Design" },
  { name: "Ravi", offer: "Marketing", wants: "JavaScript" },
  { name: "Meena", offer: "Cooking", wants: "Marketing" },
  { name: "Sahil", offer: "Design", wants: "Cooking" },
  { name: "Lina", offer: "JavaScript", wants: "Cooking" },
];

const findBtn = document.getElementById("findMatchBtn");
const results = document.getElementById("results");
const mySkill = document.getElementById("mySkill");
const desiredSkill = document.getElementById("desiredSkill");
const modal = document.getElementById("swapModal");
const closeModal = document.getElementById("closeModal");
const darkToggle = document.getElementById("darkModeToggle");

findBtn.addEventListener("click", () => {
  const my = mySkill.value;
  const desired = desiredSkill.value;

  results.innerHTML = "";

  if (!my || !desired) {
    alert("Please select both skills.");
    return;
  }

  const matches = users.filter(user => user.offer === desired && user.wants === my);

  if (matches.length === 0) {
    results.innerHTML = `<p>No matching users found. Try different skills!</p>`;
    return;
  }

  matches.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>Offers: <strong>${user.offer}</strong></p>
      <p>Wants: <strong>${user.wants}</strong></p>
      <button class="swap-btn">Request Swap</button>
    `;

    card.querySelector(".swap-btn").addEventListener("click", () => {
      modal.style.display = "flex";
    });

    results.appendChild(card);
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
loadSkills();