// ---------- Data panduan ----------
const GUIDES = [
  {
    id: "henti-jantung", level: "kritis", title: "Tidak sadar dan tidak bernapas (henti jantung)",
    kw: ["henti jantung","tidak bernapas","tidak napas","tidak sadar","tidak responsif","cpr","rjp","kolaps","mati suri","tidak bergerak"],
    steps: [
      "Cek respons: tepuk bahu dan panggil keras. Lihat apakah dada bergerak.",
      "Telepon 112/119 atau minta orang lain menelepon. Minta dibawakan AED jika ada.",
      "Baringkan korban telentang di permukaan keras.",
      "Letakkan telapak tangan di tengah dada, tangan lain di atasnya. Tekan keras dan cepat, sekitar 100–120 kali per menit, sedalam kira-kira 5–6 cm pada dewasa.",
      "Biarkan dada naik penuh di antara tekanan. Jangan berhenti sampai petugas tiba, korban bergerak, atau AED memberi arahan."
    ],
    dont: ["Jangan berhenti menekan hanya karena lelah. Gantian dengan orang lain tiap sekitar 2 menit."],
    when: "Ini selalu darurat. Telepon 112/119 lebih dulu."
  },
  {
    id: "tersedak", level: "kritis", title: "Tersedak",
    kw: ["tersedak","keselak","kesedak","menelan","tenggorokan tersumbat","sulit bernapas","tidak bisa bicara","kacang tersangkut"],
    steps: [
      "Tanya \"Kamu tersedak?\". Jika korban masih bisa batuk keras, suruh terus batuk.",
      "Jika tidak bisa batuk, bicara, atau bernapas: berdiri di belakang korban, beri 5 tepukan keras di punggung, di antara tulang belikat.",
      "Lanjutkan 5 hentakan perut: kepalkan tangan di atas pusar, tarik cepat ke arah dalam dan atas.",
      "Ulangi bergantian 5 tepukan punggung dan 5 hentakan perut sampai benda keluar.",
      "Bayi (di bawah 1 tahun): telungkupkan di lengan dengan kepala lebih rendah, beri 5 tepukan punggung, lalu telentangkan dan beri 5 tekanan dada dengan dua jari. Jangan hentakan perut."
    ],
    dont: ["Jangan memasukkan jari ke mulut untuk mengorek jika benda tidak terlihat.", "Jangan beri minum saat korban tersedak."],
    when: "Telepon 112/119 jika benda tidak keluar. Jika korban menjadi tidak sadar, mulai CPR."
  },
  {
    id: "pendarahan", level: "segera", title: "Luka berdarah",
    kw: ["darah","berdarah","pendarahan","perdarahan","luka","teriris","tergores","tertusuk","sobek","kena pisau"],
    steps: [
      "Cuci tangan atau pakai sarung tangan jika ada.",
      "Tekan langsung luka dengan kain atau kasa bersih, kuat dan terus-menerus.",
      "Jika kain basah oleh darah, tambahkan kain baru di atasnya. Jangan lepas kain pertama.",
      "Tinggikan bagian yang luka melebihi jantung jika memungkinkan.",
      "Setelah darah berhenti, balut dengan perban cukup kencang dan jangan sampai membuat ujung jari kebiruan."
    ],
    dont: ["Jangan mencabut benda yang tertancap. Stabilkan di tempatnya dan tekan di sekitarnya.", "Jangan mengoleskan bubuk, kopi, atau pasta gigi ke luka."],
    when: "Ke RS atau telepon 112 jika darah tidak berhenti setelah 10 menit ditekan, darah menyembur, luka dalam atau lebar, atau korban pucat dan lemas."
  },
  {
    id: "luka-bakar", level: "segera", title: "Luka bakar dan tersiram air panas",
    kw: ["luka bakar","terbakar","melepuh","air panas","tersiram","kena api","knalpot","setrika","minyak panas"],
    steps: [
      "Jauhkan korban dari sumber panas.",
      "Alirkan air bersih bersuhu ruang pada luka selama sekitar 20 menit.",
      "Lepaskan cincin, jam, atau pakaian yang tidak menempel sebelum area membengkak.",
      "Tutup longgar dengan kain atau plastik bening bersih."
    ],
    dont: ["Jangan pakai es, odol, mentega, atau kecap.", "Jangan memecahkan lepuhan.", "Jangan menarik pakaian yang menempel pada kulit."],
    when: "Ke RS jika luka lebih besar dari telapak tangan korban, mengenai wajah, tangan, kaki, sendi, atau kemaluan, disebabkan listrik atau bahan kimia, atau korban anak kecil atau lansia."
  },
  {
    id: "pingsan", level: "segera", title: "Pingsan",
    kw: ["pingsan","hampir pingsan","lemas","kliyengan","pusing berat","jatuh pingsan","tak sadarkan diri"],
    steps: [
      "Baringkan korban dan tinggikan kaki sekitar 30 cm jika tidak ada cedera.",
      "Longgarkan pakaian ketat di leher dan pinggang. Beri udara segar.",
      "Cek napas. Jika bernapas tapi belum sadar, miringkan ke samping agar jalan napas terbuka.",
      "Setelah sadar, biarkan berbaring dulu dan beri minum sedikit demi sedikit."
    ],
    dont: ["Jangan mendudukkan atau memberi minum saat belum sadar penuh."],
    when: "Telepon 112/119 jika tidak sadar lebih dari 1 menit, tidak bernapas, terbentur kepala, sedang hamil, atau pingsan disertai nyeri dada."
  },
  {
    id: "patah-tulang", level: "segera", title: "Patah tulang atau terkilir",
    kw: ["patah","tulang","terkilir","keseleo","bengkak","jatuh dari","kecelakaan","sendi","retak"],
    steps: [
      "Hentikan gerakan. Minta korban tidak memakai bagian yang cedera.",
      "Topang bagian cedera pada posisi ditemukan. Bidai sederhana dengan papan atau gulungan koran, ikat di atas dan di bawah area cedera.",
      "Kompres dingin yang dibungkus kain, 15–20 menit.",
      "Bawa ke RS. Jika ada luka terbuka, tutup dengan kain bersih tanpa menekan tulang."
    ],
    dont: ["Jangan meluruskan atau menarik tulang yang bengkok.", "Jangan memindahkan korban jika dicurigai cedera leher atau tulang belakang."],
    when: "Telepon 112/119 jika dicurigai cedera leher/punggung, tulang menembus kulit, atau ujung jari dingin dan kebiruan."
  },
  {
    id: "mimisan", level: "ringan", title: "Mimisan",
    kw: ["mimisan","hidung berdarah","darah dari hidung"],
    steps: [
      "Dudukkan korban dan condongkan badan sedikit ke depan.",
      "Pencet bagian lunak hidung (di bawah tulang) dengan jari selama 10 menit penuh tanpa dilepas.",
      "Bernapas lewat mulut. Kompres dingin di batang hidung boleh membantu."
    ],
    dont: ["Jangan menengadah, karena darah mengalir ke tenggorokan.", "Jangan menyumbat hidung dengan tisu terlalu dalam."],
    when: "Ke RS jika berlangsung lebih dari 20 menit, terjadi setelah benturan di kepala, atau korban sedang memakai obat pengencer darah."
  },
  {
    id: "kejang", level: "kritis", title: "Kejang",
    kw: ["kejang","step","ayan","epilepsi","menggelepar","mata mendelik"],
    steps: [
      "Catat jam mulai kejang. Jauhkan benda keras atau tajam di sekitar korban.",
      "Alasi kepala dengan bantal atau jaket. Longgarkan pakaian di leher.",
      "Biarkan kejang selesai. Setelah berhenti, miringkan korban ke samping.",
      "Temani sampai sadar penuh dan bicara dengan tenang."
    ],
    dont: ["Jangan memasukkan apa pun ke mulut korban.", "Jangan menahan gerakannya.", "Jangan memberi makan atau minum sebelum sadar penuh."],
    when: "Telepon 112/119 jika kejang lebih dari 5 menit, berulang, korban sulit bernapas sesudahnya, sedang hamil, cedera, atau ini kejang pertama kali. Pada anak demam tinggi, tetap bawa ke RS."
  },
  {
    id: "stroke", level: "kritis", title: "Dugaan stroke",
    kw: ["stroke","mulut mencong","bicara pelo","pelo","lumpuh","separuh badan","lemah sebelah","wajah miring"],
    steps: [
      "Cek tiga tanda: wajah tidak simetris saat tersenyum, satu lengan lemah saat diangkat, bicara pelo atau tidak jelas.",
      "Jika salah satu ada, telepon 112/119 sekarang. Catat jam gejala mulai.",
      "Dudukkan atau baringkan dengan kepala sedikit tinggi. Jangan beri makan atau minum."
    ],
    dont: ["Jangan menunggu gejala hilang sendiri.", "Jangan memberi obat tanpa arahan petugas."],
    when: "Setiap menit berharga. Segera bawa ke RS yang punya layanan stroke."
  },
  {
    id: "keracunan", level: "kritis", title: "Keracunan atau tertelan zat berbahaya",
    kw: ["keracunan","racun","tertelan","minum obat","overdosis","pembersih lantai","pestisida","detergen","baterai"],
    steps: [
      "Jauhkan korban dari sumber racun. Cek napas dan kesadaran.",
      "Telepon 112 atau bawa ke IGD. Beri tahu zat apa, berapa banyak, dan kapan tertelan.",
      "Bawa kemasan atau sisa zat ke RS.",
      "Jika racun terkena kulit atau mata, bilas dengan air mengalir 15–20 menit."
    ],
    dont: ["Jangan memaksa korban muntah.", "Jangan memberi susu atau air banyak kecuali diarahkan petugas."],
    when: "Hampir semua kasus keracunan perlu dinilai tenaga medis."
  }
];

