// ============================================
// DIALOGS.JS — Pflege 46: telc B1·B2 Pflege — Prüfungstraining (BONUS)
// 2 dialoguri (Agnesa erklärt die telc-Prüfung + Die mündliche Prüfung)
// Personaje: Andreea + Frau Sommer (👔 aici ca Prüferin, reuse petrol #0e7490) + Agnesa (👩‍🦰 colega/mentor, reuse amber #b45309)
// Claudia Toth · Annettes Deutschkurs · B1-B2
// ============================================

// ============================================
// DIALOG 1: „Agnesa erklärt die telc-Prüfung" — Andreea + Agnesa (mentor)
// 10 replici, ~50 sec — Agnesa a promovat examenul și explică structura + sfaturi
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Agnesa erklärt die telc-Prüfung',
    context: 'Andreea vrea să dea examenul telc B1·B2 Pflege. Agnesa, care l-a promovat, îi explică structura (schriftlich + mündlich) și îi dă sfaturi. O încurajează: „Glaub an dich — du kannst das!".',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 50,
    replici: [
        { id: 1, speaker: 'andreea', start: 0,  duration: 5, de: 'Agnesa, ich möchte die telc-Prüfung machen. War sie schwer?', ro: 'Agnesa, vreau să dau examenul telc. A fost greu?' },
        { id: 2, speaker: 'agnesa',  start: 5,  duration: 5, de: 'Es geht. Wenn man sich gut vorbereitet, schafft man es.', ro: 'Merge. Dacă te pregătești bine, reușești.' },
        { id: 3, speaker: 'andreea', start: 10, duration: 4, de: 'Wie ist die Prüfung aufgebaut?', ro: 'Cum e structurat examenul?' },
        { id: 4, speaker: 'agnesa',  start: 14, duration: 6, de: 'Es gibt einen schriftlichen und einen mündlichen Teil.', ro: 'Are o parte scrisă și una orală.' },
        { id: 5, speaker: 'andreea', start: 20, duration: 4, de: 'Und was kommt beim Schreiben?', ro: 'Și ce vine la scris?' },
        { id: 6, speaker: 'agnesa',  start: 24, duration: 6, de: 'Meistens ein Pflegebericht oder ein formeller Brief.', ro: 'De obicei un raport de îngrijire sau o scrisoare formală.' },
        { id: 7, speaker: 'andreea', start: 30, duration: 6, de: 'Das habe ich schon geübt. Und der mündliche Teil?', ro: 'Asta am exersat deja. Și partea orală?' },
        { id: 8, speaker: 'agnesa',  start: 36, duration: 6, de: 'Du machst eine Übergabe und sprichst über einen Fall. Bleib ruhig!', ro: 'Faci o predare de tură și vorbești despre un caz. Rămâi calmă!' },
        { id: 9, speaker: 'andreea', start: 42, duration: 3, de: 'Hast du noch einen Tipp?', ro: 'Mai ai un sfat?' },
        { id: 10, speaker: 'agnesa', start: 45, duration: 6, de: 'Lies jede Aufgabe zweimal. Und glaub an dich — du kannst das!', ro: 'Citește fiecare sarcină de două ori. Și crede în tine — poți!' }
    ]
};

// ============================================
// DIALOG 2: „Die mündliche Prüfung" — Andreea + Frau Sommer (Prüferin)
// 10 replici, ~52 sec — simulare a probei orale: prezentare + Übergabe + caz
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'Die mündliche Prüfung',
    context: 'Simulare a probei orale telc. Frau Sommer joacă rolul de Prüferin (examinatoare). Andreea se prezintă, face o Übergabe a doamnei Müller și raportează un caz, folosind frazele exersate în tot cursul (Übergabe L37, „Ich würde vorschlagen…" Konjunktiv II, „klagt über…" L41).',
    audioFile: 'audio/dialog-02.mp3',
    totalDuration: 52,
    replici: [
        { id: 1, speaker: 'sommer',  start: 0,  duration: 5, de: 'Guten Tag, Frau Pop. Bitte stellen Sie sich kurz vor.', ro: 'Bună ziua, doamnă Pop. Vă rog prezentați-vă pe scurt.' },
        { id: 2, speaker: 'andreea', start: 5,  duration: 5, de: 'Guten Tag. Ich bin Andreea, ich arbeite als Pflegekraft.', ro: 'Bună ziua. Sunt Andreea, lucrez ca îngrijitoare.' },
        { id: 3, speaker: 'sommer',  start: 10, duration: 4, de: 'Gut. Bitte übergeben Sie mir eine Patientin.', ro: 'Bine. Vă rog predați-mi o pacientă.' },
        { id: 4, speaker: 'andreea', start: 14, duration: 5, de: 'Gern. Ich möchte Ihnen Frau Müller übergeben.', ro: 'Cu plăcere. Doresc să v-o predau pe doamna Müller.' },
        { id: 5, speaker: 'sommer',  start: 19, duration: 3, de: 'Wie ist ihr Zustand?', ro: 'Care e starea ei?' },
        { id: 6, speaker: 'andreea', start: 22, duration: 6, de: 'Der Zustand ist stabil. Sie hat heute gut gegessen.', ro: 'Starea e stabilă. Azi a mâncat bine.' },
        { id: 7, speaker: 'sommer',  start: 28, duration: 4, de: 'Gibt es etwas Besonderes?', ro: 'E ceva deosebit?' },
        { id: 8, speaker: 'andreea', start: 32, duration: 7, de: 'Ja. Sie klagt über Rückenschmerzen. Ich würde vorschlagen, den Arzt zu informieren.', ro: 'Da. Se plânge de dureri de spate. Aș propune să anunțăm medicul.' },
        { id: 9, speaker: 'sommer',  start: 39, duration: 5, de: 'Sehr gut. Haben Sie noch Fragen?', ro: 'Foarte bine. Mai aveți întrebări?' },
        { id: 10, speaker: 'andreea', start: 44, duration: 6, de: 'Nein, danke. Ich habe alles dokumentiert.', ro: 'Nu, mulțumesc. Am documentat totul.' }
    ]
};

