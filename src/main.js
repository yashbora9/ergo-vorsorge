import gsap from 'gsap'
import './style.css'

const base = import.meta.env.BASE_URL

const slides = [
  {
    dark: true,
    chapter: 'Vorsorge',
    html: `<p class="kicker">01 · Vorsorge</p><h1>Warum musst du vorsorgen?</h1><p class="lead">Ein Kapitel. Danach weißt du, warum Warten teuer ist.</p>`
  },
  {
    photo: true,
    image: 'frage.jpg',
    html: `<p class="kicker">Die Frage</p><h1>Wer zahlt deine Rechnung, wenn du aufhörst zu arbeiten?</h1><p class="lead">Miete, Essen, Strom bleiben. Das Gehalt nicht.</p>`
  },
  {
    html: `<p class="kicker">Herkunft</p><h2>Das System ist eine Umlage.</h2>
      <p class="lead">Seit Bismarck zahlen die, die arbeiten, die Rente derer, die nicht mehr arbeiten. Es ist kein Sparkonto mit deinem Namen.</p>
      <div class="scale">
        <div class="pan"><div class="dish" style="height:180px"></div><b>Damals</b><br>viele Schultern</div>
        <div class="pan light"><div class="dish"></div><b>Heute</b><br>wenige Schultern</div>
      </div>`
  },
  {
    photo: true,
    html: `<p class="kicker">Wenn die Lücke bleibt</p><h1>Pfandflaschen sind kein Ruhestand.</h1><p class="lead">Das ist kein Witz über alte Menschen. Das ist das Bild, wenn die Rente den Monat nicht trägt.</p>`
  },
  {
    html: `<p class="kicker">Altersstruktur · Deutschland</p><h2>1970 trägt unten. 2024 trägt oben.</h2>
      <div class="py-compare" id="pyramids"></div>
      <p class="src">Unter 20: 30 % im Jahr 1970, 18 % im Jahr 2024. Ab 65: 14 % damals, 23 % heute. Quelle: United Nations, World Population Prospects 2024, Deutschland.</p>`
  },
  {
    html: `<p class="kicker">Die 3 Säulen der Altersvorsorge</p>
      <div class="house">
        <div class="roof">Ziel: Rente = 100 % des Nettogehalts</div>
        <div class="house-cols">
          <article>
            <h3>Gesetzliche Rente</h3>
            <p class="big">ca. 48 %</p>
            <p>nach 45 Arbeitsjahren</p>
          </article>
          <article>
            <h3>Betriebliche Altersvorsorge</h3>
            <p>Was der Arbeitgeber dazulegt. Die zweite Säule, wenn es sie im Job gibt.</p>
          </article>
          <article>
            <h3>Private Altersvorsorge</h3>
            <p><b>Vermögensaufbau</b> zum Beispiel mit Aktien und Fonds.</p>
            <p><b>Einkommensabsicherung</b> zum Beispiel bei Berufsunfähigkeit.</p>
          </article>
        </div>
      </div>`
  },
  {
    example: true,
    html: `<p class="kicker">Lebensstandard</p><h2>Die Linie steigt. Die Rente nicht mit.</h2>
      <svg class="life" viewBox="0 0 840 300" role="img" aria-label="Lebensstandard steigt, die gesetzliche Rente liegt bei 48 Prozent">
        <line x1="56" y1="250" x2="800" y2="250" stroke="#1b1412" stroke-opacity="0.25"/>
        <line x1="56" y1="30" x2="56" y2="250" stroke="#1b1412" stroke-opacity="0.25"/>
        <path d="M56 248 C 180 236, 300 200, 470 120 C 600 70, 700 48, 800 36" fill="none" stroke="#b08958" stroke-width="3" stroke-dasharray="7 7"/>
        <path d="M470 120 L 800 36 L 800 188 L 512 188 L 470 120 Z" fill="#7c2433" fill-opacity="0.18"/>
        <path d="M56 248 C 180 236, 300 200, 470 120 L 512 188 L 800 188" fill="none" stroke="#7c2433" stroke-width="4"/>
        <circle cx="470" cy="120" r="6" fill="#7c2433"/>
        <text x="400" y="104" fill="#7c2433" font-size="18" font-family="Fraunces, serif">Rente</text>
        <text x="600" y="178" fill="#7c2433" font-size="22" font-family="Fraunces, serif">48 %</text>
        <text x="600" y="110" fill="#6d625b" font-size="16" font-family="Outfit, sans-serif">Versorgungslücke</text>
        <text x="120" y="274" fill="#6d625b" font-size="14" font-family="Outfit, sans-serif">Berufsleben · Standard steigt</text>
        <text x="560" y="274" fill="#6d625b" font-size="14" font-family="Outfit, sans-serif">Rente</text>
      </svg>
      <p class="lead">Die gesetzliche Rente lässt dir etwa 48 % des Einkommens. Die Lücke dazwischen füllst du selbst: betriebliche und private Vorsorge.</p>`
  },
  {
    photo: true,
    image: 'titanic.jpg',
    layout: 'top',
    html: `<p class="kicker">Titanic</p><h1>Die Boote lagen da. Viele sind geblieben.</h1><p class="lead">Das Schiff wirkte sicher, die Rettungsboote auch. Wer zu spät steigt, steht noch auf dem Deck. Vorsorgen heißt, früher ins Boot zu gehen.</p>`
  },
  {
    dark: true,
    chapter: 'ETFs',
    html: `<p class="kicker">02 · ETFs</p><h1>Warum ein ETF, und nicht Gold, Beton oder eine Münze?</h1>`
  },
  {
    html: `<p class="kicker">Alltag</p><h2>Du kaufst schon Aktien. Nur ohne Gewinn.</h2>
      <div class="own">
        <article style="--c:#1d1d1f;--on:#f4efe8"><div class="mark"><img src="${base}logos/apple.svg" alt=""></div><div><b>iPhone</b><span>Apple</span></div></article>
        <article style="--c:#128c7e;--on:#f4efe8"><div class="mark"><img src="${base}logos/whatsapp.svg" alt=""></div><div><b>WhatsApp</b><span>Meta</span></div></article>
        <article class="rainbow" style="--c:#fff;--on:#1b1412"><div class="mark duo"><img src="${base}logos/google.svg" alt=""><img src="${base}logos/youtube.svg" alt=""></div><div><b>Google, YouTube</b><span>Alphabet</span></div></article>
        <article style="--c:#1db954;--on:#0e1a12"><div class="mark"><img src="${base}logos/spotify.svg" alt=""></div><div><b>Spotify</b><span>Spotify</span></div></article>
        <article style="--c:#e50914;--on:#f4efe8"><div class="mark"><img src="${base}logos/netflix.svg" alt=""></div><div><b>Netflix</b><span>Netflix</span></div></article>
        <article class="amz" style="--c:#232f3e;--on:#f4efe8"><div class="mark"><img src="${base}logos/amazon.svg" alt=""></div><div><b>Amazon-Paket</b><span>Amazon</span></div></article>
        <article style="--c:#111;--on:#f4efe8"><div class="mark"><img src="${base}logos/adidas.svg" alt=""></div><div><b>Adidas</b><span>Adidas</span></div></article>
        <article style="--c:#f7f4ef;--on:#111"><div class="mark"><img src="${base}logos/nike.svg" alt=""></div><div><b>Nike</b><span>Nike</span></div></article>
        <article style="--c:#1a1a1a;--on:#f4efe8"><div class="mark"><img src="${base}logos/puma.svg" alt=""></div><div><b>Puma</b><span>Puma</span></div></article>
        <article style="--c:#3d4c5c;--on:#f4efe8"><div class="mark trio"><img src="${base}logos/vw.svg" alt=""><img src="${base}logos/mercedes.svg" alt=""><img src="${base}logos/bmw.svg" alt=""></div><div><b>VW, Mercedes, BMW</b><span>die drei Konzerne</span></div></article>
        <article style="--c:#e20074;--on:#f4efe8"><div class="mark"><img src="${base}logos/telekom.svg" alt=""></div><div><b>Telekom-Vertrag</b><span>Deutsche Telekom</span></div></article>
        <article style="--c:#1a1f71;--on:#f4efe8"><div class="mark duo"><img src="${base}logos/visa.svg" alt=""><img src="${base}logos/paypal.svg" alt=""></div><div><b>Visa, PayPal</b><span>beim Bezahlen</span></div></article>
        <article style="--c:#0033a0;--on:#f4efe8"><div class="mark"><img src="${base}logos/nivea.svg" alt=""></div><div><b>Nivea</b><span>Beiersdorf</span></div></article>
        <article style="--c:#e7f6ec;--on:#0d6b32"><div class="mark"><img src="${base}logos/persil.svg" alt=""></div><div><b>Persil</b><span>Henkel</span></div></article>
        <article style="--c:#5c2d91;--on:#f4efe8"><div class="mark"><img src="${base}logos/milka.svg" alt=""></div><div><b>Milka</b><span>Mondelez</span></div></article>
        <article style="--c:#8c2f1b;--on:#f4efe8"><div class="mark duo"><img src="${base}logos/kitkat.svg" alt=""><img src="${base}logos/maggi.svg" alt=""></div><div><b>KitKat, Maggi</b><span>Nestlé</span></div></article>
        <article style="--c:#f3ead7;--on:#6b4e24"><div class="mark duo"><img src="${base}logos/dove.svg" alt=""><img src="${base}logos/knorr.svg" alt=""></div><div><b>Dove, Knorr</b><span>Unilever</span></div></article>
        <article style="--c:#003da5;--on:#f4efe8"><div class="mark duo"><img src="${base}logos/gillette.svg" alt=""><img src="${base}logos/pg.svg" alt=""></div><div><b>Gillette, Ariel</b><span>Procter &amp; Gamble</span></div></article>
      </div>
      <p class="lead">Fast jeder hat davon mehrere zu Hause. Du zahlst. Die Aktie gehört jemand anderem. Ein ETF sammelt genau solche Firmen.</p>`
  },
  {
    html: `<p class="kicker">Der Nachteil</p><h2>Vier Wege. Ein Satz pro Weg.</h2>
      <div class="grid four">
        <div class="card shot"><img src="${base}gold.jpg" alt="Ein Goldbarren liegt still"><b>Gold</b><p>Wirft von allein nichts aus.</p></div>
        <div class="card shot"><img src="${base}haus.jpg" alt="Ein schweres Steinhaus mit einem Schlüssel"><b>Immobilie</b><p>Schwer zu verkaufen.</p></div>
        <div class="card shot"><img src="${base}muenze.jpg" alt="Eine Münze dreht sich"><b>Krypto</b><p>Kann hart fallen.</p></div>
        <div class="card shot accent"><img src="${base}korb.jpg" alt="Ein Korb voller kleiner Werkstätten"><b>ETF</b><p>Schwankt mit dem Markt.</p></div>
      </div>`
  },
  {
    example: true,
    id: 'wish',
    html: `<p class="kicker">Vorabschluss</p><h2>100 € im Monat. 40 Jahre.</h2>
      <p class="lead">Eingezahlt sind dann genau 48.000 €. Ab welcher Summe sagst du: ich werde Kunde?</p>
      <div class="wish">
        <input id="wishInput" inputmode="numeric" placeholder="Deine Summe in €" aria-label="Deine Summe" />
        <button id="wishBtn" type="button">Merken</button>
      </div>
      <div class="paid"><div class="num">48.000 €</div><p class="src" id="wishOut">Deine Zahl erscheint hier, sobald du sie nennst. Eine Beispielrendite zeigen wir erst, wenn du den Prozentsatz freigibst.</p></div>`
  },
  {
    dark: true,
    html: `<p class="kicker">Fonds-Service-Center</p><h2>Jetzt den Beispiel-Fonds aussuchen.</h2>
      <p class="lead">Im Fonds-Service-Center von ERGO denselben Fonds öffnen, den ihr gerade besprecht. Danach kommt der Kostenrechner mit genau diesem Beitrag.</p>
      <p class="actions"><a class="go" id="fscLink" href="https://www.ergo.de/de/Produkte/Rentenversicherung/Private-Rentenversicherung/FSC" target="_blank" rel="noopener">Fonds-Service-Center öffnen</a></p>
      <label class="fund">Beispiel-Fonds
        <input id="fundName" placeholder="Name aus dem Fonds-Service-Center" />
      </label>`
  },
  {
    example: true,
    html: `<p class="kicker">Kostenrechner</p><h2>Eingezahlt gegen Guthaben.</h2>
      <div class="calc" id="calc"></div>`
  },
  {
    example: true,
    html: `<p class="kicker">Diversifikation</p><h2>Erst steigt sie. Dann stürzt Apple.</h2>
      <div class="play" id="divPlay"></div>`
  },
  {
    example: true,
    html: `<p class="kicker">Cost-Average</p><h2>Dieselben 100 €. Mehr Anteile, wenn es billig ist.</h2>
      <div class="play" id="caPlay"></div>`
  },
  {
    dark: true,
    chapter: 'Flexibilität',
    html: `<p class="kicker">03 · Flexibilität</p><h1>Der Plan muss zu deinem Leben passen.</h1>`
  },
  {
    html: `<p class="kicker">Katalog</p><h2>Vier Fragen. Vier Antworten.</h2>
      <div class="qa">
        <details><summary>Pause?</summary><p>Der Beitrag kann ruhen, wenn ein Jahr eng wird. Du steigst nicht aus dem Vertrag aus.</p></details>
        <details><summary>Erhöhung?</summary><p>Wenn das Gehalt wächst, wächst der Beitrag mit. Einmal im Gespräch festlegen.</p></details>
        <details><summary>Auszahlung?</summary><p>Zum Laufzeitende als Kapital oder als Rente. Den Weg wählst du dann, nicht heute auf ewig.</p></details>
        <details><summary>Einmalzuzahlung?</summary><p>Bonus, Erbe, Steuererstattung: extra einzahlen, ohne den Monatsplan zu zerreißen.</p></details>
      </div>`
  },
  {
    dark: true,
    chapter: 'Police',
    html: `<p class="kicker">04 · Die Police</p><h1>Warum in einer Police, und nicht nur im Depot?</h1>`
  },
  {
    html: `<p class="kicker">Sicherheit · ERGO Group 2025</p><h2>Große Zahlen. Mit Quelle.</h2>
      <div class="grid four">
        <div class="card"><div class="num">21,7</div><p>Mrd. € Versicherungsumsatz</p></div>
        <div class="card"><div class="num">136</div><p>Mrd. € Kapitalanlagen</p></div>
        <div class="card"><div class="num">917</div><p>Mio. € Konzernergebnis</p></div>
        <div class="card"><div class="num">28k</div><p>angestellte Mitarbeiter, dazu 8.276 Vermittler</p></div>
      </div>
      <p class="src">Quelle: ergo.com, Zahlen, Daten und Fakten, Geschäftsjahr 2025 (Umsatz 2024: 20,8 Mrd. €). Eine Insolvenzquote in Prozent veröffentlicht ERGO dort nicht. Deutsche Lebensversicherer stehen zusätzlich unter dem Schutzschirm Protektor. Munich Re ist alleinige Eigentümerin der ERGO Group AG (Geschäftsbericht ERGO Group AG 2024).</p>`
  },
  {
    html: `<div class="side">
        <img src="${base}stadion.jpg" alt="Ein leeres Stadionmodell, ohne Personen und ohne Schrift">
        <div>
          <p class="kicker">Partnerschaft</p><h2>Inter Miami. Messi spielt dort.</h2>
          <p class="lead">Am 17. Januar 2026 hat ERGO eine mehrjährige Partnerschaft mit Inter Miami CF bekannt gegeben. Lionel Messi ist Kapitän des Vereins. Das ist ein Sponsoring der Marke, kein Zitat für deine Rente.</p>
          <p class="src">Quelle: ERGO Medieninformation, 17. Januar 2026. Ein zweites Gesicht kommt auf diese Folie, sobald du Bild und Namen freigibst.</p>
        </div>
      </div>`
  },
  {
    html: `<div class="side">
        <img src="${base}rueck.jpg" alt="Ein großes Haus steht hinter einem kleinen">
        <div>
          <p class="kicker">Munich Re</p><h2>Hinter ERGO steht der große Rückversicherer.</h2>
          <p class="lead">Die Münchener Rück ist alleinige Anteilseignerin der ERGO Group AG und ein Unternehmen im DAX. ERGO selbst ist nicht „der DAX“. Jemand steht hinter dem Versprechen, wenn Schäden groß werden.</p>
        </div>
      </div>`
  },
  {
    html: `<p class="kicker">Überschussbeteiligung</p><h2>Der Topf ist nicht starr.</h2>
      <img class="wide" src="${base}topf.jpg" alt="Aus einer Kanne fließt etwas in eine Tasse">
      <div class="grid two caps">
        <div><b>Dein Fondsguthaben</b><p>Die Anteile entwickeln sich mit den Fonds, die du gewählt hast.</p></div>
        <div><b>Überschüsse</b><p>Was über das Kalkulierte hinaus entsteht, kann an den Vertrag zurückfließen. Die Höhe steht vorher nicht fest.</p></div>
      </div>`
  },
  {
    example: true,
    html: `<div class="side">
        <img src="${base}haelfte.jpg" alt="Eine Münze, in zwei Hälften geteilt">
        <div>
          <p class="kicker">Halbeinkünfteverfahren</p><h2>Vom Gewinn zählt die Hälfte.</h2>
          <p class="lead">Bei einer Kapitalauszahlung kann nur die Hälfte der Erträge mit deinem Satz besteuert werden. Unter anderem: zwölf Jahre Laufzeit, Alter 62 bei der Auszahlung.</p>
          <p class="src">Gesetzeslage, kein Geschenk von ERGO, und nur wenn die Voraussetzungen bei dir stimmen. Kein Steuersatz. Kein Ersparnis-Rechner.</p>
        </div>
      </div>`
  },
  {
    html: `<p class="kicker">ERGO Rente Chance</p><h2>Fonds wechseln, ohne jedes Mal zu zahlen.</h2>
      <img class="wide" src="${base}wechsel.jpg" alt="Zwei Hände tauschen zwei Mappen">
      <div class="grid three">
        <div class="card"><b>12×</b><p>kostenlose Fondswechsel im Jahr, für neue Beiträge und für das Guthaben.</p></div>
        <div class="card"><b>20</b><p>Fonds gleichzeitig, darunter ETFs.</p></div>
        <div class="card"><b>1×</b><p>im Jahr optional zurück auf deine ursprüngliche Mischung.</p></div>
      </div>
      <p class="src">Produktinformation ERGO Rente Chance. Tarif bestätigen, bevor du das im Gespräch als fest verkaufst.</p>`
  },
  {
    html: `<div class="side">
        <img src="${base}siegel.jpg" alt="Eine geschlossene Mappe mit Siegel">
        <div>
          <p class="kicker">Steuer</p><h2>Die Konditionen stehen im Vertrag fest.</h2>
          <p class="lead">Was für diesen Vertrag gilt, gilt für seine Laufzeit. Du spekulierst nicht jedes Jahr neu, welche Abgeltungsteuer das Depot trifft.</p>
          <p class="src">Gesetzesänderungen können den Rahmen verschieben. Der Satz auf der Police ist der vereinbarte Weg, kein Freibrief gegen jedes künftige Gesetz.</p>
        </div>
      </div>`
  },
  {
    html: `<p class="kicker">Vorabpauschale</p><h2>Im Depot kann Steuer anfallen, ohne dass du auszahlst.</h2>
      <img class="wide" src="${base}vorab.jpg" alt="Offene Papiere neben einer versiegelten Mappe">
      <div class="grid two caps">
        <div><b>Depot</b><p>Auf thesaurierende Fonds kann jährlich eine Vorabpauschale fällig werden. Du zahlst, ohne verkauft zu haben.</p></div>
        <div><b>Police</b><p>Die Vorabpauschale trifft dich in der Regel nicht jedes Jahr. Steuern kommen bei der Auszahlung.</p></div>
      </div>`
  },
  {
    photo: true,
    image: 'berater.jpg',
    html: `<p class="kicker">Berater</p><h1>Jemand bleibt, wenn der Kurs laut wird.</h1><p class="lead">Ein Depot lässt dich allein mit der roten Woche. Ein Berater hält den Plan.</p>`
  },
  {
    photo: true,
    image: 'schluessel.jpg',
    html: `<p class="kicker">Immobilie</p><h2>Später kann aus der Police Eigenkapital werden.</h2>
      <p class="lead">Zum Wohnungskauf lässt sich angespartes Kapital auszahlen. Den Weg legst du fest, wenn der Kauf konkret ist.</p>
      <p class="src">Kein Kreditversprechen. Der genaue Mechanismus kommt noch dazu.</p>`
  },
  {
    dark: true,
    chapter: 'Du',
    html: `<p class="kicker">05 · Du</p><h1>Warum mit mir.</h1>`
  },
  {
    html: `<p class="kicker">Ziel und Vision</p><h2>Drei Sätze von dir. Noch offen.</h2>
      <p class="lead">Hier steht, warum du dieses Gespräch führst: welches Leben du Menschen ermöglichen willst, und woran man merkt, dass der Plan hält.</p>
      <p class="src">Text und Foto schickst du. Bis dahin bleibt die Folie ehrlich leer, statt eine erfundene Biografie zu zeigen.</p>`
  },
  {
    photo: true,
    image: 'schritt.jpg',
    html: `<p class="kicker">Der nächste Schritt</p><h1>Beitrag. Startmonat. Haushalts-Check.</h1>
      <p class="lead">Welcher Betrag im Monat. Wann die erste Rate läuft. Was im Haushalt schon fest ist.</p>`
  }
]

