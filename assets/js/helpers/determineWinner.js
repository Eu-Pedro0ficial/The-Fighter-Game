function determineWinner({player, enemy}){
    const restartModal = document.querySelector('#background');
    const resultTitle = document.querySelector('#resultTitle');

    restartModal.style.display = 'flex';

    if(player.health == enemy.health){
        resultTitle.innerHTML = 'Tie';
    }else if(player.health > enemy.health){
        resultTitle.innerHTML = 'Player 1 Wins';
    }else if(player.health < enemy.health){
        resultTitle.innerHTML = 'Player 2 Wins';
    }
}

export default determineWinner;