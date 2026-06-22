# Generare WAV-uri Hedda pentru Pflege L46 - telc B1-B2 Pflege Pruefungstraining
# 10 dictat + 48 flashcards = 58 fisiere

$lessonPath = $PSScriptRoot
$audioDir = "$lessonPath\audio"
$lettersDir = "$audioDir\letters"

if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Force -Path $audioDir | Out-Null }
if (-not (Test-Path $lettersDir)) { New-Item -ItemType Directory -Force -Path $lettersDir | Out-Null }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = -1

# DICTAT (10)
$dictat = @(
    @{ file='dictat-01.wav'; text='die Pruefung.' },
    @{ file='dictat-02.wav'; text='das Leseverstehen.' },
    @{ file='dictat-03.wav'; text='der Pflegebericht.' },
    @{ file='dictat-04.wav'; text='die Uebergabe.' },
    @{ file='dictat-05.wav'; text='bestehen.' },
    @{ file='dictat-06.wav'; text='sich vorbereiten.' },
    @{ file='dictat-07.wav'; text='Ich bin gut vorbereitet.' },
    @{ file='dictat-08.wav'; text='Der Zustand ist stabil.' },
    @{ file='dictat-09.wav'; text='Ich wuerde vorschlagen, den Arzt zu informieren.' },
    @{ file='dictat-10.wav'; text='Ich schaffe das.' }
)

# FLASHCARDS (48)
$flashcards = @(
    # 1. Pruefungsteile (8)
    @{ file='pruefung.wav';               text='die Pruefung.' },
    @{ file='schriftliche-pruefung.wav';  text='die schriftliche Pruefung.' },
    @{ file='muendliche-pruefung.wav';    text='die muendliche Pruefung.' },
    @{ file='zertifikat.wav';             text='das Zertifikat.' },
    @{ file='bestehen.wav';               text='bestehen.' },
    @{ file='aufgabe.wav';                text='die Aufgabe.' },
    @{ file='pruefer.wav';                text='der Pruefer.' },
    @{ file='sich-vorbereiten.wav';       text='sich vorbereiten.' },

    # 2. Lesen & Hoeren (8)
    @{ file='leseverstehen.wav';          text='das Leseverstehen.' },
    @{ file='hoerverstehen.wav';          text='das Hoerverstehen.' },
    @{ file='text.wav';                   text='der Text.' },
    @{ file='frage.wav';                  text='die Frage.' },
    @{ file='richtig-falsch.wav';         text='richtig oder falsch.' },
    @{ file='schluesselwort.wav';         text='das Schluesselwort.' },
    @{ file='ueberfliegen.wav';           text='ueberfliegen.' },
    @{ file='sich-konzentrieren.wav';     text='sich konzentrieren.' },

    # 3. Schreiben & Bericht (8)
    @{ file='schreiben.wav';              text='das Schreiben.' },
    @{ file='pflegebericht.wav';          text='der Pflegebericht.' },
    @{ file='brief.wav';                  text='der Brief.' },
    @{ file='sachlich.wav';               text='sachlich.' },
    @{ file='mitteilen.wav';              text='mitteilen.' },
    @{ file='sehr-geehrte.wav';           text='Sehr geehrte Frau.' },
    @{ file='mit-freundlichen-gruessen.wav'; text='Mit freundlichen Gruessen.' },
    @{ file='grussformel.wav';            text='die Grussformel.' },

    # 4. Muendlich & Uebergabe (8)
    @{ file='uebergabe.wav';              text='die Uebergabe.' },
    @{ file='uebergeben.wav';             text='uebergeben.' },
    @{ file='zustand.wav';                text='der Zustand.' },
    @{ file='stabil.wav';                 text='stabil.' },
    @{ file='sich-vorstellen.wav';        text='sich vorstellen.' },
    @{ file='fall.wav';                   text='der Fall.' },
    @{ file='vorschlagen.wav';            text='vorschlagen.' },
    @{ file='haben-sie-fragen.wav';       text='Haben Sie noch Fragen?' },

    # 5. Sprachbausteine (8)
    @{ file='sprachbausteine.wav';        text='die Sprachbausteine.' },
    @{ file='konnektor.wav';              text='der Konnektor.' },
    @{ file='praeposition.wav';           text='die Praeposition.' },
    @{ file='weil.wav';                   text='weil.' },
    @{ file='deshalb.wav';                text='deshalb.' },
    @{ file='passiv.wav';                 text='das Passiv.' },
    @{ file='konjunktiv.wav';             text='der Konjunktiv Zwei.' },
    @{ file='genitiv.wav';                text='der Genitiv.' },

    # 6. Satze (8)
    @{ file='pruefung-machen.wav';        text='Ich moechte die Pruefung machen.' },
    @{ file='gut-vorbereitet.wav';        text='Ich bin gut vorbereitet.' },
    @{ file='zustand-stabil.wav';         text='Der Zustand ist stabil.' },
    @{ file='wuerde-vorschlagen.wav';     text='Ich wuerde vorschlagen, den Arzt zu informieren.' },
    @{ file='koennen-wiederholen.wav';    text='Koennen Sie das bitte wiederholen?' },
    @{ file='alles-dokumentiert.wav';     text='Ich habe alles dokumentiert.' },
    @{ file='aufgabe-zweimal.wav';        text='Lies jede Aufgabe zweimal.' },
    @{ file='ich-schaffe-das.wav';        text='Ich schaffe das.' }
)

$total = $dictat.Count + $flashcards.Count
$ok = 0; $fail = 0; $idx = 0

Write-Host "=== DICTAT ($($dictat.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dictat) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

Write-Host "=== FLASHCARDS ($($flashcards.Count)) ===" -ForegroundColor Cyan
foreach ($w in $flashcards) {
    $idx++; $wavPath = Join-Path $lettersDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: letters/$($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: letters/$($w.file)" -ForegroundColor Red }
}

$synth.Dispose()
Write-Host ""
Write-Host "TOTAL: $ok OK, $fail FAIL din $total" -ForegroundColor $(if ($fail -eq 0) { 'Green' } else { 'Yellow' })
