
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
	
	$(function(){
		
		$("#" + fadeInSection).slideUp(0).slideDown(1000);
		
	});
	
}

function fadeOut(oldSectionNumber, newSectionNumber){
	
	if(oldSectionNumber == 1){
		
		oldSection = "homeHolder";
		
	}
	
	if(newSectionNumber == 1){
		
		newSection = "index.html";
		
	}
	
	if(oldSectionNumber == 2){
		
		oldSection = "aboutHolder";
		
	}
	
	if(newSectionNumber == 2){
		
		newSection = "about.html";
		
	}
	
	if(oldSectionNumber == 3){
		
		oldSection = "softwareHolder";
		
	}
	
	if(newSectionNumber == 3){
		
		newSection = "software.html";
		
	}
	
	if(oldSectionNumber == 4){
		
		oldSection = "extrasHolder";
		
	}
	
	if(newSectionNumber == 4){
		
		newSection = "extras.html";
		
	}
	
	$(function(){
		
		$("#" + oldSection).slideUp(1000, function() {
			
			location.href = newSection;
			
		});
		
		$("#cookieBox").slideUp(1000, function() {
			
			location.href = newSection;
			
		});
		
	});
	
}


