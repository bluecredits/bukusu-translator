// Speech Recognition
function startSpeech() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";

  recognition.onresult = function(event) {
    document.getElementById("inputText").value =
      event.results[0][0].transcript;
  };

  recognition.start();
}

// Translation via Netlify Function
async function translateText() {
  const englishText = document.getElementById("inputText").value;

  const response = await fetch("/.netlify/functions/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: englishText })
  });

  const data = await response.json();

  document.getElementById("outputText").value =
    data.choices[0].message.content;
}
