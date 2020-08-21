
// Onload Tasks

setTimeout(function(){
    document.querySelectorAll('section:not(#home), footer').forEach(current => {
        current.style.display = "block"; 
    });
}, 3500);

