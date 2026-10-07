import gsap from 'gsap'
import './style.css'

const base = import.meta.env.BASE_URL

const slides = [
  {
    dark: true,
    html: `<p class="kicker">01 · Vorsorge</p><h1>Warum musst du vorsorgen?</h1><p class="lead">Ein Kapitel. Danach weißt du, warum Warten teuer ist.</p>`
  },
  {
    html: `<p class="kicker">Die Frage</p><h1>Wer zahlt deine Rechnung, wenn du aufhörst zu arbeiten?</h1><p class="lead">Miete, Essen, Strom hören nicht auf. Dein Gehalt schon.</p>`
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
    html: `<p class="kicker">Altersstruktur</p><h2>Die Pyramide steht auf dem Kopf.</h2>
      <div class="pyras">
        <div class="pyr">
          <i style="width:46%"></i><i style="width:62%"></i><i style="width:78%"></i><i style="width:92%"></i>
          <em>Früher · viele Junge</em>
        </div>
        <div class="pyr now">
          <i style="width:92%"></i><i style="width:84%"></i><i style="width:60%"></i><i style="width:40%"></i>
          <em>Heute · viele Ältere</em>
        </div>
      </div>
      <p class="lead">Weniger Einzahler tragen mehr Renten. Die gesetzliche Säule wird dadurch dünner, nicht dicker.</p>`
  },
  {
    html: `<p class="kicker">Drei Säulen</p><h2>Eine Säule trägt kein Dach.</h2>
      <div class="pillars">
        <div class="pillar"><div class="shaft" style="height:120px"></div><span>Gesetzlich<small>die Basis, nicht 100 %</small></span></div>
        <div class="pillar"><div class="shaft" style="height:78px"></div><span>Betrieblich<small>wenn der Job sie hat</small></span></div>
        <div class="pillar"><div class="shaft" style="height:210px"></div><span>Privat<small>die baust du selbst</small></span></div>
      </div>`
  },
  {
    example: true,
    html: `<p class="kicker">Lebensstandard</p><h2>Dein Monat bleibt. Dein Gehalt nicht.</h2>
      <div class="grid two">
        <div class="card"><b>Heute</b><p>Wohnen, Essen, Handy, Versicherung, ein Leben, das sich nach dir anfühlt. Das zahlst du vom Nettolohn.</p></div>
        <div class="card accent"><b>Später</b><p>Dieselben Rechnungen. Die gesetzliche Rente füllt sie nicht bis zum heutigen Niveau. Die Lücke schließt nur, wer selbst zurücklegt.</p></div>
      </div>
      <p class="lead">Wie? Ein fester Betrag, jeden Monat, in viele Firmen statt in ein Gefühl.</p>`
  },
  {
    dark: true,
    html: `<p class="kicker">Titanic</p><h1>Viele sind geblieben, weil das Schiff unsinkbar wirkte.</h1><p class="lead">Das Gefühl „bei mir reicht es schon“ ist das Deck, auf dem man steht, bis das Wasser kommt. Vorsorgen heißt, früher ins Boot zu steigen.</p>`
  },
  {
    dark: true,
    html: `<p class="kicker">02 · ETFs</p><h1>Warum ein ETF, und nicht Gold, Beton oder eine Münze?</h1>`
  },
  {
    html: `<p class="kicker">Alltag</p><h2>Du kaufst schon Aktien. Nur ohne Gewinn.</h2>
      <div class="grid three">
        <div class="card"><b>Handy</b><p>Eine Firma verdient an jedem Gerät in deiner Tasche.</p></div>
        <div class="card"><b>Schuhe</b><p>Eine Marke kassiert, du trägst das Produkt.</p></div>
        <div class="card"><b>Supermarkt</b><p>Ketten und Hersteller verdienen an deinem Wocheneinkauf.</p></div>
      </div>
      <p class="lead">Willst du nur zahlen, oder endlich am Konsum mitverdienen?</p>`
  },
  {
    html: `<p class="kicker">Der Unterschied</p><h2>Vier Wege. Ein Satz pro Weg.</h2>
      <div class="grid four">
        <div class="card"><b>Gold</b><p>Liegt im Tresor. Wirft von allein nichts aus.</p></div>
        <div class="card"><b>Immobilie</b><p>Ein Klumpen. Schwer zu verkaufen, viel Aufwand.</p></div>
        <div class="card"><b>Krypto</b><p>Eine Wette. Der Kurs kann hart schwanken.</p></div>
        <div class="card accent"><b>ETF</b><p>Viele Firmen. Jeden Monat. Automatisch gestreut.</p></div>
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
    html: `<p class="kicker">Diversifikation</p><h2>Ein Korb. Nicht eine Aktie.</h2>
      <p class="lead">Fällt eine Firma, tragen die anderen. Ein Welt-ETF hält hunderte Unternehmen. Du musst nicht die eine richtige Aktie erraten.</p>
      <div class="grid three">
        <div class="card"><b>1</b><p>Eine Aktie kann auf null gehen.</p></div>
        <div class="card"><b>20</b><p>Zwanzig Firmen federn einen Ausreißer ab.</p></div>
        <div class="card accent"><b>Viele</b><p>Ein ETF bündelt das in einem Kauf.</p></div>
      </div>`
  },
  {
    example: true,
    html: `<p class="kicker">Cost-Average</p><h2>Derselbe Betrag kauft mal mehr, mal weniger.</h2>
      <table>
        <thead><tr><th>Monat</th><th>Preis</th><th>100 € kaufen</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>100 €</td><td>1,00 Anteile</td></tr>
          <tr><td>2</td><td>80 €</td><td>1,25 Anteile</td></tr>
          <tr><td>3</td><td>120 €</td><td>0,83 Anteile</td></tr>
          <tr><td>4</td><td>60 €</td><td>1,67 Anteile</td></tr>
          <tr><td>5</td><td>100 €</td><td>1,00 Anteile</td></tr>
        </tbody>
      </table>
      <p class="src">500 € für 5,75 Anteile. Durchschnittlich 87 € je Anteil. Der Durchschnitt der fünf Preise liegt bei 92 €. Der günstige Monat zieht den Einstieg nach unten. Beispielzahlen, kein Kurs.</p>`
  },
  {
    dark: true,
    html: `<p class="kicker">Jetzt live</p><h1>Fondsservice öffnen.</h1>
      <p class="lead">Einen ETF zeigen. Zwei Fragen: Fühlst du dich mit der Streuung sicher? Und siehst du den Verlauf über Jahre, nicht über eine Woche?</p>`
  },
  {
    dark: true,
    html: `<p class="kicker">03 · Flexibilität</p><h1>Der Plan muss zu deinem Leben passen.</h1>`
  },
  {
    html: `<p class="kicker">Kostenrechner</p><h2>Länger als fünf Jahre.</h2>
      <p class="lead">Jetzt den Kostenrechner öffnen. Unter fünf Jahren fressen die Abschlusskosten den Aufbau. Danach arbeitet die Zeit für dich.</p>
      <div class="timeline">
        <div class="tick"><div class="dot"></div><strong>1</strong>Jahr</div>
        <div class="tick on"><div class="dot"></div><strong>5</strong>Jahre</div>
        <div class="tick on"><div class="dot"></div><strong>20</strong>Jahre</div>
        <div class="tick on"><div class="dot"></div><strong>40</strong>Jahre</div>
      </div>`
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
    html: `<p class="kicker">Partnerschaft</p><h2>Inter Miami. Messi spielt dort.</h2>
      <p class="lead">Am 17. Januar 2026 hat ERGO eine mehrjährige Partnerschaft mit Inter Miami CF bekannt gegeben. Lionel Messi ist Kapitän des Vereins. Das ist ein Sponsoring der Marke, kein Zitat für deine Rente.</p>
      <p class="src">Quelle: ERGO Medieninformation, 17. Januar 2026. Ein zweites Gesicht kommt auf diese Folie, sobald du Bild und Namen freigibst.</p>`
  },
  {
    html: `<p class="kicker">Munich Re</p><h2>Hinter ERGO steht der große Rückversicherer.</h2>
      <p class="lead">Die Münchener Rück ist alleinige Anteilseignerin der ERGO Group AG und ein Unternehmen im DAX. ERGO selbst ist nicht „der DAX“. Jemand steht hinter dem Versprechen, wenn Schäden groß werden.</p>`
  },
  {
    html: `<p class="kicker">Überschussbeteiligung</p><h2>Der Topf ist nicht starr.</h2>
      <div class="grid two">
        <div class="card"><b>Dein Fondsguthaben</b><p>Die Anteile entwickeln sich mit den Fonds, die du gewählt hast.</p></div>
        <div class="card"><b>Überschüsse</b><p>Was die Gesellschaft über das Kalkulierte hinaus erwirtschaftet, kann an den Vertrag zurückfließen. Die Höhe steht vorher nicht fest.</p></div>
      </div>`
  },
  {
    example: true,
    html: `<p class="kicker">Halbeinkünfteverfahren</p><h2>Vom Gewinn zählt die Hälfte.</h2>
      <p class="lead">Bei einer privaten Rentenversicherung kann bei einer Kapitalauszahlung nur die Hälfte der Erträge mit deinem persönlichen Satz besteuert werden. Voraussetzung sind unter anderem zwölf Jahre Laufzeit und ein Alter von 62 bei der Auszahlung.</p>
      <p class="src">Das ist Gesetzeslage, kein Geschenk von ERGO, und es gilt nur, wenn die Voraussetzungen bei dir stimmen. Kein Steuersatz auf dieser Folie. Kein Steuerersparnis-Rechner.</p>`
  },
  {
    html: `<p class="kicker">ERGO Rente Chance</p><h2>Fonds wechseln, ohne jedes Mal zu zahlen.</h2>
      <div class="grid three">
        <div class="card"><b>12×</b><p>kostenlose Fondswechsel im Jahr, für neue Beiträge und für das Guthaben.</p></div>
        <div class="card"><b>20</b><p>Fonds gleichzeitig, darunter ETFs.</p></div>
        <div class="card"><b>1×</b><p>im Jahr optional zurück auf deine ursprüngliche Mischung.</p></div>
      </div>
      <p class="src">Produktinformation ERGO Rente Chance. Tarif bestätigen, bevor du das im Gespräch als fest verkaufst.</p>`
  },
  {
    html: `<p class="kicker">Steuer</p><h2>Die Konditionen stehen im Vertrag fest.</h2>
      <p class="lead">Was für diesen Vertrag gilt, gilt für seine Laufzeit. Du spekulierst nicht jedes Jahr neu, welche Abgeltungsteuer der Gesetzgeber dem Depot gibt.</p>
      <p class="src">Gesetzesänderungen können den Rahmen verschieben. Der Satz auf der Police ist der vereinbarte Weg, kein Freibrief gegen jedes künftige Gesetz.</p>`
  },
  {
    html: `<p class="kicker">Vorabpauschale</p><h2>Im Depot kann Steuer anfallen, obwohl du nichts auszahlst.</h2>
      <div class="grid two">
        <div class="card"><b>Depot</b><p>Auf thesaurierende Fonds kann jährlich eine Vorabpauschale fällig werden. Du zahlst, ohne verkauft zu haben.</p></div>
        <div class="card accent"><b>Police</b><p>Die Fonds liegen im Vertrag. Die Vorabpauschale trifft dich in der Regel nicht jedes Jahr persönlich. Steuern kommen bei der Auszahlung, unter den Regeln der Police.</p></div>
      </div>`
  },
  {
    html: `<p class="kicker">Berater</p><h1>Jemand bleibt, wenn der Kurs laut wird.</h1><p class="lead">Ein Depot lässt dich allein mit der roten Woche. Ein Berater hält den Plan: Pause, Erhöhung, Wechsel, Durchhalten.</p>`
  },
  {
    html: `<p class="kicker">Immobilie</p><h2>Später kann aus der Police Eigenkapital werden.</h2>
      <p class="lead">Zum Wohnungskauf lässt sich angespartes Kapital auszahlen und einsetzen. Ob Auszahlung oder ein anderer Weg: das legst du fest, wenn der Kauf konkret ist.</p>
      <p class="src">Kein Kreditversprechen auf dieser Folie. Dein Satz zum genauen Mechanismus kommt noch dazu.</p>`
  },
  {
    dark: true,
    html: `<p class="kicker">05 · Du</p><h1>Warum mit mir.</h1>`
  },
  {
    html: `<p class="kicker">Ziel und Vision</p><h2>Drei Sätze von dir. Noch offen.</h2>
      <p class="lead">Hier steht, warum du dieses Gespräch führst: welches Leben du Menschen ermöglichen willst, und woran man merkt, dass der Plan hält.</p>
      <p class="src">Text und Foto schickst du. Bis dahin bleibt die Folie ehrlich leer, statt eine erfundene Biografie zu zeigen.</p>`
  },
  {
    dark: true,
    html: `<p class="kicker">Der nächste Schritt</p><h1>Beitrag. Startmonat. Haushalts-Check.</h1>
      <p class="lead">Drei Dinge, bevor wir gehen. Welcher Betrag im Monat. Wann die erste Rate läuft. Was im Haushalt schon fest ist, damit die Rate sich tragen lässt.</p>`
  }
]

const app = document.querySelector('#app')
const deck = document.createElement('div')
slides.forEach((s, i) => {
  const el = document.createElement('section')
  el.className = 'slide' + (s.dark ? ' dark' : '') + (s.photo ? ' photo' : '')
  if (s.photo) el.style.backgroundImage = `url(${base}pfand.jpg)`
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
  if (i < 8) return 'Vorsorge'
  if (i < 16) return 'ETFs'
  if (i < 19) return 'Flexibilität'
  if (i < 30) return 'Police'
  return 'Du'
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
  if (wheelLock || Math.abs(e.deltaY) < 20) return
  wheelLock = true
  show(index + (e.deltaY > 0 ? 1 : -1))
  setTimeout(() => { wheelLock = false }, 700)
}, { passive: true })

let touchX = 0
window.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX }, { passive: true })
window.addEventListener('touchend', (e) => {
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
