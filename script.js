/* =========================================================
   @myanimestore__  Games Store  -  Client Script
   ========================================================= */

// -------- GAME DATA --------
const GAMES = {
  action: {
    title: "Action Games",
    icon: "fa-bolt",
    color: "#dc2626",
    items: [
      "GTA V","Call of Duty MW3","Elden Ring","God of War Ragnarok","Spider-Man 2",
      "Mortal Kombat 1","Devil May Cry 5","Bayonetta 3","Sekiro","Cyberpunk 2077",
      "Battlefield 2042","Assassin's Creed Mirage","Hitman 3","Ghost of Tsushima","Max Payne 3",
      "Dishonored 2","Uncharted 4","Metal Gear Solid V","The Last of Us 2","Doom Eternal",
      "Wolfenstein II","Just Cause 4","Dead Island 2","Far Cry 6","Resident Evil 4"
    ]
  },
  adventure: {
    title: "Adventure Games",
    icon: "fa-compass",
    color: "#0891b2",
    items: [
      "Zelda Tears of Kingdom","Red Dead Redemption 2","Horizon Forbidden West","Tomb Raider","Minecraft",
      "Subnautica","Journey","Sea of Thieves","Outer Wilds","Firewatch",
      "The Witcher 3","Death Stranding","Control","Hollow Knight","Ori and the Will",
      "Inside","Limbo","A Plague Tale","Kena Bridge of Spirits","RiME",
      "ABZÛ","Gris","Spiritfarer","Stray","It Takes Two"
    ]
  },
  horror: {
    title: "Horror Games",
    icon: "fa-ghost",
    color: "#7c3aed",
    items: [
      "Resident Evil Village","Silent Hill 2","Dead Space","Outlast Trials","Amnesia Rebirth",
      "Phasmophobia","Alien Isolation","Until Dawn","The Evil Within 2","Layers of Fear",
      "Little Nightmares II","Visage","SOMA","Observer","The Medium",
      "Blair Witch","Cry of Fear","Fatal Frame","Dying Light 2","F.E.A.R.",
      "The Mortuary Assistant","Signalis","MADiSON","Poppy Playtime","Darkwood"
    ]
  },
  racing: {
    title: "Racing Games",
    icon: "fa-flag-checkered",
    color: "#ea580c",
    items: [
      "Forza Horizon 5","Gran Turismo 7","Need for Speed Unbound","Mario Kart 8","Burnout Paradise",
      "Wipeout Omega","Dirt Rally 2","F1 2024","Project Cars 3","Assetto Corsa",
      "MotoGP 24","Ride 5","Trackmania","Art of Rally","The Crew Motorfest",
      "NFS Heat","Midnight Club LA","GRID Legends","WRC Generations","Forza Motorsport",
      "CarX Drift","BeamNG.drive","Hot Wheels Unleashed","Riders Republic","CRSED"
    ]
  },
  puzzle: {
    title: "Puzzle Games",
    icon: "fa-puzzle-piece",
    color: "#059669",
    items: [
      "Portal","Portal 2","The Witness","Tetris Effect","Monument Valley 2",
      "Baba Is You","Keep Talking","Superliminal","The Talos Principle","Antichamber",
      "Braid","Return of Obra Dinn","Her Story","FEZ","Gorogoa",
      "The Room","Tunic","Cocoon","Case of the Golden Idol","Chants of Sennaar",
      "Viewfinder","Lorelei and the Laser Eyes","Storyteller","Patrick's Parabox","Humanity"
    ]
  }
};

// Platform tags pool
const PLATFORMS = ["PC","PS5","XBOX","Switch","Steam"];
const PRICES = [299, 499, 599, 799, 899, 999, 1299, 1499, 1799, 1999, 2499];

// Generate card data with reproducible values
function buildCards(genreKey) {
  const g = GAMES[genreKey];
  return g.items.map((name, idx) => {
    const seed = genreKey + "-" + idx;
    const rating = (7.5 + ((idx * 17) % 25) / 10).toFixed(1);
    const priceIdx = (idx * 3) % PRICES.length;
    const price = PRICES[priceIdx];
    const oldPrice = price + 500 + ((idx * 37) % 700);
    const platformA = PLATFORMS[idx % PLATFORMS.length];
    const platformB = PLATFORMS[(idx + 2) % PLATFORMS.length];
    const year = 2020 + ((idx * 3) % 6);
    const img = `https://picsum.photos/seed/${encodeURIComponent(seed + name)}/400/520`;
    const isNew = idx < 2;
    return { name, seed, rating, price, oldPrice, platformA, platformB, year, img, isNew };
  });
}

