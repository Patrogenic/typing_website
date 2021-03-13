//Key code + 1000 will represent the use of shift
var keyCodes = {
	16: "shift",
	32: " ",
	48: "0",
	1048: ")",
	49: "1",
	1049: "!",
	50: "2",
	1050: "@",
	51: "3",
	1051: "#",
	52: "4",
	1052: "$",
	53: "5",
	1053: "%",
	54: "6",
	1054: "^",
	55: "7",
	1055: "&",
	56: "8",
	1056: "*",
	57: "9",
	1057: "(",
	59: ";",
	1059: ":",
	61: "=",
	1061: "+",
	65: "a", 
	66: "b",
	67: "c",
	68: "d",
	69: "e",
	70: "f",
	71: "g",
	72: "h",
	73: "i",
	74: "j",
	75: "k",
	76: "l",
	77: "m",
	78: "n",
	79: "o",
	80: "p",
	81: "q",
	82: "r",
	83: "s",
	84: "t",
	85: "u",
	86: "v",
	87: "w",
	88: "x",
	89: "y",
	90: "z",
	173: "-",
	1173: "_",
	186: ";",
	1186: ":",
	187: "=",
	1187: "+",
	188: ",",
	1188: "<",
	189: "-",
	1189: "_",
	190: ".",
	1190: ">",
	191: "/", //Shift = "?"
	1191: "?",
	219: "[",
	1219: "{",
	220: "\\",
	1220: "|",
	221: "]",
	1221: "}",
	222: "'",
	1222: '"',
};
function myFunction(event) {
	var x = event.which || event.keyCode;
	document.getElementById("demo").innerHTML = "The Unicode value is: " +
	x + "<br>The character is: " + keyCodes[x] + 
	"<br>Shift status: " + event.shiftKey;
}

var text = document.getElementById("textToType");
var passage = text.textContent;
var length = passage.length;
var lastChar = passage.substring(length - 1, length);

document.getElementById("currentChar").textContent = text.textContent.charAt(0)
text.textContent = text.textContent.substring(1, length)

console.log(length)

var charsTyped = 0
var mistakes = 0
var startTime;
var startTiming = true;

var userTyping = function(event){
	var key = event.which || event.keyCode;
	var textToType = document.getElementById("textToType");
	var textTyped = document.getElementById("textTyped");
	var textString = textToType.textContent;
	var currentCharEl = document.getElementById("currentChar");
	var currentChar = currentCharEl.textContent
	var moveCurrent = function(){
		currentCharEl.className = "current";
		charsTyped++;
		//document.getElementById("charsTyped").innerHTML = "Chars typed: " + charsTyped + "<br>Mistakes: " + mistakes;
		//The now typed character is added to the typed text element
		textTyped.textContent = textTyped.textContent + currentChar;
		
		//Highlights the next character to type
		currentCharEl.textContent = textString.charAt(0);
		
		//Character is removed from the text to type
		textString = textString.substring(1, textString.length)
		textToType.textContent = textString;	
	}
	//Check default events in other browsers
	if(key == 222 || key == 8){
		event.preventDefault();
	}
	//Special characters
	//currentChar is never going to = keyCodes[key] if shift is held- therefore we added key + 1000
	if((currentChar == keyCodes[key] || currentChar == keyCodes[key + 1000]) && currentChar == currentChar.toUpperCase()){
		if(key == 32){
			moveCurrent();
		}else if(event.shiftKey){
			if(currentChar == keyCodes[key + 1000]){
				moveCurrent();
			}else{
				currentCharEl.className = "mistake"
				mistakes++;
			}
		}else if(!event.shiftKey){
			if(currentChar == keyCodes[key]){
				moveCurrent();
			}else{
				currentCharEl.className = "mistake"
				mistakes++;
			}
		}
			
	//Uppercase letters
	}else if(currentChar == currentChar.toUpperCase()){
		if(event.shiftKey){
			if(currentChar.toLowerCase() == keyCodes[key]){
				moveCurrent()
			}else if(key != 16){
				currentCharEl.className = "mistake"
				mistakes++;
			}
		}else{
			currentCharEl.className = "mistake"
			mistakes++;
		}
	//Lowercase letters
	}else if(currentChar == currentChar.toLowerCase()){
		if(!event.shiftKey){
			if(currentChar == keyCodes[key]){
				moveCurrent()
			}else{
			currentCharEl.className = "mistake"
			mistakes++;
			}
		}else if(key != 16){
			currentCharEl.className = "mistake"
			mistakes++;
		}
	}else{
		//Incorrect character was typed- mark the character red- not what happens
		
		/*
		var newSpan = document.createElement("span");
		newSpan.className = "mistake"
		
		currentCharEl.appendChild(newSpan)
		*/
		console.log("else becomes true") //Never becomes true
	}
	if(startTiming == true){ 
		//Test has started- start taking time
		console.log("Start timer")
		startTime = new Date();
		startTiming = false;
	}else if(textString.length == 0 && currentChar == lastChar){
		//Test has finished
		console.log("Test finished")
		var endTime = new Date()
		var time = endTime - startTime //Gets total time and rounds to a deciaml place of 0.0
		var accuracy = Math.round(((charsTyped - mistakes) /charsTyped) * 100 * 100) / 100 //Rounds to a decimal place of 0.00
		var wpm = Math.round(charsTyped / 5 / time * 1000  * 60) //5 characters per word 60 seconds per minute
		var finish = document.getElementById("finish")
		time = Math.round((endTime - startTime) / 100) / 10; // Time is rounded to 0.0
		
		document.getElementById("time").textContent = "Time: " + time + " sec";
		document.getElementById("accuracy").textContent = "Accuracy: " + accuracy + "%";
		document.getElementById("wpm").textContent = "WPM:" + wpm;
		finish.style.zIndex = "1";
		
		document.removeEventListener("keydown", userTyping);
		//TODO
		//Divide time by 60 and display minutes
		/*
		if(time > 60){
			minutes = Math.round(time / 60)
			seconds = time % 60;
		}
		_____ = minutes + ":" + seconds
		*/
		console.log(time)
		console.log("WPM: " + wpm )
		console.log("Accuracy: " + accuracy + "%")
	}
	console.log(currentChar)
}
//document.addEventListener("keydown", userTyping);

var retry = function(){
	var finish = document.getElementById("finish")
	document.getElementById("textTyped").textContent = "";
	
	text.textContent = passage;
	document.getElementById("currentChar").textContent = text.textContent.charAt(0)
	text.textContent = text.textContent.substring(1, length)
	
	finish.style.zIndex = "-1";
	
	startTiming = true;
	charsTyped = 0;
	mistakes = 0;
	document.addEventListener("keydown", userTyping);
}
		/*
var fps = {
	startTime : 0,
	frameNumber : 0,
	getFPS : function(){
		this.frameNumber++;
		var d = new Date().getTime(),
			currentTime = ( d - this.startTime ) / 1000,
			result = Math.floor( ( this.frameNumber / currentTime ) );

		if( currentTime > 1 ){
			this.startTime = new Date().getTime();
			this.frameNumber = 0;
		}
		return result;
	}	
};
var f = document.getElementById("fps");

function gameLoop(){
	setTimeout( gameLoop,1000 / 100 );
	f.innerHTML = "<p>FPS: " + fps.getFPS();
}

window.onload = gameLoop;
*/