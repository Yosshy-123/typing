// ワードリスト
const words = [
	// 英単語
	"the","of","and","a","to","in","is","you","that","it",
	"he","for","was","on","are","as","with","his","they","i",
	"at","be","this","have","from","or","one","had","by","word",
	"but","not","what","all","were","we","when","your","can","said",
	"there","use","an","each","which","she","do","how","their","if",
	"will","up","other","about","out","many","then","them","these","so",
	"some","her","would","make","like","him","into","time","has","look",
	"two","more","write","go","see","number","no","way","could","people",
	"my","than","first","water","been","call","who","oil","its","now",
	"find","long","down","day","did","get","come","made","may","part",
	"over","new","sound","take","only","little","work","know","place","year",
	"live","me","back","give","most","very","after","thing","our","just",
	"name","good","sentence","man","think","say","great","where","help","through",
	"much","before","line","right","too","means","old","any","same","tell",
	"boy","follow","came","show","also","around","form","three","small","set",
	"put","end","does","another","well","large","must","big","even","such",
	"because","turn","here","why","ask","went","men","read","need","land",
	"different","home","us","move","try","kind","hand","picture","again","change",
	"off","play","spell","air","away","animal","house","point","page","letter",
	"mother","answer","found","study","still","learn","should","America","world","high",
	"every","near","add","food","between","own","below","country","plant","last",
	"school","father","keep","tree","never","start","city","earth","eye","light",
	"thought","head","under","story","saw","left","don’t","few","while","along",
	"might","close","something","seem","next","hard","open","example","begin","life",
	"always","those","both","paper","together","got","group","often","run","important",
	"until","children","side","feet","car","mile","night","walk","white","sea",
	"began","grow","took","river","four","carry","state","once","book","hear",
	"stop","without","second","later","miss","idea","enough","eat","face","watch",
	"far","Indian","really","almost","let","above","girl","sometimes","mountain","cut",
	"young","talk","soon","list","song","being","leave","family","apple","body",
	"music","color","stand","sun","questions","fish","area","mark","dog","horse",
	"birds","problem","complete","room","knew","since","ever","piece","told","usually",
	"didn’t","friends","easy","heard","order","red","door","sure","become","top",
	"ship","across","today","during","short","better","best","however","low","hours",
	"black","products","happened","whole","measure","remember","early","waves","reached","listen",
	"six","hands","track","wind","rock","space","covered","fast","several","hold",
	"himself","toward","five","step","morning","passed","vowel","true","hundred","against",
	"pattern","numeral","table","north","slowly","money","map","farm","pulled","draw",
	"voice","seen","cold","cried","plan","notice","south","sing","war","ground",
	"fall","king","town","I’ll","unit","figure","certain","field","travel","wood",
	"fire","upon","done","english","road","half","ten","fly","gave","box",
	"finally","wait","correct","oh","quickly","person","became","shown","minutes","strong",
	"verb","stars","front","feel","fact","inches","street","decided","contain","course",
	"surface","produce","building","ocean","class","note","nothing","rest","careful","scientists",
	"inside","wheels","stay","green","known","island","week","less","machine","base",
	"ago","stood","plane","system","behind","ran","round","boat","game","force",
	"brought","understand","warm","common","bring","explain","dry","though","language","shape",
	"deep","thousand","yes","clear","equation","yet","government","filled","heat","full",
	"hot","check","object","am","rule","among","noun","power","cannot","able",
	"six","size","dark","ball","material","special","heavy","fine","pair","circle",
	"include","built","matter","square","syllables","perhaps","bill","felt","sudden","test",
	"direction","center","farmers","ready","anything","divided","general","energy","subject","Europe",
	"moon","region","return","believe","dance","members","picked","simple","cells","paint",
	"mind","love","cause","rain","exercise","eggs","train","blue","wish","drop",
	"developed","window","difference","distance","heart","site","sum","summer","wall","forest",
	"probably","legs","sat","main","winter","wide","written","length","reason","kept",
	"interest","arms","brother","race","present","beautiful","store","job","edge","past",
	"sign","record","finished","discovered","wild","happy","worth","though","question","during",
	// 日本語ローマ字
	"watashi","anata","kare","kanojo","sensei","gakusei","inu","neko","sakana","uma",
	"tori","kuma","usagi","kaeru","shigoto","gohan","ocha","nomimono","tabemono","pan",
	"koohii","mizu","miru","suru","kiku","hanasu","iu","iku","aruku","kuru",
	"kau","tsukuru","omou","shiru","kangaeru","atarashii","omoshiroi","tanoshii","kawaii","sugoi",
	"ganbatte","yasashii","kurai","akarui","tsumetai","atsui","samui","sekai","machi","jikan",
	"tokoro","kore","sore","are","doko","itsu","dare","nani","ikura","douzo",
	"onegai","arigatou","sumimasen","sayounara","konnichiwa","ohayou","konbanwa","mata","ashita","kyou",
	"ima","gozen","gogo","hitori","futari","san","yon","go","roku","nana",
	"hachi","kyuu","juu","hyaku","sen","michi","eki","densha","kuruma","kouen",
	"gakkou","daigaku","yuubin","denwa","tegami","hon","zasshi","shashin","kamera","kagi",
	"kutsu","kasa","hane","hana","ki","mori","yama","kawa","umi","sora",
	"hoshi","tsuki","taiyou","ame","yuki","kaze","uchi","soto","tachi","kata",
	"heya","toire","kaimono","ryokou","shokuji","asagohan","hirugohan","bangohan","ohiru","yoru",
	"yasai","fruit","jam","salad","aisu","omiyage","kanpai","tanjoubi","shiawase","kibou"
];

