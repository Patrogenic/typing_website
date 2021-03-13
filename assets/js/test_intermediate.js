var intmedWords = {
	1: "would",
	2: "there",
	3: "their",
	4: "about",
	5: "which",
	6: "people",
	7: "could",
	8: "other",
	9: "think",
	10: "after",
	11: "first",
	12: "because",
	13: "these",
	14: "place",
	15: "little",
	16: "round",
	17: "every",
	18: "under",
	19: "through",
	20: "sentence",
	21: "great",
	22: "think",
	23: "differ",
	24: "before",
	25: "right",
	26: "small",
	27: "large",
	28: "spell",
	29: "follow",
	30: "change",
	31: "house",
	32: "picture",
	33: "animal",
	34: "point",
	35: "mother",
	36: "world",
	37: "build",
	38: "earth",
	39: "father",
	40: "stand",
	41: "should",
	42: "country",
	43: "found",
	44: "answer",
	45: "school",
	46: "study",
	47: "still",
	48: "learn",
	49: "plant",
	50: "cover",
	51: "between",
	52: "state",
	53: "never",
	54: "thought",
	55: "cross",
	56: "start",
	57: "might",
	58: "story",
	59: "while",
	60: "press",
	61: "close",
	62: "night",
	63: "north",
	64: "together",
	65: "white",
	66: "children",
	67: "begin",
	68: "example",
	69: "group",
	70: "always",
	71: "music",
	72: "those",
	73: "often",
	74: "letter",
	75: "until",
	76: "river",
	77: "second",
	78: "carry",
	79: "science",
	80: "friend",
	81: "mountain",
	82: "horse",
	83: "watch",
	84: "color",
	85: "enough",
	86: "plain",
	87: "usual",
	88: "young",
	89: "ready",
	90: "above",
	91: "though",
	92: "family",
	93: "direct",
	94: "leave",
	95: "measure",
	96: "product",
	97: "black",
	98: "short",
	99: "numeral",
	100: "class",
}
//Stopped at line 330
//https://gist.github.com/deekayen/4148741

var apostWords = {
	1: "don't",
	2: "won't",
	3: "it's",
	4: "can't",
	5: "I'll",
	6: "I've",
	7: "you're",
	8: "didn't",
	9: "she's",
	10: "they're",
	11: "we're",
	12: "you've",
	13: "aren't",
	14: "she'd",
	15: "let's",
	16: "we've",
	17: "couldn't",
	18: "who's",
}

var genIntmedTxt = function(){
	var rndNumWords = 0;
	var rndWord = "";
	var rndNumChars = 0;
	var rndIntmedTxt = "";
	
	var capChar = "";
	
	for(var i = 0; i < 60; i++){
		rndNumChars = Math.floor((Math.random() * 15) + 1)
		rndNumWords = Math.floor((Math.random() * 100) + 1);
		
		rndWord = intmedWords[rndNumWords];
		
		if(rndNumChars == 1){
			capChar = rndWord.substring(0, 1).toUpperCase();
			rndWord = capChar + rndWord.substring(1, rndWord.length)
		}else if(rndNumChars == 2){
			rndWord += ".";
		}else if(rndNumChars == 3){
			rndWord += ",";
		}else if (rndNumChars == 4){
			//rndWord = '"' + rndWord + '"'; //Too common
		} //Don't forget numbers
		
		rndIntmedTxt += rndWord + " ";
	}
	/*
	var displayTxt = function(){
		rndIntmedTxt = rndIntmedTxt.substring(0, rndIntmedTxt.length - 1)
		passage = rndIntmedTxt;
		text.textContent = passage;
		
		length = passage.length;
		lastChar = passage.substring(length - 1, length);
		
		document.getElementById("currentChar").textContent = passage.charAt(0)
		text.textContent = passage.substring(1, length);
		
		document.addEventListener("keydown", userTyping);
	}
	*/
}
var displayTxt = function(){
	rndIntmedTxt = rndIntmedTxt.substring(0, rndIntmedTxt.length - 1)
	passage = rndIntmedTxt;
	text.textContent = passage;
	
	length = passage.length;
	lastChar = passage.substring(length - 1, length);
	
	document.getElementById("currentChar").textContent = passage.charAt(0)
	text.textContent = passage.substring(1, length);
	
	document.addEventListener("keydown", userTyping);
}