

function makeObject(objectType, parentDiv, objectId){
	
	object = document.createElement(objectType);
	
	object.appendChild(document.createTextNode(""));
	
	document.getElementById(parentDiv).appendChild(object);
	
	object.id = objectId;
	
}

function sleep(ms) {
	
  return new Promise(resolve => setTimeout(resolve, ms));
  
}

async function fadeIn(objectId){
	
	/*console.log(document.getElementById(objectId));
	
	document.getElementById(objectId).style.opacity = 0;
	
	for(var i = 0; i < 100; i++){
		
		document.getElementById(objectId).style.opacity += 0.01;
		
		sleep(100);
		
	}*/
	
}

function cookieAlert(){
	
	if(window.location == "https://jakinventions.com/" || window.location == "http://jakinventions.com/"){
		
		makeObject("div", "homeHolder", "cookieBox");
		
		makeObject("p", "cookieBox", "cookieText");
		
		document.getElementById("cookieText").innerHTML = "This site uses cookies";
		
		makeObject("a", "cookieBox", "cookieBoxExit");
		
		document.getElementById("cookieBoxExit").innerHTML = "X";
		
		document.getElementById("cookieBoxExit").className = "unSelectable";
		
		document.getElementById("cookieBoxExit").onclick = function(){document.getElementById("cookieBox").remove();};
		
		//fadeIn("cookieBox");
		
	}
	
}

