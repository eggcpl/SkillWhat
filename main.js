// ===== FORCE VERSION RENDER (ISOLATED) =====

// ===== END FORCE VERSION =====
// Icons para MAX HEART POSSIBLE
const ICON_TINY_HTML = '<span class="heart-small3">❤️</span>';
const ICON_SMALL_HTML = '<span class="heart-small2">❤️</span>';
const ICON_BIG_HTML   = '❤️';
const ICON_GOLD_HTML  = '💛';
const ICON_PLAT_HTML  = '🩶';
const ICON_DIAM_HTML  = '💙';

const GEAR_ICON_BY_SKILL = {
  Aim: "https://i.postimg.cc/349bq0ZG/aim.png",
  Awareness: "https://i.postimg.cc/xJgFZNPL/awarness.png",
  Determination: "https://i.postimg.cc/C5VTzjBP/determination.png",
  Gamesense: "https://i.postimg.cc/Vr4Hh0Fj/gamesense.png",
  Handling: "https://i.postimg.cc/njTwW914/handling.png",
  Movement: "https://i.postimg.cc/4HdFR48K/movement.png",
  Quickness: "https://i.postimg.cc/kR4hPMjB/quickness.png",
  Teamplay: "https://i.postimg.cc/V06HPs7J/teamplay.png"
};

let missingPopupOpen = false;



const boostTooltip = document.getElementById("boost-tooltip");

function showBoostTooltip(e, finalValue) {
  if (!boostTooltip) return;

const capped = Math.min(110, finalValue);

  boostTooltip.textContent = capped;
  boostTooltip.style.left = e.pageX + 12 + "px";
  boostTooltip.style.top  = e.pageY + 12 + "px";
  boostTooltip.classList.add("visible");
}


function hideBoostTooltip() {
  if (!boostTooltip) return;
  boostTooltip.classList.remove("visible");
}

// backup of the initial skills to allow LOAD (empty) to fully restore initial state
let skills = [
  { name: "Aim", value: 100, max: 100 },
  { name: "Handling", value: 100, max: 100 },
  { name: "Quickness", value: 100, max: 100 },
  { name: "Determination", value: 100, max: 100 },
  { name: "Awareness", value: 100, max: 100 },
  { name: "Teamplay", value: 100, max: 100 },
  { name: "Gamesense", value: 100, max: 100 },
  { name: "Movement", value: 100, max: 100 }
];

const initialSkillsBackup = JSON.parse(JSON.stringify(skills));


// backup do último LOAD
let loadedSkillsBackup = JSON.parse(JSON.stringify(skills));
let loadedName = "Spidevil";
let loadedAge = "15yo (day 1)";

const skillsList = document.getElementById("skills-list");
const totalCurrent = document.getElementById("total-skill-current");
const totalMax = document.getElementById("total-skill-max");

const heartBtn = document.querySelector(".heart-grey-btn");
const moraleBtn = document.querySelector(".morale-btn");
const maxBtn = document.querySelector(".max-btn");
const loadBtn = document.getElementById("load-button");
const skillInput = document.getElementById("skill-input");

let autoLoadTimer = null;

if (skillInput && loadBtn) {
  skillInput.addEventListener("input", () => {
    clearTimeout(autoLoadTimer);

    autoLoadTimer = setTimeout(() => {
      const txt = skillInput.value.trim();
      if (txt.length > 0) {
        loadBtn.click();
      }
    }, 200);
  });
}


const START_DATE = new Date(Date.UTC(2025, 3, 28));
const SEASON_LENGTH = 35;

function whenGamesReached(currentSeason, currentDay, gamesAlready, gamesRequired) {
  let games = gamesAlready;
  let day = currentDay;
  let season = currentSeason;

  if (games >= gamesRequired) {
    return { season, day };
  }

  while (true) {
    const gamesToday = GAMES_PER_DAY[day] || 0;
    games += gamesToday;

    if (games >= gamesRequired) {
      return { season, day };
    }

    day++;

    if (day > SEASON_LENGTH) {
      day = 1;
      season++;
    }
  }
}


const GAMES_PER_DAY = {
  4: 2,
  5: 2,
  6: 1,
  7: 1,
  8: 2,
  9: 2,
  10: 2,
  11: 2,
  12: 2,
  13: 1,
  14: 1,
  15: 2,
  16: 2,
  17: 2,
  18: 2,
  19: 2,
  20: 1,
  21: 1,
  22: 2,
  23: 2,
  24: 2,
  25: 2,
  26: 2,
  27: 1,
  28: 1,
  29: 2,
  32: 7
};

let extendedCareer = false; // OFF por defeito
let shortLived = false;
function getMaxCareerAge() {
  if (shortLived) return 38;
  if (extendedCareer) return 42;
  return 40;
}
let heartState = 0;
let moraleState = 0;
let maxMode = false;
let fraggerActive = false;
const heartBoosts = {
  0: 0,     // None
  1: 0.5,   // Small
  2: 1,     // Medium
  3: 3,     // Big
  4: 5,     // Gold
  5: 6,     // Platinum
  6: 8,     // Diamond
  7: 4,     // Fire Heart
};
const moraleBoosts = { 0: 0, 1: 1, 2: 2, 3: 3 };

function updateBoostLabels() {
  const heartLabel = document.getElementById("heart-boost-label");
  const moraleLabel = document.getElementById("morale-boost-label");

  if (heartLabel) {
    const val = heartBoosts[heartState] || 0;
    heartLabel.textContent = `+${val}%`;
  }

  if (moraleLabel) {
    const val = moraleBoosts[moraleState] || 0;
    moraleLabel.textContent = `+${val}%`;
  }
}


const equipped = { mousepad: null, mouse: null, keyboard: null, headset: null };

const bonusLimit = {
  mousepad: null,
  mouse: null,
  keyboard: null,
  headset: null
};
const bonusAmount = {
  mousepad: 0,
  mouse: 0,
  keyboard: 0,
  headset: 0
};

let leadership = 0;

function getLeadershipBoost() {
  const capped = Math.min(30, leadership);
  return capped * 0.2;
}

let updateLeadershipUI = null;

function resetLeadership() {
  leadership = 0;

  if (updateLeadershipUI) {
    updateLeadershipUI();
  } else {
    renderSkills();
  }
}

function resetExperience() {
  experience = 0;

  if (updateExperienceUI) {
    updateExperienceUI();
  } else {
    renderSkills();
  }
}

let equipmentBoosts = {};

/* ---------------- DATE & CLOCK ---------------- */
function calculateGameDate() {

  const now = new Date();
const nowUTC = new Date(
  Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  )
);
  const diffMs = nowUTC - START_DATE;
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffDays < 0) return { season: 1, day: 1 };
  return {
    season: Math.floor(diffDays / SEASON_LENGTH) + 1,
    day: (diffDays % SEASON_LENGTH) + 1
  };
}
function updateGameDay() {
  const gd = calculateGameDate();
  const el = document.getElementById("game-day");
  if (el) el.textContent = `S${gd.season} - ${gd.day}/${SEASON_LENGTH}`;

  updateRetireDisplayIfNeeded();
  computeMaxCareerHeart();
}

function updateClock() {
  const now = new Date();
  const el = document.getElementById("real-clock");
  if (el) el.textContent = now.toTimeString().slice(0, 8);
}
updateClock(); updateGameDay();
setInterval(updateClock, 1000);
setInterval(updateGameDay, 60000);

function renderMiniGear() {
  const svg = document.getElementById("gear-minimap");
  if (!svg) return;

  svg.innerHTML = "";

  const CELL = 14;
  const GAP = 2;
  const DOT = 6;

  // desenha grelha 4x4
  const OUTER_W = 4 * CELL + 3 * GAP;
const OUTER_H = 4 * CELL + 3 * GAP;

const outer = document.createElementNS("http://www.w3.org/2000/svg", "rect");
outer.setAttribute("x", 0);
outer.setAttribute("y", 0);
outer.setAttribute("width", OUTER_W);
outer.setAttribute("height", OUTER_H);
outer.setAttribute("fill", "none");
outer.setAttribute("stroke", "rgba(255,255,255,0.25)");
outer.setAttribute("stroke-width", "2");

svg.appendChild(outer);
for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const x = col * (CELL + GAP);
      const y = row * (CELL + GAP);

      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("width", CELL);
      rect.setAttribute("height", CELL);
      rect.setAttribute("fill", "none");
      rect.setAttribute("stroke", "rgba(255, 255, 255, 0.44)");
      rect.setAttribute("stroke-width", "1");

      svg.appendChild(rect);
    }
  }

  const order = ["mousepad", "mouse", "keyboard", "headset"];

  order.forEach((cat, row) => {
    const item = equipped[cat];
    if (!item) return;

    const col = EQUIPMENT[cat].findIndex(e => e.name === item.name);
    if (col === -1) return;

    const cx =
      col * (CELL + GAP) + CELL / 2;
    const cy =
      row * (CELL + GAP) + CELL / 2;

    const dot = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    dot.setAttribute("x", cx - DOT / 2);
    dot.setAttribute("y", cy - DOT / 2);
    dot.setAttribute("width", DOT);
    dot.setAttribute("height", DOT);
    dot.setAttribute("rx", "1");
    dot.setAttribute("fill", "#ff7a00");

    svg.appendChild(dot);
  });
}



/* ---------------- CALCS ---------------- */
function computeSkillValues(s) {
  const equipBoost = equipmentBoosts[s.name] || 0;
  const base = maxMode ? s.max : s.value;
let pctTotal =
  heartBoosts[heartState] +
  moraleBoosts[moraleState] +
  getLeadershipBoost();



const pct = pctTotal / 100;  const pctBoost = base * pct;
  const afterPercent = base + pctBoost;
  const final = afterPercent + equipBoost;
  return { base, equipBoost, pctBoost, afterPercent, final };
}

/**
 * updateTotals
 * - totalCurrent shows the sum of base values (or max values when maxMode)
 * - intentionally does NOT include heart/morale/gear (per requirement)
 * - totalMax shows sum of all skill maximums
 */
function updateTotals() {
    let totalCurrentValue = 0;
    let totalMaxValue = 0;

    skills.forEach(s => {
        totalCurrentValue += maxMode ? s.max : s.value;
        totalMaxValue += s.max;
    });

    if (totalCurrent) totalCurrent.textContent = totalCurrentValue;
    if (totalMax) totalMax.textContent = "/" + totalMaxValue;
}






    function parseCardText(txt) {
    const lines = txt
        .split("\n")
        .map(l => l.trim())
        .filter(l => l.length > 0); // remove vazios

    const skillNames = [
        "Aim", "Handling", "Quickness", "Determination",
        "Awareness", "Teamplay", "Gamesense", "Movement"
    ];

    const parsed = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const MOBILE_ALIAS = {
  AIM: "Aim",
  HND: "Handling",
  QCK: "Quickness",
  DET: "Determination",
  AWA: "Awareness",
  TMP: "Teamplay",
  GMS: "Gamesense",
  MOV: "Movement"
};

const normalizedLine =
  MOBILE_ALIAS[line] || line;


        // -----------------------------------
        // 1) FORMATO INLINE: "Skill 42/?"
        // -----------------------------------
        const inlineMatch = line.match(/^(\w+)\s+(\d+)\s*\/\s*(\d+|\?)$/i);
        if (inlineMatch && skillNames.includes(inlineMatch[1])) {
            const name = inlineMatch[1];
            const value = parseInt(inlineMatch[2], 10);
            const rawMax = inlineMatch[3];
            const max = rawMax === "?" ? null : parseInt(rawMax, 10);

            parsed.push({ name, value, max });
            continue;
        }

        // -----------------------------------
        // 2) FORMATO 3 LINHAS:
        // Skill
        // 42
        // /93   ou   / ?   ou   ?
        // -----------------------------------
        if (skillNames.includes(normalizedLine)) {
            const name = normalizedLine;

            const valLine = lines[i + 1] || "";
            const maxLine = lines[i + 2] || "";

            const value = parseInt(valLine, 10) || 0;

            // extrai apenas número ou ?
            let rawMax = maxLine.replace("/", "").trim();
            let max = null;

            if (/^\d+$/.test(rawMax)) {
                max = parseInt(rawMax, 10);
            }

            parsed.push({ name, value, max });
        }
    }

    return {
        playerName: lines[0] || "Unknown",
        playerAge: lines.find(l => /yo/.test(l)) || "",
        skills: parsed
    };
}







