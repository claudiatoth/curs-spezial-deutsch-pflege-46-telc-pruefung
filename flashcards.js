// ============================================
// FLASHCARDS — Pflege 46: telc B1·B2 Pflege — Prüfungstraining (BONUS)
// 48 carduri în 6 categorii (8 fiecare)
// Claudia Toth · Annettes Deutschkurs · B1-B2
// ============================================

const flashcardsData = [
    // === 1. PRÜFUNGSTEILE (8) ===
    { de: "die Prüfung", ro: "🎓 examenul", audio: "audio/letters/pruefung.wav" },
    { de: "die schriftliche Prüfung", ro: "✍️ proba scrisă", audio: "audio/letters/schriftliche-pruefung.wav" },
    { de: "die mündliche Prüfung", ro: "🗣️ proba orală", audio: "audio/letters/muendliche-pruefung.wav" },
    { de: "das Zertifikat", ro: "📜 certificatul", audio: "audio/letters/zertifikat.wav" },
    { de: "bestehen", ro: "✔️ a promova / a trece", audio: "audio/letters/bestehen.wav" },
    { de: "die Aufgabe", ro: "📋 sarcina", audio: "audio/letters/aufgabe.wav" },
    { de: "der Prüfer / die Prüferin", ro: "👤 examinatorul / examinatoarea", audio: "audio/letters/pruefer.wav" },
    { de: "sich vorbereiten", ro: "📚 a se pregăti", audio: "audio/letters/sich-vorbereiten.wav" },

    // === 2. LESEN & HÖREN (8) ===
    { de: "das Leseverstehen", ro: "📖 înțelegerea textului citit", audio: "audio/letters/leseverstehen.wav" },
    { de: "das Hörverstehen", ro: "👂 înțelegerea după auz", audio: "audio/letters/hoerverstehen.wav" },
    { de: "der Text", ro: "📄 textul", audio: "audio/letters/text.wav" },
    { de: "die Frage", ro: "❓ întrebarea", audio: "audio/letters/frage.wav" },
    { de: "richtig oder falsch", ro: "✅❌ adevărat sau fals", audio: "audio/letters/richtig-falsch.wav" },
    { de: "das Schlüsselwort", ro: "🔑 cuvântul-cheie", audio: "audio/letters/schluesselwort.wav" },
    { de: "überfliegen", ro: "👀 a parcurge rapid", audio: "audio/letters/ueberfliegen.wav" },
    { de: "sich konzentrieren", ro: "🎯 a se concentra", audio: "audio/letters/sich-konzentrieren.wav" },

    // === 3. SCHREIBEN & BERICHT (8) ===
    { de: "das Schreiben", ro: "✍️ scrierea", audio: "audio/letters/schreiben.wav" },
    { de: "der Pflegebericht", ro: "📝 raportul de îngrijire", audio: "audio/letters/pflegebericht.wav" },
    { de: "der Brief", ro: "✉️ scrisoarea", audio: "audio/letters/brief.wav" },
    { de: "sachlich", ro: "📌 la obiect / obiectiv", audio: "audio/letters/sachlich.wav" },
    { de: "mitteilen", ro: "📢 a comunica / a anunța", audio: "audio/letters/mitteilen.wav" },
    { de: "Sehr geehrte Frau …", ro: "🙇 Stimată doamnă…", audio: "audio/letters/sehr-geehrte.wav" },
    { de: "Mit freundlichen Grüßen", ro: "🤝 Cu stimă", audio: "audio/letters/mit-freundlichen-gruessen.wav" },
    { de: "die Grußformel", ro: "👋 formula de salut/încheiere", audio: "audio/letters/grussformel.wav" },

    // === 4. MÜNDLICH & ÜBERGABE (8) ===
    { de: "die Übergabe", ro: "🔄 predarea turei", audio: "audio/letters/uebergabe.wav" },
    { de: "übergeben", ro: "🤲 a preda", audio: "audio/letters/uebergeben.wav" },
    { de: "der Zustand", ro: "🩺 starea", audio: "audio/letters/zustand.wav" },
    { de: "stabil", ro: "⚖️ stabil(ă)", audio: "audio/letters/stabil.wav" },
    { de: "sich vorstellen", ro: "🙋 a se prezenta", audio: "audio/letters/sich-vorstellen.wav" },
    { de: "der Fall", ro: "📂 cazul", audio: "audio/letters/fall.wav" },
    { de: "vorschlagen", ro: "💡 a propune", audio: "audio/letters/vorschlagen.wav" },
    { de: "Haben Sie noch Fragen?", ro: "❓ Mai aveți întrebări?", audio: "audio/letters/haben-sie-fragen.wav" },

    // === 5. SPRACHBAUSTEINE (8) ===
    { de: "die Sprachbausteine", ro: "🔑 gramatica de examen (completări)", audio: "audio/letters/sprachbausteine.wav" },
    { de: "der Konnektor", ro: "🔗 conectorul", audio: "audio/letters/konnektor.wav" },
    { de: "die Präposition", ro: "📍 prepoziția", audio: "audio/letters/praeposition.wav" },
    { de: "weil (+ verb la final)", ro: "↪️ pentru că", audio: "audio/letters/weil.wav" },
    { de: "deshalb (+ verb pe locul 2)", ro: "➡️ de aceea", audio: "audio/letters/deshalb.wav" },
    { de: "das Passiv (werden + Part. II)", ro: "🔧 pasivul", audio: "audio/letters/passiv.wav" },
    { de: "der Konjunktiv II (politicos)", ro: "🎩 condiționalul politicos", audio: "audio/letters/konjunktiv.wav" },
    { de: "der Genitiv (a cui?)", ro: "🧩 genitivul", audio: "audio/letters/genitiv.wav" },

    // === 6. SÄTZE (8) ===
    { de: "Ich möchte die Prüfung machen.", ro: "🎓 Vreau să dau examenul.", audio: "audio/letters/pruefung-machen.wav" },
    { de: "Ich bin gut vorbereitet.", ro: "💪 Sunt bine pregătită.", audio: "audio/letters/gut-vorbereitet.wav" },
    { de: "Der Zustand ist stabil.", ro: "🩺 Starea e stabilă.", audio: "audio/letters/zustand-stabil.wav" },
    { de: "Ich würde vorschlagen, den Arzt zu informieren.", ro: "💡 Aș propune să anunțăm medicul.", audio: "audio/letters/wuerde-vorschlagen.wav" },
    { de: "Können Sie das bitte wiederholen?", ro: "🔁 Puteți repeta, vă rog?", audio: "audio/letters/koennen-wiederholen.wav" },
    { de: "Ich habe alles dokumentiert.", ro: "📝 Am documentat totul.", audio: "audio/letters/alles-dokumentiert.wav" },
    { de: "Lies jede Aufgabe zweimal.", ro: "👀 Citește fiecare sarcină de două ori.", audio: "audio/letters/aufgabe-zweimal.wav" },
    { de: "Ich schaffe das.", ro: "🌟 Pot s-o fac. / Reușesc.", audio: "audio/letters/ich-schaffe-das.wav" }
];

let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Prüfungsteile · Lesen & Hören · Schreiben & Bericht · Mündlich & Übergabe · Sprachbausteine · Sätze.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');
    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) { audio.pause(); audio.src = card.audio; audio.load(); }
    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';
    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();