const app = document.querySelector('#app')
const deck = document.createElement('div')
slides.forEach((s, i) => {
  const el = document.createElement('section')
  el.className = 'slide' + (s.dark ? ' dark' : '') + (s.photo ? ' photo' : '') + (s.layout ? ' layout-' + s.layout : '')
  if (s.photo) {
    const url = `url(${base}${s.image || 'pfand.jpg'})`
    el.style.backgroundImage = url
    el.style.setProperty('--shot', url)
  }
  el.dataset.i = String(i)
  el.innerHTML = `<div class="inner">${s.html}</div>` + (s.example ? `<p class="note">Beispiel, keine Zusage.</p>` : '')
  deck.appendChild(el)
})
app.appendChild(deck)

const chrome = document.createElement('div')
chrome.className = 'chrome'
chrome.innerHTML = `
  <div class="top"><span id="chap">Vorsorge</span></div>
  <div class="bottom">
    <span class="count" id="count">01 / ${String(slides.length).padStart(2, '0')}</span>
    <div class="navbtns">
      <button type="button" id="prev" aria-label="Zurück">←</button>
      <button type="button" id="next" aria-label="Weiter">→</button>
    </div>
  </div>`
app.appendChild(chrome)

let index = 0
const nodes = [...deck.children]

function chapterOf(i) {
  for (let k = i; k >= 0; k--) if (slides[k].chapter) return slides[k].chapter
  return ''
}