const LEVEL_LABEL = { kritis: "Kritis", segera: "Segera", ringan: "Ringan" };
const RED_FLAGS = ["tidak bernapas","tidak napas","tidak sadar","henti jantung","kejang lama","menyembur","stroke","tersedak","nyeri dada"];

// ---------- Util ----------
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

// ---------- Panduan ----------
let filter = "all";

function guideHTML(g) {
  return `<details class="guide ${g.level}" id="g-${g.id}">
    <summary><span class="badge">${LEVEL_LABEL[g.level]}</span>${esc(g.title)}</summary>
    <div class="body">
      <h4>Langkah</h4>
      <ol>${g.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      <h4>Jangan lakukan</h4>
      <ul>${g.dont.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      <p class="when"><strong>Kapan ke RS / 112:</strong> ${esc(g.when)}</p>
    </div>
  </details>`;
}

function renderGuides() {
  const list = GUIDES.filter((g) => filter === "all" || g.level === filter);
  $("#guides").innerHTML = list.map(guideHTML).join("") || '<p class="empty">Tidak ada panduan.</p>';
}

document.querySelectorAll(".chip").forEach((b) => {
  b.addEventListener("click", () => {
    filter = b.dataset.f;
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c === b));
    renderGuides();
  });
});

function openGuide(id) {
  filter = "all";
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c.dataset.f === "all"));
  renderGuides();
  const el = document.getElementById("g-" + id);
  if (el) { el.open = true; el.scrollIntoView({ block: "start" }); }
}

