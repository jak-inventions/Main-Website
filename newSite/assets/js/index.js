
//Slideshow

window.onload = async function thing(){

  for(var i = 0; i < 3; i++){
    setTimeout(function(){
      cycleSlideshow();
    }, 1000);
  }

}

function cycleSlideshow(){
  slideShow = document.getElementById("outlineSlideshow");
  for(var i = 0; i < slideShow.childNodes.length; i++){
    current = slideShow.childNodes[i];
    first = slideShow.childNodes[0];
    if(i != slideShow.childNodes.length){
      next = slideShow.childNodes[i+1];
      current.className = "";
      next.className = "target";
    }
    else{
      current.className = "";
      first.className = target;
    }
  }
}
