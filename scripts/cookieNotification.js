

function showCookieNotification(){
	
	notification = document.createElement("div");
	
	notification.appendChild(document.createTextNode(""));
	
	document.getElementById("homeHolder").appendChild(notification);

	notification.id = "cookieNotification";

	notificationText = document.createElement("p");
	
	notificationText.appendChild(document.createTextNode(""));
	
	document.getElementById("cookieNotification").appendChild(notificationText);

	notificationText.innerHTML = "This site uses cookies";

	notificationText.style.fontFamily = "roboto";

	notificationText.style.color = "white";

	document.getElementById(fadeInSection).style.opacity = 0;

	notification.style.textAlign = "center";

	notification.style.position = "relative";

	notification.style.bottom = "760px";

	notification.style.left = "200px";

	notification.style.width = "200px";

	notification.style.height = "25px";

	notification.style.background = "#89b6ff";

	notification.style.borderRadius = "5px 5px";

	fadeInTime = 50;

	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.1;}, fadeInTime * 1);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.2;}, fadeInTime * 2);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.3;}, fadeInTime * 3);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.4;}, fadeInTime * 4);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.5;}, fadeInTime * 5);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.6;}, fadeInTime * 6);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.7;}, fadeInTime * 7);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.8;}, fadeInTime * 8);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.9;}, fadeInTime * 9);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 1.0;}, fadeInTime * 10);

	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.9;}, fadeInTime * 51);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.8;}, fadeInTime * 52);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.7;}, fadeInTime * 53);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.6;}, fadeInTime * 54);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.5;}, fadeInTime * 55);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.4;}, fadeInTime * 56);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.3;}, fadeInTime * 57);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.2;}, fadeInTime * 58);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.1;}, fadeInTime * 59);
	
	setTimeout(function(){document.getElementById("cookieNotification").style.opacity = 0.0;}, fadeInTime * 60);
	
}

