
var fadeInSection;

function fadeIn(sectionNumber){
	
	if(sectionNumber == 1){
		
		fadeInSection = "homeHolder";
		
	}
	
	if(sectionNumber == 2){
		
		fadeInSection = "aboutHolder";
		
	}
	
	if(sectionNumber == 3){
		
		fadeInSection = "softwareHolder";
		
	}
	
	if(sectionNumber == 4){
		
		fadeInSection = "extrasHolder";
		
	}
	
	document.getElementById(fadeInSection).style.opacity = 0;
	
	fadeInTime = 25;
	
	setTimeout(function(){document.getElementById(fadeInSection).style.opacity = 0.1;}, fadeInTime * 1);
	
	setTimeout(function(){document.getElementById(fadeInSection).style.opacity = 0.2;}, fadeInTime * 2);
	
	setTimeout(function(){document.getElementById(fadeInSection).style.opacity = 0.3;}, fadeInTime * 3);
	
	setTimeout(function(){document.getElementById(fadeInSection).style.opacity = 0.4;}, fadeInTime * 4);
	
	setTimeout(function(){document.getElementById(fadeInSection).style.opacity = 0.5;}, fadeInTime * 5);
	
	setTimeout(function(){document.getElementById(fadeInSection).style.opacity = 0.6;}, fadeInTime * 6);
	
	setTimeout(function(){document.getElementById(fadeInSection).style.opacity = 0.7;}, fadeInTime * 7);
	
	setTimeout(function(){document.getElementById(fadeInSection).style.opacity = 0.8;}, fadeInTime * 8);
	
	setTimeout(function(){document.getElementById(fadeInSection).style.opacity = 0.9;}, fadeInTime * 9);
	
	setTimeout(function(){document.getElementById(fadeInSection).style.opacity = 1.0;}, fadeInTime * 10);
	
}

function fadeOut(oldSectionNumber, newSectionNumber){
	
	if(oldSectionNumber == 1){
		
		oldSection = "homeHolder";
		
	}
	
	if(newSectionNumber == 1){
		
		newSection = "index";
		
	}
	
	if(oldSectionNumber == 2){
		
		oldSection = "aboutHolder";
		
	}
	
	if(newSectionNumber == 2){
		
		newSection = "about";
		
	}
	
	if(oldSectionNumber == 3){
		
		oldSection = "softwareHolder";
		
	}
	
	if(newSectionNumber == 3){
		
		newSection = "software";
		
	}
	
	if(oldSectionNumber == 4){
		
		oldSection = "extrasHolder";
		
	}
	
	if(newSectionNumber == 4){
		
		newSection = "extras";
		
	}
	
	fadeInTime = 25;
	
	setTimeout(function(){document.getElementById(oldSection).style.opacity = 0.9;}, fadeInTime * 1);
	
	setTimeout(function(){document.getElementById(oldSection).style.opacity = 0.8;}, fadeInTime * 2);
	
	setTimeout(function(){document.getElementById(oldSection).style.opacity = 0.7;}, fadeInTime * 3);
	
	setTimeout(function(){document.getElementById(oldSection).style.opacity = 0.6;}, fadeInTime * 4);
	
	setTimeout(function(){document.getElementById(oldSection).style.opacity = 0.5;}, fadeInTime * 5);
	
	setTimeout(function(){document.getElementById(oldSection).style.opacity = 0.4;}, fadeInTime * 6);
	
	setTimeout(function(){document.getElementById(oldSection).style.opacity = 0.3;}, fadeInTime * 7);
	
	setTimeout(function(){document.getElementById(oldSection).style.opacity = 0.2;}, fadeInTime * 8);
	
	setTimeout(function(){document.getElementById(oldSection).style.opacity = 0.1;}, fadeInTime * 9);
	
	setTimeout(function(){document.getElementById(oldSection).style.opacity = 0.0;}, fadeInTime * 10);
	
	setTimeout(function(){document.location.replace(newSection);}, fadeInTime * 10);
	

	
}