/* ---------------- PLAYER AGE PARSING & RETIRE CALC ---------------- */
function parseAgeString(ageStr) {
  if (!ageStr || typeof ageStr !== "string") return { age: null, birthdayDay: null };
  const ageMatch = ageStr.match(/(\d+)\s*yo/);
  const bdayMatch = ageStr.match(/day\s*(\d+)/i);
  const age = ageMatch ? parseInt(ageMatch[1], 10) : null;
  const birthdayDay = bdayMatch ? parseInt(bdayMatch[1], 10) : null;
  return { age, birthdayDay };
}

function computeRetireSeasonFrom(age, birthdayDay) {
  const gd = calculateGameDate();
  const currentSeason = gd.season;
  const currentDay = gd.day;

  if (age === null) {
    return { remainingSeasons: null, finalSeason: null, reason: "unknown age" };
  }

  const maxAge = getMaxCareerAge();

if (age >= maxAge) {
  return { remainingSeasons: 0, finalSeason: currentSeason, reason: "already max age" };
}

let remaining = maxAge - age;
  if (birthdayDay !== null && typeof birthdayDay === "number") {
    if (birthdayDay > currentDay) {
      remaining = remaining - 1;
    }
  }

  if (remaining < 0) remaining = 0;
  const finalSeason = currentSeason + remaining;
  return { remainingSeasons: remaining, finalSeason, reason: "ok" };
}

function updateRetireElement(ageStr) {
  const retireEl = document.getElementById("retire-at");
  if (!retireEl) return;

  const { age, birthdayDay } = parseAgeString(ageStr);
  const r = computeRetireSeasonFrom(age, birthdayDay);
  if (r.remainingSeasons === null) {
    retireEl.textContent = "—";
    return;
  }
  const maxAge = getMaxCareerAge();
retireEl.textContent = `S${r.finalSeason} (${maxAge}yo)`;
}

function updateRetireDisplayIfNeeded() {
  const ageEl = document.querySelector(".player-age");
  if (!ageEl) return;
  updateRetireElement(ageEl.textContent || "");
}

/* ---------------- RENDER SKILLS ---------------- */
function renderSkills() {
  if (!skillsList) return;
  skillsList.innerHTML = "";

  skills.forEach(s => {
    const v = computeSkillValues(s);

    const baseVal = v.base;
    const finalVal = v.final;

    // ------------------------------
    // WIDTHS (apenas 2 segmentos)
    // ------------------------------
    const baseW = Math.min(baseVal, 100);

// tudo acima de 100 vai para a barra de bónus
const bonusOver100 = Math.max(0, Math.min(finalVal - 100, 10));

const boostW = Math.max(
  0,
  Math.min(finalVal, 100) - baseW
);

    const row = document.createElement("div");
    row.className = "skill-row";

    const name = document.createElement("div");
    name.className = "skill-name";
    name.textContent = s.name;
    name.style.color = finalVal >= 100 ? "#f7f8c9" : "#ffffff";

    // LIMIT REACHED (value == max, mas não 100)
if (s.value === s.max && s.max < 100 && finalVal < 100) {
    name.style.color = "#ffffffff"; // verde premium
    
}
    // ===============================
// LIMIT REACHED (value === max, mas < 100)
// ===============================
if (s.value === s.max && s.max < 100) {
    name.classList.add("limit-reached");
} else {
    name.classList.remove("limit-reached");
}

    const bar = document.createElement("div");
    bar.className = "skill-bar";

    const limit = document.createElement("div");
    limit.className = "skill-limit";
    limit.style.width = s.max + "%";

    // Se o limite é 100 → arredondado dos dois lados
    if (s.max === 100) {
        limit.style.borderRadius = "999px";
    } else {
        limit.style.borderRadius = "999px 0 0 999px";
}

bar.appendChild(limit); 

    // ----------------------------------
    // BASE (sempre laranja)
    // ----------------------------------
    const baseF = document.createElement("div");
    baseF.className = "skill-fill";
    baseF.style.left = "0";
    baseF.style.width = baseW + "%";
    baseF.style.zIndex = 1;
    baseF.style.backgroundColor = "#ff7a00"; // laranja
    baseF.style.borderRadius = "999px 0 0 999px";
    bar.appendChild(baseF);

    // ----------------------------------
// BONUS OVER 100 (barra amarela)
// ----------------------------------
if (bonusOver100 > 0) {

  const bonusF = document.createElement("div");
  bonusF.className = "skill-fill-bonus";

  bonusF.style.position = "absolute";
  bonusF.style.left = "0";
  bonusF.style.top = "0";
  bonusF.style.height = "100%";
  bonusF.style.width = ((bonusOver100 / 10) * 100) + "%";
  bonusF.style.zIndex = 3;

  bonusF.style.backgroundColor = "#eff0bc";
  bonusF.style.borderRadius = "999px";
  bonusF.style.boxShadow =
    "0 0 10px rgba(238,223,192,0.8)";

  bar.appendChild(bonusF);
}

    // ----------------------------------
    // BOOST TOTAL (HM + morale + gear)
    // ----------------------------------
let boostF = null;

if (boostW > 0) {
  boostF = document.createElement("div");
  boostF.className = "skill-fill-boost";
  boostF.style.left = baseW + "%";
  boostF.style.width = boostW + "%";
  boostF.style.zIndex = 2;

  if (finalVal >= 100) {
    // chegou a 100 -> funde com a base, ponta direita arredondada
    boostF.style.backgroundColor = "#ff7a00";
    boostF.style.borderRadius = "0 999px 999px 0";
  } else {
    // não chegou a 100 -> ponta direita reta
    boostF.style.backgroundColor = "#f5be9e";
    boostF.style.borderRadius = "0";
  }
  boostF.style.boxShadow = "none";

  bar.appendChild(boostF);
}

// BASE — só quando NÃO há boost, a base é que decide a ponta direita
baseF.style.backgroundColor = "#ff7a00";
baseF.style.boxShadow = "none";

if (boostW === 0) {
  if (finalVal >= 100) {
    baseF.style.borderRadius = "999px"; // arredondado dos dois lados
  } else {
    baseF.style.borderRadius = "999px 0 0 999px"; // só esquerda arredondada
  }
}




    // ----------------------------------
    // VALORES
    // ----------------------------------
    const val = document.createElement("div");
    val.className = "skill-value";

    const cur = document.createElement("span");
    cur.className = "skill-current";
    cur.textContent = maxMode ? s.max : Math.round(v.base);
    if (finalVal >= 100) cur.style.color = "#ee6b0e";
    // LIMIT REACHED (value == max, mas não 100)
    if (s.value === s.max && s.max < 100 && finalVal < 100) {
        cur.style.color = "#ffffffff";
    }

const mx = document.createElement("span");
mx.className = "skill-max";
mx.textContent = "/" + s.max;

const total = document.createElement("span");
total.className = "skill-total";

if (v.final >= 100) {
  total.textContent = Math.min(110, Math.floor(v.final));
} else {
  total.textContent = "";
}

val.appendChild(cur);
val.appendChild(mx);
val.appendChild(total);

row.appendChild(name);
row.appendChild(bar);
row.appendChild(val);

bar.addEventListener("mouseenter", e => {
  showTooltipForSkill(s, e);
});

bar.addEventListener("mousemove", e => {
  showTooltipForSkill(s, e);
});

bar.addEventListener("mouseleave", () => {
  hideTooltip();
});


row.addEventListener("mouseleave", hideTooltip);


    skillsList.appendChild(row);
  });
// ===== UPDATE RIGHT COLUMN BUTTONS (ONLY IMAGE BUTTONS) =====
if (globalButtonsContainer) {
    globalButtonsContainer.innerHTML = "";
let boostCapAdded = false;

    skills.forEach((s, index) => {

        const v = computeSkillValues(s);

        // LINHA DA COLUNA DIREITA
        const row = document.createElement("div");
        row.className = "edit-row";

        // BOTÃO -
        const minus = document.createElement("img");
        minus.src = "https://i.postimg.cc/qBCQ18DZ/button.png";
        minus.className = "edit-btn-img";
        minus.addEventListener("click", () => applySkillChange(index, -1));

        // BOTÃO +
        const plus = document.createElement("img");
        plus.src = "https://i.postimg.cc/SQzVgW1v/button.png";
        plus.className = "edit-btn-img";
        plus.addEventListener("click", () => applySkillChange(index, +1));

        // BARRA 100–120
        const boostContainer = document.createElement("div");
boostContainer.style.display = "flex";
boostContainer.style.flexDirection = "column";
boostContainer.style.alignItems = "center";

// 👉 adiciona BOOST CAP só UMA VEZ
if (!boostCapAdded) {
  const label = document.createElement("div");
  label.textContent = "BOOST CAP";
  label.style.fontSize = "9px";
  label.style.fontWeight = "700";
  label.style.color = "#ede3aa";
  label.style.marginBottom = "18px";
  label.style.marginTop = "-32px";   // 🔥 ISTO resolve
  label.style.opacity = "0.85";
  label.style.whiteSpace = "nowrap";

  boostContainer.appendChild(label);
  boostCapAdded = true;
}

const boostWrap = document.createElement("div");
boostWrap.className = "skill-boost-wrap";

boostWrap.addEventListener("mouseenter", e => {
  showBoostTooltip(e, v.final);
});

boostWrap.addEventListener("mousemove", e => {
  showBoostTooltip(e, v.final);
});

boostWrap.addEventListener("mouseleave", hideBoostTooltip);

        const boostFill = document.createElement("div");
        boostFill.className = "skill-boost-fill";

        const hiddenBoost = Math.max(0, Math.min(v.final - 100, 10));  
              const pct = (hiddenBoost / 10) * 100;
        boostFill.style.width = pct + "%";

        boostWrap.appendChild(boostFill);



        // ORDEM IMPORTANTE
        row.appendChild(minus);
        row.appendChild(plus);
        boostContainer.appendChild(boostWrap);
row.appendChild(boostContainer);

        globalButtonsContainer.appendChild(row);
    });
}




  updateTotals();
}

/* ==========================
   GLOBAL EDIT COLUMN LOGIC
========================== */

let globalMode = "S"; // S = editar value, L = editar max
const globalModeBtn = document.getElementById("mode-btn");
const globalButtonsContainer = document.getElementById("edit-buttons-container");

