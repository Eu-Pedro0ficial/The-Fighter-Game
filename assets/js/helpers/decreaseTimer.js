import determineWinner from "./determineWinner.js";
import {player, enemy} from "../../../index.js"

let timer = 60;

function decreaseTimer(){
    let modal = document.getElementById('background')
    let display = window.getComputedStyle(modal, null).display;

    if(timer > 0 && display == 'none') {
        setTimeout(decreaseTimer, 1000)
        timer--;
        document.querySelector('#timer').innerHTML = timer;
    }

    if(timer === 0){
        determineWinner({ player, enemy });
    }
}

export default decreaseTimer;
