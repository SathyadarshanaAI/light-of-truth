<!DOCTYPE html><html lang="si">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sathyadarshana | Light of Truth</title>
  <link rel="stylesheet" href="style.css" />
  <script type="module">
    import lang_si from './lang-si.js';
    import lang_ta from './lang-ta.js';const lang = navigator.language.startsWith('ta') ? lang_ta : lang_si;

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('welcome').innerText = lang.welcome;
  document.getElementById('ask-btn').innerText = lang.ask_question;
  document.getElementById('heal-btn').innerText = lang.spiritual_healing;
  document.getElementById('guide-btn').innerText = lang.receive_guidance;
  document.getElementById('save-btn').innerText = lang.save_to_journal;
});

  </script>
</head>
<body>
  <div class="container">
    <h1><span id="welcome">Welcome</span></h1>
    <div>
      <button id="ask-btn">Ask a Question</button>
      <button id="heal-btn">Spiritual Healing</button>
      <button id="guide-btn">Receive Guidance</button>
      <button id="save-btn">Save to Journal</button>
    </div>
  </div>
</body>
</html>
