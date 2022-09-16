let images=['./images/crash.png', './images/kick.png', './images/snare.png', './images/tom1.png', './images/tom2.png', './images/tom3.png', './images/tom4.png']

let selector=document.querySelectorAll('.drum');

for(i=0; i<images.length; i++){
    selector[i].style.backgroundImage=`url(${images[i]})`
}

for(let i=0; i<document.querySelectorAll('.drum').length; i++){
    selector[i].addEventListener("click", (event)=>{
        let buttonPressed=(event.target.innerHTML);
        console.log(buttonPressed)
        switcher(buttonPressed);
        buttonAnimation(buttonPressed)
    });
}

document.addEventListener("keypress", (event)=>{
    let keyPressed=(event.key)
    switcher(keyPressed);
    buttonAnimation(keyPressed);
})

function switcher(eventCalled) {
    switch(eventCalled){
        case 'w': new Audio("./sounds/crash.mp3").play();
        break;
        case 'a': new Audio("./sounds/kick-bass.mp3").play();
        break;
        case 's': new Audio("./sounds/snare.mp3").play();
        break;
        case 'd': new Audio("./sounds/tom-1.mp3").play();
        break;
        case 'j': new Audio("./sounds/tom-2.mp3").play();
        break;
        case 'k': new Audio("./sounds/tom-3.mp3").play();
        break;
        case 'l': new Audio("./sounds/tom-4.mp3").play();
        break; 
    }
}

function buttonAnimation(eventKey) {
    let callKey=eventKey;
    document.querySelector(`.${callKey}`).classList.add('pressed');
    setTimeout(()=>{document.querySelector(`.${callKey}`).classList.remove('pressed')},100);
}