// ============================================
// BUILD DIALOG FUNCTION
// ============================================
function buildDialog(dialogData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
        <div class="dialog-container">
            <div class="dialog-context">${dialogData.context}</div>

            <div class="dialog-audio-player">
                <button class="audio-btn dialog-play-btn" id="btn-${dialogData.id}-audio" onclick="toggleDialogAudio('${dialogData.id}')">▶</button>
                <audio id="${dialogData.id}-audio" preload="metadata"><source src="${dialogData.audioFile}" type="audio/mpeg"></audio>
                <span class="dialog-time" id="${dialogData.id}-time">0:00 / ${formatDialogTime(dialogData.totalDuration)}</span>
                <span class="dialog-hint">▶ Ascultă tot dialogul (${dialogData.totalDuration}s)</span>
            </div>

            <div class="dialog-replici">`;

    dialogData.replici.forEach((r, i) => {
        let speakerClass, speakerName, avatarContent, speechClass;

        if (r.speaker === 'andreea') {
            speakerClass = 'character-andreea';
            speakerName = 'Andreea';
            avatarContent = '<img src="images/andreea.png" alt="Andreea">';
            speechClass = 'speech-andreea';
        } else if (r.speaker === 'agnesa') {
            speakerClass = 'character-agnesa';
            speakerName = 'Agnesa';
            avatarContent = '<span class="face">👩‍🦰</span>';
            speechClass = 'speech-agnesa';
        } else if (r.speaker === 'sommer') {
            speakerClass = 'character-sommer';
            speakerName = 'Frau Sommer';
            avatarContent = '<span class="face">👔</span>';
            speechClass = 'speech-sommer';
        }

        const isEmojiAvatar = ['agnesa', 'sommer'].includes(r.speaker);

        html += `
            <div class="dialog-reply ${speakerClass}" id="${dialogData.id}-reply-${r.id}" data-start="${r.start}" data-duration="${r.duration}">
                <div class="character-avatar ${isEmojiAvatar ? r.speaker + '-avatar' : ''}">${avatarContent}</div>
                <div class="speech-bubble ${speechClass}">
                    <div class="speaker-name speaker-${r.speaker}">${i + 1}. ${speakerName}</div>
                    <div class="speech-de">🇩🇪 ${r.de}</div>
                    <div class="speech-ro">🇷🇴 ${r.ro}</div>
                </div>
            </div>`;
    });

    html += `
            </div>
        </div>`;

    container.innerHTML = html;
}

function formatDialogTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
}

function toggleDialogAudio(dialogId) {
    const audio = document.getElementById(`${dialogId}-audio`);
    const btn = document.getElementById(`btn-${dialogId}-audio`);
    if (!audio || !btn) return;

    ['dialog1', 'dialog2'].forEach(other => {
        if (other !== dialogId) {
            const otherAudio = document.getElementById(`${other}-audio`);
            const otherBtn = document.getElementById(`btn-${other}-audio`);
            if (otherAudio && !otherAudio.paused) {
                otherAudio.pause();
                if (otherBtn) otherBtn.textContent = '▶';
            }
        }
    });

    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}

function initDialogSync(dialogData) {
    const audio = document.getElementById(`${dialogData.id}-audio`);
    if (!audio) return;

    const timeEl = document.getElementById(`${dialogData.id}-time`);

    audio.addEventListener('timeupdate', () => {
        const t = audio.currentTime;
        if (timeEl) timeEl.textContent = `${formatDialogTime(t)} / ${formatDialogTime(audio.duration || dialogData.totalDuration)}`;

        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (!el) return;
            const isActive = t >= r.start && t < r.start + r.duration;
            el.classList.toggle('active-reply', isActive);
        });
    });

    audio.addEventListener('ended', () => {
        const btn = document.getElementById(`btn-${dialogData.id}-audio`);
        if (btn) btn.textContent = '▶';
        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (el) el.classList.remove('active-reply');
        });
    });
}

buildDialog(dialog1Data, 'dialog1-container');
buildDialog(dialog2Data, 'dialog2-container');

if (document.readyState !== 'loading') {
    initDialogSync(dialog1Data);
    initDialogSync(dialog2Data);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        initDialogSync(dialog1Data);
        initDialogSync(dialog2Data);
    });
}