let isPlaying = false;
let score = 0;
let life = 3;
let spawnRate = 2000;
let duckSpeed = 2;
let lastSpawnTime = 0;
let animationFrameId;

let ducks = [];
let targetDuck = null;

const stage = document.getElementById('stage');
const scoreDisplay = document.getElementById('score-display');
const lifeDisplay = document.getElementById('life-display');
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over-screen');

function startGame() {
	isPlaying = true;
	score = 0;
	life = 3;
	duckSpeed = 1.5;
	spawnRate = 2000;
	ducks = [];
	targetDuck = null;
	stage.innerHTML = '';

	updateUI();
	startScreen.classList.add('hidden');
	gameOverScreen.classList.add('hidden');

	lastSpawnTime = performance.now();
	requestAnimationFrame(gameLoop);
}

function gameLoop(timestamp) {
	if (!isPlaying) return;

	if (timestamp - lastSpawnTime > spawnRate) {
		spawnDuck();
		lastSpawnTime = timestamp;
		if (spawnRate > 800) spawnRate -= 50;
		if (duckSpeed < 4) duckSpeed += 0.05;
	}

	const width = window.innerWidth;
	const toRemove = [];

	ducks.forEach((duck, index) => {
		duck.x += duckSpeed;
		duck.element.style.left = duck.x + 'px';

		if (duck.x > width) {
			life--;
			updateUI();
			stage.removeChild(duck.element);
			toRemove.push(index);

			if (targetDuck === duck) targetDuck = null;

			if (life <= 0) {
				gameOver();
			}
		}
	});

	for (let i = toRemove.length - 1; i >= 0; i--) {
		ducks.splice(toRemove[i], 1);
	}

	animationFrameId = requestAnimationFrame(gameLoop);
}

function spawnDuck() {
	const word = words[Math.floor(Math.random() * words.length)];
	const duckEl = document.createElement('div');
	duckEl.className = 'duck-container';

	duckEl.innerHTML = `
                <div class="word-label">${word}</div>
                <div class="duck-art">
                    <div class="duck-head"></div>
                    <div class="duck-eye"></div>
                    <div class="duck-beak"></div>
                    <div class="duck-body"></div>
                </div>
            `;

	const randomBottom = 10 + Math.random() * 20;
	duckEl.style.bottom = randomBottom + '%';

	stage.appendChild(duckEl);

	ducks.push({
		element: duckEl,
		word: word,
		remaining: word,
		typed: "",
		x: -120
	});
}

function updateUI() {
	scoreDisplay.innerText = `スコア: ${score}`;
	let lifeStr = "ライフ: ";
	for (let i = 0; i < life; i++) lifeStr += "❤️";
	lifeDisplay.innerText = lifeStr;
}

function gameOver() {
	isPlaying = false;
	cancelAnimationFrame(animationFrameId);
	document.getElementById('final-score').innerText = `スコア: ${score}`;
	gameOverScreen.classList.remove('hidden');
}

document.addEventListener('keydown', (e) => {
	if (e.code === 'Space') {
		if (!isPlaying) startGame();
		return;
	}

	if (!isPlaying) return;

	const key = e.key.toLowerCase();
	if (!/^[a-z]$/.test(key)) return;

	if (targetDuck) {
		checkInput(targetDuck, key);
	} else {
		const potentialTarget = ducks.find(d => d.remaining.startsWith(key));
		if (potentialTarget) {
			targetDuck = potentialTarget;
			targetDuck.element.classList.add('target');
			checkInput(targetDuck, key);
		}
	}
});

function checkInput(duck, key) {
	if (duck.remaining.startsWith(key)) {
		duck.typed += key;
		duck.remaining = duck.remaining.substring(1);

		const label = duck.element.querySelector('.word-label');
		label.innerHTML = `<span class="typed">${duck.typed}</span>${duck.remaining}`;

		if (duck.remaining.length === 0) {
			score += duck.word.length * 10;
			updateUI();

			duck.element.classList.add('poof');
			setTimeout(() => {
				if (duck.element.parentNode) stage.removeChild(duck.element);
			}, 300);

			ducks = ducks.filter(d => d !== duck);
			targetDuck = null;
		}
	}
}
