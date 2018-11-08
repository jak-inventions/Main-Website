

function transitionOut(oldContainer, target){
	
	$(function(){
		
		$("#" + oldContainer).fadeOut(500, function() {
			
			location.href = target;
			
		});
		
	});
	
}

function transitionIn(newContainer){
	
	$(function(){
		
		$("#" + newContainer).fadeOut(0);
		
		$("#" + newContainer).fadeIn(500);
		
	});
	
}