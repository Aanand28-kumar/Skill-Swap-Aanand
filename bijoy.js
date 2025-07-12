const skills = [
  {
    title: "JavaScript Mastery",
    desc: "Advanced JS concepts, DOM, ES6, async.",
    category: "Tech",
    tags: ["JavaScript", "Web"],
    href: "https://www.w3schools.com/js/",
    rating: 4.9
  },
  {
    title: "UI/UX Design",
    desc: "Figma, Adobe XD, user research, prototyping.",
    category: "Art",
    tags: ["Design", "UX"],
    href: "https://www.figma.com/resources/learn-design/",
    rating: 4.8
  },
  {
    title: "Digital Marketing",
    desc: "SEO, Ads, Funnels, Analytics.",
    category: "Marketing",
    href: "https://www.udemy.com/course/learn-digital-marketing-course/?srsltid=AfmBOopNhwi05gl-SR4D_4CO3ZBDBL1tVc8ymntegFUuXXQ8l9d_VLcA&couponCode=25BBPMXNVD35CTR'",
    tags: ["SEO", "Google Ads"],
    rating: 4.7
  },
  {
    title: "Spanish for Beginners",
    desc: "Conversational Spanish, grammar, practice.",
    category: "Language",
    href: "https://www.youtube.com/watch?v=kJQjXAVEWthttps://indianculinaryacademy.com/?s=gl&k=culinary_arts_courses&gad_source=1&gad_campaignid=22174876070&gbraid=0AAAAApAFgapQp4qdVadja0FwBZ89yzxCC&gclid=Cj0KCQjwj8jDBhD1ARIsACRV2Tsh7LrEtTPkAuQ_nJzw7UIZRaO35Pqndqo_LdW1jB1-eMsQ0X-HRFEaAo7oEALw_wcB'0&list=PLv63dFTP4Sjq6knRsZQI-bTnRE38cZZoy",
    tags: ["Spanish", "Speaking"],
    rating: 4.6
  },
  {
    title: "Indian Cooking",
    desc: "Learn authentic Indian recipes and spices.",
    category: "Cooking",
    href: "https://indianculinaryacademy.com/?s=gl&k=culinary_arts_courses&gad_source=1&gad_campaignid=22174876070&gbraid=0AAAAApAFgapQp4qdVadja0FwBZ89yzxCC&gclid=Cj0KCQjwj8jDBhD1ARIsACRV2Tsh7LrEtTPkAuQ_nJzw7UIZRaO35Pqndqo_LdW1jB1-eMsQ0X-HRFEaAo7oEALw_wcB'",
    tags: ["Spices", "Vegan"],
    rating: 4.9
  },
  {
    title: "React Development",
    desc: "Build apps with React, Hooks, Router.",
    category: "Tech",
    href: "https://replit.com/?utm_source=google&utm_medium=google&utm_campaign=22313042310&utm_id=22313042310&utm_term=developer%20platform&utm_content={adid}&gad_source=1&gad_campaignid=22313042310&gbraid=0AAAAA-k_HqIUMLhLV87yOCalo6qqnSjIA&gclid=Cj0KCQjwj8jDBhD1ARIsACRV2TsOhVSitdRf0DqaGhRwksRs5FSuEKy7L2AreL-Gvie_Adgz-QXMNHUaAvD6EALw_wcB",
    tags: ["React", "Frontend"],
    rating: 4.9
  }
  
];

const skillGrid = document.getElementById("skillGrid");
const searchInput = document.getElementById("searchInput");
const categoryList = document.getElementById("categoryList");

function renderSkills(skillsToShow) {
  skillGrid.innerHTML = skillsToShow.map(skill => `
    <div class="skill-card">
      <h3><a href="${skill.href}" target="_blank">${skill.title}</a></h3>
      <p>${skill.desc}</p>
      <p>⭐ ${skill.rating}</p>
      <div class="tags">
        ${skill.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function filterSkills() {
  const query = searchInput.value.toLowerCase();
  const activeCategory = document.querySelector("#categoryList .active").dataset.category;

  const filtered = skills.filter(skill =>
    (activeCategory === "All" || skill.category === activeCategory) &&
    skill.title.toLowerCase().includes(query)
  );

  renderSkills(filtered);
}

searchInput.addEventListener("input", filterSkills);

categoryList.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    document.querySelector("#categoryList .active").classList.remove("active");
    e.target.classList.add("active");
    filterSkills();
  }
});

document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderSkills(skills);
  