// -------- RENDER SECTIONS --------
const sectionsRoot = document.getElementById("sections-root");
const VISIBLE_STEP = 5;
const INITIAL_VISIBLE = 10;

function renderSection(genreKey) {
  const g = GAMES[genreKey];
  const all = buildCards(genreKey);

  const section = document.createElement("section");
  section.className = "genre-section";
  section.id = genreKey;
  section.dataset.testid = `section-${genreKey}`;

  section.innerHTML = `
    <div class="section-head">
      <h2>
        <span class="icon-wrap" style="background:${g.color}22;color:${g.color}">
          <i class="fa-solid ${g.icon}"></i>
        </span>
        ${g.title}
      </h2>
      <p class="muted">Top picks in ${g.title.toLowerCase()} — 2 rows of 5, click Load More for more.</p>
    </div>
    <div class="card-grid" data-testid="grid-${genreKey}"></div>
    <div class="load-more-wrap">
      <button class="load-more" data-genre="${genreKey}" data-testid="load-more-${genreKey}">
        <i class="fa-solid fa-circle-plus"></i> Load More
      </button>
    </div>
  `;

  sectionsRoot.appendChild(section);

  const grid = section.querySelector(".card-grid");
  // render initial 10
  appendCards(grid, all.slice(0, INITIAL_VISIBLE), 0);
  grid.dataset.visible = String(INITIAL_VISIBLE);
  grid.dataset.total = String(all.length);

  const btn = section.querySelector(".load-more");
  btn.addEventListener("click", () => {
    const visible = parseInt(grid.dataset.visible, 10);
    const total = parseInt(grid.dataset.total, 10);
    const next = Math.min(visible + VISIBLE_STEP, total);
    appendCards(grid, all.slice(visible, next), visible);
    grid.dataset.visible = String(next);
    if (next >= total) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-check"></i> All loaded`;
    }
  });
}

function appendCards(grid, items, offset) {
  items.forEach((it, i) => {
    const card = document.createElement("article");
    card.className = "game-card";
    card.style.animationDelay = `${(i % 5) * 0.05}s`;
    card.dataset.testid = `card-${it.seed}`;
    card.innerHTML = `
      <div class="card-img">
        <img src="${it.img}" alt="${it.name}" loading="lazy"/>
        ${it.isNew ? `<span class="card-badge">NEW</span>` : ``}
        <span class="card-rating"><i class="fa-solid fa-star"></i> ${it.rating}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${it.name}</h3>
        <div class="card-meta">
          <span>${it.year}</span>
          <span class="tag">${it.platformA}</span>
          <span class="tag">${it.platformB}</span>
        </div>
        <div class="card-price">₹${it.price}<span class="old">₹${it.oldPrice}</span></div>
        <div class="card-actions">
          <button class="btn btn-buy" data-price="${it.price}" data-name="${it.name}" data-testid="buy-${it.seed}">
            <i class="fa-solid fa-cart-shopping"></i> Submit Request
          </button>
          <button class="btn btn-view" data-name="${it.name}" data-testid="view-${it.seed}">
            <i class="fa-solid fa-eye"></i> View
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render all genre sections
["action","adventure","horror","racing","puzzle"].forEach(renderSection);

// -------- BROWSE BY GENRE TILES --------
const genreGrid = document.getElementById("genreGrid");
const tileData = [
  { key: "action", label: "Action", icon: "fa-bolt", cls: "tile-action" },
  { key: "adventure", label: "Adventure", icon: "fa-compass", cls: "tile-adventure" },
  { key: "horror", label: "Horror", icon: "fa-ghost", cls: "tile-horror" },
  { key: "racing", label: "Racing", icon: "fa-flag-checkered", cls: "tile-racing" },
  { key: "puzzle", label: "Puzzle", icon: "fa-puzzle-piece", cls: "tile-puzzle" },
  { key: "action", label: "Strategy", icon: "fa-chess-knight", cls: "tile-strategy" }
];
tileData.forEach(t => {
  const tile = document.createElement("a");
  tile.href = `#${t.key}`;
  tile.className = `genre-tile ${t.cls}`;
  tile.dataset.testid = `tile-${t.label.toLowerCase()}`;
  tile.innerHTML = `
    <div>
      <div class="g-icon"><i class="fa-solid ${t.icon}"></i></div>
      <h3>${t.label}</h3>
    </div>
    <span class="explore">Explore <i class="fa-solid fa-arrow-right"></i></span>
  `;
  genreGrid.appendChild(tile);
});

// -------- NAV ACTIVE STATE --------
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// -------- HERO CHIP TOGGLE --------
document.querySelectorAll(".hero-filters .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".hero-filters .chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
  });
});

