// ============================================
// THEORY.JS — Pflege 46: telc B1·B2 Pflege — Prüfungstraining (BONUS)
// Was ist die telc + Lesen & Hören + Schreiben (Pflegebericht) + Mündlich (Übergabe) + Sprachbausteine (STAR) + Tipps & Box
// Claudia Toth · Annettes Deutschkurs · B1-B2
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>🎓 telc B1·B2 Pflege — pregătirea pentru examen</h4>
  <p>Aceasta e lecția-bonus care încununează tot cursul. <strong>telc Deutsch B1·B2 Pflege</strong> e examenul oficial de germană pentru îngrijitoare în Germania — exact pe meseria ta. Aici nu învățăm o temă nouă: <strong>antrenăm examenul</strong>. Vei vedea cum e structurat, ce ți se cere și cum folosești tot ce ai învățat în cele 45 de lecții ca să-l treci cu încredere. 💚</p>
  <p>Gramatică-vedetă: <strong>Sprachbausteine</strong> — secțiunea de gramatică a examenului, unde recapitulăm structurile-cheie din tot cursul (weil/dass/wenn, Passiv, Konjunktiv II, Genitiv, Konnektoren) așa cum apar în test.</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 6 piloni</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">🎓</div>
      <div class="pillar-title">Was ist die telc?</div>
      <div class="pillar-text">Structura examenului.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">📖</div>
      <div class="pillar-title">Lesen & Hören</div>
      <div class="pillar-text">Citit & ascultat.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">✍️</div>
      <div class="pillar-title">Schreiben</div>
      <div class="pillar-text">Pflegebericht & Brief.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🗣️</div>
      <div class="pillar-title">Mündliche Prüfung</div>
      <div class="pillar-text">Übergabe & Beratung.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🔑</div>
      <div class="pillar-title">Sprachbausteine</div>
      <div class="pillar-text">Gramatica de examen.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">💪</div>
      <div class="pillar-title">Tipps & Mut</div>
      <div class="pillar-text">Ziua examenului.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB 1 — Was ist die telc B1·B2 Pflege?
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ Was ist die telc B1·B2 Pflege? — structura examenului</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-was-telc.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para"><strong>telc Deutsch B1·B2 Pflege</strong> testează germana exact pe meseria ta. Are două părți: una <strong>scrisă</strong> (schriftlich) și una <strong>orală</strong> (mündlich). Nu trebuie să fii perfectă — trebuie să te descurci în situații reale de îngrijire.</p>

    <h5 style="color:#065f46; margin-top:18px;">🎓 Părțile examenului</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die schriftliche Prüfung</strong></td><td>proba scrisă</td></tr>
          <tr><td><strong>das Leseverstehen</strong></td><td>înțelegerea textului citit</td></tr>
          <tr><td><strong>die Sprachbausteine</strong></td><td>gramatica (completări)</td></tr>
          <tr><td><strong>das Hörverstehen</strong></td><td>înțelegerea după auz</td></tr>
          <tr><td><strong>das Schreiben · die mündliche Prüfung</strong></td><td>scrierea · proba orală</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Ce contează</h5>
      <p>📌 Examenul e pe <strong>situații de îngrijire</strong> — texte, dialoguri și sarcini din munca ta zilnică. 📌 Nivelul e <strong>B1-B2</strong>: scopul e să comunici clar, nu fără nicio greșeală. 📌 La final primești un <strong>certificat oficial</strong> recunoscut de angajatori (legat de Anerkennung, recap L44). 📌 Pregătirea cea mai bună? Ai făcut-o deja — cele 45 de lecții. Acum doar le pui cap la cap.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 2 — Leseverstehen & Hörverstehen
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Leseverstehen & Hörverstehen — citit și ascultat</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-lesen-hoeren.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">La <strong>Leseverstehen</strong> citești texte (un Dienstplan, un Beipackzettel, un e-mail, un Pflegebericht) și răspunzi la întrebări. La <strong>Hörverstehen</strong> asculți dialoguri și o predare de tură (Übergabe) și prinzi informația importantă.</p>

    <h5 style="color:#065f46; margin-top:18px;">📖 Strategii utile</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Aufgabe · die Frage</strong></td><td>sarcina · întrebarea</td></tr>
          <tr><td><strong>richtig oder falsch?</strong></td><td>adevărat sau fals?</td></tr>
          <tr><td><strong>die Schlüsselwörter</strong></td><td>cuvintele-cheie</td></tr>
          <tr><td><strong>überfliegen (textul)</strong></td><td>a parcurge rapid</td></tr>
          <tr><td><strong>einmal · zweimal hören</strong></td><td>asculți o dată · de două ori</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>📖 Cum reușești</h5>
      <p>📌 La citit: citești <strong>întâi întrebarea</strong>, apoi cauți în text — nu citești tot cuvânt cu cuvânt. 📌 Cauți <strong>Schlüsselwörter</strong> (cuvinte-cheie): nume, ore, valori, medicamente. 📌 La ascultat: te concentrezi pe <strong>cine, ce, când</strong> — exact ca la o Übergabe (recap L37). 📌 Nu te panica dacă pierzi un cuvânt — prinde ideea generală. 📌 La „richtig/falsch", atenție la cuvinte mici: <em>nicht, kein, immer, nie</em>.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 3 — Schreiben: Pflegebericht & Brief
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Schreiben — der Pflegebericht & formeller Brief</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-schreiben.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">La <strong>Schreiben</strong> scrii de obicei un <strong>Pflegebericht</strong> (raport de îngrijire) sau un <strong>mesaj/scrisoare formală</strong> (de ex. către medic sau familie). Cheia: clar, la obiect, cu fapte — exact cum ai învățat la documentație (L37).</p>

    <h5 style="color:#065f46; margin-top:18px;">✍️ Structuri pentru Schreiben</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Sehr geehrte Frau Dr. …,</strong></td><td>Stimată doamnă doctor…,</td></tr>
          <tr><td><strong>Ich möchte Ihnen mitteilen, dass …</strong></td><td>Doresc să vă comunic că…</td></tr>
          <tr><td><strong>Frau Müller gibt an, dass …</strong></td><td>Doamna Müller declară că… (recap L41)</td></tr>
          <tr><td><strong>Ich bitte Sie um …</strong></td><td>Vă rog să…</td></tr>
          <tr><td><strong>Mit freundlichen Grüßen</strong></td><td>Cu stimă</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>✍️ Cum scrii la examen</h5>
      <p>📌 <strong>Pflegebericht</strong>: sachlich (la obiect), cu Datum + Uhrzeit, fapte NU păreri (recap L37). 📌 <strong>Brief/Mail formal</strong>: salut → motivul → detalii → cerere → încheiere („Mit freundlichen Grüßen"). 📌 Folosește <strong>conectori</strong> (weil, dass, deshalb) ca textul să curgă. 📌 Atinge <strong>toate punctele</strong> cerute în sarcină — bifează-le. 📌 La final: recitește 1 minut pentru verbe la final și majuscule la substantive.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 4 — Mündliche Prüfung
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Mündliche Prüfung — Übergabe & Beratung</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-muendlich.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">La <strong>proba orală</strong> vorbești despre o situație de îngrijire: descrii un caz, faci o <strong>Übergabe</strong> (predare de tură) sau porți un dialog de consiliere. Examinatorul (der/die Prüfer/in) vrea să vadă că poți comunica clar și profesionist.</p>

    <h5 style="color:#065f46; margin-top:18px;">🗣️ Fraze pentru proba orală</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Ich möchte Ihnen Frau Müller übergeben.</strong></td><td>Doresc să v-o predau pe doamna Müller.</td></tr>
          <tr><td><strong>Der Zustand ist stabil / hat sich verändert.</strong></td><td>Starea e stabilă / s-a schimbat.</td></tr>
          <tr><td><strong>Ich würde vorschlagen, dass …</strong></td><td>Aș propune ca… (recap Konjunktiv II)</td></tr>
          <tr><td><strong>Können Sie das bitte wiederholen?</strong></td><td>Puteți repeta, vă rog? (recap L25)</td></tr>
          <tr><td><strong>Haben Sie noch Fragen?</strong></td><td>Mai aveți întrebări?</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>🗣️ Cum reușești la oral</h5>
      <p>📌 Structurează: <strong>cine, ce, de când, ce ai făcut, ce urmează</strong> — exact ca la Übergabe (L37). 📌 Vorbește <strong>clar și rar</strong>; mai bine simplu și corect decât complicat și greșit. 📌 Dacă nu înțelegi, ceri politicos repetarea („Wie bitte?", „Können Sie das wiederholen?" — L25) — asta NU e o greșeală, e profesionalism. 📌 Fii <strong>politicoasă și sigură pe tine</strong>; un zâmbet ajută. 📌 Folosește frazele exersate în cele 45 de lecții — le ai deja în tine.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 5 — GRAMATICA STAR: Sprachbausteine
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ 🌟 Gramatică — Sprachbausteine (gramatica de examen)</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-grammatik.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">La <strong>Sprachbausteine</strong> completezi cuvântul potrivit într-un text: un conector, o prepoziție, o formă de verb. E gramatica pe care ai învățat-o deja în tot cursul. Hai s-o recapitulăm — structurile-vedetă, toate la un loc.</p>

    <div class="grammar-highlight" style="background:#ecfdf5; border:2px solid #047857; border-radius:10px; padding:14px 18px; margin:14px 0;">
      <p style="margin:0; font-size:1.02rem; color:#065f46; text-align:center;">Recapitulare: <strong>conectori · prepoziții · Passiv · Konjunktiv II · Genitiv</strong></p>
      <p style="margin:6px 0 0; text-align:center; color:#047857;"><em>„Ich melde es, <strong>weil</strong> der Zustand sich verändert <strong>hat</strong>."</em></p>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🔑 Structurile-cheie (recap din tot cursul)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Structura</th><th>Exemplu</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>weil / dass / wenn</strong> (verb la final)</td><td>…, <strong>weil</strong> sie Schmerzen <strong>hat</strong>.</td></tr>
          <tr><td><strong>deshalb</strong> (verb pe locul 2)</td><td>Sie hat Fieber, <strong>deshalb rufe</strong> ich den Arzt.</td></tr>
          <tr><td><strong>Passiv</strong> (werden + Partizip II)</td><td>Die Wunde <strong>wird gereinigt</strong>.</td></tr>
          <tr><td><strong>Konjunktiv II</strong> (politicos)</td><td><strong>Könnten</strong> Sie mir helfen?</td></tr>
          <tr><td><strong>Verb + Präposition</strong></td><td>Ich kümmere mich <strong>um</strong> den Patienten.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 Capcane la Sprachbausteine</h5>
      <p>📌 La <strong>conectori</strong>: weil/dass/wenn trimit verbul la FINAL; deshalb/trotzdem îl lasă pe locul 2. <br>
      📌 La <strong>prepoziții cu caz</strong>: învață verbul + prepoziția împreună (sich kümmern <strong>um</strong>+Akk, helfen <strong>bei</strong>+Dativ — recap L38). <br>
      📌 La <strong>Passiv</strong>: <strong>werden</strong> rămâne, NU „sein"; „wird gereinigt", nu „ist gereinigt". <br>
      📌 Citește <strong>toată propoziția</strong> înainte să alegi — răspunsul depinde de context. <br>
      📌 Dacă nu ești sigură, alege ce „sună bine" din tot ce ai exersat — instinctul tău e antrenat acum.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 6 — Prüfungstipps & Mut + Box
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ Prüfungstipps & Mut — ziua examenului cu încredere 🏁</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-tipps.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Ziua examenului nu trebuie să fie un coșmar. Cu pregătire și calm, treci. Ai deja experiență reală în îngrijire și ai parcurs tot cursul — examenul doar confirmă ce știi deja.</p>

    <h5 style="color:#065f46; margin-top:18px;">💪 Regulile de aur pentru ziua examenului</h5>
    <ul style="margin: 6px 0 0 22px;">
      <li>dormi bine, mănâncă, ajungi <strong>pünktlich</strong> (recap L40)</li>
      <li>citește <strong>fiecare sarcină</strong> de două ori înainte să răspunzi</li>
      <li>la scris, atinge <strong>toate punctele</strong> cerute</li>
      <li>la oral, vorbește <strong>clar și calm</strong>; ceri repetarea dacă e nevoie</li>
      <li>nu te panica la un cuvânt necunoscut — mergi mai departe</li>
    </ul>

    <div class="capcana-box">
      <h5>🦺 Box de orientare</h5>
      <p>Această lecție te pregătește <strong>LINGVISTIC</strong> pentru examen — nu e o garanție de promovare și nu înlocuiește un curs oficial de pregătire. 📌 Te înscrii la examen DOAR la <strong>centre telc autorizate</strong> (Sprachschule, VHS, telc.net) — verifici că sunt oficiale. 🚨 Atenție la <strong>escrocherii</strong>: nimeni nu-ți poate „vinde" un certificat sau garanta promovarea contra cost — un astfel de „certificat" e fals și ilegal (recap L44). 📌 Costul examenului și datele le afli de la centrul telc; uneori există <strong>finanțare</strong> (Bildungsgutschein). 📌 E normal să fii emoționată — pregătirea bună învinge emoția.</p>
    </div>

    <div class="final-note-box">
      <h5>🌟 Cuvântul final — ai ajuns la capăt 🏁</h5>
      <p>Asta a fost. Ai parcurs tot cursul Pflege — de la primele salutări până la examen. Ai învățat să îngrijești, să vorbești, să te aperi, să crești și să respecți. Iar acum ești gata și pentru certificat. Indiferent când dai examenul, ține minte: ai venit într-o țară străină, ai învățat o limbă nouă și îngrijești oameni cu inimă. Asta e deja o reușită uriașă. „<em>Ich bin gut vorbereitet — und ich schaffe das.</em>" Sunt mândră de tine. Mergi la examen cu capul sus și cu zâmbetul tău cald. Vei reuși. 🌷💚</p>
    </div>

  </div>
</div>
`;

function buildTheory() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
}

buildTheory();
