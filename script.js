/* ============================================================
   EDIT BELOW — this is where you personalize the portfolio.
   The three arrays (SKILLS, PROJECTS, EXPERIENCE) control the
   Skills, Projects, and Experience sections of the page. Add,
   remove, or edit items here — the page rebuilds itself.
   ============================================================ */

// ---- SKILLS -------------------------------------------------
// Group name -> list of skills. Add/remove groups or items freely.
const SKILLS = {
  "Languages": ["Python", "SQL", "R"],
  "Analysis & ML": ["Pandas", "NumPy", "scikit-learn", "Statistical modeling"],
  "Data & BI Tools": ["Tableau", "Power BI", "Excel"],
  "Cloud & Platforms": ["AWS", "Snowflake", "Airflow"]
};

// ---- PROJECTS -------------------------------------------------
// Add a new object to this array for each project. Delete the
// sample ones once you've replaced them with your own.
const PROJECTS = [
  {
    title: "Airbnb Investment Analytics",
    summary: "Analyzed listing, pricing, and occupancy data across a metro area to identify neighborhoods with the strongest short-term rental ROI, and modeled break-even timelines under different financing scenarios.",
    tools: ["Python", "Pandas", "SQL", "Tableau"],
    role: "Solo project",
    result: "e.g. 'Flagged 3 neighborhoods with 20%+ higher projected cap rate than city average'",
    github: "#",
    live: "#"
  },
  {
    title: "Project Two — replace this",
    summary: "One or two sentences on the problem you were solving and the approach you took.",
    tools: ["Tool", "Tool", "Tool"],
    role: "Team project (2 people)",
    result: "The single most impressive concrete outcome, ideally a number",
    github: "#",
    live: ""
  },
  {
    title: "Project Three — replace this",
    summary: "One or two sentences on the problem you were solving and the approach you took.",
    tools: ["Tool", "Tool"],
    role: "Solo project",
    result: "",
    github: "#",
    live: ""
  }
];

// ---- EXPERIENCE -------------------------------------------------
// Most recent first. `bullets` is optional — omit for a short entry.
const EXPERIENCE = [
  {
    role: "Data Analyst Intern",
    org: "University IT Department",
    when: "2025 — Present",
    bullets: [
      "Replace with a real accomplishment, ideally quantified",
      "Replace with a second accomplishment"
    ]
  },
  {
    role: "Research Assistant",
    org: "GIDS-AI",
    when: "20XX — 20XX",
    bullets: [
      "Replace with a real accomplishment, ideally quantified"
    ]
  },
  {
    role: "Data Analyst",
    org: "Y4E-SEA",
    when: "20XX — 20XX",
    bullets: [
      "Replace with a real accomplishment, ideally quantified"
    ]
  },
  {
    role: "Cloud Operations",
    org: "Company name",
    when: "20XX — 20XX",
    bullets: []
  }
];

/* ============================================================
   Rendering — you shouldn't need to edit below this line.
   ============================================================ */

function renderSkills() {
  const mount = document.getElementById('skillsMount');
  mount.innerHTML = Object.entries(SKILLS).map(([group, items]) => `
    <div class="skill-group">
      <h3>${group}</h3>
      <div class="chip-row">
        ${items.map(s => `<span class="chip">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const mount = document.getElementById('projectsMount');
  mount.innerHTML = PROJECTS.map((p, i) => `
    <div class="project-card">
      <div class="project-row-num">${String(i + 1).padStart(2, '0')}</div>
      <div>
        <div class="project-title-row">
          <div class="project-title">${p.title}</div>
          <div class="project-links">
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">repo →</a>` : ''}
            ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">live →</a>` : ''}
          </div>
        </div>
        <p class="project-summary">${p.summary}</p>
        <div class="project-meta">
          <span><span class="m-label">tools</span>${p.tools.join(', ')}</span>
          <span><span class="m-label">role</span>${p.role}</span>
        </div>
        ${p.result ? `<div class="project-result">${p.result}</div>` : ''}
      </div>
    </div>
  `).join('');
}

function renderExperience() {
  const mount = document.getElementById('experienceMount');
  mount.innerHTML = EXPERIENCE.map(e => `
    <div class="tl-item">
      <div class="tl-top">
        <div>
          <div class="tl-role">${e.role}</div>
          <div class="tl-org">${e.org}</div>
        </div>
        <div class="tl-when">${e.when}</div>
      </div>
      ${e.bullets && e.bullets.length ? `
        <div class="tl-desc"><ul>${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul></div>
      ` : ''}
    </div>
  `).join('');
}

// ---- Hero typed query animation ----
function typeQuery() {
  const box = document.getElementById('queryBox');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const html =
    '<span class="kw">SELECT</span> name, skills, availability\n' +
    '<span class="kw">FROM</span> analysts\n' +
    '<span class="kw">WHERE</span> curiosity = <span class="str">\'high\'</span>\n' +
    '<span class="kw">AND</span> name = <span class="str">\'Your Name\'</span>;';

  if (prefersReduced) {
    box.innerHTML = html;
    return;
  }

  const plain = 'SELECT name, skills, availability\nFROM analysts\nWHERE curiosity = \'high\'\nAND name = \'Your Name\';';
  let i = 0;
  box.innerHTML = '<span class="cursor"></span>';
  const timer = setInterval(() => {
    i++;
    if (i >= plain.length) {
      clearInterval(timer);
      box.innerHTML = html;
      return;
    }
    box.textContent = plain.slice(0, i);
  }, 18);
}

renderSkills();
renderProjects();
renderExperience();
typeQuery();