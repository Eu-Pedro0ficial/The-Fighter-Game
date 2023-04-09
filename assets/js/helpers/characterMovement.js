import { checkPositionForLeft, checkPositionForRight } from "./checkPosition.js";
function characterMovement(character, left, right, keys){
    character.velocity.x = 0;
    if(keys[left].pressed && character.lastKey === left){
        character.velocity.x -= checkPositionForLeft(character) ? 5 : 0;
        // ***
        character.direction = 'left'
        // character.attackBox.offset.x = -170
        character.switchSprite('run');
    } else if(keys[right].pressed && character.lastKey === right){
        character.velocity.x += checkPositionForRight(character) ? 5 : 0;
        // ***
        // character.attackBox.offset.x = 95
        character.direction = 'right'
        character.switchSprite('run');
    }else{
        character.switchSprite('idle');
    }

    if(character.velocity.y < 0){
        character.switchSprite('jump');
    }else if(character.velocity.y > 0){
        character.switchSprite('fall'); 
    }
}

export default characterMovement;