function updateModeButton() {
    if (globalMode === "S") {
        globalModeBtn.style.backgroundImage =
            "url('https://i.postimg.cc/BQFFWpxs/Sbutton.png')";
    } else {
        globalModeBtn.style.backgroundImage =
            "url('https://i.postimg.cc/vHnnRhWy/Lbutton.png')";
    }
}

globalModeBtn.addEventListener("click", () => {
    globalMode = globalMode === "S" ? "L" : "S";
    updateModeButton();
});

updateModeButton();





function applySkillChange(idx, delta) {
    const s = skills[idx];

    let turnMaxModeOffAfterChange = false;

    /* ================================
       SE MAX MODE ESTIVER ATIVO
       ================================ */
if (maxMode) {
    // guardar valor real original apenas 1 vez
    if (s._backupValue === undefined) s._backupValue = s.value;

    // valor a editar passa a ser o MAX (valor visível em MAX MODE)
    s.value = s.max;

    turnMaxModeOffAfterChange = true;
}

    /* ================================
       REGRAS S
       ================================ */
    if (globalMode === "S") {

        if (delta === 1 && s.value === s.max && s.value < 100) {
            // S+ quando value == max → sobem ambos
            s.value++;
            s.max++;
        }

        else if (delta === -1 && s.value === s.max) {
            // S- quando value == max → desce só o value
            if (s.value > 0) s.value--;
        }

        else if (delta === 1 && s.value < s.max && s.value < 100) {
            // S+ normal
            s.value++;
        }

        else if (delta === -1 && s.value > 0) {
            // S- normal
            s.value--;
        }
    }

    /* ================================
       REGRAS L
       ================================ */
    else {

        if (delta === 1 && s.max === s.value && s.max < 100) {
            // L+ quando max == value → só sobe max
            s.max++;
        }

        else if (delta === -1 && s.max === s.value && s.max > 0) {
            // L- quando max == value → descem ambos
            s.max--;
            s.value--;
        }

        else if (delta === 1 && s.max < 100) {
            // L+ normal
            s.max++;
        }

        else if (delta === -1 && s.max > s.value) {
            // L- normal
            s.max--;
        }
    }

    /* ================================
       LIMITE FINAL (0–100)
       ================================ */
    s.value = Math.max(0, Math.min(100, s.value));
    s.max   = Math.max(0, Math.min(100, s.max));

    /* ================================
       SE FIZ CLICK EM +/– NO MAX MODE
       → DESLIGAR MAX MODE AUTOMATICAMENTE
       ================================ */
    if (turnMaxModeOffAfterChange) {
        maxMode = false;
        maxBtn.classList.remove("max-active");

        // atualizar o backup para o novo valor real
        s._backupValue = s.value;
    }
    updateTotals();
    renderSkills();
    computeMaxCareerHeart();
    renderMiniGear();
}





/* ---------------- TOOLTIP ---------------- */
const tooltip = document.getElementById("skill-tooltip");
function positionSkillTooltip(e) {
  if (!tooltip) return;

  const gap = 10;
  const zoom =
    parseFloat(getComputedStyle(document.documentElement).zoom) || 1;

  const desiredLeft = e.clientX + gap;
  const desiredTop = e.clientY + gap;

  tooltip.style.position = "fixed";
  tooltip.style.right = "auto";
  tooltip.style.bottom = "auto";
  tooltip.style.transform = "none";

  // Posição inicial
  tooltip.style.left = "0px";
  tooltip.style.top = "0px";

  const origin = tooltip.getBoundingClientRect();

  // Converter a posição visual para coordenadas CSS
  tooltip.style.left =
    `${(desiredLeft - origin.left) / zoom}px`;

  tooltip.style.top =
    `${(desiredTop - origin.top) / zoom}px`;
}

function showTotalSkillTooltip(e) {
  if (!tooltip) return;

  document.getElementById("tooltip-skill-name").textContent = "Total";

  let baseTotal = 0;
  let limitTotal = 0;
  let gearBoostTotal = 0;
  let gearBonusTotal = 0;
  let percentBoostTotal = 0;

gearBonusTotal = Object.keys(bonusLimit).reduce((sum, cat) => {
  if (equipped[cat] && bonusLimit[cat]) {
    return sum + (bonusAmount[cat] || 0);
  }
  return sum;
}, 0);

  skills.forEach(s => {
    const v = computeSkillValues(s);
    baseTotal += maxMode ? s.max : s.value;
    limitTotal += s.max;
gearBoostTotal += Math.max(
  0,
  (v.equipBoost || 0) -
  Object.keys(bonusLimit).reduce((sum, cat) => {
    if (bonusLimit[cat] === s.name) {
      return sum + (bonusAmount[cat] || 0);
    }
    return sum;
  }, 0)
);


    percentBoostTotal += v.pctBoost || 0;
  });

  const boostTotal = percentBoostTotal + gearBoostTotal + gearBonusTotal;
  const totalFinal = baseTotal + boostTotal;

  document.getElementById("tooltip-base").textContent  = baseTotal.toFixed(0);
  document.getElementById("tooltip-boost").textContent = boostTotal.toFixed(2);
  document.getElementById("tooltip-limit").textContent = limitTotal;
  document.getElementById("tooltip-total").textContent = totalFinal.toFixed(2);

const leaderBoost = getLeadershipBoost();
const leaderRow = document.getElementById("tooltip-leader-row");



if (leaderBoost > 0) {
  document.getElementById("tooltip-leader").textContent =
    `+${leaderBoost.toFixed(1)}%`;
  leaderRow.classList.remove("hidden");
} else {
  document.getElementById("tooltip-leader").textContent = "";
  leaderRow.classList.add("hidden");
}

const heartRow = document.getElementById("tooltip-heart-row");
const heartBoost = heartBoosts[heartState] || 0;

if (heartBoost > 0) {
  document.getElementById("tooltip-heart").textContent = `+${heartBoost}%`;
  heartRow.classList.remove("hidden");
} else {
  document.getElementById("tooltip-heart").textContent = "";
  heartRow.classList.add("hidden");
}

const gearRow = document.getElementById("tooltip-gear-row");

if (gearBoostTotal > 0) {
  document.getElementById("tooltip-gear").textContent = `+${gearBoostTotal}`;
  gearRow.classList.remove("hidden");
} else {
  document.getElementById("tooltip-gear").textContent = "";
  gearRow.classList.add("hidden");
}

  const gearBonusRow = document.getElementById("tooltip-gear-bonus-row");
const gearBonusEl = document.getElementById("tooltip-gear-bonus");

if (gearBonusTotal > 0) {
  gearBonusEl.textContent = `+${gearBonusTotal}`;
  gearBonusRow.classList.remove("hidden");
} else {
  gearBonusEl.textContent = "";
  gearBonusRow.classList.add("hidden");
}

const columns = document.querySelector(".tooltip-columns");
const modifiersColumn = document.querySelector(".tooltip-right");
const modifiersTitle = document.querySelector(".tooltip-title-row span:last-child");

const hasModifiers =
  leaderBoost > 0 ||
  heartBoost > 0 ||
  gearBoostTotal > 0 ||
  gearBonusTotal > 0;

const titleRow = document.querySelector(".tooltip-title-row");

if (hasModifiers) {
  modifiersColumn.style.display = "";
  modifiersTitle.style.display = "";

  titleRow.style.gridTemplateColumns = "1fr 110px";
  columns.style.gridTemplateColumns = "1fr 110px";
  tooltip.style.width = "max-content";

} else {
  modifiersColumn.style.display = "none";
  modifiersTitle.style.display = "none";

  titleRow.style.gridTemplateColumns = "1fr";
  columns.style.gridTemplateColumns = "1fr";
  tooltip.style.width = "fit-content";
}

tooltip.classList.add("visible");
tooltip.classList.remove("hidden");
positionSkillTooltip(e);
}

function showTooltipForSkill(s, e) {
  const v = computeSkillValues(s);
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };



  set("tooltip-skill-name", s.name);
  set("tooltip-base", Math.round(v.base));
  set("tooltip-limit", s.max);
  set("tooltip-boost", v.pctBoost.toFixed(2));
  set("tooltip-total", v.final.toFixed(2));
const heartRow = document.getElementById("tooltip-heart-row");
const heartBoost = heartBoosts[heartState] || 0;

if (heartBoost > 0) {
  set("tooltip-heart", "+" + heartBoost + "%");
  heartRow.classList.remove("hidden");
} else {
  heartRow.classList.add("hidden");
}

set("tooltip-morale", "+" + moraleBoosts[moraleState] + "%");


const leaderBoost = getLeadershipBoost();
const leaderRow = document.getElementById("tooltip-leader-row");

if (leaderBoost > 0) {
  set("tooltip-leader", "+" + leaderBoost.toFixed(1) + "%");
  leaderRow.classList.remove("hidden");
} else {
  leaderRow.classList.add("hidden");
}

const gearBonusRow = document.getElementById("tooltip-gear-bonus-row");
const gearBonusEl = document.getElementById("tooltip-gear-bonus");

let gearBonus = 0;

Object.keys(bonusLimit).forEach(cat => {
  if (bonusLimit[cat] === s.name) {
    gearBonus += bonusAmount[cat] || 0;
  }
});

const gearNormal = Math.max(0, (v.equipBoost || 0) - gearBonus);

const gearRow = document.getElementById("tooltip-gear-row");

if (gearNormal > 0) {
  set("tooltip-gear", "+" + gearNormal);
  gearRow.classList.remove("hidden");
} else {
  set("tooltip-gear", "");
  gearRow.classList.add("hidden");
}

if (gearBonus > 0) {
  gearBonusEl.textContent = "+" + gearBonus;
  gearBonusRow.classList.remove("hidden");
} else {
  gearBonusEl.textContent = "";
  gearBonusRow.classList.add("hidden");
}

// Verificar se existem modificadores ativos
const hasModifiers =
  heartBoost > 0 ||
  leaderBoost > 0 ||
  gearNormal > 0 ||
  gearBonus > 0;

// Elementos do tooltip
const modifiersColumn = tooltip.querySelector(".tooltip-right");
const modifiersTitle = tooltip.querySelector(".tooltip-title-row span:last-child");
const columns = tooltip.querySelector(".tooltip-columns");
const titleRow = tooltip.querySelector(".tooltip-title-row");

// Mostrar ou esconder apenas os elementos existentes
if (modifiersColumn) {
  modifiersColumn.style.display = hasModifiers ? "" : "none";
}

if (modifiersTitle) {
  modifiersTitle.style.display = hasModifiers ? "" : "none";
}

if (columns) {
  columns.style.gridTemplateColumns = hasModifiers ? "1fr 110px" : "1fr";
}

if (titleRow) {
  titleRow.style.gridTemplateColumns = hasModifiers ? "1fr 110px" : "1fr";
}

tooltip.style.width = hasModifiers ? "max-content" : "fit-content";

  if (!tooltip) return;
  tooltip.classList.add("visible");
tooltip.classList.remove("hidden");
positionSkillTooltip(e);
}
function hideTooltip() {
  if (!tooltip) return;
  tooltip.classList.remove("visible");
  tooltip.classList.add("hidden");
}

/* RESET SHARED: LOAD + RUBBER */
function resetExtraSelections() {
  window.dispatchEvent(new Event("skillwhat-reset-favorite-weapon"));
  if (typeof window.SkillWhatResetTalents === "function") {
    window.SkillWhatResetTalents();
  }
}