// ---------- Asisten ----------
function matchGuides(q) {
  const text = q.toLowerCase();
  return GUIDES
    .map((g) => ({ g, score: g.kw.reduce((n, k) => n + (text.includes(k) ? 1 : 0), 0) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map((x) => x.g);
}

async function ask(q) {
  const out = $("#askResult");
  let html = "";
  const text = q.toLowerCase();

  if (RED_FLAGS.some((k) => text.includes(k))) {
    html += `<div class="alert">Ini bisa mengancam nyawa. Telepon <a href="tel:112">112</a> atau <a href="tel:119">119</a> sekarang, lalu ikuti langkah di bawah sambil menunggu bantuan.</div>`;
  }

  if (CONFIG.AI_ENDPOINT) {
    out.innerHTML = '<p class="hint">Menyiapkan jawaban...</p>';
    try {
      const r = await fetch(CONFIG.AI_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q })
      });
      const d = await r.json();
      if (d && typeof d.answer === "string") {
        html += `<div class="card hit"><h3>Jawaban asisten</h3><p style="white-space:pre-line">${esc(d.answer)}</p></div>`;
      }
    } catch (e) { /* jatuh ke pencarian bawaan */ }
  }

  const hits = matchGuides(q);
  if (hits.length) {
    html += hits.map((g) => `<div class="card hit">
      <h3>${esc(g.title)}</h3>
      <ol>${g.steps.slice(0, 3).map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      <button class="btn btn-line" type="button" data-open="${g.id}">Buka panduan lengkap</button>
    </div>`).join("");
  } else if (!html) {
    html = `<div class="card hit"><h3>Belum ada panduan yang cocok</h3>
      <p>Coba pakai kata yang lebih sederhana (mis. "luka", "pingsan", "tersedak"), atau lihat daftar panduan di bawah. Jika ragu, telepon <a href="tel:112">112</a>.</p></div>`;
  }
  out.innerHTML = html;
}