function show(next) {
  const n = Math.max(0, Math.min(slides.length - 1, next))
  if (n === index && nodes[n].classList.contains('is-on')) return
  const prev = nodes[index]
  const el = nodes[n]
  index = n
  gsap.killTweensOf([prev, el])
  if (prev !== el) {
    gsap.to(prev, { opacity: 0, y: n > index ? 0 : 0, duration: 0.35, onComplete: () => prev.classList.remove('is-on') })
    prev.classList.remove('is-on')
  }
  el.classList.add('is-on')
  gsap.fromTo(el, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' })
  document.getElementById('count').textContent = `${String(n + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`
  document.getElementById('chap').textContent = chapterOf(n)
  document.body.style.background = slides[n].dark || slides[n].photo ? '#140d0f' : '#f3eee6'
  chrome.style.color = slides[n].dark || slides[n].photo ? '#f3eee6' : '#1b1412'
}

show(0)

document.getElementById('next').onclick = () => show(index + 1)
document.getElementById('prev').onclick = () => show(index - 1)

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); show(index + 1) }
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); show(index - 1) }
  if (e.key === 'f' || e.key === 'F') {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen()
    else document.exitFullscreen()
  }
  if (e.key === 'Home') show(0)
  if (e.key === 'End') show(slides.length - 1)
})

