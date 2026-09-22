(function(){
  const WORDS = [
    ["BRASIL","Fica na América do Sul e é famoso pelo Carnaval e futebol."],
    ["JAPÃO","Tem o Monte Fuji e é conhecido pelos samurais."],    
    ["FRANÇA","Tem a Torre Eiffel e a capital é Paris."],    
    ["ESTADOS UNIDOS","Tem Hollywood e a Estátua da Liberdade."],    
    ["ITÁLIA","É famoso pela pizza, massas e pelo Coliseu."],
    ["AUSTRÁLIA","É conhecido pelos cangurus e pela Grande Barreira de Corais."],
    ["EGITO","É famoso pelas pirâmides de Gizé."],   
    ["CANADÁ","Sua bandeira possui uma folha de bordo."],    
    ["MÉXICO","É famoso pelos tacos e pelas antigas civilizações astecas."],    
    ["ALEMANHA","É conhecido pela Oktoberfest e pelos carros alemães."],    
    ["PORTUGAL","Fala português e tem Lisboa como capital."],    
    ["ARGENTINA","É famoso pelo tango e pelo futebol."],    
    ["CHINA","Possui a Grande Muralha e uma enorme população."],
    ["ÍNDIA","Tem o Taj Mahal e fica no sul da Ásia."],
    ["PEINO UNIDO","Tem Londres como capital e o Big Ben."],
    ["ESPANHA","É famoso pela paella, flamenco e Barcelona."],
    ["CRÉCIA","É conhecido pela história antiga e pela Acrópole de Atenas."],
    ["RÚSSIA","É o maior país do mundo em território."],
    ["COREIA DO SUL","É conhecido pelo K-pop e pela tecnologia."],
    ["TURQUIA","Fica entre a Europa e a Ásia e tem Istambul."],
    ["ÁFRICA DO SUL","Tem três capitais e fica no extremo sul da África."],
    ["CHILE","É um país longo e estreito na costa oeste da América do Sul."],
    ["PERU","É conhecido por Machu Picchu."],
    ["COLÔMBIA","É famoso pelo café e fica na América do Sul."],
    ["URUGUAI","É vizinho do Brasil e da Argentina."],
    ["PARAGUAI","É um país da América do Sul que não possui litoral."],
    ["BOLÍVIA","É conhecido pelo Salar de Uyuni."],
    ["EQUADOR","É atravessado pela Linha do Equador."],
    ["VENEZUELA","É conhecido pela grande queda-d'água chamada Salto Ángel."],
    ["GUIANA","Fica na América do Sul e sua língua oficial é o inglês."],
    ["SURINAME","Fica na América do Sul e fala neerlandês."],
    ["IRLANDA","É conhecido pela cor verde e pelos trevos."],
    ["PAÍSES BAIXOS","É famoso pelos moinhos de vento e tulipas."],
    ["SUÍÇA","É famoso pelos Alpes, chocolates e relógios."],
    ["ÁUSTRIA","Tem Viena como capital e faz parte da região dos Alpes."],
    ["BÉLGICA","É famoso pelos chocolates, waffles e pela cidade de Bruxelas."],  ["NORUEGA","É conhecido pelos fiordes e fica no norte da Europa."],    ["SUÉCIA","É um país escandinavo e tem Estocolmo como capital."],    ["FINLÂNDIA","É conhecido pelas saunas e fica no norte da Europa."],    ["DINAMARCA","É um país escandinavo e sua capital é Copenhague."],    ["ISLÂNDIA","É conhecido pelos vulcões, geleiras e águas termais."],    ["POLÔNIA","Tem Varsóvia como capital e fica na Europa Central."],    ["UCRÂNIA","Tem Kyiv como capital e fica no leste europeu."],
    ["HUNGRIA","Sua capital é Budapeste."],
    ["REPÚBLICA TCHECA","Sua capital é Praga."],    
    ["ROMÊNIA","É conhecido pela região da Transilvânia."],    
    ["BULGÁRIA","Sua capital é Sófia e fica no sudeste da Europa."],    
    ["CROÁCIA","É conhecido pela costa do Mar Adriático."],
    ["SÉRVIA","Sua capital é Belgrado."],
    ["ESLOVÊNIA","É um pequeno país europeu conhecido pelo Lago Bled."],
    ["MARROCOS","Fica no norte da África e é famoso por seus mercados e pelo   deserto."],
    ["ARGÉLIA","É o maior país da África em território."], 
    ["TURNÍSIA","Fica no norte da África e tem Cartago em sua história."],
    ["QUÊNIA","É conhecido pelos safáris e pela vida selvagem."],
    ["ETIÓPIA","É um dos países mais antigos da África e sua capital é Adis Abeba."],
    ["NIGÉRIA","É o país mais populoso da África."],
    ["GANA","Fica na África Ocidental e sua capital é Acra."],
    ["SENEGAL","Fica na África Ocidental e sua capital é Dakar."],
    ["TANZÂNIA","É onde fica parte do Monte Kilimanjaro."],
    ["ZIMBÁBUE","É conhecido pelas Cataratas Vitória."],
    ["ARÁBIA SAUDITA","É conhecido por Meca e Medina."],
    ["EMIRADOS ÁRABES UNIDOS","É conhecido por Dubai e Abu Dhabi."],
    ["ISRAEL","É conhecido por Jerusalém e pelo Mar Morto."],
    ["JORDÂNIA","É onde fica a antiga cidade de Petra."],
    ["IRÃ","Sua antiga civilização era conhecida como Pérsia."],    
    ["IRAQUE","É conhecido pela antiga Mesopotâmia."],   
    ["CATAR","É um pequeno país rico em petróleo e gás no Golfo Pérsico."],    
    ["LÍBANO","Sua capital é Beirute e fica no Oriente Médio."],    
    ["KUWAIT","É um pequeno país localizado no Golfo Pérsico."],   
    ["OMÃ","Fica no extremo sudeste da Península Arábica."],
    ["TAILÂNDIA","É famoso por suas praias e pela culinária apimentada."],
    ["VIETNÃ","É conhecido pela Baía de Ha Long."],    
    ["INDONÉSIA","É um arquipélago com milhares de ilhas."],    
    ["FILIPINAS","É um país formado por milhares de ilhas."],    
    ["MALÁSIA","É conhecido pelas Torres Petronas."],
    ["SINGAPURA","É uma pequena cidade-Estado muito desenvolvida."],    
    ["NEPAL","É onde fica o Monte Everest."],    
    ["PAQUISTÃO","Faz fronteira com a Índia e tem Islamabad como capital."],    
    ["BANGLADESH","É um país muito populoso localizado no sul da Ásia."],    
    ["SRI LANKA","É uma ilha localizada ao sul da Índia."],    
    ["NOVA ZELÂNDIA","É famoso pelos cenários naturais e pela cultura maori."],
    ["FIJI","É um arquipélago localizado no Oceano Pacífico."],
    ["PAPUA-NOVA GUINÉ","É um país da Oceania localizado ao norte da Austrália."],
    ["SAMOA","É um país insular da Polinésia."],    
    ["VANUATU","É um arquipélago da Oceania conhecido por suas ilhas tropicais."],
    ["CUBA","É uma ilha do Caribe e sua capital é Havana."],    
    ["JAMAICA","É conhecido pelo reggae e por Bob Marley."],    
    ["BAHAMAS","É um arquipélago famoso por suas praias caribenhas."],    
    ["REPÚBLICA DOMINICANA","Divide a ilha Hispaniola com o Haiti."],    
    ["HAITI","Fica no Caribe e ocupa parte da ilha Hispaniola."],
    ["COSTA RICA","É conhecido por suas florestas tropicais e biodiversidade."],
    ["PANAMÁ","É famoso pelo Canal do Panamá."],    
    ["GUATEMALA","É conhecido pelas antigas cidades maias e vulcões."],    
    ["HONDURAS","Fica na América Central e sua capital é Tegucigalpa."],    
    ["NICARÁGUA","É um país da América Central conhecido por seus vulcões e lagos."],    
    ["EL SALVADOR","É o menor país da América Central continental."],    
    ["BEIZE","É o único país da América Central com inglês como língua oficial."],    
    ["MALTA","É uma pequena ilha localizada no Mar Mediterrâneo."],    
    ["LUXEMBURGO","É um pequeno país europeu entre Bélgica, França e Alemanha."], 
    ["MÔNACO","É um dos menores países do mundo e fica na Riviera Francesa."],
  ];
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const MAX_LIVES = 6;
  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const deck = shuffle(WORDS);
  let index = 0;
  let score = 0;
  let word = "";
  let hint = "";
  let guessed = new Set();
  let wrongCount = 0;
  let over = false;
  const els = {
    rig: document.getElementById("rig"),
    word: document.getElementById("word"),
    hint: document.getElementById("hint"),
    keyboard: document.getElementById("keyboard"),
    wordNum: document.getElementById("wordNum"),
    wordTotal: document.getElementById("wordTotal"),
    scoreCount: document.getElementById("scoreCount"),
    overlay: document.getElementById("overlay"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalText: document.getElementById("modalText"),
    nextBtn: document.getElementById("nextBtn"),
  };
  els.wordTotal.textContent = deck.length;
  function buildRig(){
    els.rig.innerHTML = `
        <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="150" x2="100" y2="150" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="150" x2="40" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="18" x2="112" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="38" x2="62" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="112" y1="18" x2="112" y2="34" stroke="#A78BFA" stroke-width="5" stroke-linecap="round"/>
        <circle id="part0" class="part" cx="112" cy="47" r="13" fill="none" stroke="#FFD23F" stroke-width="5"/>
        <line id="part1" class="part" x1="112" y1="60" x2="112" y2="96" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part2" class="part" x1="112" y1="70" x2="97" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part3" class="part" x1="112" y1="70" x2="127" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part4" class="part" x1="112" y1="96" x2="99" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
        <line id="part5" class="part" x1="112" y1="96" x2="125" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
      </svg>`;
}
  function normalize(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function startWord(){
    if(index >= deck.length){
      showEndOfDeck();
      return;
    }
    const pick = deck[index];
    word = pick[0];
    hint = pick[1];
    guessed = new Set();
    wrongCount = 0;
    over = false;
    els.overlay.classList.remove("show");
    els.wordNum.textContent = index + 1;
    els.scoreCount.textContent = score;
    buildRig();
    els.hint.textContent = "Dica: " + hint;
    renderWord();
    buildKeyboard();
  }
  function showEndOfDeck(){
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você completou todas as palavras! 🎉";
    els.modalText.innerHTML = "Placar final: <b>" + score + "</b> de <b>" + deck.length + "</b>";
    els.nextBtn.textContent = "Jogar novamente";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    launchConfetti();
    els.nextBtn.onclick = () => { index = 0; score = 0; startWord(); };
  }
  function renderWord(){
    els.word.innerHTML = "";
    word.split("").forEach(ch => {
      if(ch === " "){
        const s = document.createElement("div");
        s.className = "letter-slot space";
        els.word.appendChild(s);
        return;
      }
      const slot = document.createElement("div");
      slot.className = "letter-slot";
      const normCh = normalize(ch);
      if(guessed.has(normCh)){
        slot.textContent = ch;
        slot.classList.add("reveal");
      }
      els.word.appendChild(slot);
    });
  }
  function buildKeyboard(){
    els.keyboard.innerHTML = "";
    const rows = [
      ALPHABET.slice(0,9),
      ALPHABET.slice(9,18),
      ALPHABET.slice(18,26).concat(["Ç"])
    ];
    rows.forEach(rowLetters => {
      const row = document.createElement("div");
      row.className = "kb-row";
      rowLetters.forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "key";
        btn.textContent = letter;
        btn.addEventListener("click", () => handleGuess(letter, btn));
        row.appendChild(btn);
      });
      els.keyboard.appendChild(row);
    });
  }
  function handleGuess(letter, btnEl){
    if(over || guessed.has(letter)) return;
    guessed.add(letter);
    btnEl.disabled = true;
    const normWord = normalize(word);
    if(normWord.includes(letter)){
      btnEl.classList.add("correct");
      renderWord();
      checkWin();
    } else {
      btnEl.classList.add("wrong");
      const part = document.getElementById("part" + wrongCount);
      if(part) part.classList.add("show");
      wrongCount++;
      if(wrongCount >= MAX_LIVES){
        loseWord();
      }
    }
  }
  function checkWin(){
    const normWord = normalize(word);
    const allGuessed = normWord.split("").every(ch => ch === " " || guessed.has(ch));
    if(allGuessed){
      winWord();
    }
  }
  function winWord(){
    over = true;
    score++;
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você acertou! 🎉";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    launchConfetti();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function loseWord(){
    over = true;
    els.modal.className = "modal lose";
    els.modalTitle.textContent = "Ah, não! 💥";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function disableKeyboard(){
    document.querySelectorAll(".key").forEach(k => k.disabled = true);
  }
  function launchConfetti(){
    const colors = ["#FF4D8D","#FFD23F","#06D6A0","#FF8C42","#A78BFA"];
    for(let i=0;i<40;i++){
      const piece = document.createElement("div");
      piece.className = "confetti";
      piece.style.left = Math.random()*100 + "vw";
      piece.style.background = colors[Math.floor(Math.random()*colors.length)];
      piece.style.animationDuration = (2 + Math.random()*1.5) + "s";
      piece.style.animationDelay = (Math.random()*0.4) + "s";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  }
  function findKey(letter){
    return Array.from(document.querySelectorAll(".key")).find(b => b.textContent === letter);
  }
  document.addEventListener("keydown", (e) => {
    // Enter ou espaço avançam para a próxima palavra quando o modal está aberto
    if((e.key === "Enter" || e.key === " ") && els.overlay.classList.contains("show")){
      e.preventDefault();
      els.nextBtn.click();
      return;
    }
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      e.preventDefault();
      const btn = findKey(letter);
      if(btn && !btn.disabled){
        btn.classList.add("key-pressed");
        handleGuess(letter, btn);
      }
    }
  });
  document.addEventListener("keyup", (e) => {
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      const btn = findKey(letter);
      if(btn) btn.classList.remove("key-pressed");
    }
  });
  startWord();
})();