$("#askForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = $("#askInput").value.trim();
  if (q) ask(q);
});
$("#askResult").addEventListener("click", (e) => {
  const b = e.target.closest("[data-open]");
  if (b) openGuide(b.dataset.open);
});

// ---------- Lokasi dan WhatsApp ----------
let coords = null;
let contacts = loadContacts();

function loadContacts() {
  try { return JSON.parse(localStorage.getItem("rsContacts") || "[]"); } catch (e) { return []; }
}
function saveContacts() {
  try { localStorage.setItem("rsContacts", JSON.stringify(contacts)); } catch (e) { /* abaikan */ }
}
function normPhone(p) {
  let d = String(p).replace(/\D/g, "");
  if (d.startsWith("0")) d = "62" + d.slice(1);
  else if (d.startsWith("8")) d = "62" + d;
  return d;
}

$("#btnLoc").addEventListener("click", () => {
  const st = $("#locStatus");
  if (!navigator.geolocation) { st.textContent = "Browser ini tidak mendukung lokasi."; return; }
  st.textContent = "Mengambil lokasi...";
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      st.textContent = "Lokasi didapat. Akan disertakan di pesan.";
      $("#mapLink").href = `https://www.google.com/maps/search/rumah+sakit/@${coords.lat},${coords.lng},14z`;
      render();
    },
    () => { st.textContent = "Lokasi tidak bisa diambil. Izinkan akses lokasi di browser, atau tulis alamat di kolom kondisi."; },
    { enableHighAccuracy: true, timeout: 12000 }
  );
});

function buildMessage() {
  const patient = $("#msgPatient").value.trim();
  const cond = $("#msgCond").value.trim();
  const lines = ["DARURAT. Saya butuh bantuan IGD."];
  if (patient) lines.push("Pasien: " + patient);
  lines.push("Kondisi: " + (cond || "[isi kondisi]"));
  if (coords) lines.push("Lokasi: https://maps.google.com/?q=" + coords.lat + "," + coords.lng);
  lines.push("Mohon info apakah IGD dapat menerima.");
  return lines.join("\n");
}

function render() {
  const msg = buildMessage();
  $("#msgPreview").value = msg;
  const box = $("#contacts");
  if (!contacts.length) {
    box.innerHTML = '<p class="empty">Belum ada kontak RS. Simpan satu di langkah 2 untuk memunculkan tombol kirim.</p>';
    return;
  }
  box.innerHTML = contacts.map((c, i) => `<div class="contact">
    <div class="info"><strong>${esc(c.name)}</strong><div class="num">${esc(c.phone)}</div></div>
    <a class="btn btn-wa" target="_blank" rel="noopener" href="https://wa.me/${esc(c.phone)}?text=${encodeURIComponent(msg)}">Kirim lewat WhatsApp</a>
    <button class="btn btn-del" type="button" data-del="${i}" aria-label="Hapus ${esc(c.name)}">Hapus</button>
  </div>`).join("");
}

$("#rsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("#rsName").value.trim();
  const phone = normPhone($("#rsPhone").value);
  const err = $("#rsError");
  if (phone.length < 10 || phone.length > 15) {
    err.textContent = "Nomor tidak valid. Contoh: 0812xxxxxxx atau 62812xxxxxxx.";
    err.hidden = false;
    return;
  }
  err.hidden = true;
  contacts.push({ name, phone });
  saveContacts();
  e.target.reset();
  render();
});

$("#contacts").addEventListener("click", (e) => {
  const b = e.target.closest("[data-del]");
  if (!b) return;
  contacts.splice(Number(b.dataset.del), 1);
  saveContacts();
  render();
});

["#msgPatient", "#msgCond"].forEach((s) => $(s).addEventListener("input", render));

$("#btnCopy").addEventListener("click", async () => {
  const btn = $("#btnCopy");
  const ta = $("#msgPreview");
  try {
    await navigator.clipboard.writeText(ta.value);
    btn.textContent = "Tersalin";
  } catch (e) {
    ta.removeAttribute("readonly"); ta.select(); ta.setAttribute("readonly", "");
    btn.textContent = "Teks dipilih, salin manual";
  }
  setTimeout(() => { btn.textContent = "Salin pesan"; }, 2000);
});

// ---------- Mulai ----------
renderGuides();
render();