/* ---------------- LOAD ---------------- */
if (loadBtn) {
  loadBtn.addEventListener("click", () => {
extendedCareer = false;
const careerBtn = document.getElementById("career-plus-btn");


if (careerBtn) careerBtn.classList.remove("active");
// RESET SHORT LIVED
shortLived = false;
const shortBtn = document.getElementById("shortlived-btn");
if (shortBtn) shortBtn.classList.remove("active");

// RESET ANTISOCIAL
const antiBtn = document.getElementById("antisocial-btn");
if (antiBtn) antiBtn.classList.remove("active");

    // FULL RESET — igual ao RUBBER (limpa estado UI e valores temporários)
    heartState = 0;
    moraleState = 0;
    maxMode = false;

    if (heartBtn)  heartBtn.className = "action-btn heart-grey-btn";
    if (moraleBtn) moraleBtn.className = "action-btn morale-btn";
    if (maxBtn)    maxBtn.classList.remove("max-active");

    // RESET GEAR
    Object.keys(equipped).forEach(k => equipped[k] = null);
    Object.keys(bonusLimit).forEach(k => bonusLimit[k] = null);
    updateBoostLabels();
    recomputeEquipmentBoosts();
    renderAllEquipmentUI();
    updateGearButtonState();
    resetLeadership();
    resetExperience();
    resetExtraSelections();

    // RESET POPUPS
    gearLocked = false;
    if (lockBtn) lockBtn.textContent = "🔓";
    if (gearPopup) gearPopup.classList.add("hidden");

    gameLocked = false;
    const gameLockBtn = document.getElementById("game-lock-btn");
    if (gameLockBtn) gameLockBtn.textContent = "🔓";
    if (gamePopup) gamePopup.classList.add("hidden");

    // RESET GAMES
    const gameInput = document.getElementById("game-input");
    const gamesPlayedEl = document.getElementById("games-played");

if (gameInput) gameInput.value = "0";
    if (gamesPlayedEl) gamesPlayedEl.textContent = "0";
const gameOkBtn = document.getElementById("game-ok");
if (gameOkBtn) {
  setTimeout(() => gameOkBtn.click(), 0);
}
    // 🔥 FORÇAR ESTADO BASE DE CÁLCULO
updateHeartsBasedOnGames(0);
computeMaxCareerHeart();
updateGamesButtonState();


    // RESET HEART SEASONS
  [".season-tiny", ".season-small", ".season-big",
     ".season-gold", ".season-plat", ".season-diamond"]
      .forEach(sel => {
        const el = document.querySelector(sel);
        if (el) { el.textContent = ""; el.style.color = ""; }
      });

    // RESET LOYAL
    const gameImgBtn = document.getElementById("game-img-btn");
    const loyalStatusEl = document.getElementById("loyal-status");

    if (gameImgBtn)   gameImgBtn.classList.remove("active");
    if (loyalStatusEl) loyalStatusEl.textContent = "NO";

    updateGamesButtonState();


    // CHECK IF LOAD INPUT IS EMPTY -> RESTORE INITIAL STATE (option A)
    const loadText = document.getElementById("skill-input").value.trim();
    missingPopupOpen = false;
    if (loadText.length === 0) {

        // restore name + age defaults (initial view)
        const nameEl = document.querySelector(".player-name");
        const ageEl = document.querySelector(".player-age");
        if (nameEl) nameEl.textContent = "Spidevil";
        if (ageEl) ageEl.textContent  = "15yo (day 1)";

        // restore skills to the initial backup (deep copy)
        skills = JSON.parse(JSON.stringify(initialSkillsBackup));
loadedSkillsBackup = JSON.parse(JSON.stringify(skills));
loadedName = "Spidevil";
loadedAge = "15yo (day 1)";
        // recompute and refresh UI
        recomputeEquipmentBoosts();
        renderAllEquipmentUI();
        updateGearButtonState();
        renderSkills();
        computeMaxCareerHeart();
        updateGamesButtonState();
        updateRetireDisplayIfNeeded();
        renderMiniGear();
        return; // done
    }


    // NORMAL LOAD (text present)
    const data = parseCardText(loadText);

    const nameEl = document.querySelector(".player-name");
    const ageEl = document.querySelector(".player-age");

    if (nameEl) nameEl.textContent = data.playerName;
    if (ageEl)  ageEl.textContent  = data.playerAge;

    if (data.skills.length) {
        skills = data.skills;
    } 


    // detectar skills com max = null
const incomplete = skills.filter(s => s.max === null);

if (incomplete.length > 0 && !missingPopupOpen) {
    openMissingSkillPopup(incomplete);
    return;
}

loadedSkillsBackup = JSON.parse(JSON.stringify(skills));
loadedName = data.playerName;
loadedAge = data.playerAge;
    // ensure UI and calculations updated
    recomputeEquipmentBoosts();
    renderAllEquipmentUI();
    updateGearButtonState();
    updateRetireDisplayIfNeeded();
    computeMaxCareerHeart();
    renderSkills();
    renderMiniGear();
  });
}

/* ---------------- HEART / MORALE / MAX ---------------- */
if (heartBtn) {
  heartBtn.addEventListener("click", () => {
    heartState = (heartState + 1) % 8;
    heartBtn.className = "action-btn heart-grey-btn";
    if (heartState > 0) heartBtn.classList.add(`heart-active-${heartState}`);
    renderSkills();
    updateBoostLabels();
  });
}
if (moraleBtn) {
  moraleBtn.addEventListener("click", () => {
    moraleState = (moraleState + 1) % 4;
    moraleBtn.className = "action-btn morale-btn";
    if (moraleState > 0) moraleBtn.classList.add(`morale-active-${moraleState}`);
    renderSkills();
    updateBoostLabels();
  });
}
if (maxBtn) {
  maxBtn.addEventListener("click", () => {
    maxMode = !maxMode;
    maxBtn.classList.toggle("max-active");

    skills.forEach(s => {
      if (maxMode) {
        // guardar valor original
        s._backupValue = s.value;

        // value passa a ser igual ao max
        s.value = s.max;
      } else {
        // restaurar o valor original
        if (s._backupValue !== undefined) {
          s.value = s._backupValue;
        }
      }
    });

    renderSkills();
  });
}

/* ---------------- EQUIPMENT ICONS ---------------- */
const GEAR_ICONS = {
  mousepad: "https://i.postimg.cc/W4SQ1NJV/mp1.png",
  mouse: "https://i.postimg.cc/pdPwvhyr/m1.png",
  keyboard: "https://i.postimg.cc/BvJr3Ltt/k1.png",
  headset: "https://i.postimg.cc/5tfhJYj6/h1.png"
};

/* ---------------- EQUIPMENT DATA & UI ---------------- */
const EQUIPMENT = {
  mousepad: [
    { name: "AJ Pad", boosts: { Handling: 3, Quickness: 1 }, tokens: "H3 Q1" },
    { name: "Noctron", boosts: { Aim: 1, Quickness: 2 }, tokens: "A1 Q2" },
    { name: "Citus", boosts: { Aim: 1, Handling: 1, Quickness: 1 }, tokens: "A1 H1 Q1" },
    { name: "Armageddon", boosts: { Aim: 1, Handling: 3 }, tokens: "A1 H3" }
  ],
  mouse: [
    { name: "Aquila Fly", boosts: { Aim: 2, Handling: 1 }, tokens: "A2 H1" },
    { name: "Aurora 3330", boosts: { Aim: 1, Quickness: 2 }, tokens: "A1 Q2" },
    { name: "Hero", boosts: { Aim: 1, Handling: 1, Quickness: 1 }, tokens: "A1 H1 Q1" },
    { name: "Cyborg", boosts: { Handling: 1, Quickness: 2 }, tokens: "H1 Q2" }
  ],
  keyboard: [
    { name: "Mintaka", boosts: { Determination: 2, Movement: 2 }, tokens: "D2 M2" },
    { name: "Quasar RGB", boosts: { Determination: 3 }, tokens: "D3" },
    { name: "Alnitak", boosts: { Determination: 3, Movement: 1 }, tokens: "D3 M1" },
    { name: "Pulsar", boosts: { Movement: 4, Determination: 1 }, tokens: "M4 D1 " }
  ],
  headset: [
    { name: "Pentagon", boosts: { Teamplay: 1, Gamesense: 2, Awareness: 1 }, tokens: "T1 G2 Aw1" },
    { name: "Enigma", boosts: { Awareness: 2, Teamplay: 1 }, tokens: "Aw2 T1" },
    { name: "Gemini", boosts: { Awareness: 2, Gamesense: 1 }, tokens: "Aw2 G1" },
    { name: "Singularity", boosts: { Awareness: 1, Teamplay: 2, Gamesense: 1 }, tokens: "Aw1 T2 G1" }
  ]
};

function renderCategory(id, items) {
  const cont = document.getElementById(id);
  if (!cont) return;

  cont.innerHTML = "";
  cont.classList.add("gear-row");

  const cat = id.replace("gear-", "");

  // ICON LEFT
  const img = document.createElement("img");
  img.src = GEAR_ICONS[cat];
  img.className = "gear-row-icon";

  // GRID CENTER
  const grid = document.createElement("div");
  grid.className = "gear-grid";

  items.forEach(it => {
    const b = document.createElement("div");
    b.className = "gear-item";

    if (equipped[cat] && equipped[cat].name === it.name) {
      b.classList.add("equipped");
    }

    const boostsHtml = Object.entries(it.boosts)
      .map(([skill, val]) => `
        <span class="gear-boost">
          +${val}
          <img
            class="gear-boost-icon"
            src="${GEAR_ICON_BY_SKILL[skill]}"
            alt="${skill}"
          />
        </span>
      `)
      .join(" ");

    b.innerHTML = `
      <div class="gear-name">${it.name}</div>
      <div class="gear-boosts">
        ${boostsHtml}
      </div>
    `;

    b.addEventListener("click", () => {

      equipped[cat] =
        equipped[cat] && equipped[cat].name === it.name
          ? null
          : it;

      // remove bonus se desequipar
      if (!equipped[cat]) {
        bonusLimit[cat] = null;
      }

      recomputeEquipmentBoosts();
      updateGearButtonState();
      renderAllEquipmentUI();
      renderSkills();
      renderMiniGear();
    });

    grid.appendChild(b);
  });

  // BONUS RIGHT
  const bonusWrap = document.createElement("div");
  bonusWrap.className = "gear-bonus-wrap";



  const bonusBtn = document.createElement("button");
  bonusBtn.className = "gear-bonus-btn";

  const selected = bonusLimit[cat];
  const amount = bonusAmount[cat] || 0;

  bonusBtn.innerHTML = selected && amount > 0
  ? `
    <div class="gear-bonus-inner">
      <img class="gear-bonus-icon" src="${GEAR_ICON_BY_SKILL[selected]}">
      <div class="gear-bonus-value">+${amount}</div>
    </div>
  `
  : `<span>+</span>`;

  bonusBtn.addEventListener("click", e => {
    e.stopPropagation();

    if (!equipped[cat]) return;

    const bonusSkills = [
      "Aim",
      "Handling",
      "Quickness",
      "Determination",
      "Awareness",
      "Teamplay",
      "Gamesense",
      "Movement"
    ];

    const currentIndex =
      selected
        ? bonusSkills.indexOf(selected)
        : -1;

    bonusLimit[cat] =
  bonusSkills[
    (currentIndex + 1) % bonusSkills.length
  ];

if (!bonusAmount[cat]) {
  bonusAmount[cat] = 1;
}

recomputeEquipmentBoosts();
    renderAllEquipmentUI();
    renderSkills();
    renderMiniGear();
  });

bonusWrap.appendChild(bonusBtn);
const arrows = document.createElement("div");
arrows.className = "gear-bonus-arrows";

const up = document.createElement("button");
up.className = "gear-bonus-arrow up";
up.textContent = "▲";

const down = document.createElement("button");
down.className = "gear-bonus-arrow down";
down.textContent = "▼";

up.addEventListener("click", e => {
  e.stopPropagation();
  if (!bonusLimit[cat]) return;

  bonusAmount[cat] =
  Math.min(5, (bonusAmount[cat] || 1) + 1);

  recomputeEquipmentBoosts();
  renderAllEquipmentUI();
  renderSkills();
  renderMiniGear();
});

down.addEventListener("click", e => {
  e.stopPropagation();
  if (!bonusLimit[cat]) return;

  bonusAmount[cat] = Math.max(0, (bonusAmount[cat] || 1) - 1);

  if (bonusAmount[cat] === 0) {
    bonusLimit[cat] = null;
  }

  recomputeEquipmentBoosts();
  renderAllEquipmentUI();
  renderSkills();
  renderMiniGear();
});

arrows.appendChild(up);
arrows.appendChild(down);
bonusWrap.appendChild(arrows);

  // ICON HIGHLIGHT
  if (equipped[cat]) {
    img.classList.add("icon-equipped");
  } else {
    img.classList.remove("icon-equipped");
  }

  cont.appendChild(img);
  cont.appendChild(grid);
  cont.appendChild(bonusWrap);
}