// -------- UPI QR DROPDOWN --------
// Two modes:
//   mode-buy    : amount FIXED (game price) — input hidden, fixed row shown
//   mode-donate : amount DYNAMIC (user types) — input shown, user can change
const qrBox = document.getElementById("qrBox");
const amount = document.getElementById("amount");
const qr = document.getElementById("qr");
const payLink = document.getElementById("payLink");
const qrTitle = document.getElementById("qrTitle");
const fixedAmount = document.getElementById("fixedAmount");
const donateBtn = document.getElementById("donateBtn");

const upiID = "9818284193@axl";
const payeeName = "LOKESH";

function buildUpiLink(val) {
  return `upi://pay?pa=${upiID}&pn=${encodeURIComponent(payeeName)}&am=${val || 0}&cu=INR`;
}
function updateQR(val) {
  const upiLink = buildUpiLink(val);
  qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(upiLink);
  payLink.href = upiLink;
}

const BUY_REDIRECT_URL =
"https://docs.google.com/forms/d/e/1FAIpQLScU0btf5gI0opH6r1VucoiVk65r99SVkFRvXdLj8rmMH5DwbQ/viewform?usp=dialog";

payLink.addEventListener("click", (e) => {
  if (qrBox.classList.contains("mode-buy")) {
    e.preventDefault();
    window.open(BUY_REDIRECT_URL, "_blank");
  }
});


function positionQrBox(anchor) {
  const rect = anchor.getBoundingClientRect();
  const boxW = 240 + 36;
  const boxH = 360;
  let top = rect.bottom + 10;
  let left = rect.left + rect.width / 2 - boxW / 2;
  left = Math.max(12, Math.min(left, window.innerWidth - boxW - 12));
  if (top + boxH > window.innerHeight) top = Math.max(12, rect.top - boxH - 10);
  qrBox.style.top = top + "px";
  qrBox.style.left = left + "px";
}

function setMode(mode) {
  qrBox.classList.remove("mode-buy", "mode-donate");
  qrBox.classList.add(mode);
}

let currentAnchor = null;

document.addEventListener("click", (e) => {
  // ----- BUY (fixed amount) -----
  const buy = e.target.closest(".btn-buy");
  if (buy) {
    e.stopPropagation();
    const price = buy.getAttribute("data-price") || "0";
    const name = buy.getAttribute("data-name") || "Game";
    qrTitle.textContent = `Buy "${name}"`;
    fixedAmount.textContent = `₹${price}`;
    setMode("mode-buy");
    updateQR(price);

    if (currentAnchor === buy && qrBox.classList.contains("show")) {
      qrBox.classList.remove("show"); currentAnchor = null; return;
    }
    currentAnchor = buy;
    positionQrBox(buy);
    qrBox.classList.add("show");
    return;
  }

  // ----- DONATE (dynamic amount) -----
  const donate = e.target.closest("#donateBtn");
  if (donate) {
    e.stopPropagation();
    qrTitle.textContent = "Scan & Donate 💙";
    amount.value = "";
    setMode("mode-donate");
    updateQR(0);
    amount.focus({ preventScroll: true });

    if (currentAnchor === donate && qrBox.classList.contains("show")) {
      qrBox.classList.remove("show"); currentAnchor = null; return;
    }
    currentAnchor = donate;
    positionQrBox(donate);
    qrBox.classList.add("show");
    return;
  }

  // ----- VIEW -----
  const view = e.target.closest(".btn-view");
  if (view) {
    const name = view.getAttribute("data-name") || "Game";
    alert(`${name}\n\nFull game details page coming soon.`);
    return;
  }

  // ----- Click outside closes -----
  if (!e.target.closest("#qrBox")) {
    qrBox.classList.remove("show");
    currentAnchor = null;
  }
});

// Donate mode: user input updates QR live
amount.addEventListener("input", () => {
  if (qrBox.classList.contains("mode-donate")) updateQR(amount.value);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { qrBox.classList.remove("show"); currentAnchor = null; }
});

window.addEventListener("scroll", () => {
  if (qrBox.classList.contains("show") && currentAnchor) positionQrBox(currentAnchor);
}, { passive: true });
window.addEventListener("resize", () => {
  if (qrBox.classList.contains("show") && currentAnchor) positionQrBox(currentAnchor);
});