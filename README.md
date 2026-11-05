# Štetje prometa – spletna različica (iPhone in Android)

Aplikacija za kordonsko štetje prometa po metodologiji OCPS. Deluje v brskalniku, tudi brez
interneta; vsi podatki ostanejo na telefonu. © ZUM d. o. o. – uporaba na lastno odgovornost.

## Objava na GitHub Pages (enkrat, ~10 min)

1. Prijavi se na <https://github.com> (brezplačen račun).
2. **New repository** → ime npr. `stetje-prometa` → **Public** → **Create repository**.
3. **Add file → Upload files** → povleci VSE datoteke iz te mape
   (`index.html`, `sw.js`, `manifest.webmanifest`, ikone `*.png`, `.nojekyll`) → **Commit changes**.
   (Datoteka `.nojekyll` je skrita – v Windows Raziskovalcu vklopi »Pokaži skrite predmete«. Ni nujna.)
4. **Settings → Pages** → *Source: Deploy from a branch* → *Branch: main*, mapa `/ (root)` → **Save**.
5. Po 1–2 minutah je aplikacija na naslovu `https://<uporabniško-ime>.github.io/stetje-prometa/`.

## Namestitev na telefon

- **iPhone (Safari):** odpri naslov → **Deli** (kvadratek s puščico) → **Dodaj na začetni zaslon**.
- **Android (Chrome):** odpri naslov → ⋮ → **Dodaj na začetni zaslon** / **Namesti aplikacijo**.

Nato štej **vedno prek ikone na začetnem zaslonu** (na iPhonu ima ikona ločene podatke od Safarija).
Ne uporabljaj zasebnega brskanja. Po vsakem štetju izvozi CSV (aplikacija to ponudi ob zaključku seje).

## Posodobitev aplikacije

Zamenjaj `index.html` na GitHubu in v `sw.js` povečaj `VERSION` (npr. `stetje-1.6`).
Telefoni dobijo novo različico ob naslednjem odprtju z internetom. Podatki štetij ostanejo.

## Zasebnost

GitHub samo dostavi datoteke aplikacije. Podatki štetij se nikamor ne pošiljajo – ostanejo v
telefonu, dokler jih ne izvoziš. Vreme se bere s storitve Open-Meteo.com (pošljejo se le koordinate).
