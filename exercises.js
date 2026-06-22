// ============================================
// EXERCISES.JS — Pflege 46: telc B1·B2 Pflege — Prüfungstraining (BONUS)
// 7 exerciții × 10 itemi = 70 itemi total
// Schreiben form: forms.gle/PXxoG5W31Zi983nC8
// REGULĂ: la propoziții, răspunsul e valid CU sau FĂRĂ punct final
//   → normalizeAnswer elimină . ! ? ; : + .trim() + variante de topică în accept[]
// Claudia Toth · Annettes Deutschkurs · B1-B2
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// EX 1: Match — telc Prüfung (vocab)
const ex1Data = [
    { id: 'a', de: 'die Prüfung', accept: ['examenul', 'examen'], correct: 'examenul' },
    { id: 'b', de: 'das Leseverstehen', accept: ['intelegerea textului citit', 'cititul', 'intelegerea textului', 'lectura'], correct: 'înțelegerea textului citit' },
    { id: 'c', de: 'das Hörverstehen', accept: ['intelegerea dupa auz', 'ascultarea', 'intelegerea auditiva'], correct: 'înțelegerea după auz' },
    { id: 'd', de: 'der Pflegebericht', accept: ['raportul de ingrijire', 'raport de ingrijire', 'raportul'], correct: 'raportul de îngrijire' },
    { id: 'e', de: 'die Übergabe', accept: ['predarea turei', 'predarea', 'predare tura'], correct: 'predarea turei' },
    { id: 'f', de: 'bestehen', accept: ['a promova', 'a trece', 'a promova a trece'], correct: 'a promova / a trece' },
    { id: 'g', de: 'sachlich', accept: ['la obiect', 'obiectiv'], correct: 'la obiect / obiectiv' },
    { id: 'h', de: 'vorschlagen', accept: ['a propune'], correct: 'a propune' },
    { id: 'i', de: 'sich vorbereiten', accept: ['a se pregati', 'a se pregati'], correct: 'a se pregăti' },
    { id: 'j', de: 'das Schlüsselwort', accept: ['cuvantul cheie', 'cuvant cheie', 'cuvantul-cheie'], correct: 'cuvântul-cheie' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎓 Scrie traducerea</strong> pentru vocabularul examenului telc Pflege.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx1() { ex1Data.forEach(it => { const i = document.getElementById(`ex1-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex1-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 2: STAR — Sprachbausteine (recap gramatică de examen: Konnektoren/Passiv/Konjunktiv II/Präpositionen/Genitiv)
const ex2Data = [
    { id: 'a', sentence: 'Ich rufe den Arzt, ____ sie Fieber hat. (pentru că — verb la final)', translation: 'WEIL.', correct: 'weil', accept: ['weil'] },
    { id: 'b', sentence: 'Sie hat Fieber, ____ rufe ich den Arzt. (de aceea — verb pe locul 2)', translation: 'DESHALB.', correct: 'deshalb', accept: ['deshalb'] },
    { id: 'c', sentence: 'Die Wunde ____ gereinigt. (Passiv — auxiliarul)', translation: 'WIRD.', correct: 'wird', accept: ['wird'] },
    { id: 'd', sentence: '____ Sie mir bitte helfen? (politicos — Konjunktiv II de la können)', translation: 'KÖNNTEN.', correct: 'Könnten', accept: ['könnten', 'koennten'] },
    { id: 'e', sentence: 'Ich kümmere mich ____ den Patienten. (verb+prepoziție: sich kümmern …+Akk)', translation: 'UM.', correct: 'um', accept: ['um'] },
    { id: 'f', sentence: 'Ich glaube, ____ der Zustand stabil ist. (că — verb la final)', translation: 'DASS.', correct: 'dass', accept: ['dass'] },
    { id: 'g', sentence: 'Der Antrag muss gestellt ____. (Passiv mit Modalverb — auxiliarul la final)', translation: 'WERDEN.', correct: 'werden', accept: ['werden'] },
    { id: 'h', sentence: 'Der Zustand ____ Patientin ist gut. (Genitiv — a pacientei, feminin)', translation: 'DER.', correct: 'der', accept: ['der'] },
    { id: 'i', sentence: '____ sie stürzt, rufe ich 112. (dacă/când — verb la final)', translation: 'WENN.', correct: 'Wenn', accept: ['wenn'] },
    { id: 'j', sentence: 'Ich warte ____ den Arzt. (verb+prepoziție: warten …+Akk)', translation: 'AUF.', correct: 'auf', accept: ['auf'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌟 Sprachbausteine — gramatica de examen.</strong> Recap din tot cursul: conectori (weil/dass/wenn → verb la final; deshalb → locul 2) · Passiv (werden) · Konjunktiv II · verb+prepoziție · Genitiv.</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx2() { ex2Data.forEach(it => { const i = document.getElementById(`ex2-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex2-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 3: Audio dictat
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'die Prüfung', accept: ['die prüfung', 'prüfung', 'die pruefung', 'pruefung'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'das Leseverstehen', accept: ['das leseverstehen', 'leseverstehen'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'der Pflegebericht', accept: ['der pflegebericht', 'pflegebericht'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'die Übergabe', accept: ['die übergabe', 'übergabe', 'die uebergabe', 'uebergabe'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'bestehen', accept: ['bestehen'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'sich vorbereiten', accept: ['sich vorbereiten'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'Ich bin gut vorbereitet', accept: ['ich bin gut vorbereitet'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'Der Zustand ist stabil', accept: ['der zustand ist stabil'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'Ich würde vorschlagen, den Arzt zu informieren', accept: ['ich würde vorschlagen den arzt zu informieren', 'ich wuerde vorschlagen den arzt zu informieren'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'Ich schaffe das', accept: ['ich schaffe das'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat — vocabularul și frazele examenului.</strong></div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio><span style="color:#5A5147; font-size:0.9rem;">Ascultă și scrie:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie ce auzi..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx3() { ex3Data.forEach(it => { const i = document.getElementById(`ex3-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex3-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 4: telc Prüfung concepts
const ex4Data = [
    { id: 'a', sentence: 'Examenul = die ____', translation: 'PRÜFUNG.', correct: 'Prüfung', accept: ['prüfung', 'pruefung', 'die prüfung'] },
    { id: 'b', sentence: 'Înțelegerea textului citit = das ____', translation: 'LESEVERSTEHEN.', correct: 'Leseverstehen', accept: ['leseverstehen', 'das leseverstehen'] },
    { id: 'c', sentence: 'Înțelegerea după auz = das ____', translation: 'HÖRVERSTEHEN.', correct: 'Hörverstehen', accept: ['hörverstehen', 'hoerverstehen', 'das hörverstehen'] },
    { id: 'd', sentence: 'Raportul de îngrijire = der ____', translation: 'PFLEGEBERICHT.', correct: 'Pflegebericht', accept: ['pflegebericht', 'der pflegebericht'] },
    { id: 'e', sentence: 'Predarea turei = die ____', translation: 'ÜBERGABE.', correct: 'Übergabe', accept: ['übergabe', 'uebergabe', 'die übergabe'] },
    { id: 'f', sentence: 'Gramatica de examen (completări) = die ____', translation: 'SPRACHBAUSTEINE.', correct: 'Sprachbausteine', accept: ['sprachbausteine', 'die sprachbausteine'] },
    { id: 'g', sentence: 'A promova examenul = ____', translation: 'BESTEHEN.', correct: 'bestehen', accept: ['bestehen'] },
    { id: 'h', sentence: 'A se pregăti = sich ____', translation: 'VORBEREITEN.', correct: 'vorbereiten', accept: ['vorbereiten', 'sich vorbereiten'] },
    { id: 'i', sentence: 'La obiect / obiectiv (la Schreiben) = ____', translation: 'SACHLICH.', correct: 'sachlich', accept: ['sachlich'] },
    { id: 'j', sentence: 'A propune (la oral) = ____', translation: 'VORSCHLAGEN.', correct: 'vorschlagen', accept: ['vorschlagen'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎓 telc Prüfung.</strong> Prüfungsteile · Leseverstehen/Hörverstehen · Pflegebericht/Schreiben · Übergabe · Sprachbausteine.</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx4() { ex4Data.forEach(it => { const i = document.getElementById(`ex4-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex4-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 5: Dialog Gap-Fill (Agnesa erklärt die telc-Prüfung + Die mündliche Prüfung)
const ex5Data = [
    { id: 'a', sentence: 'Agnesa: „Wenn man sich gut vorbereitet, ____ man es." (reușești)', translation: 'SCHAFFT.', correct: 'schafft', accept: ['schafft'] },
    { id: 'b', sentence: 'Agnesa: „Es gibt einen schriftlichen und einen ____ Teil." (oral)', translation: 'MÜNDLICHEN.', correct: 'mündlichen', accept: ['mündlichen', 'muendlichen'] },
    { id: 'c', sentence: 'Agnesa: „Meistens ein ____ oder ein formeller Brief." (raport de îngrijire)', translation: 'PFLEGEBERICHT.', correct: 'Pflegebericht', accept: ['pflegebericht'] },
    { id: 'd', sentence: 'Agnesa: „Du machst eine ____ und sprichst über einen Fall." (predare de tură)', translation: 'ÜBERGABE.', correct: 'Übergabe', accept: ['übergabe', 'uebergabe'] },
    { id: 'e', sentence: 'Agnesa: „Lies jede ____ zweimal." (sarcină)', translation: 'AUFGABE.', correct: 'Aufgabe', accept: ['aufgabe'] },
    { id: 'f', sentence: 'Prüferin: „Bitte ____ Sie sich kurz vor." (prezentați-vă)', translation: 'STELLEN.', correct: 'stellen', accept: ['stellen'] },
    { id: 'g', sentence: 'Andreea: „Ich möchte Ihnen Frau Müller ____." (preda)', translation: 'ÜBERGEBEN.', correct: 'übergeben', accept: ['übergeben', 'uebergeben'] },
    { id: 'h', sentence: 'Andreea: „Der Zustand ist ____." (stabil)', translation: 'STABIL.', correct: 'stabil', accept: ['stabil'] },
    { id: 'i', sentence: 'Andreea: „Sie ____ über Rückenschmerzen." (se plânge)', translation: 'KLAGT.', correct: 'klagt', accept: ['klagt'] },
    { id: 'j', sentence: 'Andreea: „Ich habe alles ____." (documentat)', translation: 'DOKUMENTIERT.', correct: 'dokumentiert', accept: ['dokumentiert'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎬 Dialog gap-fill — Agnesa erklärt die telc-Prüfung + Die mündliche Prüfung.</strong> Structura examenului + simularea probei orale (prezentare + Übergabe).</div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx5() { ex5Data.forEach(it => { const i = document.getElementById(`ex5-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex5-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 6: Traducere RO → DE (PROPOZIȚII — punctul final NU contează; fraze de examen)
const ex6Data = [
    { id: 'a', ro: 'Vreau să dau examenul.', correct: 'Ich möchte die Prüfung machen.', accept: ['ich möchte die prüfung machen', 'ich moechte die pruefung machen'] },
    { id: 'b', ro: 'Sunt bine pregătită.', correct: 'Ich bin gut vorbereitet.', accept: ['ich bin gut vorbereitet'] },
    { id: 'c', ro: 'Starea e stabilă.', correct: 'Der Zustand ist stabil.', accept: ['der zustand ist stabil'] },
    { id: 'd', ro: 'Aș propune să anunțăm medicul.', correct: 'Ich würde vorschlagen, den Arzt zu informieren.', accept: ['ich würde vorschlagen den arzt zu informieren', 'ich wuerde vorschlagen den arzt zu informieren'] },
    { id: 'e', ro: 'Puteți repeta, vă rog?', correct: 'Können Sie das bitte wiederholen?', accept: ['können sie das bitte wiederholen', 'koennen sie das bitte wiederholen'] },
    { id: 'f', ro: 'Am documentat totul.', correct: 'Ich habe alles dokumentiert.', accept: ['ich habe alles dokumentiert'] },
    { id: 'g', ro: 'Mai aveți întrebări?', correct: 'Haben Sie noch Fragen?', accept: ['haben sie noch fragen'] },
    { id: 'h', ro: 'Doresc să v-o predau pe doamna Müller.', correct: 'Ich möchte Ihnen Frau Müller übergeben.', accept: ['ich möchte ihnen frau müller übergeben', 'ich moechte ihnen frau mueller uebergeben'] },
    { id: 'i', ro: 'Reușesc. / Pot s-o fac.', correct: 'Ich schaffe das.', accept: ['ich schaffe das'] },
    { id: 'j', ro: 'Citește fiecare sarcină de două ori.', correct: 'Lies jede Aufgabe zweimal.', accept: ['lies jede aufgabe zweimal'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong> 💡 Punctul final e <strong>opțional</strong>. Frazele utile pentru examen (scris + oral).</div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx6() { ex6Data.forEach(it => { const i = document.getElementById(`ex6-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex6-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 7: Schreiben — un mini-Pflegebericht ca la examen
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere — Ein kurzer Pflegebericht (ca la examen)</h4>
                <p>Imaginează-ți că documentezi tura de azi pentru o pacientă (reală sau imaginară), exact ca la proba de Schreiben.</p>
                <p><strong>Scrie un mini-Pflegebericht (4-6 propoziții)</strong>: starea pacientei, ce a mâncat/băut, dacă a avut dureri, ce ai făcut și ce urmează — <strong>sachlich</strong>, cu fapte. Folosește conectori (weil/dass/deshalb) și măcar o frază de raportare („Sie gibt an, dass…" / „Sie klagt über…"). Cu data și ora.</p>

                <div class="schreiben-hints">
                    <h5>💡 Structuri utile</h5>
                    <p>Datum/Uhrzeit · Der Zustand ist stabil · Sie hat gut/wenig gegessen · Sie klagt über … · Ich habe … gegeben/gemacht · Ich würde vorschlagen, den Arzt zu informieren · Mit freundlichen Grüßen (la brief).</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier deinen Pflegebericht auf Deutsch...
Beispiel:
14.06., 14:00 Uhr. Der Zustand von Frau Müller ist stabil. Sie hat gut gegessen, aber..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>14.06., 14:00 Uhr. Der Zustand von Frau Müller ist heute stabil. Sie hat gut gegessen und ausreichend getrunken. Am Nachmittag klagt sie über Rückenschmerzen. Ich habe ihr geholfen, eine bequeme Position einzunehmen, weil die Schmerzen beim Sitzen stärker wurden. Ich würde vorschlagen, den Arzt zu informieren. Alles ist dokumentiert. — A. Pop</p>
                    <p class="model-translation"><em>Traducere:</em> 14.06., ora 14:00. Starea doamnei Müller e azi stabilă. A mâncat bine și a băut suficient. După-amiaza se plânge de dureri de spate. Am ajutat-o să ia o poziție comodă, pentru că durerile se înrăutățeau la șezut. Aș propune să anunțăm medicul. Totul e documentat. — A. Pop</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/PXxoG5W31Zi983nC8" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite mesajul aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24-48 ore — corectare + sfaturi pentru examen.</p>
            </div>
        </div>
    `;
}

function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (!scoreEl) return;
    const pct = Math.round((result.correct / result.total) * 100);
    let emoji = '💪', msg = 'Mai exersează!';
    if (pct === 100) { emoji = '🏆'; msg = 'Perfect!'; }
    else if (pct >= 80) { emoji = '⭐'; msg = 'Foarte bine!'; }
    else if (pct >= 60) { emoji = '👍'; msg = 'Bine!'; }
    else if (pct >= 40) { emoji = '📚'; msg = 'Continuă!'; }
    scoreEl.className = 'score show';
    scoreEl.innerHTML = `<div class="score-value">${emoji} ${result.correct}/${result.total} (${pct}%)</div><div class="score-message">${msg}</div>`;
}

function resetExercise(n) {
    const resetters = { 1: resetEx1, 2: resetEx2, 3: resetEx3, 4: resetEx4, 5: resetEx5, 6: resetEx6 };
    if (resetters[n]) resetters[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.className = 'score'; scoreEl.innerHTML = ''; }
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = event.currentTarget;
    if (!audio || !btn) return;
    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause(); btn.textContent = '▶';
    }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