function renderAllEquipmentUI() {
  renderCategory("gear-mousepad", EQUIPMENT.mousepad);
  renderCategory("gear-mouse", EQUIPMENT.mouse);
  renderCategory("gear-keyboard", EQUIPMENT.keyboard);
  renderCategory("gear-headset", EQUIPMENT.headset);
}

function recomputeEquipmentBoosts() {
  equipmentBoosts = {};

  Object.entries(equipped).forEach(([cat, it]) => {
    if (!it) return;

    // boosts normais do gear
    Object.entries(it.boosts).forEach(([skill, val]) => {
      equipmentBoosts[skill] = (equipmentBoosts[skill] || 0) + val;
    });

    // bonus extra escolhido na casa da frente
    const bonusSkill = bonusLimit[cat];
    if (bonusSkill) {
      equipmentBoosts[bonusSkill] =
  (equipmentBoosts[bonusSkill] || 0) + (bonusAmount[cat] || 0);
    }
  });
}

/* Updates gear button visual (brightness) if at least one item is equipped */
function updateGearButtonState() {
  const gearBtn = document.querySelector(".gear-btn");
  const hasGear = Object.values(equipped).some(v => v !== null);
  if (!gearBtn) return;
  if (hasGear) gearBtn.classList.add("gear-active");
  else gearBtn.classList.remove("gear-active");
}

/* ---------------- GAMES BUTTON ACTIVE STATE ---------------- */
function updateGamesButtonState() {
  const gamesBtn = document.querySelector(".games-btn");
  if (!gamesBtn) return;

  const gamesPlayed =
    parseInt(document.getElementById("games-played")?.textContent, 10) || 0;

  const loyal =
    document.getElementById("loyal-status")?.textContent === "YES";

  const antisocial =
    document.getElementById("antisocial-btn")?.classList.contains("active");

  const longLived = extendedCareer === true; // 🔥 NOVO

if (gamesPlayed > 0 || loyal || antisocial || extendedCareer || shortLived) {
    gamesBtn.classList.add("games-active");
  } else {
    gamesBtn.classList.remove("games-active");
  }
}


function openMissingSkillPopup(list) {
  if (missingPopupOpen) return; // ⛔ impede abrir de novo
    missingPopupOpen = true;      // 🔒 marca como aberto
    const popup = document.getElementById("missing-skill-popup");
    const container = document.getElementById("missing-skill-fields");

    container.innerHTML = "";

    list.forEach(s => {
        const div = document.createElement("div");
        div.className = "missing-row";

        div.innerHTML = `
            <span>${s.name}</span>
            <input
                type="text"
                class="missing-input"
                inputmode="numeric"
                id="miss-${s.name}"
                placeholder="70–100"
            >
        `;

        container.appendChild(div);
    });

    document.getElementById("modal-overlay").classList.remove("hidden");
    popup.classList.remove("hidden");

    // ===== INPUT AUTO-VALIDATION (70–100) =====
    const inputs = [...document.querySelectorAll('.missing-input')];

    inputs.forEach((input, index) => {

        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '');
            const value = input.value;

            // máximo 3 dígitos
            if (value.length > 3) {
                input.value = '';
                return;
            }

            // standby 10
            if (value === '10') return;

            // 3 dígitos
            if (value.length === 3) {
                if (value === '100') {
                    inputs[index + 1]?.focus();
                    return;
                }
                input.value = '';
                return;
            }

            // 2 dígitos
            if (value.length === 2) {
                const num = Number(value);

                if (num >= 70 && num <= 99) {
                    inputs[index + 1]?.focus();
                    return;
                }

                input.value = '';
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '') {
                inputs[index - 1]?.focus();
            }
        });

    });

    document.getElementById("missing-skill-confirm").onclick = () => {
        let allGood = true;

        list.forEach(s => {
            const field = document.getElementById(`miss-${s.name}`);
            const val = parseInt(field.value, 10);

            if (!(val >= 70 && val <= 100)) {
                allGood = false;
                field.style.border = "1px solid red";
            } else {
                field.style.border = "";
                s.max = val;
                s.max = Number(val); // força número, nunca null
            }
        });

        if (!allGood) return;

        popup.classList.add("hidden");
        document.getElementById("modal-overlay").classList.add("hidden");
missingPopupOpen = false; // 🔓 permite novo popup num próximo LOAD
        loadedSkillsBackup = JSON.parse(JSON.stringify(skills));
        loadedName = document.querySelector(".player-name").textContent;
        loadedAge  = document.querySelector(".player-age").textContent;

        recomputeEquipmentBoosts();
        renderAllEquipmentUI();
        updateGearButtonState();
        renderSkills();
        computeMaxCareerHeart();
        updateGamesButtonState();
        updateRetireDisplayIfNeeded();
        renderMiniGear();
    };
}



/* ---------------- POPUP (open / apply / drag / lock / outside click) ---------------- */
const gearPopup = document.getElementById("gear-popup");
const gearBtn = document.querySelector(".gear-btn");
const gearApplyBtn = document.getElementById("gear-apply-btn");
const lockBtn = document.getElementById("gear-lock-btn");

/* --- GEAR BUTTON TOGGLE (respeita lock) --- */
if (gearBtn) {
  gearBtn.addEventListener("click", () => {
    if (!gearLocked) {
      if (gearPopup.classList.contains("hidden")) gearPopup.classList.remove("hidden");
      else gearPopup.classList.add("hidden");
      return;
    }
    if (gearLocked) gearPopup.classList.remove("hidden");
  });
}

if (gearApplyBtn) {
  gearApplyBtn.addEventListener("click", () => {
    if (!gearPopup) return;
    gearPopup.classList.add("hidden");
    recomputeEquipmentBoosts();
    updateGearButtonState();
    renderSkills();
    renderMiniGear();
  });
}

/* GAME POPUP */
const gamePopup = document.getElementById("game-popup");
const gamesBtn = document.querySelector(".games-btn");
const gameLockBtn = document.getElementById("game-lock-btn");
const gameDrag = document.getElementById("game-drag");

let gameLocked = false;
if (gameLockBtn) gameLockBtn.textContent = "🔓";

if (gamesBtn) {
  gamesBtn.addEventListener("click", () => {
    if (!gameLocked) {
      if (gamePopup.classList.contains("hidden")) gamePopup.classList.remove("hidden");
      else gamePopup.classList.add("hidden");
      return;
    }
    gamePopup.classList.remove("hidden");
  });
}

if (gameLockBtn) {
  gameLockBtn.addEventListener("click", () => {
    gameLocked = !gameLocked;
    gameLockBtn.textContent = gameLocked ? "🔒" : "🔓";
  });
}

document.addEventListener("mousedown", (e) => {
  if (!gamePopup || gamePopup.classList.contains("hidden")) return;
  if (gameLocked) return;
  const inner = gamePopup.querySelector(".game-popup-inner");
  const isBtn = e.target.closest(".games-btn");
  const inside = inner && inner.contains(e.target);
  if (!inside && !isBtn) gamePopup.classList.add("hidden");
});

/* DRAG for game popup */
(function () {
  if (!gamePopup || !gameDrag) return;
  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;
  function getEvent(e) { return e.touches ? e.touches[0] : e; }
  function onDown(e) { const ev = getEvent(e); dragging = true; const rect = gamePopup.getBoundingClientRect(); offsetX = ev.clientX - rect.left; offsetY = ev.clientY - rect.top; document.body.style.userSelect = "none"; if (e.cancelable) e.preventDefault(); }
  function onUp() { dragging = false; document.body.style.userSelect = "auto"; }
  function onMove(e) { if (!dragging) return; const ev = getEvent(e); gamePopup.style.left = (ev.clientX - offsetX) + "px"; gamePopup.style.top = (ev.clientY - offsetY) + "px"; if (e.cancelable) e.preventDefault(); }
  gameDrag.addEventListener("mousedown", onDown);
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onUp);
  gameDrag.addEventListener("touchstart", onDown, { passive: false });
  document.addEventListener("touchmove", onMove, { passive: false });
  document.addEventListener("touchend", onUp);
})();


/* DRAG for gear popup - corrigido para zoom 85% */
(function () {
  const popup = document.getElementById("gear-popup");
  const dragArea = document.getElementById("gear-drag");
  if (!popup || !dragArea) return;

  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  function getClientEvent(e) {
    return e.touches ? e.touches[0] : e;
  }

  function getZoom() {
    return parseFloat(
      getComputedStyle(document.documentElement).zoom
    ) || 1;
  }

  function onDown(e) {
    const ev = getClientEvent(e);
    const rect = popup.getBoundingClientRect();

    dragging = true;

    offsetX = ev.clientX - rect.left;
    offsetY = ev.clientY - rect.top;

    document.body.style.userSelect = "none";
    dragArea.style.cursor = "grabbing";

    if (e.cancelable) e.preventDefault();
  }

  function onUp() {
    dragging = false;
    document.body.style.userSelect = "auto";
    dragArea.style.cursor = "grab";
  }

  function onMove(e) {
    if (!dragging) return;

    const ev = getClientEvent(e);
    const zoom = getZoom();
    const rect = popup.getBoundingClientRect();

    const pad = 8;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let newLeft = ev.clientX - offsetX;
    let newTop = ev.clientY - offsetY;

    newLeft = Math.max(
      pad,
      Math.min(newLeft, vw - rect.width - pad)
    );

    newTop = Math.max(
      pad,
      Math.min(newTop, vh - rect.height - pad)
    );

    popup.style.left = (newLeft / zoom) + "px";
    popup.style.top = (newTop / zoom) + "px";

    if (e.cancelable) e.preventDefault();
  }

  dragArea.addEventListener("mousedown", onDown);
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onUp);

  dragArea.addEventListener("touchstart", onDown, {
    passive: false
  });

  document.addEventListener("touchmove", onMove, {
    passive: false
  });

  document.addEventListener("touchend", onUp);
})();


