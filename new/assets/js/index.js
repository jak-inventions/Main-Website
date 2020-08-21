
// Onload Tasks
setTimeout(function(){
    document.querySelectorAll('section:not(#home), footer').forEach(current => {
        current.style.display = "block"; 
    });
}, 2000);


// Nav transform
document.body.onscroll = () => {
    let home = document.getElementById('home');
    let header = document.querySelector('header');
    if(checkVisible(home)){
        header.style.position = 'absolute';
        header.className = '';
    }
    else{
        header.style.position = 'fixed';
        header.className = 'compressed';
    }
}



