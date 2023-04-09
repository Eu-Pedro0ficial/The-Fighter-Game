function rectangularCollision({
    rectangle1,
    rectangle2
}){
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

function detectCollision({
    rectangle1,
    rectangle2, 
    gsap,
    id,
    frame
}){
    if(
        rectangularCollision({
            rectangle1,
            rectangle2
        }) &&
        rectangle1.isAttacking && rectangle1.frameCurrent === frame
    ){          
        rectangle2.takeHit(rectangle1.damage)
        rectangle1.isAttacking = false;

        gsap.to(id, {
            width: rectangle2.health + '%'
        })
    }

    if(rectangle1.isAttacking && rectangle1.frameCurrent === frame){
        rectangle1.isAttacking = false;
    }
}

export {
    rectangularCollision,
    detectCollision
};