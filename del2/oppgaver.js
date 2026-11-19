// =====================================================
// Oppgaver: Funksjoner
//
//   function pluss(a, b) {   // a og b er parametre (verdier inn)
//     return a + b;          // return sender svaret ut
//   }
//   pluss(2, 3);             // kaller funksjonen -> 5
//
//   Se README.md for mer informasjon om oppgaven.
// =====================================================

// #####################################################
// DEL 1: VÆRAPPEN (oppgave 1–9)
// #####################################################

// Data: temperaturer i Tromsø en uke i mørketida (grader celsius).
// Du skal bruke arrayen "temperaturer" i oppgavene som handler om temperatur.
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];


// ---------- GRØNN ----------

// Oppgave 1: Når en spiller logger inn på Minecraft-serveren, skal hun få en hilsen.
//     hilsen("Ola") -> "Hei, Ola!"
//     Tips: bruk en template literal: `Hei, ${navn}!`
function hilsen(navn) {
    const heiNavn =  `Hei, ${navn}!`
  return heiNavn
}

// Oppgave 2: Hvor mange blokker trengs til gulvet i en hytte på 4 x 5 blokker?
//     Returner arealet av et rektangel (bredde ganger høyde)
function rektangelAreal(bredde, hoyde) {
  return bredde * hoyde
}

// Oppgave 3: En venn i USA spør på Discord hvor kaldt det er i Tromsø.
//     Gjør om celsius til fahrenheit.  Formel: F = C * 9/5 + 32
//     (Den motsatte formelen er C = (F - 32) * 5/9.)
function celsiusTilFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}


// ---------- GUL ----------

// Oppgave 4: Værappen skal regne ut ukas gjennomsnitt. Første steg: summen.
//     Returner summen av alle tallene i en array. Bruk en for-løkke.
function sum(tall) {
  let tempSum = 0
  for (let i = 0; i < tall.length; i++) {
    tempSum += tall[i]
  }
  return tempSum
}

// Oppgave 5: Returner gjennomsnittet av tallene. Gjenbruk sum()!
function gjennomsnitt(tall) {
  return sum(tall) / tall.length
}

// Oppgave 6: Hvor mange dager med kuldegrader var det? (Trenger du vinterdekk?)
//     Returner HVOR MANGE tall som er under 0. Bruk for-løkke + if.
function antallUnderNull(tall) {
  // LØSNING
}


// ---------- RØD ----------

// Oppgave 7: Hva var den varmeste dagen? Samme logikk som en highscore-liste.
//     Returner det største tallet i arrayen – UTEN Math.max og UTEN .sort()
function storste(tall) {
  // LØSNING
}

// Oppgave 8: Returner en NY array med bare kuldegradene (tall under 0).
//     Den opprinnelige arrayen skal ikke endres.
function bareKuldegrader(tall) {
  // LØSNING
}

// Oppgave 9: Sorter tallene fra lavest til høyest – UTEN .sort().
//     Lag din egen sorteringsalgoritme (f.eks. boblesortering).
//     Returner en NY array, ikke endre den opprinnelige.
function sorterStigende(tall) {
  // LØSNING
}


// #####################################################
// DEL 2: SPILL (oppgave 10–14)
// #####################################################

// Data: poeng per runde i en turnering
const runder = [120, 85, 140, 95, 110];


// ---------- GRØNN ----------

// Oppgave 10: Du lager en ny bruker i WoW Forever, og vi ønsker årstallet spilleren er født
// skal inkluderes i brukernavnet. Vi får da: Gamertag = navn + tall.
//     lagGamertag("Ola", 99) -> "Ola99"
function lagGamertag(navn, tall) {
  // LØSNING
}


// Oppgave 11: Er spilleren gammel nok til spillet? Returner true eller false.
//     erGammelNok(16, 18) -> false
//     erGammelNok(18, 18) -> true
//     Tips: return alder >= grense;  (sammenligningen gir true/false)
function erGammelNok(alder, grense) {
  // LØSNING
}

// Oppgave 12: BreiLAN innfører billettpriser. VG1 betaler 100 kr og resten av skolen 150 kr.
//     Lag en funksjon som sjekker om eleven går på VG1 og gir riktig pris.
//     billettpris(true)  -> 100
//     billettpris(false) -> 150
//     Tips: bruk if og else.
function billettpris(erVG1) {
  // LØSNING
}


// ---------- GUL ----------

