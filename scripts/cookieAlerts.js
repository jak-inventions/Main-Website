

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

function initiateCookies(){
	
	if(localStorage.getItem("cookiesAccepted") == ""){
		
		localStorage.setItem("cookiesAccepted", "false");
		
	}
	
}

function cookieAlert(){
	
	if(localStorage.getItem("cookiesAccepted") == "false"){
		
		makeObject("div", "homeHolder", "cookieBox");
		
		makeObject("p", "cookieBox", "cookieText");
		
		document.getElementById("cookieText").innerHTML = "This site uses cookies";
		
		makeObject("a", "cookieBox", "cookieBoxExit");
		
		document.getElementById("cookieBoxExit").innerHTML = "Ok";
		
		document.getElementById("cookieBoxExit").className = "unSelectable";
		
		document.getElementById("cookieBoxExit").onclick = function(){localStorage.setItem("cookiesAccepted", "true"); document.getElementById("cookieBox").remove();};
		
		//fadeIn("cookieBox");
		
	}
	
}

