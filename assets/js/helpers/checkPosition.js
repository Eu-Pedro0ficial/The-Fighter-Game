function checkPositionForLeft(character){
    return character.position.x >= 0;
}

function checkPositionForRight(character){
    return character.position.x <= (document.getElementById('canvas').width - 50);
}

export {
    checkPositionForLeft,
    checkPositionForRight
};