let wheelLock = false
window.addEventListener('wheel', (e) => {
  if (e.target.closest('input, textarea, .calc, .play')) return
  if (wheelLock || Math.abs(e.deltaY) < 20) return
  wheelLock = true
  show(index + (e.deltaY > 0 ? 1 : -1))
  setTimeout(() => { wheelLock = false }, 700)
}, { passive: true })

let touchX = 0
let touchOnStep = false
window.addEventListener('touchstart', (e) => {
  touchX = e.changedTouches[0].clientX
  touchOnStep = !!e.target.closest('.play button')
}, { passive: true })
window.addEventListener('touchend', (e) => {
  if (touchOnStep) return
  const dx = e.changedTouches[0].clientX - touchX
  if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1))
})

function bindWish() {
  const btn = document.getElementById('wishBtn')
  const input = document.getElementById('wishInput')
  const out = document.getElementById('wishOut')
  if (!btn) return
  const saved = sessionStorage.getItem('wish')
  if (saved) {
    input.value = saved
    out.textContent = `Du sagst: ab ${Number(saved).toLocaleString('de-DE')} € werde ich Kunde. Eingezahlt sind 48.000 €.`
  }
  btn.onclick = () => {
    const v = Number(String(input.value).replace(/\./g, '').replace(',', '.'))
    if (!v) return
    sessionStorage.setItem('wish', String(v))
    out.textContent = `Du sagst: ab ${v.toLocaleString('de-DE')} € werde ich Kunde. Eingezahlt sind 48.000 €.`
  }
}
bindWish()
bindDiversify()
bindCostAverage()

