function detectJump(character){
    if(character.position.y < 330){
        character.checkJump = true;
    }else{
        character.checkJump = false;
    }
}
export default detectJump;