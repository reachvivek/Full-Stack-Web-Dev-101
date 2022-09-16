function init(){
    let image1=document.querySelector('.img1'), image2=document.querySelector('.img2');
    image1.setAttribute('src', './images/dice6.png');
    image2.setAttribute('src', './images/dice6.png');
}

function refresh() {
    let random1=(Math.floor(Math.random()*6))+1;
    let random2=(Math.floor(Math.random()*6))+1;

    let dice=["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
    document.querySelector('.img1').setAttribute('src', dice[random1-1]);
    document.querySelector('.img2').setAttribute('src', dice[random2-1]);

    let title=document.querySelector('h1');

    (random1===random2)?title.innerHTML="Draw!":(random1>random2)?title.innerHTML="Player 1 Wins!":title.innerHTML="Player 2 Wins!"
    console.log(random1, random2)
}

init();

function checkFirstVisit() {
    if (window.performance.getEntriesByType("navigation")){
        p=window.performance.getEntriesByType("navigation")[0].type;
        if (p=='reload'){refresh();}
    }
     return result;
}


