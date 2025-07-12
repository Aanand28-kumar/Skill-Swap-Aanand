const skills = [
  { title: "Web Development", desc: "HTML, CSS, JS, React, etc." },
  { title: "Graphic Design", desc: "Photoshop, Illustrator, Canva" },
  { title: "Public Speaking", desc: "Confidence building & pitch practice" },
  { title: "Digital Marketing", desc: "SEO, SEM, social media" },
  { title: "Video Editing", desc: "Premiere Pro, After Effects" },
  { title: "Language Exchange", desc: "Spanish for English, Hindi, etc." },
  { title: "Cooking Skills", desc: "Indian, Italian, Chinese recipes" }
];

const container = document.getElementById("skillsContainer");
const searchInput = document.getElementById("searchInput");
const darkModeToggle = document.getElementById("darkModeToggle");

function loadSkills(filter = "") {
  container.innerHTML = "";
  const filtered = skills.filter(skill =>
    skill.title.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(skill => {
    const card = document.createElement("div");
    card.classList.add("skill-card");
    card.innerHTML = `
      <h3>${skill.title}</h3>
      <p>${skill.desc}</p>
    `;
    container.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  loadSkills(searchInput.value);
});

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

loadSkills();
