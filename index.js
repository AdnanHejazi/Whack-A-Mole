const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score;

function RandomTime(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

function RandomHole(holes){
    const index = Math.floor(Math.random() * holes.length)
    const hole = holes[index];
    if(hole === lastHole){
        console.log("That's the same hole!");
        return RandomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep(){
    const time = RandomTime(200, 1000);
    const hole = RandomHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp) peep()
    }
    ,time);
}

    function StartGame(){
        scoreBoard.textContent = 0;
        timeUp = false;
        peep();
        score = 0;
        setTimeout(() => timeUp = true, 15000);
    }

    function bonk(e){
        console.log(e);
        score++;
        this.classList.remove('up');
        scoreBoard.textContent = score;
    }

    moles.forEach(mole=>mole.addEventListener('click', bonk))