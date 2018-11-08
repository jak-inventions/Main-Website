

function transitionOut(oldContainer, target){
	
	$(function(){
		
		$("#" + oldContainer).fadeOut(1000, function() {
			
			location.href = target;
			
		});
		
	});
	
}

function transitionIn(newContainer){
	
	$(function(){
		
		$("#" + newContainer).fadeOut(0);
		
		$("#" + newContainer).fadeIn(1000);
		
	});
	
}