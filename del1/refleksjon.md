# Refleksjon: Grunnleggende JavaScript

Svar når du er ferdig med oppgavene i `oppg1_grunnleggende.js`. Skriv med egne ord, og ikke se i koden mens du svarer på del A. Korte svar er helt greit.

---

## A. Forklar med egne ord

**1. Hva er forskjellen på `let` og `const`? Når bruker du hvilken?**

> let hvis den skal endres når programmet kjører og const hvis den ikke skal endres mens programmet kjører og noen tilfeller i et array.

**2. Hvorfor ble `"5" + 5` til `55`, mens `5 + 5` ble `10`?**

> "5" er tekst, så + setter sammen tekst i stedet for å regne: "5" + 5 = "55" og 5 + 5 = 10 er begge tall.

**3. Hva gjør `%`? Gi et eksempel fra oppgavene der du brukte den.**

> Oppgave 9 brukte jeg % for hvor mange som ikke er til overs etter lagene er laget.

**4. Hva er forskjellen på `=` og `===`?**

> = er for å gi en variabel data og === er denne like denne

**5. Forklar de tre delene i denne linja:** `for (let i = 1; i <= 5; i++)`

> let i = 1; lager en variabel med tallet 1 og i <= 5 mens i er mindre enn 5 loop og i++ pluser på i.

**6. Når er en `while`-løkke bedre enn en `for`-løkke? Hva kan gå galt med en `while`-løkke?**

> while er bra hvis man skal bruker flere for løkker og i mens en verdi blir til denne verdien

**7. Hvorfor er den første byen i lista `byer[0]` og ikke `byer[1]`?**

> 0 er en verdi og telling i kode starter med 0 derfor starter første tingen i array med 0

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

> 4 og Ulvene, først pusher man Nordlys til lag så da er lag 4 og var 3, men endrer ikke hvor i listen Ulvene er siden den legger Nordlys på slutten.

**10. Denne koden skal skrive ut 1, 2 og 3, men gjør det ikke. Hva er feil?**

```js
for (let i = 1; i < 3; i++) {
  console.log(i);
}
```

> i < 3 stopper på 2 og skriver derfor ikke ut 3.

---

## C. Om din egen læring

**11. Hvilken oppgave var vanskeligst, og hvordan løste du den?**

> Synes ikke de var vanskelig med strevde litt med greater og leser then jeg blander dem så det var det vanskeligste

**12. Hvilken feilmelding fikk du oftest? Hva betydde den?**

> Fikk veldig lite compiler meldinger husker ikke hvilken men fikk fleste i VS Code.

**13. Hva gjorde du når du sto fast? Hva vil du gjøre annerledes neste gang?**

> Sjekket docs på w3schools og MDN Web Docs.

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

> Ingen ting kan alt, kan også funksjoner.
