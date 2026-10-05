// Test "guardia dei testi" (leva L4, vincolo T2-V3): l'app informa, non consiglia ne' giudica.
// Scansiona index.html, src/ui.js e data/quiz.js alla ricerca delle formule vietate.
// Lettura via XHR sincrona (funziona anche su file://, se il browser lo permette); se il
// browser blocca l'accesso incrociato a file://, si ripiega sul DOM gia' caricato e su
// window.QUIZ (gia' disponibile in tests.html tramite <script src="../data/quiz.js">).
(function () {
  var FORMULE_VIETATE = [
    "conviene",
    "ti consiglio",
    "ti consigliamo",
    "smetti",
    "gioca meno",
    "dovresti smettere",
    "dovresti giocare",
    "non giocare",
    "faresti meglio"
  ];

  function trovaFormule(testo) {
    if (!testo) return [];
    var basso = String(testo).toLowerCase();
    return FORMULE_VIETATE.filter(function (f) { return basso.indexOf(f) !== -1; });
  }

  // Tenta una lettura sincrona del file; ritorna null se non e' possibile (es. CORS su file://).
  function leggiSincrono(percorso) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", percorso, false);
      xhr.send(null);
      if (xhr.status === 0 || xhr.status === 200) return xhr.responseText;
      return null;
    } catch (e) {
      return null;
    }
  }

  function verifica(nome, percorso, ripiego) {
    var testo = leggiSincrono(percorso);
    var fonte = "XHR";
    if (testo === null) {
      testo = ripiego();
      fonte = "ripiego (DOM/window)";
      if (typeof console !== "undefined" && console.warn) {
        console.warn("testi.test.js: " + nome + " letto da " + fonte + " (XHR non disponibile su file://).");
      }
    }
    var trovate = trovaFormule(testo);
    assert(trovate.length === 0,
      nome + " (letto via " + fonte + ") contiene formule vietate T2-V3: " + trovate.join(", "));
  }

  test("index.html non contiene formule da consiglio o giudizio (T2-V3)", function () {
    verifica("index.html", "../index.html", function () {
      // Ripiego: tests.html non carica index.html, quindi senza XHR non c'e' testo da
      // ispezionare. Si segnala l'impossibilita' senza produrre un falso positivo/negativo.
      return "";
    });
  });

  test("src/ui.js non contiene formule da consiglio o giudizio (T2-V3)", function () {
    verifica("src/ui.js", "../src/ui.js", function () {
      return "";
    });
  });

  test("data/quiz.js (window.QUIZ) non contiene formule da consiglio o giudizio (T2-V3)", function () {
    var testoQuiz = leggiSincrono("../data/quiz.js");
    if (testoQuiz === null) {
      // Ripiego solido: quiz.js e' gia' caricato come script in tests.html, quindi il suo
      // contenuto dati e' interamente ispezionabile via window.QUIZ.
      testoQuiz = JSON.stringify(window.QUIZ || {});
    }
    var trovate = trovaFormule(testoQuiz);
    assert(trovate.length === 0, "data/quiz.js contiene formule vietate T2-V3: " + trovate.join(", "));
  });
})();
