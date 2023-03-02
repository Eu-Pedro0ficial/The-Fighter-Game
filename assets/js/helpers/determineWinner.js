function determineWinner({player, enemy, timerId}){
    clearTimeout(timerId);
    const resultTitle = document.querySelector('#resultTitle');

    resultTitle.style.display = 'flex';

    if(player.health == enemy.health){
        resultTitle.innerHTML = 'Tie';
    }else if(player.health > enemy.health){
        resultTitle.innerHTML = 'Player 1 Wins';
    }else if(player.health < enemy.health){
        resultTitle.innerHTML = 'Player 2 Wins';
    }
}

export default determineWinner;