// ============================================
// FINAL TEST — Pflege 46: telc B1·B2 Pflege — Prüfungstraining (BONUS)
// 25 întrebări × 5 categorii
// normalizeAnswerFT elimină . ! ? ; : + .trim() → la propoziții punctul final NU contează
// Claudia Toth · Annettes Deutschkurs · B1-B2
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

const finalTestData = [
    // === 1. PRÜFUNGSTEILE (5) ===
    { id: 1, category: 'Prüfungsteile', type: 'fill', question: 'Examenul = die ____', correct: 'Prüfung', accept: ['prüfung', 'pruefung'] },
    { id: 2, category: 'Prüfungsteile', type: 'mc', question: 'Din ce e formată telc B1·B2 Pflege?', options: ['Doar oral', 'O parte scrisă (schriftlich) + o parte orală (mündlich)', 'Doar un test grilă', 'Doar un interviu'], correctIndex: 1, correct: 'Schriftlich + mündlich' },
    { id: 3, category: 'Prüfungsteile', type: 'fill', question: 'A promova (examenul) = ____', correct: 'bestehen', accept: ['bestehen'] },
    { id: 4, category: 'Prüfungsteile', type: 'mc', question: 'Care e cea mai bună pregătire pentru examen?', options: ['Nimic, te descurci pe loc', 'Cele 45 de lecții pe care le-ai făcut deja + exersare', 'Doar memorezi răspunsuri', 'Eviți examenul'], correctIndex: 1, correct: 'Lecțiile + exersare' },
    { id: 5, category: 'Prüfungsteile', type: 'fill', question: 'A se pregăti = sich ____', correct: 'vorbereiten', accept: ['vorbereiten'] },

    // === 2. LESEN & HÖREN (5) ===
    { id: 6, category: 'Lesen & Hören', type: 'fill', question: 'Înțelegerea textului citit = das ____', correct: 'Leseverstehen', accept: ['leseverstehen'] },
    { id: 7, category: 'Lesen & Hören', type: 'fill', question: 'Înțelegerea după auz = das ____', correct: 'Hörverstehen', accept: ['hörverstehen', 'hoerverstehen'] },
    { id: 8, category: 'Lesen & Hören', type: 'mc', question: 'Cum reușești la Leseverstehen?', options: ['Citești tot cuvânt cu cuvânt', 'Citești întâi întrebarea, apoi cauți cuvintele-cheie în text', 'Ghicești fără să citești', 'Sari peste text'], correctIndex: 1, correct: 'Întrebarea întâi + cuvinte-cheie' },
    { id: 9, category: 'Lesen & Hören', type: 'fill', question: 'Cuvântul-cheie = das ____', correct: 'Schlüsselwort', accept: ['schlüsselwort', 'schluesselwort'] },
    { id: 10, category: 'Lesen & Hören', type: 'mc', question: 'La „richtig/falsch", la ce cuvinte mici ești atentă?', options: ['La nimic', 'La nicht, kein, immer, nie', 'Doar la nume', 'Doar la cifre'], correctIndex: 1, correct: 'nicht, kein, immer, nie' },

    // === 3. SCHREIBEN & MÜNDLICH (5) ===
    { id: 11, category: 'Schreiben & Mündlich', type: 'fill', question: 'Raportul de îngrijire = der ____', correct: 'Pflegebericht', accept: ['pflegebericht'] },
    { id: 12, category: 'Schreiben & Mündlich', type: 'mc', question: 'Cum scrii un Pflegebericht?', options: ['Cu păreri și emoții', 'Sachlich (fapte), cu Datum + Uhrzeit', 'Cât mai lung posibil', 'Fără structură'], correctIndex: 1, correct: 'Sachlich, cu data + ora' },
    { id: 13, category: 'Schreiben & Mündlich', type: 'fill', question: 'Predarea turei (la oral) = die ____', correct: 'Übergabe', accept: ['übergabe', 'uebergabe'] },
    { id: 14, category: 'Schreiben & Mündlich', type: 'mc', question: 'La oral nu înțelegi o întrebare. Ce faci?', options: ['Te prefaci că ai înțeles', 'Ceri politicos repetarea: „Können Sie das wiederholen?"', 'Taci', 'Pleci'], correctIndex: 1, correct: 'Ceri repetarea politicos' },
    { id: 15, category: 'Schreiben & Mündlich', type: 'fill', question: 'Încheierea unei scrisori formale = Mit freundlichen ____', correct: 'Grüßen', accept: ['grüßen', 'gruessen', 'grüssen'] },

    // === 4. SPRACHBAUSTEINE (5) ===
    { id: 16, category: 'Sprachbausteine', type: 'fill', question: '„Ich rufe den Arzt, ____ sie Fieber hat." (pentru că — verb la final)', correct: 'weil', accept: ['weil'] },
    { id: 17, category: 'Sprachbausteine', type: 'fill', question: '„Die Wunde ____ gereinigt." (Passiv — auxiliarul)', correct: 'wird', accept: ['wird'] },
    { id: 18, category: 'Sprachbausteine', type: 'fill', question: '„Ich kümmere mich ____ den Patienten." (sich kümmern …+Akk)', correct: 'um', accept: ['um'] },
    { id: 19, category: 'Sprachbausteine', type: 'mc', question: 'După „weil", „dass", „wenn", unde stă verbul?', options: ['Pe locul 2', 'La FINAL', 'Primul', 'Nu contează'], correctIndex: 1, correct: 'La final' },
    { id: 20, category: 'Sprachbausteine', type: 'fill', question: '„Sie hat Fieber, ____ rufe ich den Arzt." (de aceea — verb pe locul 2)', correct: 'deshalb', accept: ['deshalb'] },

    // === 5. TRADUCERE + SITUAȚII (5) ===
    { id: 21, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Sunt bine pregătită." → 🇩🇪 ?', correct: 'Ich bin gut vorbereitet.', accept: ['ich bin gut vorbereitet'] },
    { id: 22, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Starea e stabilă." → 🇩🇪 ?', correct: 'Der Zustand ist stabil.', accept: ['der zustand ist stabil'] },
    { id: 23, category: 'Traducere + Situații', type: 'mc', question: '⚠️ Cineva îți „vinde" un certificat telc contra cost, fără examen. Ce faci?', options: ['Plătești, e mai rapid', 'Refuzi — e fals și ilegal; te înscrii la un centru telc autorizat', 'Dai mai mulți bani', 'Nu spui nimănui'], correctIndex: 1, correct: 'Refuzi — e fals/ilegal' },
    { id: 24, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Reușesc. / Pot s-o fac." → 🇩🇪 ?', correct: 'Ich schaffe das.', accept: ['ich schaffe das'] },
    { id: 25, category: 'Traducere + Situații', type: 'mc', question: '🌟 Ziua examenului. Care e atitudinea bună?', options: ['Panică totală', 'Calm + pregătire: citești sarcinile de 2 ori, vorbești clar, nu te panichezi la un cuvânt', 'Renunți', 'Vorbești cât mai complicat'], correctIndex: 1, correct: 'Calm + pregătire' }
];

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Prüfungsteile · Lesen & Hören · Schreiben & Mündlich · Sprachbausteine · Traducere+Situații</strong></p>
        </div>
        <div id="ft-questions">`;
    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;
        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }
        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });
    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>`;
    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;
        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }
        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });
    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;
    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! Ești gata pentru examenul telc. Succes! 🍀`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine!`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();