// Oppgave 13: Blizzard ønsker at fraksjonene fordeles likt så mulig for å unngå at en fraksjon tar overhånd,
// dette er særlig viktig på PvP-servere. Lag en funksjon som sjekker dette når brukeren lager en ny karakter.
// Funksjonen skal returnere feilmeldingen "The faction is currently unavailable on this ruleset due to population imbalance"
// hvis det er en overvekt av en fraksjon på serveren. Ellers returnerer den "Welcome to the <fraksjon>!"
// Overvekt betyr at fraksjonen spilleren velger har MER enn 50 % av spillerne.
//     velgFraksjon(5000, 5000, "Horde")    -> "Welcome to the Horde!"
//     velgFraksjon(4500, 5500, "Alliance") -> "Welcome to the Alliance!"
//     velgFraksjon(4500, 5500, "Horde")    -> "The faction is currently unavailable on this ruleset due to population imbalance"
//
//     Tips: andel = antall i valgt fraksjon / totalt * 100
function velgFraksjon(alliance, horde, valg) {
  // LØSNING
}

// Oppgave 14: Hvor mange runder fikk laget MER enn grensen?
//     antallOver(runder, 100) -> 3
//     Tips: samme oppskrift som antallUnderNull() i oppgave 6.
function antallOver(poeng, grense) {
  // LØSNING
}


// #####################################################
// DEL 3: BREILAN (oppgave 15–17)
// #####################################################
//
// BreiLAN trenger funksjoner til påmeldingssiden på hjemmesiden.
// Det er turneringer i flere spill, og hvert spill har en aldersgrense.
// Siden må sjekke om deltakerne er gamle nok, regne ut billettinntektene
// og vise hvem som vant.
//
// Her får du bruk for funksjonene fra del 2.

// Aldersgrenser i turneringene. Slik henter du en verdi: aldersgrenser["GTA 6"] -> 18
const aldersgrenser = {
  "GTA 6": 18,
  "CS2": 18,
  "Fortnite": 12,
  "WoW Forever": 12,
  "Minecraft": 7,
};

// Påmeldte deltakere. Slik henter du en verdi: deltakere[0].navn -> "Ola"
const deltakere = [
  { navn: "Ola", alder: 16, spill: "Fortnite", vg1: true },
  { navn: "Kari", alder: 18, spill: "GTA 6", vg1: false },
  { navn: "Ali", alder: 17, spill: "GTA 6", vg1: true },
  { navn: "Emma", alder: 15, spill: "Minecraft", vg1: false },
  { navn: "Jonas", alder: 19, spill: "CS2", vg1: true },
  { navn: "Sara", alder: 16, spill: "WoW Forever", vg1: true },
];

// Resultater fra finalen
const resultater = [
  { navn: "Ola", poeng: 340 },
  { navn: "Kari", poeng: 520 },
  { navn: "Ali", poeng: 410 },
  { navn: "Emma", poeng: 290 },
  { navn: "Jonas", poeng: 480 },
];


// ---------- GRØNN ----------

// Oppgave 15: BreiLAN trenger en funksjon som sjekker aldersgrensen før
//     påmelding til en turnering. Gjenbruk erGammelNok() fra oppgave 11!
//     Hent grensen fra objektet: aldersgrenser[spill]
//     kanDelta(16, "GTA 6")    -> false
//     kanDelta(16, "Fortnite") -> true
function kanDelta(alder, spill) {
  // LØSNING
}


// ---------- GUL ----------

// Oppgave 16: BreiLAN trenger å vite hvor mye billettene gir til sammen.
//     Gjenbruk billettpris() fra oppgave 12! deltakere[i].vg1 er true eller false.
//     totalInntekt(deltakere) -> 700
function totalInntekt(deltakere) {
  // LØSNING
}


// ---------- RØD ----------

// Oppgave 17: BreiLAN trenger en resultattavle med de tre beste.
//     Returner en NY array med navnene, fra flest til færrest poeng.
//     UTEN .sort(). Arrayen resultater skal ikke endres.
//     toppTre(resultater) -> ["Kari", "Jonas", "Ali"]
function toppTre(resultater) {
  // LØSNING
}





// #####################################################
// EGENVURDERING
// #####################################################
//
// Skriv en kort egenvurdering av arbeidet ditt. Skriv rett etter kolonet.
// Dette fikk jeg godt til:
// Dette var vanskelig:
// Dette vil jeg øve mer på:









// Fikset med KI
// AUTOMATISK SJEKK – ikke endre noe under denne linja
let antallOk = 0;
let antallSjekker = 0;

