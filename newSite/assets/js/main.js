
window.addEventListener("load", function(){
	
	$(document).ready(function(){
		
		$("body").fadeIn(500);
		
	});
	
});

function transitionOut(target){
	
	$(document).ready(function(){
		
		$("body").fadeOut(500, function(){
			
			location.href = target;
			
		});
		
	});
	
}
