const textareaEl = document.querySelector(".textarea");
const textToSpeechBtnEl = document.querySelector(".textToSpeechBtn");
const speakerIconEl = document.querySelector(".speakerIcon");

let synth = window.speechSynthesis;
let utterance;
let isPaused = false;
let isSpeaking = false;

const textToSpeech = () => {
  const text = textareaEl.value.trim();

  if (!text) return;

  // If not speaking, start speech
  if (!isSpeaking) {
    utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
    isSpeaking = true;

    textToSpeechBtnEl.innerText = "Pause";
    speakerIconEl.innerHTML = "&#128266;";

    utterance.onend = () => {
      textToSpeechBtnEl.innerText = "Text to Speech";
      speakerIconEl.innerHTML = "&#128264;";
      isSpeaking = false;
      isPaused = false;
    };
  } else if (synth.speaking && !synth.paused) {
    // If speaking, pause
    synth.pause();
    textToSpeechBtnEl.innerText = "Resume";
    speakerIconEl.innerHTML = "&#128264;";
    isPaused = true;
  } else if (synth.paused) {
    // If paused, resume
    synth.resume();
    textToSpeechBtnEl.innerText = "Pause";
    speakerIconEl.innerHTML = "&#128266;";
    isPaused = false;
  }
};

textToSpeechBtnEl.addEventListener("click", textToSpeech);