function sjekk(beskrivelse, kjor, forventet) {
  antallSjekker++;
  let faktisk;
  try {
    faktisk = kjor();
  } catch (feil) {
    console.log(`FEIL  ${beskrivelse}  (krasjet: ${feil.message})`);
    return;
  }
  const likt = JSON.stringify(faktisk) === JSON.stringify(forventet);
  if (likt) antallOk++;
  console.log(`${likt ? "OK  " : "FEIL"}  ${beskrivelse}  (fikk: ${JSON.stringify(faktisk)}, forventet: ${JSON.stringify(forventet)})`);
}

console.log("\n===== DEL 1: VÆRAPPEN =====");
console.log("\n--- GRØNN ---");
sjekk("1  hilsen('Ola')", () => hilsen("Ola"), "Hei, Ola!");
sjekk("2  rektangelAreal(4, 5)", () => rektangelAreal(4, 5), 20);
sjekk("3  celsiusTilFahrenheit(100)", () => celsiusTilFahrenheit(100), 212);
sjekk("3  celsiusTilFahrenheit(-40)", () => celsiusTilFahrenheit(-40), -40);

console.log("\n--- GUL ---");
sjekk("4  sum(temperaturer)", () => sum(temperaturer), -33);
sjekk("4  sum([])", () => sum([]), 0);
sjekk("5  gjennomsnitt([2, 4, 6])", () => gjennomsnitt([2, 4, 6]), 4);
sjekk("6  antallUnderNull(temperaturer)", () => antallUnderNull(temperaturer), 6);

console.log("\n--- RØD ---");
sjekk("7  storste(temperaturer)", () => storste(temperaturer), 1);
sjekk("7  storste([-5, -2, -9])", () => storste([-5, -2, -9]), -2);
sjekk("8  bareKuldegrader(temperaturer)", () => bareKuldegrader(temperaturer), [-4, -6, -2, -8, -11, -3]);
sjekk("9  sorterStigende(temperaturer)", () => sorterStigende(temperaturer), [-11, -8, -6, -4, -3, -2, 1]);
sjekk("8–9 temperaturer er uendret", () => {
  const kuldegrader = bareKuldegrader(temperaturer);
  const sortert = sorterStigende(temperaturer);
  if (!Array.isArray(kuldegrader) || !Array.isArray(sortert)) return "bareKuldegrader og sorterStigende må returnere en array";
  return temperaturer;
}, [-4, -6, -2, 1, -8, -11, -3]);

console.log("\n===== DEL 2: SPILL =====");
console.log("\n--- GRØNN ---");
sjekk("10 lagGamertag('Ola', 99)", () => lagGamertag("Ola", 99), "Ola99");
sjekk("11 erGammelNok(16, 18)", () => erGammelNok(16, 18), false);
sjekk("11 erGammelNok(18, 18)", () => erGammelNok(18, 18), true);
sjekk("12 billettpris(true)", () => billettpris(true), 100);
sjekk("12 billettpris(false)", () => billettpris(false), 150);

console.log("\n--- GUL ---");
sjekk("13 velgFraksjon(5000, 5000, 'Horde')", () => velgFraksjon(5000, 5000, "Horde"), "Welcome to the Horde!");
sjekk("13 velgFraksjon(4500, 5500, 'Alliance')", () => velgFraksjon(4500, 5500, "Alliance"), "Welcome to the Alliance!");
sjekk("13 velgFraksjon(4500, 5500, 'Horde')", () => velgFraksjon(4500, 5500, "Horde"), "The faction is currently unavailable on this ruleset due to population imbalance");
sjekk("14 antallOver(runder, 100)", () => antallOver(runder, 100), 3);

console.log("\n===== DEL 3: BREILAN =====");
console.log("\n--- GRØNN ---");
sjekk("15 kanDelta(16, 'GTA 6')", () => kanDelta(16, "GTA 6"), false);
sjekk("15 kanDelta(16, 'Fortnite')", () => kanDelta(16, "Fortnite"), true);

console.log("\n--- GUL ---");
sjekk("16 totalInntekt(deltakere)", () => totalInntekt(deltakere), 700);

console.log("\n--- RØD ---");
sjekk("17 toppTre(resultater)", () => toppTre(resultater), ["Kari", "Jonas", "Ali"]);
sjekk("17 resultater er uendret", () => {
  if (!Array.isArray(toppTre(resultater))) return "toppTre må returnere en array";
  return resultater.map((r) => r.navn);
}, ["Ola", "Kari", "Ali", "Emma", "Jonas"]);

console.log(`\nDu har ${antallOk} av ${antallSjekker} OK.`);