function bindDiversify() {
  const root = document.getElementById('divPlay')
  if (!root) return
  const names = [
    { name: 'Apple', kind: 'rise', color: '#7c2433', width: 4, prices: [24, 36, 48, 62, 78, 40, 18, 8] },
    { name: 'Samsung', kind: 'rest', color: '#1b1412', width: 2.5, prices: [22, 32, 44, 56, 66, 86, 96, 100] },
    { name: 'Nokia', kind: 'rest', color: '#5e6a72', width: 2.5, prices: [16, 24, 32, 40, 48, 66, 76, 84] },
    { name: 'Huawei', kind: 'rest', color: '#8d6a45', width: 2.5, prices: [12, 18, 24, 30, 36, 46, 50, 52] }
  ]
  const xs = [64, 168, 272, 376, 480, 584, 688, 792]
  const yOf = (p) => (172 - p * 1.45).toFixed(1)
  const dOf = (prices, from, to) => prices.slice(from, to + 1).map((p, i) => `${i ? 'L' : 'M'}${xs[from + i]} ${yOf(p)}`).join(' ')
  const avg = names[0].prices.map((_, i) => names.reduce((sum, row) => sum + row.prices[i], 0) / names.length)
  const apple = names[0]
  const paths = [
    `<path data-kind="rise" d="${dOf(apple.prices, 0, 4)}" fill="none" stroke="${apple.color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path data-kind="crash" d="${dOf(apple.prices, 4, 7)}" fill="none" stroke="${apple.color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
    ...names.slice(1).map(row => `<path data-kind="rest" data-name="${row.name}" d="${dOf(row.prices, 0, 7)}" fill="none" stroke="${row.color}" stroke-width="${row.width}" stroke-linecap="round" stroke-linejoin="round"/>`),
    `<path data-kind="avg" d="${dOf(avg, 0, 7)}" fill="none" stroke="#b08958" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
  ].join('')
  const tags = [
    `<text data-tag="rise" x="${xs[4] + 10}" y="${Number(yOf(apple.prices[4])) + 5}" fill="#7c2433" font-size="15" font-family="Outfit, sans-serif">Apple</text>`,
    `<text data-tag="crash" x="${xs[7] + 12}" y="${Number(yOf(apple.prices[7])) + 4}" fill="#7c2433" font-size="15" font-family="Outfit, sans-serif">Apple</text>`,
    ...names.slice(1).map(row => `<text data-tag="rest" x="${xs[7] + 12}" y="${Number(yOf(row.prices[7])) + 4}" fill="${row.color}" font-size="15" font-family="Outfit, sans-serif">${row.name}</text>`),
    `<text data-tag="avg" x="${xs[7] + 12}" y="${Number(yOf(avg[7])) - 8}" fill="#b08958" font-size="15" font-family="Outfit, sans-serif">ETF</text>`
  ].join('')
  const says = [
    'Die Apple-Aktie steigt erst ganz normal.',
    'Dann stürzt sie ab. Eine einzelne Aktie kann so fallen.',
    'Samsung, Nokia und Huawei steigen in denselben Jahren.',
    'Der ETF ist der Durchschnitt. Apple bleibt drin. Die anderen ziehen die Linie trotzdem nach oben.'
  ]
  const last = says.length - 1
  root.innerHTML = `
    <svg viewBox="0 0 1000 200" role="img" aria-label="Apple steigt und stürzt, Samsung, Nokia und Huawei steigen, der ETF-Durchschnitt steigt">
      <line x1="40" y1="22" x2="40" y2="178" stroke="rgba(27,20,18,0.15)"/>
      <line x1="40" y1="178" x2="900" y2="178" stroke="rgba(27,20,18,0.15)"/>
      <text x="48" y="18" fill="#6d625b" font-size="13" font-family="Outfit, sans-serif">hoch</text>
      <text x="48" y="196" fill="#6d625b" font-size="13" font-family="Outfit, sans-serif">tief</text>
      ${paths}
      ${tags}
    </svg>
    <p class="play-key">
      <span data-key="rise"><i class="fall"></i>Apple</span>
      <span data-key="rest" hidden><i style="background:#1b1412"></i>Samsung</span>
      <span data-key="rest" hidden><i style="background:#5e6a72"></i>Nokia</span>
      <span data-key="rest" hidden><i style="background:#8d6a45"></i>Huawei</span>
      <span data-key="avg" hidden><i class="avg"></i>Durchschnitt, der ETF</span>
    </p>
    <p class="play-say"></p>
    <p class="src">Gezeichnetes Beispiel. Keine echten Kurse von Apple, Samsung, Nokia oder Huawei.</p>
    <div class="play-bar">
      <button type="button" data-act="back">Schritt zurück</button>
      <span data-act="count"></span>
      <button type="button" class="play-go" data-act="go">Nächster Schritt</button>
    </div>`
  const say = root.querySelector('.play-say')
  const count = root.querySelector('[data-act="count"]')
  const go = root.querySelector('[data-act="go"]')
  const back = root.querySelector('[data-act="back"]')
  let step = 0
  const onFor = (kind) => kind === 'rise' || (kind === 'crash' && step >= 1) || (kind === 'rest' && step >= 2) || (kind === 'avg' && step >= 3)
  const reveal = (path, on, animate) => {
    const len = path.getTotalLength()
    const kind = path.dataset.kind
    if (!on) {
      path.style.transition = 'none'
      path.style.opacity = '0'
      path.style.strokeDasharray = String(len)
      path.style.strokeDashoffset = String(len)
      path.dataset.shown = '0'
      return
    }
    path.style.opacity = kind === 'rest' ? '0.85' : '1'
    if (!animate || path.dataset.shown === '1') {
      path.style.transition = 'none'
      path.style.strokeDasharray = String(len)
      path.style.strokeDashoffset = '0'
    } else {
      path.style.transition = 'none'
      path.style.strokeDasharray = String(len)
      path.style.strokeDashoffset = String(len)
      path.getBoundingClientRect()
      const seconds = kind === 'crash' ? 0.35 : 0.9
      path.style.transition = `stroke-dashoffset ${seconds}s ease`
      path.style.strokeDashoffset = '0'
    }
    path.dataset.shown = '1'
  }
  const paint = (next, forward) => {
    step = next
    root.querySelectorAll('path').forEach((path) => {
      const kind = path.dataset.kind
      const animate = forward && ((kind === 'rise' && step === 0) || (kind === 'crash' && step === 1) || (kind === 'rest' && step === 2) || (kind === 'avg' && step === 3))
      reveal(path, onFor(kind), animate)
    })
    root.querySelectorAll('[data-tag]').forEach((tag) => {
      const show = onFor(tag.dataset.tag) && !(tag.dataset.tag === 'rise' && step >= 1)
      tag.style.opacity = show ? '1' : '0'
    })
    root.querySelectorAll('[data-key="rest"]').forEach((el) => { el.hidden = step < 2 })
    root.querySelector('[data-key="avg"]').hidden = step < 3
    say.textContent = says[step]
    count.textContent = `${step + 1} / ${says.length}`
    back.disabled = step === 0
    go.textContent = step === last ? 'Von vorn' : 'Nächster Schritt'
  }
  back.onclick = () => paint(Math.max(0, step - 1), false)
  go.onclick = () => paint(step === last ? 0 : step + 1, step !== last)
  paint(0, true)
}