/* LOCK button toggles whether outside clicks close the popup */
let gearLocked = false;
if (lockBtn) {
  lockBtn.textContent = "🔓";
  lockBtn.addEventListener("click", () => {
    gearLocked = !gearLocked;
    lockBtn.textContent = gearLocked ? "🔒" : "🔓";
    lockBtn.classList.toggle("locked", gearLocked);
  });
}

document.addEventListener("mousedown", (e) => {
  if (!gearPopup || gearPopup.classList.contains("hidden")) return;
  if (gearLocked) return;
  const inner = gearPopup.querySelector(".gear-popup-inner");
  if (!inner) return;
  const inside = inner.contains(e.target);
  const isGearBtn = e.target.closest(".gear-btn");
  if (!inside && !isGearBtn) {
    gearPopup.classList.add("hidden");
    updateGearButtonState();
  }
});

/* ---------------- RUBBER RESET ---------------- */
const rubber = document.querySelector(".rubber-btn");
missingPopupOpen = false;
if (rubber) {
  rubber.addEventListener("click", () => {

    // RESET HEART / MORALE / MAX
    heartState = 0;
    moraleState = 0;
    maxMode = false;
extendedCareer = false;
const careerBtn = document.getElementById("career-plus-btn");
if (careerBtn) careerBtn.classList.remove("active");
// RESET SHORT LIVED
shortLived = false;
const shortBtn = document.getElementById("shortlived-btn");
if (shortBtn) shortBtn.classList.remove("active");

// RESET ANTISOCIAL
const antiBtn = document.getElementById("antisocial-btn");
if (antiBtn) antiBtn.classList.remove("active");

    if (heartBtn)  heartBtn.className = "action-btn heart-grey-btn";
    if (moraleBtn) moraleBtn.className = "action-btn morale-btn";
    if (maxBtn)    maxBtn.classList.remove("max-active");

    // RESET GEAR
    Object.keys(equipped).forEach(k => equipped[k] = null);
    Object.keys(bonusLimit).forEach(k => bonusLimit[k] = null);
    updateBoostLabels();
    recomputeEquipmentBoosts();
    renderAllEquipmentUI();
    updateGearButtonState();
    resetLeadership();
    resetExperience();
    resetExtraSelections();

    // RESET POPUPS
    gearLocked = false;
    if (lockBtn) lockBtn.textContent = "🔓";
    if (gearPopup) gearPopup.classList.add("hidden");

    gameLocked = false;
    const gameLockBtn = document.getElementById("game-lock-btn");
    if (gameLockBtn) gameLockBtn.textContent = "🔓";
    if (gamePopup) gamePopup.classList.add("hidden");

    // RESET GAMES
    const gameInput = document.getElementById("game-input");
    const gamesPlayedEl = document.getElementById("games-played");

    if (gameInput) gameInput.value = "0";
    if (gamesPlayedEl) gamesPlayedEl.textContent = "0";
const gameOkBtn = document.getElementById("game-ok");
if (gameOkBtn) {
  setTimeout(() => gameOkBtn.click(), 0);
}
    updateGamesButtonState();

    // RESET HEART SEASONS
[".season-tiny", ".season-small", ".season-big",
 ".season-gold", ".season-plat", ".season-diamond"]
  .forEach(sel => {
    const el = document.querySelector(sel);
    if (el) { el.textContent = ""; el.style.color = ""; }
  });

    // RESET LOYAL
    const gameImgBtn = document.getElementById("game-img-btn");
    const loyalStatusEl = document.getElementById("loyal-status");

    if (gameImgBtn)   gameImgBtn.classList.remove("active");
    if (loyalStatusEl) loyalStatusEl.textContent = "NO";

  // RESTAURAR ESTADO BASE DO ÚLTIMO LOAD
skills = JSON.parse(JSON.stringify(loadedSkillsBackup));

const nameEl = document.querySelector(".player-name");
const ageEl  = document.querySelector(".player-age");

if (nameEl) nameEl.textContent = loadedName;
if (ageEl)  ageEl.textContent  = loadedAge;


    // REFRESH UI
    renderSkills();
    renderMiniGear();
    computeMaxCareerHeart();
    updateRetireDisplayIfNeeded();
  });
}
function updateHeartRequirementLabels() {
  const rows = document.querySelectorAll(".heart-row");

  const base = [50, 100, 200, 400, 600, 800];

  let mult = 1;

  if (document.getElementById("loyal-status").textContent === "YES") mult = 0.75;
  if (document.getElementById("antisocial-btn").classList.contains("active")) mult = 1.25;

  rows.forEach((row, i) => {
    const span = row.querySelector("span:nth-child(2)");
    if (!span) return;

    span.textContent = `${Math.floor(base[i] * mult)} games → `;
  });
}

function updateHeartsBasedOnGames(games) {
  const tinyEl  = document.querySelector(".season-tiny");
  const smallEl = document.querySelector(".season-small");
  const bigEl   = document.querySelector(".season-big");
  const goldEl  = document.querySelector(".season-gold");
  const platEl  = document.querySelector(".season-plat");
  const diamEl  = document.querySelector(".season-diamond");

  if (!tinyEl || !smallEl || !bigEl || !goldEl || !platEl || !diamEl) return;

  const loyal = document.getElementById("loyal-status").textContent === "YES";
const antisocial = document.getElementById("antisocial-btn")?.classList.contains("active");

  let tinyReq  = 50;
  let smallReq = 100;
  let bigReq   = 200;
  let goldReq  = 400;
  let platReq  = 800;

 let mult = 1;
if (loyal) mult = 0.75;
if (antisocial) mult = 1.25;

tinyReq  = Math.floor(50 * mult);
smallReq = Math.floor(100 * mult);
bigReq   = Math.floor(200 * mult);
goldReq  = Math.floor(400 * mult);
platReq  = Math.floor(600 * mult);
const diamReq = Math.floor(800 * mult);


  const ageText = document.querySelector(".player-age")?.textContent || "";
  const { age, birthdayDay } = parseAgeString(ageText);

  const gd = calculateGameDate();
  const currentSeason = gd.season;
  const retireSeason = computeRetireSeasonFrom(age, birthdayDay).finalSeason;

function targetMoment(req) {
  return whenGamesReached(
    currentSeason,
    gd.day,
    games,
    req
  );
}



function label(req) {
  const moment = targetMoment(req);

  // impossível antes de reformar
  if (moment.season > retireSeason) return "❌";

  if (games < req) {
    const ageAtSeason = age + (moment.season - currentSeason);

    const maxAge = getMaxCareerAge();
if (ageAtSeason >= maxAge) return "❌";

    return `S${moment.season} D${moment.day} (${ageAtSeason}yo)`;
  }

  return "✔";
}



  tinyEl.textContent  = label(tinyReq);
  smallEl.textContent = label(smallReq);
  bigEl.textContent   = label(bigReq);
  goldEl.textContent  = label(goldReq);
  platEl.textContent  = label(platReq);
  diamEl.textContent  = label(diamReq);

  [
    [tinyEl, tinyReq],
    [smallEl, smallReq],
    [bigEl, bigReq],
    [goldEl, goldReq],
    [platEl, platReq],
    [diamEl, diamReq]
  ].forEach(([el, req]) => {
    el.style.color = games >= req ? "#76ff76" : "";
  });
}


/* --- DOM READY: setup loyal + games input listeners --- */


/* --- DOM READY: setup loyal + games input listeners --- */
document.addEventListener('DOMContentLoaded', () => {
  const careerBtn = document.getElementById("career-plus-btn");
  const antiBtn = document.getElementById("antisocial-btn");
  const shortBtn = document.getElementById("shortlived-btn"); 
if (shortBtn) {
  shortBtn.addEventListener("click", () => {
    shortLived = !shortLived;

    if (shortLived) {
      extendedCareer = false;
      careerBtn.classList.remove("active");
      shortBtn.classList.add("active");
    } else {
      shortBtn.classList.remove("active");
    }

    updateRetireDisplayIfNeeded();

    const gamesPlayed =
      parseInt(document.getElementById("games-played")?.textContent, 10) || 0;

    updateHeartsBasedOnGames(gamesPlayed);
    computeMaxCareerHeart();
    updateGamesButtonState();
  });
}

if (careerBtn) {
  careerBtn.addEventListener("click", () => {
    // toggle ON / OFF
    extendedCareer = !extendedCareer;

    if (extendedCareer) {
  shortLived = false;
  shortBtn.classList.remove("active");
}


    // estado visual
    careerBtn.classList.toggle("active", extendedCareer);

    // 🔥 recalcular tudo o que depende da idade
    updateRetireDisplayIfNeeded();

    const gamesPlayed =
      parseInt(document.getElementById("games-played")?.textContent, 10) || 0;

    updateHeartsBasedOnGames(gamesPlayed);
    computeMaxCareerHeart();
    updateGamesButtonState();
  });
}

  const gameImgBtn = document.getElementById('game-img-btn');
  const loyalStatusEl = document.getElementById('loyal-status');

  if (!gameImgBtn) console.warn('game-img-btn not found in DOM');
  else {
    gameImgBtn.classList.remove('active');
    if (loyalStatusEl) loyalStatusEl.textContent = 'NO';


let loyalActive = false;
let antisocialActive = false;
let originalGamesBeforeModifier = null;



/* LOYAL */
gameImgBtn.addEventListener("click", () => {
  loyalActive = !loyalActive;

  if (loyalActive) {
    antisocialActive = false;
    antiBtn.classList.remove("active");

    gameImgBtn.classList.add("active");
    loyalStatusEl.textContent = "YES";
  } else {
    gameImgBtn.classList.remove("active");
    loyalStatusEl.textContent = "NO";
  }

  const games =
    parseInt(document.getElementById("games-played")?.textContent, 10) || 0;

  updateHeartRequirementLabels();
  updateHeartsBasedOnGames(games);
  computeMaxCareerHeart();
  updateGamesButtonState();
});


antiBtn.addEventListener("click", () => {
  antisocialActive = !antisocialActive;

  if (antisocialActive) {
    loyalActive = false;
    gameImgBtn.classList.remove("active");
    loyalStatusEl.textContent = "NO";

    antiBtn.classList.add("active");
  } else {
    antiBtn.classList.remove("active");
  }

  const games =
    parseInt(document.getElementById("games-played")?.textContent, 10) || 0;

  updateHeartRequirementLabels();
  updateHeartsBasedOnGames(games);
  computeMaxCareerHeart();
  updateGamesButtonState();
});




  }

  const gameInput = document.getElementById("game-input");
  const gameOkBtn = document.getElementById("game-ok");
  const gamesPlayedEl = document.getElementById("games-played");
  const smallSeason = document.querySelector(".season-small");
  const bigSeason   = document.querySelector(".season-big");
  const goldSeason  = document.querySelector(".season-gold");
  const platSeason  = document.querySelector(".season-plat");




  if (gameOkBtn) {
    gameOkBtn.addEventListener("click", () => {
      const value = parseInt(gameInput.value, 10);
      if (isNaN(value) || value < 0) return;
      if (gamesPlayedEl) gamesPlayedEl.textContent = value;
      updateHeartsBasedOnGames(value);
      computeMaxCareerHeart();
      updateGamesButtonState();
    });
  }
updateHeartsBasedOnGames(0);
  updateRetireDisplayIfNeeded();
  updateGamesButtonState();
});

