var retroCustom = document.createElement('LINK');
retroCustom.rel = "stylesheet";
retroCustom.type = "text/css"
retroCustom.href = "css/VenomRetroCustom.css";
var retroOn = false;
reload();
function retro(){
    if(retroOn){
        document.head.removeChild(retroCustom);
        document.getElementById('title').src = './images/ModernVenomLogo.png';
        retroOn = false;
    }
    else{
        document.head.appendChild(retroCustom);
        document.getElementById('title').src = './images/RetroVenomLogo.png';
        retroOn = true;
    }
    sessionStorage.setItem('retroOn', retroOn);
}
function reload(){
    retroOn = JSON.parse(sessionStorage.getItem('retroOn'));
    if(retroOn){
        document.head.appendChild(retroCustom);
        document.getElementById('title').src = './images/RetroVenomLogo.png';
    }
}