function bindCostAverage() {
  const root = document.getElementById('caPlay')
  if (!root) return
  const months = [
    { price: 2, shares: 50 },
    { price: 1, shares: 100 },
    { price: 5, shares: 20 },
    { price: 2, shares: 50 },
    { price: 2, shares: 50 }
  ]
  const xs = [110, 310, 510, 710, 910]
  const yPrice = (p) => 82 - (p - 1) * 13
  const says = [
    'Monat 1. Preis 2 €. 100 € kaufen 50 Anteile.',
    'Monat 2. Der Preis fällt auf 1 €. Dieselben 100 € kaufen 100 Anteile. Doppelt so viele.',
    'Monat 3. Der Preis springt auf 5 €. Dieselben 100 € kaufen nur 20 Anteile.',
    'Monat 4. Wieder 2 €. Wieder 50 Anteile.',
    'Monat 5. Noch einmal 2 €. Noch einmal 50 Anteile. Zusammen 270.',
    '270 Anteile, 500 € gezahlt. Der Durchschnitt der fünf Preise ist 2,40 €. Zu dem Preis wären sie 648 €. Du hast 148 € weniger gezahlt, weil der billige Monat die meisten Anteile geliefert hat.'
  ]
  const dots = months.map((m, i) => {
    const y = yPrice(m.price)
    const h = m.shares * 0.46
    return `
      <g data-m="${i}">
        <rect x="${xs[i] - 22}" y="${168 - h}" width="44" height="${h}" rx="6" fill="#7c2433"/>
        <text x="${xs[i]}" y="${160 - h}" text-anchor="middle" fill="#1b1412" font-size="14" font-family="Outfit, sans-serif">${m.shares}</text>
        <circle cx="${xs[i]}" cy="${y}" r="6" fill="#7c2433"/>
        <text x="${xs[i]}" y="${y - 12}" text-anchor="middle" fill="#6d625b" font-size="14" font-family="Outfit, sans-serif">${m.price} €</text>
      </g>`
  }).join('')
  root.innerHTML = `
    <svg viewBox="0 0 1000 180" role="img" aria-label="Fünf Monate: Preis und gekaufte Anteile für je 100 Euro">
      <text x="16" y="16" fill="#6d625b" font-size="13" font-family="Outfit, sans-serif">Preis</text>
      <text x="16" y="108" fill="#6d625b" font-size="13" font-family="Outfit, sans-serif">Anteile</text>
      <line x1="16" y1="96" x2="980" y2="96" stroke="rgba(27,20,18,0.12)"/>
      <path data-line fill="none" stroke="#7c2433" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      ${dots}
    </svg>
    <p class="play-say"></p>
    <div class="grid three" data-result hidden>
      <div class="card"><b>500 €</b><p>eingezahlt. 270 Anteile: 50, 100, 20, 50, 50.</p></div>
      <div class="card"><b>2,40 €</b><p>Durchschnitt der fünf Preise. 270 Anteile wären so 648 €.</p></div>
      <div class="card accent"><b>148 €</b><p>weniger gezahlt. 648 € minus 500 €.</p></div>
    </div>
    <p class="src">Dieselben Beispielzahlen wie in der alten Folie: 2 €, 1 €, 5 €, 2 €, 2 €. Kein echter Kurs.</p>
    <div class="play-bar">
      <button type="button" data-act="back">Schritt zurück</button>
      <span data-act="count"></span>
      <button type="button" class="play-go" data-act="go">Nächster Schritt</button>
    </div>`
  const line = root.querySelector('[data-line]')
  const say = root.querySelector('.play-say')
  const count = root.querySelector('[data-act="count"]')
  const go = root.querySelector('[data-act="go"]')
  const back = root.querySelector('[data-act="back"]')
  const result = root.querySelector('[data-result]')
  let step = 0
  const paint = (next) => {
    step = next
    const shown = Math.min(step, 4)
    const pts = months.slice(0, shown + 1).map((m, i) => `${i ? 'L' : 'M'}${xs[i]} ${yPrice(m.price)}`).join(' ')
    line.setAttribute('d', pts)
    root.querySelectorAll('[data-m]').forEach((g) => {
      g.style.opacity = Number(g.dataset.m) <= shown ? '1' : '0'
    })
    result.hidden = step < 5
    say.textContent = says[step]
    count.textContent = `${step + 1} / 6`
    back.disabled = step === 0
    go.textContent = step === 5 ? 'Von vorn' : 'Nächster Schritt'
  }
  back.onclick = () => paint(Math.max(0, step - 1))
  go.onclick = () => paint(step === 5 ? 0 : step + 1)
  paint(0)
}

