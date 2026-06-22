// ============================================
// PDF BUILDER — Pflege L46: telc B1·B2 Pflege — Prüfungstraining (BONUS)
// Claudia Toth · Annettes Deutschkurs · B1-B2
// ============================================
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildPflegeWarn() + buildCast() + buildTheory() + buildDialogs() + buildExercises() + buildFlashcards();
    }

    function buildPflegeWarn() {
        return `<div class="pflege-warn">
            <h4>⚖️ Notă de orientare — citește înainte</h4>
            <p>Această lecție te pregătește <strong>LINGVISTIC</strong> pentru examen — nu e o garanție de promovare și nu înlocuiește un curs oficial. 📌 Te înscrii DOAR la <strong>centre telc autorizate</strong> (Sprachschule, VHS, telc.net). 🚨 Atenție la escrocherii: nimeni nu-ți poate „vinde" un certificat sau garanta promovarea contra cost — un astfel de „certificat" e fals și ilegal. 📌 Costul și datele le afli de la centrul telc; uneori există finanțare (Bildungsgutschein). 📌 E normal să fii emoționată — pregătirea bună învinge emoția. 💚 Tu poți.</p>
        </div>`;
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" · Agnesa îi explică Andreei examenul telc B1·B2 Pflege; Frau Sommer joacă rolul de Prüferin la simularea probei orale</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Pflegerin · se pregătește de examen</div></div>
                <div class="cast-card"><div class="agnesa-pdf-avatar">👩‍🦰</div><div class="name">Agnesa</div><div class="detail">Colegă · a promovat telc, dă sfaturi</div></div>
                <div class="cast-card"><div class="sommer-pdf-avatar">👔</div><div class="name">Frau Sommer</div><div class="detail">Prüferin · simulare probă orală</div></div>
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<audio[^>]*>[\s\S]*?<\/audio>/g, '');
        t = t.replace(/<div class="subsection-header"[^>]*>\s*<h4>([^<]+)<\/h4>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="subsection">/g, '<div class="theory-box">');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="capcana-box">/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="grammar-tip">/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="final-note-box">/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter new-section">📘 1. Teorie — Was ist die telc? + Lesen & Hören + Schreiben (Pflegebericht) + Mündliche Prüfung + Sprachbausteine + Tipps</h1>` + t;
    }

    function buildDialogs() {
        let html = `<h1 class="chapter new-section">🎬 2. Dialoguri — Agnesa erklärt die telc-Prüfung + Die mündliche Prüfung</h1>`;
        [dialog1Data, dialog2Data].forEach((d, idx) => {
            if (!d) return;
            html += `<div class="ex-block">
                <h3>${idx === 0 ? 'Dialog 1' : 'Dialog 2'}: „${d.title}"</h3>
                <div class="instruction">${d.context}</div>
                <div class="dialog-pdf-card">`;
            d.replici.forEach((r, ri) => {
                let spkrName;
                if (r.speaker === 'andreea') spkrName = '🧑‍⚕️ Andreea';
                else if (r.speaker === 'agnesa') spkrName = '👩‍🦰 Agnesa';
                else if (r.speaker === 'sommer') spkrName = '👔 Frau Sommer (Prüferin)';
                html += `<div class="reply"><span class="spkr">${ri + 1}. ${spkrName}:</span> <span class="de"> ${r.de}</span><br><span class="ro">🇷🇴 ${r.ro}</span></div>`;
            });
            html += `</div></div>`;
        });
        return html;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 3. Exerciții — cu rezolvări complete</h1>`;

        if (typeof ex1Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 1: Match — telc Prüfung</h3>
                <div class="instruction">Pentru fiecare cuvânt, scrii traducerea în RO.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:42%">🇩🇪 Germană</th><th>🇷🇴 Română</th></tr></thead><tbody>`;
            ex1Data.forEach((it, i) => {
                html += `<tr><td class="verb">${i + 1}. ${it.de}</td><td class="ro-text">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        if (typeof ex2Data !== 'undefined') html += fillInBlock('Übung 2: 🌟 Sprachbausteine (gramatica de examen)', 'Recap din tot cursul: conectori (weil/dass/wenn → verb la final; deshalb → locul 2) · Passiv (werden) · Konjunktiv II · verb+prepoziție · Genitiv.', ex2Data);
        if (typeof ex4Data !== 'undefined') html += fillInBlock('Übung 4: telc Prüfung — Begriffe', 'Prüfungsteile · Leseverstehen/Hörverstehen · Pflegebericht/Schreiben · Übergabe · Sprachbausteine.', ex4Data);
        if (typeof ex5Data !== 'undefined') html += fillInBlock('Übung 5: Dialog Gap-Fill — telc erklärt mit Agnesa & mündliche Prüfung', 'Completează replicile lipsă: structura examenului + simularea probei orale (prezentare + Übergabe).', ex5Data);

        if (typeof ex3Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 3: Audio Dictat — vocabularul & frazele examenului</h3>
                <div class="instruction">Ascultă și scrie ce auzi. (Audio disponibil online.)</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex3Data.forEach((it, i) => {
                html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-a">${it.correct}</div></div></div>`;
            });
            html += `</div>`;
        }

        if (typeof ex6Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 6: Traducere RO → DE</h3>
                <div class="instruction">Scrie frazele utile pentru examen (scris + oral). Punctul final e opțional.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:42%">🇷🇴 Română</th><th>🇩🇪 Germană</th></tr></thead><tbody>`;
            ex6Data.forEach((it, i) => {
                html += `<tr><td class="ro-text">${i + 1}. ${it.ro}</td><td class="verb">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        html += `<div class="ex-block"><h3>✍️ Übung 7: Schreiben — Ein Pflegebericht (ca la examen)</h3>
            <div class="instruction">Documentează tura de azi pentru o pacientă, ca la proba de Schreiben. Scrie 4-6 propoziții sachlich (cu fapte): starea, ce a mâncat/băut, dureri, ce ai făcut, ce urmează. Folosește conectori (weil/dass/deshalb) și o frază de raportare („Sie klagt über…"). Cu data și ora.</div>
            <div class="rezolvare-banner">📝 Model de răspuns</div>
            <p><em>14.06., 14:00 Uhr. Der Zustand von Frau Müller ist heute stabil. Sie hat gut gegessen und ausreichend getrunken. Am Nachmittag klagt sie über Rückenschmerzen. Ich habe ihr geholfen, eine bequeme Position einzunehmen, weil die Schmerzen beim Sitzen stärker wurden. Ich würde vorschlagen, den Arzt zu informieren. Alles ist dokumentiert. — A. Pop</em></p>
            <p class="ro-translation">🇷🇴 14.06., ora 14:00. Starea doamnei Müller e azi stabilă. A mâncat bine și a băut suficient. După-amiaza se plânge de dureri de spate. Am ajutat-o să ia o poziție comodă, pentru că durerile se înrăutățeau la șezut. Aș propune să anunțăm medicul. Totul e documentat. — A. Pop</p>
            </div>`;

        return html;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            const filled = it.sentence.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 4. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> grupate pe 6 categorii: Prüfungsteile · Lesen & Hören · Schreiben & Bericht · Mündlich & Übergabe · Sprachbausteine · Sätze.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }
})();