/* ---------------- MAX HEART CALC ---------------- */
function computeMaxCareerHeart() {
  const ageEl = document.querySelector(".player-age");
  const gamesPlayedEl = document.getElementById("games-played");
  if (!ageEl || !gamesPlayedEl) return;

  const { age, birthdayDay } = parseAgeString(ageEl.textContent);
  const gamesPlayed = parseInt(gamesPlayedEl.textContent, 10) || 0;

  const gd = calculateGameDate();
  const currentSeason = gd.season;
  const loyal = document.getElementById("loyal-status").textContent === "YES";
const antisocial = document.getElementById("antisocial-btn")?.classList.contains("active");

let tinyReq  = 50;
let smallReq = 100;
let bigReq   = 200;
let goldReq  = 400;
let platReq  = 800;

let mult = 1;
if (loyal) mult = 0.75;
if (antisocial) mult = 1.25;

tinyReq  = Math.floor(50 * mult);
smallReq = Math.floor(100 * mult);
bigReq   = Math.floor(200 * mult);
goldReq  = Math.floor(400 * mult);
platReq  = Math.floor(600 * mult);
const diamReq = Math.floor(800 * mult);


function seasonGainFor(req) {
  return whenGamesReached(
    currentSeason,
    gd.day,
    gamesPlayed,
    req
  );
}



const tinySeason = seasonGainFor(tinyReq);
  const smallSeason = seasonGainFor(smallReq);
  const bigSeason   = seasonGainFor(bigReq);
  const goldSeason  = seasonGainFor(goldReq);
  const platSeason  = seasonGainFor(platReq);
  const diamSeason  = seasonGainFor(diamReq);

  const maxAge = getMaxCareerAge();
let seasonsLeft = maxAge - age;
  if (birthdayDay && birthdayDay > gd.day) seasonsLeft -= 1;
  const retireSeason = currentSeason + Math.max(seasonsLeft, 0);

  let icon = null;
  let finalSeason = null;

  if (diamSeason.season <= retireSeason) {
  icon = ICON_DIAM_HTML;
  finalSeason = "S" + diamSeason.season;

} else if (platSeason.season <= retireSeason) {
  icon = ICON_PLAT_HTML;
  finalSeason = "S" + platSeason.season;

} else if (goldSeason.season <= retireSeason) {
  icon = ICON_GOLD_HTML;
  finalSeason = "S" + goldSeason.season;

} else if (bigSeason.season <= retireSeason) {
  icon = ICON_BIG_HTML;
  finalSeason = "S" + bigSeason.season;

} else if (smallSeason.season <= retireSeason) {
  icon = ICON_SMALL_HTML;
  finalSeason = "S" + smallSeason.season;

} else if (tinySeason.season <= retireSeason) {
  icon = ICON_TINY_HTML; // ou ICON_TINY_HTML
  finalSeason = "S" + tinySeason.season;
}



  const maxLine = document.querySelector(".max-heart-final");
  if (!maxLine) return;

  // Se NÃO consegue nenhum → mostrar "—"
  if (!icon) {
    maxLine.innerHTML = `MAX HEART POSSIBLE: —`;
    return;
  }

  maxLine.innerHTML = `MAX HEART POSSIBLE: ${icon} (${finalSeason})`;
}
// ===== INFO TOOLTIP (STABLE, NO FLICKER) =====
const infoWrapper = document.getElementById("info-wrapper");
const infoTooltip = document.getElementById("info-tooltip");
const overlay = document.getElementById("modal-overlay");