const bands = [
  ['90+', 0.25, 0.48, 2.13, 4.79],
  ['80', 3.69, 7.01, 16.77, 24.31],
  ['70', 13.68, 23.94, 27.14, 32.10],
  ['60', 28.58, 39.39, 44.28, 46.31],
  ['50', 24.48, 35.22, 46.85, 46.68],
  ['40', 33.48, 40.04, 39.59, 39.04],
  ['30', 44.44, 41.02, 42.51, 39.97],
  ['20', 40.34, 37.66, 35.47, 32.58],
  ['10', 42.69, 40.62, 29.90, 28.25],
  ['0', 48.00, 45.70, 30.72, 29.14]
]
const py = document.getElementById('pyramids')
if (py) {
  const col = (title, mi, fi) => `
    <figure>
      <figcaption>${title}</figcaption>
      ${bands.map(b => `
        <div class="py-row">
          <i class="m" style="width:${b[mi]}%"></i>
          <span>${b[0]}</span>
          <i class="f" style="width:${b[fi]}%"></i>
        </div>`).join('')}
      <p class="py-legend"><span>Männer</span><span>Frauen</span></p>
    </figure>`
  py.innerHTML = col('1970', 1, 2) + col('2024', 3, 4)
}

function projectCalc(monthly, ratePct, once, years, surplusPct, feePct, stripCosts = false) {
  const I1 = monthly
  const I2 = ratePct / 100
  const I3 = once
  const I4 = years
  const I5 = surplusPct / 100
  const I6 = feePct / 100
  const factor = stripCosts ? 1 + I2 : 1 + I2 - I6
  const horizon = Math.max(1, Math.min(40, Math.round(years)))
  const rows = []
  let B = 0
  let C = 0
  let E = 0
  let F = 0
  for (let y = 1; y <= horizon; y++) {
    const Bprev = B
    const Cprev = C
    const Eprev = E
    const Fprev = F
    B = y === 1 ? I1 * 12 + I3 : Bprev + I1 * 12
    if (!stripCosts && y <= 5) {
      E = (I1 * 12 * 0.175) - ((35 - I4) / 5 * I1 * 0.3)
      if (y === 1) E += I3 / 100 * 4
    } else E = 0
    F = stripCosts ? 0 : 0.06 * I1 * 12 + 12
    if (!stripCosts && y === 1) F += I3 / 100 * 4
    const base = y === 1
      ? B + B * I5 - E - F
      : (B - Bprev - Eprev - Fprev) + ((B - Bprev + Cprev - Eprev - Fprev) * I5) + Cprev
    const grown = base * factor
    C = stripCosts ? grown : grown - 0.03 * grown / 100
    rows.push({ y, paid: B, value: C, diff: C - B, sales: E, admin: F })
  }
  return rows
}

