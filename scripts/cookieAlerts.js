

function makeBox(parentDiv, boxId){
	
	box = document.createElement("div");
	
	box.appendChild(document.createTextNode(""));
	
	document.getElementById(parentDiv).appendChild(box);
	
	box.id = boxId;
	
}

function makeText(parentDiv, textId){
	
	textId = document.createElement("p");
	
	textId.appendChild(document.createTextNode(""));
	
	document.getElementById(parentDiv).appendChild(textId);
	
	textId.id = textId;
	
}

function cookieAlert(){
	
	/*if(window.location == "jakinventions.com"){
		
		makeBox("homeHolder", "cookieBox");
		
		document.getElementById("cookieBox").style.position = "absolute";
		
		document.getElementById("cookieBox").style.background = "#1abc9c";
		
		document.getElementById("cookieBox").style.width = "200px";
		
		document.getElementById("cookieBox").style.height = "75px";
		
		document.getElementById("cookieBox").style.top = "400px";
		
		document.getElementById("cookieBox").style.left = "0px";
		
		makeText("cookieBox", "cookeText");
		
		document.getElementById("cookieText").innerHTML = "This site uses cookies";
		
		document.getElementById("cookieText").style.color = "white";
		
		document.getElementById("cookieText").style.fontFamily = "roboto";
		
	}*/
	
}

