
"use strict";

const students = {
  "4GH25EC001": "A M PARINITHA",
  "4GH25EC002": "AKANKSHA WALIKAR",
  "4GH25EC003": "AMBIKA",
  "4GH25EC004": "AMIULYA K B",
  "4GH25EC005": "ANAGHA V",
  "4GH25EC006": "ARJUN N V",
  "4GH25EC007": "ASHWINI",
  "4GH25EC008": "BHARATH",
  "4GH25EC009": "BHUVANA G Y",
  "4GH25EC010": "CHAITHRA H",
  "4GH25EC011": "CHANDANA M",
  "4GH25EC012": "CHETHAN B V",
  "4GH25EC013": "D RAKSHITHA",
  "4GH25EC014": "DARSHAN S",
  "4GH25EC015": "DEEKSHITH",
  "4GH25EC016": "DEVARAJA",
  "4GH25EC017": "GANGADHAR MALATESH VAGGANNANAVAR",
  "4GH25EC018": "GEETA KOTEPPA BANNIMATTI",
  "4GH25EC019": "HANI",
  "4GH25EC020": "HARSHIYA M R",
  "4GH25EC021": "JNANENDRA B R",
  "4GH25EC022": "KAVERI KURI",
  "4GH25EC023": "KEERTHANA",
  "4GH25EC024": "KHASIM SAB",
  "4GH25EC025": "KUSHI K A",
  "4GH25EC026": "LAKSHMI",
  "4GH25EC027": "LAKSHMI BADIGERA",
  "4GH25EC028": "LEKHANA G R",
  "4GH25EC029": "LEKHANA M L",
  "4GH25EC030": "MALLIKARJUN PANDAPPA YALAGODA",
  "4GH25EC031": "MAMATHA",
  "4GH25EC032": "MOHD HASHIR ALI",
  "4GH25EC033": "N G MANU",
  "4GH25EC034": "NAVYA S V",
  "4GH25EC035": "NAYANA M",
  "4GH25EC036": "NIKHIL NAGARAJU H K",
  "4GH25EC037": "NUTHANA SEN S M",
  "4GH25EC038": "PRAJWAL H P",
  "4GH25EC039": "PRAJWAL MALLIKARJUN HABAGONDE",
  "4GH25EC040": "PRAKRUTHI A S",
  "4GH25EC041": "RAKESH P GOWDA",
  "4GH25EC042": "RAMACHARAN TEJA C N",
  "4GH25EC043": "RAMESH D M",
  "4GH25EC044": "RISHITH H K",
  "4GH25EC045": "RITHESH KUMAR",
  "4GH25EC046": "S YASHASWINI",
  "4GH25EC047": "SAINATH",
  "4GH25EC048": "SAVITHA",
  "4GH25EC049": "SHALINI A G",
  "4GH25EC050": "SHANKREMMA DEVENDRAPPA AJANALKAR",
  "4GH25EC051": "SHASHANK K S",
  "4GH25EC052": "SHIVALINGA",
  "4GH25EC053": "SHUBHA N T",
  "4GH25EC054": "SHYNITHA D A",
  "4GH25EC055": "SIDDHARUDH ARVIND SHIRASANGIMATH",
  "4GH25EC056": "THASMAYSHREE S",
  "4GH25EC057": "THRUPTHI G N",
  "4GH25EC058": "UDAY HANAMANTH HAVALDAR",
  "4GH25EC059": "VEERAPURADA KIRANA KUMARA",
  "4GH25EC060": "YADHUNANDAN B R",
  "4GH25EC061": "YASHASWINI",
  "4GH25EC062": "YASHWANTH N",
  "4GH26EC400": "B S ANUSHA",
  "4GH26EC401": "CHAITHRA G P",
  "4GH26EC402": "INDUJA C",
  "4GH26EC403": "KARTHIK P V",
  "4GH25EC404": "MAHALAKSHMI B M",
  "4GH25EC405": "YUNUS K A"
};