function euro0(n) {
  const sign = n < 0 ? '−' : ''
  return sign + Math.abs(Math.round(n)).toLocaleString('de-DE') + ' €'
}

function euro2(n) {
  const sign = n < 0 ? '−' : ''
  return sign + Math.abs(n).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'
}

function pct(n, digits) {
  return (n * 100).toLocaleString('de-DE', { minimumFractionDigits: digits, maximumFractionDigits: digits }) + ' %'
}

function customerReturn(rows) {
  const prem = rows.map((r, i) => i === 0 ? r.paid : r.paid - rows[i - 1].paid)
  const finalValue = rows[rows.length - 1].value
  const at = (r) => prem.reduce((v, p) => (v + p) * (1 + r), 0)
  let lo = -0.9
  let hi = 3
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2
    if (at(mid) > finalValue) hi = mid
    else lo = mid
  }
  return (lo + hi) / 2
}

function renderCalc() {
  const root = document.getElementById('calc')
  if (!root) return
  root.innerHTML = `
    <div>
      <label>Im Monat<input id="cMonthly" type="number" min="25" step="5" value="100"></label>
      <label>Jahre<input id="cYears" type="number" min="1" max="40" value="35"></label>
      <label>Rendite %<input id="cRate" type="number" min="0" max="15" step="0.5" value="12"></label>
      <label>Überschuss %<input id="cSurplus" type="number" min="0" max="6" step="0.5" value="3"></label>
      <label>Fondskosten %<input id="cFee" type="number" min="0" max="2" step="0.05" value="0.2"></label>
      <label>Einmalig €<input id="cOnce" type="number" min="0" step="100" value="0"></label>
    </div>
    <div>
      <div class="calc-nums">
        <div><span>Eingezahlt</span><strong id="cPaid"></strong></div>
        <div><span>Guthaben</span><strong id="cValue"></strong></div>
        <div><span>Plus</span><strong id="cDiff"></strong></div>
      </div>
      <div class="calc-nums calc-costs">
        <div><span>Gesamtkosten</span><strong id="cCost"></strong><em id="cCostSub"></em></div>
        <div><span>Vom Beitrag</span><strong id="cShare"></strong><em id="cShareSub"></em></div>
        <div><span>Effektive Kosten</span><strong id="cEff"></strong><em id="cEffSub"></em></div>
      </div>
      <div class="calc-table-wrap">
        <table>
          <thead>
            <tr><th>Jahr</th><th>Eingezahlt</th><th>Vertrieb</th><th>Verwaltung</th><th>Guthaben</th><th>Differenz</th></tr>
          </thead>
          <tbody id="cRows"></tbody>
        </table>
      </div>
      <p class="src" id="cNote"></p>
    </div>`
  const num = (id) => Number(document.getElementById(id).value) || 0
  const draw = () => {
    const args = [num('cMonthly'), num('cRate'), num('cOnce'), num('cYears'), num('cSurplus'), num('cFee')]
    const rows = projectCalc(...args)
    const grossRows = projectCalc(...args, true)
    const last = rows[rows.length - 1]
    const listed = rows.reduce((sum, r) => sum + r.sales + r.admin, 0)
    const netReturn = customerReturn(rows)
    const grossReturn = customerReturn(grossRows)
    document.getElementById('cPaid').textContent = euro0(last.paid)
    document.getElementById('cValue').textContent = euro0(last.value)
    document.getElementById('cDiff').textContent = euro0(last.diff)
    document.getElementById('cCost').textContent = euro2(listed)
    document.getElementById('cCostSub').textContent = 'Abschluss, Vertrieb, Verwaltung'
    document.getElementById('cShare').textContent = pct(last.paid ? listed / last.paid : 0, 1)
    document.getElementById('cShareSub').textContent = `von ${euro0(last.paid)} Beitrag`
    document.getElementById('cEff').textContent = pct(grossReturn - netReturn, 2)
    document.getElementById('cEffSub').textContent = `${pct(netReturn, 2)} statt ${pct(grossReturn, 2)} im Jahr`
    const cross = rows.find(r => r.diff >= 0)
    document.getElementById('cRows').innerHTML = rows.map(r => `
      <tr class="${r.y <= 5 ? 'cost-years' : ''}">
        <td>${r.y}</td>
        <td>${euro2(r.paid)}</td>
        <td>${euro2(r.sales)}</td>
        <td>${euro2(r.admin)}</td>
        <td>${euro2(r.value)}</td>
        <td>${euro2(r.diff)}</td>
      </tr>`).join('')
    document.getElementById('cNote').textContent = (cross
      ? `Das Guthaben liegt ab Jahr ${cross.y} über dem Eingezahlten. `
      : 'In diesen Jahren bleibt das Guthaben unter dem Eingezahlten. ')
      + 'Die markierten Jahre 1 bis 5 tragen Vertriebskosten, danach bleibt die Verwaltung. Die Gesamtkosten sind diese Zeilen zusammen, gesetzt gegen den Beitrag. Die effektiven Kosten sind die Rendite, die dadurch pro Jahr fehlt. Dieselbe Rechnung wie in der Numbers-Datei.'
  }
  root.querySelectorAll('input').forEach(el => el.addEventListener('input', draw))
  draw()
}
renderCalc()

const fund = document.getElementById('fundName')
if (fund) {
  fund.value = sessionStorage.getItem('fund') || ''
  fund.addEventListener('input', () => sessionStorage.setItem('fund', fund.value))
}
