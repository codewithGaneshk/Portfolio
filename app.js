const video = document.querySelector('video');
const num = document.querySelector('.num');


num.style.display='none';

function initAnimation(){
    video.src ='./tiger.mp4';
    video.play();
}

video.onended=()=>{
    num.style.display = 'flex';
    
}