// Replace these with your four actual selected students.
const surpriseUSNs = [
  "4GH25EC034",
  "4GH25EC047"
  
];

const screens = [
  "homeScreen",
  "invitationScreen",
  "welcomeScreen",
  "systemScreen",
  "missionScreen",
  "farewellScreen"
];

let currentStudentUSN = "";
let systemTimers = [];
let celebrationStarted = false;

const $ = (id) => document.getElementById(id);

function showScreen(id) {
  screens.forEach((screenId) => {
    const screen = $(screenId);
    if (screen) screen.classList.toggle("active", screenId === id);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clearSystemTimers() {
  systemTimers.forEach((timer) => clearTimeout(timer));
  systemTimers = [];
}

function addTimer(callback, delay) {
  const timer = setTimeout(callback, delay);
  systemTimers.push(timer);
  return timer;
}

/* Animated background particles */
function createParticles() {
  const container = $("particles");
  if (!container) return;

  for (let i = 0; i < 38; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 3}s`;
    particle.style.animationDuration = `${1.5 + Math.random() * 3}s`;
    if (i % 4 === 0) {
      particle.style.background = "#9360ff";
      particle.style.boxShadow = "0 0 12px 3px rgba(147,96,255,.6)";
    }
    container.appendChild(particle);
  }
}

/* Countdown to 12 October 2026 */
function updateCountdown() {
  // Event date is interpreted in the visitor's local time.
  const eventDate = new Date(2026, 9, 12, 9, 0, 0);
  const remaining = Math.max(0, eventDate.getTime() - Date.now());
  const seconds = Math.floor(remaining / 1000);

  $("days").textContent = String(Math.floor(seconds / 86400)).padStart(2, "0");
  $("hours").textContent = String(Math.floor((seconds % 86400) / 3600)).padStart(2, "0");
  $("minutes").textContent = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  $("seconds").textContent = String(seconds % 60).padStart(2, "0");
}

/* Navigation */
$("enterBtn").addEventListener("click", () => {
  showScreen("invitationScreen");
  $("usnInput").focus();
});

$("backHomeBtn").addEventListener("click", () => showScreen("homeScreen"));

$("usnForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const usn = $("usnInput").value.trim().toUpperCase();
  $("usnInput").value = usn;

  if (!students[usn]) {
    $("errorMessage").textContent =
      "USN not found. Please check the USN against the student list.";
    return;
  }

  $("errorMessage").textContent = "";
  currentStudentUSN = usn;

  $("studentName").textContent = students[usn];
  $("studentUsn").textContent = usn;
  $("surpriseCard").hidden = !surpriseUSNs.includes(usn);

  showScreen("welcomeScreen");
});

$("usnInput").addEventListener("input", () => {
  $("usnInput").value = $("usnInput").value.toUpperCase();
  $("errorMessage").textContent = "";
});

/* Invitation: open a standalone printable page.
   The user can use the browser's Print -> Save as PDF option. */
function buildInvitationDocument() {
  if (!currentStudentUSN || !students[currentStudentUSN]) {
    throw new Error("Please unlock your welcome before opening the invitation.");
  }

  const template = $("invitationTemplate");
  const article = template.content.querySelector(".print-invitation").cloneNode(true);

  article.querySelector(".print-student-name").textContent = students[currentStudentUSN];
  article.querySelector(".print-usn").textContent = currentStudentUSN;

  const styles = `
    *{box-sizing:border-box}
    body{margin:0;padding:25px;background:#e8edf4;font-family:Arial,sans-serif}
    .print-invitation{max-width:760px;margin:20px auto;padding:48px 36px;
      border:3px solid #00bfd5;border-radius:20px;text-align:center;
      background:linear-gradient(150deg,#06172d,#030713);color:#f5f8ff}
    .print-top{font-size:13px;letter-spacing:2px}
    .print-department,.print-association{font-size:12px;letter-spacing:2px}
    .print-association{color:#00eaff}
    .print-line{height:2px;width:100px;margin:25px auto;background:#00eaff}
    h1{font-size:36px;letter-spacing:1px}
    h1 span{color:#ff9c35}
    .print-date{color:#ffb45e;letter-spacing:4px}
    .print-kicker{margin-top:40px;color:#a9bdd9;letter-spacing:2px}
    .print-student-name{font-size:27px;overflow-wrap:anywhere}
    .print-usn{color:#00eaff;letter-spacing:3px}
    .print-welcome{color:#00eaff;font-size:19px;margin-top:35px}
    .print-message{font-size:20px;line-height:1.65}
    .print-pill-row{display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin:35px 0}
    .print-pill-row span{border:1px solid #00a9bf;padding:9px 12px;border-radius:18px;font-size:10px}
    .print-quote{font-size:20px;font-style:italic}
    .print-footer{border-top:1px solid #00a9bf;margin-top:45px;padding-top:18px;font-size:10px;letter-spacing:2px}
    .actions{max-width:760px;margin:0 auto 20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
    .actions button{padding:14px 18px;border:0;border-radius:10px;background:#00dff0;color:#031022;font-weight:bold;cursor:pointer}
    .actions .close{background:#dce5f3}
    @media print{
      @page{size:A4;margin:12mm}
      body{padding:0;background:white}
      .actions{display:none!important}
      .print-invitation{width:100%;max-width:none;min-height:255mm;margin:0;padding:38px 28px;
        -webkit-print-color-adjust:exact;print-color-adjust:exact;break-inside:avoid}
    }
    @media(max-width:600px){body{padding:10px}.print-invitation{padding:30px 18px}h1{font-size:29px}}
  `;

  return { article, styles };
}

function openPrintableInvitation() {
  if (!currentStudentUSN) {
    $("downloadStatus").textContent = "First unlock your welcome with your USN.";
    return;
  }

  // Open the tab directly during the button click to reduce popup blocking.
  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    $("downloadStatus").textContent =
      "Your browser blocked the new tab. Allow pop-ups for this website and try again.";
    return;
  }

  try {
    const { article, styles } = buildInvitationDocument();
    const doc = printWindow.document;

    doc.open();
    doc.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'>");
    doc.write("<meta name='viewport' content='width=device-width,initial-scale=1'>");
    doc.write("<title>AAROHANA 2K26 - Personal Invitation</title>");
    doc.write(`<style>${styles}</style></head><body>`);
    doc.write("<div class='actions'>");
    doc.write("<button onclick='window.print()'>PRINT / SAVE AS PDF</button>");
    doc.write("<button class='close' onclick='window.close()'>CLOSE</button>");
    doc.write("</div>");
    doc.write(article.outerHTML);
    doc.write("</body></html>");
    doc.close();

    $("downloadStatus").textContent =
      "Invitation opened in a new tab. Choose PRINT / SAVE AS PDF.";
  } catch (error) {
    printWindow.close();
    $("downloadStatus").textContent =
      "Could not open the invitation. Please allow pop-ups and try again.";
  }
}

$("openInvitationBtn").addEventListener("click", openPrintableInvitation);

/* Direct fallback: downloads a standalone HTML invitation file.
   The downloaded file can be opened later and printed to PDF. */
function downloadInvitationHtml() {
  if (!currentStudentUSN) {
    $("downloadStatus").textContent = "First unlock your welcome with your USN.";
    return;
  }

  try {
    const { article, styles } = buildInvitationDocument();
    const standalone = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AAROHANA 2K26 - Personal Invitation</title>
<style>${styles}</style>
</head>
<body>
<div class="actions">
  <button onclick="window.print()">PRINT / SAVE AS PDF</button>
</div>
${article.outerHTML}
</body>
</html>`;

    const blob = new Blob([standalone], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `AAROHANA_2K26_Invitation_${currentStudentUSN}.html`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    $("downloadStatus").textContent =
      "Invitation file downloaded. Open it in a browser, then choose PRINT / SAVE AS PDF.";
  } catch (error) {
    $("downloadStatus").textContent =
      "Download failed. Try OPEN INVITATION / SAVE AS PDF instead.";
  }
}

$("downloadHtmlBtn").addEventListener("click", downloadInvitationHtml);

/* ECE system initialization, one stage at a time */
$("beginBtn").addEventListener("click", startSystemSequence);

function resetSystem() {
  clearSystemTimers();
  $("progressFill").style.width = "0%";
  $("progressLabel").textContent = "0%";

  const ids = ["check1", "check2", "check3", "check4", "check5"];
  ids.forEach((id) => {
    $(id).classList.remove("done", "current");
    $(id).querySelector("b").textContent = "○";
  });
}

function markSystemStep(index) {
  const ids = ["check1", "check2", "check3", "check4", "check5"];

  ids.forEach((id, i) => {
    const row = $(id);
    row.classList.toggle("done", i <= index);
    row.classList.toggle("current", i === index);
    row.querySelector("b").textContent = i <= index ? "✓" : "○";
  });
}

function startSystemSequence() {
  resetSystem();
  showScreen("systemScreen");

  const stages = [
    { time: 500, percent: 15, icon: "📡", title: "SIGNAL CONNECTED", desc: "Your signal has reached the ECE family." },
    { time: 1400, percent: 35, icon: "⚡", title: "ECE SYSTEM INITIALIZED", desc: "Preparing your journey of learning and innovation." },
    { time: 2300, percent: 55, icon: "🤝", title: "ECE FAMILY NETWORK ONLINE", desc: "New connections and friendships are ready." },
    { time: 3200, percent: 78, icon: "💡", title: "INNOVATION MODE ON", desc: "Ideas become experiments. Experiments become possibilities." },
    { time: 4100, percent: 100, icon: "🚀", title: "JOURNEY STATUS READY", desc: "All systems are ready. Your ECE journey begins now." }
  ];

  stages.forEach((stage, index) => {
    addTimer(() => {
      $("systemSymbol").textContent = stage.icon;
      $("systemTitle").textContent = stage.title;
      $("systemDescription").textContent = stage.desc;
      $("progressFill").style.width = `${stage.percent}%`;
      $("progressLabel").textContent = `${stage.percent}%`;
      markSystemStep(index);
    }, stage.time);
  });

  addTimer(() => showScreen("missionScreen"), 5200);
}

$("finalWelcomeBtn").addEventListener("click", () => {
  showScreen("farewellScreen");
  startCelebration();
});

/* Flowers, petals, and stars fall continuously on the final page.
   There is deliberately no return-to-home button on the final screen. */
function startCelebration() {
  if (celebrationStarted) return;
  celebrationStarted = true;

  const container = $("celebration");
  const items = ["🌸", "🌺", "🌼", "🌷", "✨", "💫", "🌹", "💐"];

  function dropOne() {
    if (!container || !$("farewellScreen").classList.contains("active")) return;

    const item = document.createElement("span");
    item.className = "falling-item " +
      (Math.random() > 0.65 ? "spark" : "flower");
    item.textContent = items[Math.floor(Math.random() * items.length)];
    item.style.left = `${Math.random() * 100}%`;
    item.style.setProperty("--drift", `${Math.round(Math.random() * 150 - 75)}px`);
    item.style.animationDuration = `${5 + Math.random() * 6}s`;
    item.style.opacity = String(0.65 + Math.random() * 0.35);
    container.appendChild(item);

    item.addEventListener("animationend", () => item.remove(), { once: true });
    setTimeout(dropOne, 180 + Math.random() * 350);
  }

  dropOne();
}

createParticles();
updateCountdown();
setInterval(updateCountdown, 1000);