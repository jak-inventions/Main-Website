

function makeObject(objectType, parentDiv, objectId){
	
	object = document.createElement(objectType);
	
	object.appendChild(document.createTextNode(""));
	
	document.getElementById(parentDiv).appendChild(object);
	
	object.id = objectId;
	
}

function initiateCookies(){
	
	if(localStorage.getItem("cookiesAccepted") == null){
		
		localStorage.setItem("cookiesAccepted", "false");
		
	}
	
}

function cookieAlert(parentDiv){
	
	if(localStorage.getItem("cookiesAccepted") == "false"){
		
		makeObject("div", parentDiv, "cookieBox");
		
		makeObject("p", "cookieBox", "cookieText");
		
		document.getElementById("cookieText").innerHTML = "This site uses cookies";
		
		document.getElementById("cookieText").className = "unSelectable";
		
		makeObject("a", "cookieBox", "cookieBoxExit");
		
		document.getElementById("cookieBoxExit").innerHTML = "Ok";
		
		document.getElementById("cookieBoxExit").className = "unSelectable";
		
		document.getElementById("cookieBoxExit").onclick = function(){
			
			localStorage.setItem("cookiesAccepted", "true");
			
			$(function(){
			
				$("#cookieBox").slideUp(500);
			
			});
			
			document.getElementById("cookieBox").remove();
			
		};
		
		$(function(){
			
			$("#cookieBox").slideUp(0).slideDown(500);
			
		});
		
	}
	
}

