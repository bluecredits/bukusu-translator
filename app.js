// SPEECH RECOGNITION
function startSpeech() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";

  recognition.onresult = function(event) {
    document.getElementById("inputText").value =
      event.results[0][0].transcript;
  };

  recognition.start();
}

// TRANSLATION USING OPENAI API
async function translateText() {
  const englishText = document.getElementById("inputText").value;

  if (!englishText.trim()) {
    alert("Please type something to translate.");
    return;
  }

  const apiKey = "YOUR_OPENAI_API_KEY";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Translate English text to Bukusu dialect of Luhya." },
        { role: "user", content: englishText }
      ]
    })
  });

  const data = await response.json();
  document.getElementById("outputText").value =
    data.choices[0].message.content;
}