if (infoWrapper && infoTooltip && overlay) {

  infoWrapper.addEventListener("mouseenter", () => {
    infoTooltip.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  infoWrapper.addEventListener("mouseleave", () => {
    infoTooltip.classList.add("hidden");
    overlay.classList.add("hidden");
  });

}



window.addEventListener("load", () => {
  const v = document.getElementById("app-version");
  const u = document.getElementById("app-updates");

  if (!v || !u) {
    console.error("VERSION ELEMENTS NOT FOUND");
    return;
  }


  v.textContent = "v4.1.1 - 01:15 - October.19.2026";

  u.innerHTML = `
    <li>talents craft and generate best talents, best gear feature and lot of updates</li>
    <li>New heart Boost system</li>
    <li>Leader Boost limited to 5%</li>
    <li>New Bar System</li>
    <li>Added the new Leadership Boost System</li>
    <li>Expanded Gear Bonus upgrades</li>
    <li> UI customization & progression balancing</li>
    <li>Morale Removed </li> 
    <li>Add FireHeart 4%</li> 
    <li>Mobile Final Fix</li> 
    <li>Fix Mobile and PC Load Function (Implicit Action)</li> 
    <li>Fixed export png - Text wrapping issue</li> 
    <li>Add AntiSocial & Short Lived Icon</li> 
    <li>Visual update gear</li>
    <li>Long Lived icon added</li>
    <li>info png fix</li>
    <li>visual % boost</li>
    <li>Fix exact game-based heart calculation</li>
    <li>New heart mechanism boost</li>
    <li>Fixed Total Skill Tooltip & boost cap tooltip info</li>
    <li>Add Boost Bar over 100 until 120</li>
    <li>Fix Minimap Position</li>
    <li>Add Minimap gear</li>
    <li>Add PNG export button</li>
    <li>Fixed Missing Limits flow for players loaded with unknown limits</li>
    <li>Loyal button moved</li>
    <li>Skill bars visual updates</li>
    <li>Tooltip Total Skills correction</li>
    <li>Updates menu</li>
    <li>Add Missing Limites to tryout copy>past</li>
    `;
});



/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  
  renderAllEquipmentUI();
  recomputeEquipmentBoosts();
  updateGearButtonState();
  renderSkills();
  renderMiniGear();
  updateHeartRequirementLabels(false); 
  updateHeartsBasedOnGames(0);
  computeMaxCareerHeart();
  updateGamesButtonState();
});
document.addEventListener("DOMContentLoaded", () => {
  const clearBtn = document.getElementById("clear-load-btn");
  const input = document.getElementById("skill-input");

  if (!clearBtn || !input) return;

clearBtn.addEventListener("click", () => {
  input.value = "";

  // restaurar estado inicial completo
  skills = JSON.parse(JSON.stringify(initialSkillsBackup));

  loadedSkillsBackup = JSON.parse(JSON.stringify(skills));
  loadedName = "Spidevil";
  loadedAge = "15yo (day 1)";

  const nameEl = document.querySelector(".player-name");
  const ageEl = document.querySelector(".player-age");

  if (nameEl) nameEl.textContent = loadedName;
  if (ageEl) ageEl.textContent = loadedAge;

  heartState = 0;
  moraleState = 0;
  maxMode = false;

  if (heartBtn) heartBtn.className = "action-btn heart-grey-btn";
  if (moraleBtn) moraleBtn.className = "action-btn morale-btn";
  if (maxBtn) maxBtn.classList.remove("max-active");

  renderSkills();
  renderMiniGear();
  computeMaxCareerHeart();
  updateTotals();
  resetLeadership();
  resetExperience();

  input.blur();
});


});
document.addEventListener("DOMContentLoaded", () => {
  const exportBtn = document.getElementById("export-card-btn");
const totalBox = document.querySelector(".total-skill-box");

  if (!totalBox) return;

  totalBox.addEventListener("mouseenter", showTotalSkillTooltip);
  totalBox.addEventListener("mousemove", showTotalSkillTooltip);
  totalBox.addEventListener("mouseleave", hideTooltip);
  if (!exportBtn) {
    console.error("EXPORT BUTTON NOT FOUND");
    return;
  }

  exportBtn.addEventListener("click", async () => {
  const card = document.querySelector(".card");
  if (!card) return;

  let filename = "skillwhat";
  const nameEl = document.querySelector(".player-name");

  if (nameEl && nameEl.textContent.trim()) {
    filename = nameEl.textContent
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^\w\-]/g, "");
  }

  try {
    const clone = card.cloneNode(true);
    clone.style.margin = "0";
    clone.style.boxShadow = "none";

    const wrapper = document.createElement("div");
    wrapper.style.position = "fixed";
    wrapper.style.left = "-10000px";
    wrapper.style.top = "0";
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    const dataUrl = await htmlToImage.toPng(clone, {
      backgroundColor: "#000",
      pixelRatio: 2   // 👈 ISTO gera 1864x918
    });

    document.body.removeChild(wrapper);

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${filename}.png`;
    link.click();
  } catch (e) {
    console.error(e);
  }
});

});
// ===== MINI TOOLTIP FOR MODIFIERS =====
const miniTooltip = document.getElementById("mini-tooltip");

function bindMiniTooltip(el, text) {
  if (!el) return;

  el.addEventListener("mouseenter", () => {
    miniTooltip.textContent = text;
    miniTooltip.classList.remove("hidden");
  });

  el.addEventListener("mousemove", e => {
    miniTooltip.style.left = e.clientX + 16 + "px";
    miniTooltip.style.top  = e.clientY + 1 + "px";
  });

  el.addEventListener("mouseleave", () => {
    miniTooltip.classList.add("hidden");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindMiniTooltip(document.getElementById("game-img-btn"), "Loyal");
  bindMiniTooltip(document.getElementById("career-plus-btn"), "Long Lived");
  bindMiniTooltip(document.getElementById("antisocial-btn"), "Anti Social");
  bindMiniTooltip(document.getElementById("shortlived-btn"), "Short Lived");
});

// ===== LEADERSHIP =====

document.addEventListener("DOMContentLoaded", () => {
  const leadershipSlider = document.querySelector(".leadership-slider");
  const leadershipKnob = document.getElementById("leadershipKnob");
  const leadershipValue = document.getElementById("leadershipValue");

  if (!leadershipSlider || !leadershipKnob || !leadershipValue) return;

  updateLeadershipUI = function() {
    const pct = leadership / 30;

    leadershipKnob.style.left = `${pct * 100}%`;
    leadershipValue.textContent = leadership;

    renderSkills();
  }

  function setLeadershipFromClientX(clientX) {
    const rect = leadershipSlider.getBoundingClientRect();

    let x = clientX - rect.left;
    x = Math.max(0, Math.min(rect.width, x));

    leadership = Math.round((x / rect.width) * 30);

    updateLeadershipUI();
  }

    let leadershipDragging = false;

  leadershipKnob.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    leadershipDragging = true;
    leadershipKnob.setPointerCapture(e.pointerId);
    e.stopPropagation();
    e.preventDefault();
  });

  leadershipKnob.addEventListener("pointermove", e => {
    if (!leadershipDragging) return;
    setLeadershipFromClientX(e.clientX);
  });

  const stopLeadershipDrag = () => {
    leadershipDragging = false;
  };

  leadershipKnob.addEventListener("pointerup", stopLeadershipDrag);
  leadershipKnob.addEventListener("pointercancel", stopLeadershipDrag);
  leadershipKnob.addEventListener("lostpointercapture", stopLeadershipDrag);
  updateLeadershipUI();
});
const totalSkillBox = document.querySelector(".total-skill-box");
const totalTooltip = document.getElementById("total-tooltip");

if (totalSkillBox && totalTooltip) {

  totalSkillBox.addEventListener("mousemove", e => {

    let baseTotal = 0;
    let limitTotal = 0;

    skills.forEach(s => {
      baseTotal += maxMode ? s.max : s.value;
      limitTotal += s.max;
    });

    document.getElementById("tt-base").textContent = baseTotal;
    document.getElementById("tt-limit").textContent = limitTotal;

    document.getElementById("tt-leader").textContent =
      "+" + getLeadershipBoost().toFixed(1) + "%";

    document.getElementById("tt-heart").textContent =
      "+" + heartBoosts[heartState] + "%";

    totalTooltip.style.left = e.pageX + 15 + "px";
    totalTooltip.style.top = e.pageY + 15 + "px";

    totalTooltip.classList.add("visible");
    totalTooltip.classList.remove("hidden");
  });

  totalSkillBox.addEventListener("mouseleave", () => {
    totalTooltip.classList.remove("visible");
    totalTooltip.classList.add("hidden");
  });

}

// ===== EXPERIENCE =====

let experience = 0;
let updateExperienceUI = null;

document.addEventListener("DOMContentLoaded", () => {
  const experienceSlider = document.querySelector(".experience-slider");
  const experienceKnob = document.getElementById("experienceKnob");
  const experienceValue = document.getElementById("experienceValue");

  if (!experienceSlider || !experienceKnob || !experienceValue) return;


updateExperienceUI = function() {
  const pct = experience / 60;

  experienceKnob.style.left = `${pct * 100}%`;
  experienceValue.textContent = experience;

  const frame = document.getElementById("talents-frame");

  if (frame && frame.contentWindow) {
    frame.contentWindow.postMessage({
      type: "SKILLWHAT_EXPERIENCE",
      value: experience
    }, window.location.origin);
  }
};


  function setExperienceFromClientX(clientX) {
    const rect = experienceSlider.getBoundingClientRect();

    let x = clientX - rect.left;
    x = Math.max(0, Math.min(rect.width, x));

    experience = Math.round((x / rect.width) * 60);

    updateExperienceUI();
  }

  let experienceDragging = false;

  experienceKnob.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    experienceDragging = true;
    experienceKnob.setPointerCapture(e.pointerId);
    e.stopPropagation();
    e.preventDefault();
  });

  experienceKnob.addEventListener("pointermove", e => {
    if (!experienceDragging) return;
    setExperienceFromClientX(e.clientX);
  });

  const stopExperienceDrag = () => {
    experienceDragging = false;
  };

  experienceKnob.addEventListener("pointerup", stopExperienceDrag);
  experienceKnob.addEventListener("pointercancel", stopExperienceDrag);
  experienceKnob.addEventListener("lostpointercapture", stopExperienceDrag);
  updateExperienceUI();
});

function resetExperience() {
  experience = 0;

  if (updateExperienceUI) {
    updateExperienceUI();
  }
}


/* =========================================
   BEST GEAR - CPL MANAGER PLUS
========================================= */

const BG_SKILLS = [
  "Aim", "Handling", "Quickness", "Determination",
  "Awareness", "Teamplay", "Gamesense", "Movement"
];

const BG_CATEGORIES = [
  "mousepad", "mouse", "keyboard", "headset"
];

// Weightings fornecidos por ti
const BG_WEIGHTS = [
  1.2, 0.9, 1.3, 1.4,
  0.8, 0.7, 0.6, 0.7
];

// Versões Plus do CPL Manager
const BG_PLUS = [
  { name: "Normal", skill: null, amount: 0 },
  { name: "Precision", skill: "Aim", amount: 1 },
  { name: "Grip", skill: "Handling", amount: 2 },
  { name: "Edge", skill: "Quickness", amount: 1 },
  { name: "Resolve", skill: "Determination", amount: 1 },
  { name: "Hawk", skill: "Awareness", amount: 1 },
  { name: "Synergy", skill: "Teamplay", amount: 4 },
  { name: "Oracle", skill: "Gamesense", amount: 4 },
  { name: "Swift", skill: "Movement", amount: 4 }
];

function calculateBestGear() {

  // Skills atuais, incluindo Heart e Leadership,
  // mas sem o equipamento atualmente selecionado.
  const base = BG_SKILLS.map(name => {
    const skill = skills.find(s => s.name === name);
    return computeSkillValues(skill).afterPercent;
  });

  const available = base.map(value =>
    Math.max(0, 110 - value)
  );

  // Cria as 36 possibilidades por categoria
  const options = BG_CATEGORIES.map(category => {
    const result = [];

    for (const item of EQUIPMENT[category]) {
      for (const plus of BG_PLUS) {

        const boosts = BG_SKILLS.map(name =>
          (item.boosts[name] || 0) +
          (plus.skill === name ? plus.amount : 0)
        );

        result.push({ item, plus, boosts });
      }
    }

    return result;
  });

  let bestScore = -Infinity;
  let bestWaste = Infinity;
  let bestCombination = null;

  // Testa todas as combinações
  for (const a of options[0]) {
    for (const b of options[1]) {
      for (const c of options[2]) {
        for (const d of options[3]) {

          let score = 0;
          let waste = 0;

          for (let i = 0; i < 8; i++) {

            const total =
              a.boosts[i] +
              b.boosts[i] +
              c.boosts[i] +
              d.boosts[i];

            const useful = Math.min(
              total,
              available[i]
            );

            waste += total - useful;

            // Player-aware value: boosts remain useful up to 110, but
            // points that reach the 100 threshold are more valuable.
            // Existing weights remain the general skill priorities.
            const before = base[i];
            const after = before + useful;
            const below100 = Math.max(0, Math.min(after, 100) - Math.min(before, 100));
            const above100 = useful - below100;

            // A stronger natural skill has slightly higher leverage,
            // while weaker skills still receive meaningful consideration.
            const playerFactor = 0.8 + 0.4 * Math.min(110, Math.max(0, before)) / 110;
            const thresholdBonus = before < 100 && after >= 100 ? 0.75 : 0;

            score += BG_WEIGHTS[i] * playerFactor *
              (below100 + above100 * 0.65 + thresholdBonus);
          }

          // Desempate: menos pontos desperdiçados
          if (
            score > bestScore + 1e-9 ||
            (
              Math.abs(score - bestScore) <= 1e-9 &&
              waste < bestWaste
            )
          ) {
            bestScore = score;
            bestWaste = waste;
            bestCombination = [a, b, c, d];
          }
        }
      }
    }
  }

  if (!bestCombination) return;

  // Aplica o equipamento vencedor
  BG_CATEGORIES.forEach((category, i) => {
    const choice = bestCombination[i];

    equipped[category] = choice.item;
    bonusLimit[category] = choice.plus.skill;
    bonusAmount[category] = choice.plus.amount;
  });

  // Atualiza o SkillWhat
  recomputeEquipmentBoosts();
  updateGearButtonState();
  renderAllEquipmentUI();
  renderSkills();
  renderMiniGear();

  // Apresenta o resultado
  const output = document.getElementById("best-gear-result");

  if (output) {
    output.replaceChildren();

    bestCombination.forEach((choice, i) => {
      const line = document.createElement("div");
      const plus = choice.plus;

      line.textContent =
        BG_CATEGORIES[i].toUpperCase() + ": " +
        choice.item.name +
        (plus.skill
          ? " | " + plus.name +
            " (+" + plus.amount + " " + plus.skill + ")"
          : " | Normal");

      output.appendChild(line);
    });

    const summary = document.createElement("div");
    summary.style.marginTop = "8px";
    summary.style.fontWeight = "bold";
    summary.textContent =
      "Score: " + bestScore.toFixed(2) +
      " | Wasted: " + bestWaste.toFixed(2);

    output.appendChild(summary);
  }
}

// Instala o botão no popup GEAR
function installBestGear() {

  const popup = document.getElementById("gear-popup");
  if (!popup) return;

  if (document.getElementById("best-gear-btn")) {
    return;
  }

  const container =
    popup.querySelector(".gear-popup-inner");

  if (!container) {
    console.error("BEST GEAR: popup interno não encontrado.");
    return;
  }

  const button = document.createElement("button");
  button.id = "best-gear-btn";
  button.type = "button";
  button.textContent = "ϟ BEST GEAR ϟ";

  button.style.cssText = `
    display:block;
    margin:14px auto 8px;
    padding:10px 24px;
    background:#ff8200;
    color:#171717;
    border:0;
    border-radius:8px;
    font-weight:800;
    cursor:pointer;
  `;

  const output = document.createElement("div");
  output.id = "best-gear-result";
  output.style.cssText = `
    text-align:center;
    font-size:12px;
    line-height:1.7;
    padding:8px;
    color:#ddd;
  `;

  button.addEventListener("click", () => {
    button.disabled = true;
    button.textContent = "CALCULATING...";

    setTimeout(() => {
      try {
        calculateBestGear();
      } catch (error) {
        console.error("BEST GEAR ERROR:", error);
        alert("Erro no BEST GEAR. Consulta a consola.");
      } finally {
        button.disabled = false;
        button.textContent = "ϟ BEST GEAR ϟ";
      }
    }, 30);
  });

  container.appendChild(button);
  container.appendChild(output);
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    installBestGear
  );
} else {
  installBestGear();
}


/* ==========================
   FAVORITE WEAPON SELECTOR
========================== */

document.addEventListener("DOMContentLoaded", () => {
    const changeBtn = document.getElementById("favorite-weapon-change");
    const popup = document.getElementById("weapon-popup");
    const closeBtn = document.getElementById("weapon-popup-close");
    const weaponList = document.getElementById("weapon-popup-list");
    const weaponDisplay = document.getElementById("favorite-weapon-select");

    if (!changeBtn || !popup || !closeBtn || !weaponList || !weaponDisplay) return;

    // Aproveitar o SVG original da AK-47
    const akSvg = weaponDisplay.querySelector("svg")?.outerHTML || "";


const weapons = Object.entries(weaponSVGs).map(([name, svg]) => ({
    name,
    svg
}));


    let selectedWeapon = null;
    const initialWeaponMarkup = weaponDisplay.innerHTML;
    window.addEventListener("skillwhat-reset-favorite-weapon", () => {
        selectedWeapon = null;
        weaponDisplay.innerHTML = initialWeaponMarkup;
        popup.classList.add("hidden");
    });

    function renderWeaponList() {
        weaponList.innerHTML = "";

        weapons.forEach(weapon => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "weapon-option";

            if (weapon.name === selectedWeapon) {
                button.classList.add("selected");
            }

            const svg = weapon.svg || "";
            button.innerHTML = `${svg}<span>${weapon.name}</span>`;

            button.addEventListener("click", () => {
                selectedWeapon = weapon.name;

                const displaySvg = weaponDisplay.querySelector("svg");
                if (displaySvg) {
                    displaySvg.style.display = weapon.svg ? "" : "none";
                }

                if (weapon.svg && displaySvg) {
                    displaySvg.outerHTML = weapon.svg;
                }



                popup.classList.add("hidden");
            });

            weaponList.appendChild(button);
        });
    }

    changeBtn.addEventListener("click", () => {
        renderWeaponList();
        popup.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    popup.addEventListener("click", e => {
        if (e.target === popup) {
            popup.classList.add("hidden");
        }
    });
});







// Read-only snapshot for the Talent optimizer.
window.SkillWhatTalentSnapshot = function () {
  return Object.fromEntries(skills.map(s => {
    const v = computeSkillValues(s);
    return [s.name, { base: v.base, max: s.max, final: Math.min(110, v.final) }];
  }));
};