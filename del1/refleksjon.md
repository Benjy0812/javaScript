# Refleksjon: Grunnleggende JavaScript

Svar når du er ferdig med oppgavene i `oppg1_grunnleggende.js`. Skriv med egne ord, og ikke se i koden mens du svarer på del A. Korte svar er helt greit.

---

## A. Forklar med egne ord

**1. Hva er forskjellen på `let` og `const`? Når bruker du hvilken?**

> let hvis den skal endres når programmet kjører og const hvis den ikke skal endres mens programmet kjører. En const array kan likevel få nye elementer med push, fordi const bare hindrer at variabelen settes til en ny array.

**2. Hvorfor ble `"5" + 5` til `55`, mens `5 + 5` ble `10`?**

> "5" er tekst, så + setter sammen tekst i stedet for å regne: "5" + 5 = "55" og 5 + 5 = 10 er begge tall.

**3. Hva gjør `%`? Gi et eksempel fra oppgavene der du brukte den.**

> % gir resten etter divisjon, for eksempel 17 % 5 = 2. I oppgave 9 brukte jeg % for å finne hvor mange som er til overs etter at lagene er laget.

**4. Hva er forskjellen på `=` og `===`?**

> = gir en variabel en verdi, og === sjekker om to verdier er like, både verdi og type. 5 === "5" er false.

**5. Forklar de tre delene i denne linja:** `for (let i = 1; i <= 5; i++)`

> let i = 1 lager en variabel som starter på 1, og det skjer bare en gang i starten. i <= 5 sier hvor lenge løkka kjører, så lenge i er mindre enn eller lik 5, og det sjekkes før hver runde. i++ legger til 1 på i etter hver runde.

**6. Når er en `while`-løkke bedre enn en `for`-løkke? Hva kan gå galt med en `while`-løkke?**

> while er bedre når jeg ikke vet hvor mange ganger løkka skal kjøre, men kjører til noe stemmer. Hvis det aldri slutter å stemme, får jeg en uendelig løkke.

**7. Hvorfor er den første byen i lista `byer[0]` og ikke `byer[1]`?**

> 0 er en verdi, og telling i kode starter med 0, derfor starter første tingen i arrayet med 0

---

## B. Bruk det du har lært

**8. Hva skrives ut her? Svar før du tester.**

```js
const temp = -3;
if (temp < -5) {
  console.log("Veldig kaldt");
} else if (temp < 0) {
  console.log("Kaldt");
} else {
  console.log("Mildt");
}
```

> Kaldt siden -3 er over -5 og under 0

**9. Hva skrives ut her? Svar før du tester.**

```js
const lag = ["Titans", "Ulvene", "Polarnatt"];
lag.push("Nordlys");
console.log(lag.length);
console.log(lag[1]);
```

> 4 og Ulvene, først pusher man Nordlys til lag så lag var 3 og blir 4, men endrer ikke hvor i listen Ulvene er siden den legger Nordlys på slutten.

**10. Denne koden skal skrive ut 1, 2 og 3, men gjør det ikke. Hva er feil?**

```js
for (let i = 1; i < 3; i++) {
  console.log(i);
}
```

> i < 3 stopper på 2 og skriver derfor ikke ut 3. Det må være i <= 3.

---

## C. Om din egen læring

**11. Hvilken oppgave var vanskeligst, og hvordan løste du den?**

> Jeg synes ikke oppgavene var vanskelige, men jeg slet litt med større enn og mindre enn (greater than og less than) fordi jeg blander dem. Jeg forstår det bedre nå, men er fortsatt litt usikker.

**12. Hvilken feilmelding fikk du oftest? Hva betydde den?**

> Jeg fikk veldig få feilmeldinger, og de fleste så jeg i VS Code. Jeg fikset dem selv, men husker ikke hvilke det var.

**13. Hva gjorde du når du sto fast? Hva vil du gjøre annerledes neste gang?**

> Jeg sjekket dokumentasjonen på W3Schools og MDN Web Docs. Jeg vil ikke gjøre noe annerledes neste gang, men kanskje bruke AI hvis oppgaven er veldig vanskelig eller jeg ikke forstår den, og be om hint.

**14. Hvor langt kom du?**

| Nivå          | Kryss av |
| ------------- | -------- |
| Grunnleggende | x        |
| Middels       | x        |
| Avansert      | x        |

**15. Kryss av for det du kan nå.**

| Jeg kan...                                         | Ja  | Litt | Nei |
| -------------------------------------------------- | --- | ---- | --- |
| lage variabler med `let` og `const`                | x   |      |     |
| bruke tekst og tall, og sette dem sammen med `${}` | x   |      |     |
| ta valg med `if`, `else if` og `else`              | x   |      |     |
| skrive en `for`-løkke                              | x   |      |     |
| hente, legge til og gå gjennom verdier i en array  | x   |      |     |
| lese en feilmelding og finne riktig linje          | x   |      |     |

**16. Hva vil du øve mer på før vi går videre til funksjoner?**

> Ingenting, jeg kan alt, jeg kan også funksjoner.
