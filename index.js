'use strict';
import Fighter from "./assets/js/classes/Fighter.js";
import Sprite from "./assets/js/classes/Spriter.js";
import rectangularCollision from "./assets/js/helpers/detectCollision.js";
import decreaseTimer from "./assets/js/helpers/decreaseTimer.js";
import determineWinner from "./assets/js/helpers/determineWinner.js";

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
// canvas.width = window.screen.width + 6;
// canvas.height = window.screen.height - 130;

c.fillRect(0, 0, canvas.width, canvas.height);

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './assets/img/background.png',
    canvasObjectProperties: c,
});

const shop = new Sprite({
    position: {
        x: 600,
        y: 128,
    },
    imageSrc: './assets/img/shop.png',
    scale: 2.75,
    framesMax: 6,
    canvasObjectProperties: c,
});

const player = new Fighter({
    canvas: canvas,
    position: {
        x: 0,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset:{
        x: 0,
        y: 0,
    },
    imageSrc: './assets/img/samuraiMack/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 215,
        y: 157,
    },
    sprites: {
        idle: {
            imageSrc: './assets/img/samuraiMack/Idle.png',
            framesMax: 8
        },
        run: {
            imageSrc: './assets/img/samuraiMack/Run.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './assets/img/samuraiMack/Jump.png',
            framesMax: 2
        },
        fall: {
            imageSrc: './assets/img/samuraiMack/Fall.png',
            framesMax: 2
        },
        attack: {
            imageSrc: './assets/img/samuraiMack/Attack2.png',
            framesMax: 6
        },
        takeHit: {
            imageSrc: './assets/img/samuraiMack/Take Hit - white silhouette.png',
            framesMax: 4
        },
        death: {
            imageSrc: './assets/img/samuraiMack/Death.png',
            framesMax: 6
        }
    },
    attackBox: {
        offset: {
            x: 80,
            y: 50
        },
        width: 160,
        height: 50
    },
    damage: 25,
    canvasObjectProperties: c,
});

const enemy = new Fighter({
    canvas: canvas,
    position: {
        x: 400,
        y: 100,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset:{
        x: -50,
        y: 0,
    },
    imageSrc: './assets/img/kenji/Idle.png',
    framesMax: 4,
    scale: 2.5,
    offset: {
        x: 215,
        y: 167,
    },
    color: 'blue',
    sprites: {
        idle: {
            imageSrc: './assets/img/kenji/Idle.png',
            framesMax: 4
        },
        run: {
            imageSrc: './assets/img/kenji/Run.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './assets/img/kenji/Jump.png',
            framesMax: 2
        },
        fall: {
            imageSrc: './assets/img/kenji/Fall.png',
            framesMax: 2
        },
        attack: {
            imageSrc: './assets/img/kenji/Attack1.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './assets/img/kenji/Take hit.png',
            framesMax: 3
        },
        death: {
            imageSrc: './assets/img/kenji/Death.png',
            framesMax: 7
        }
    },
    attackBox: {
        offset: {
            x: -170,
            y: 50
        },
        width: 170,
        height: 50
    },
    damage: 15,
    canvasObjectProperties: c
});

const keys = {
    a:{
        pressed: false,
    },
    d:{
        pressed: false,
    },
    ArrowRight:{
        pressed: false,
    },
    ArrowLeft:{
        pressed: false,
    },
}

const timerId = decreaseTimer();

function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    background.update();
    shop.update();

    c.fillStyle = 'rgba(255, 255, 255, 0.15)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    player.update();
    enemy.update();

    // Player movement
    player.velocity.x = 0;
    
    if(keys.a.pressed && player.lastKey === 'a'){
        player.velocity.x = -5;
        player.switchSprite('run');
    } else if(keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 5;
        player.switchSprite('run');
    }else{
        player.switchSprite('idle');
    }

    if(player.velocity.y < 0){
        player.switchSprite('jump');
    }else if(player.velocity.y > 0){
        player.switchSprite('fall'); 
    }

    // Enemy movement
    enemy.velocity.x = 0;
    if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
        enemy.velocity.x = -5;
        enemy.switchSprite('run');
    } else if(keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){
        enemy.velocity.x = 5;
        enemy.switchSprite('run');
    }else{
        enemy.switchSprite('idle');
    }

    if(enemy.velocity.y < 0){
        enemy.switchSprite('jump');
    }else if(enemy.velocity.y > 0){
        enemy.switchSprite('fall'); 
    }

    // Detect for collision
    if(
        rectangularCollision({
            rectangle1: player,
            rectangle2: enemy
        }) &&
        player.isAttacking && player.frameCurrent === 4
    ){          
        enemy.takeHit(player.damage)
        player.isAttacking = false;

        gsap.to('#enemyHealth', {
            width: enemy.health + '%'
        })
    }

    if(player.isAttacking && player.frameCurrent === 4){
        player.isAttacking = false;
    }
    
    if(
        rectangularCollision({
            rectangle1: enemy,
            rectangle2: player
        }) &&
        enemy.isAttacking && enemy.frameCurrent === 2
    ){
        player.takeHit(enemy.damage);
        enemy.isAttacking = false;

        gsap.to('#playerHealth', {
            width: player.health + '%'
        })
    }

    if(enemy.isAttacking && enemy.frameCurrent === 2){
        enemy.isAttacking = false;
    }

    if(enemy.health <= 0 || player.health <= 0){
        determineWinner({ player, enemy, timerId })
    }
}  
animate();

window.addEventListener('keydown', (event)=>{
    if(!player.dead){

        switch(event.key){
            case 'd':
                keys.d.pressed = true;
                player.lastKey = 'd';
                break
            case 'a':
                keys.a.pressed = true;;
                player.lastKey = 'a';
                break
            case 'w':
                player.velocity.y = -10;
                break
            case ' ':
                player.attackAction();
                break

            
        }
    }

    if(!enemy.dead){
        switch(event.key){
            case 'ArrowRight':
                keys.ArrowRight.pressed = true;
                enemy.lastKey = 'ArrowRight';
                break
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true;;
                enemy.lastKey = 'ArrowLeft';
                break
            case 'ArrowUp':
                enemy.velocity.y = -10;
                break
            case 'ArrowDown':
                enemy.attackAction();
                break
        }
    }
});

window.addEventListener('keyup', (event)=>{
    switch(event.key){
        case 'd':
            keys.d.pressed = false;
            break
        case 'a':
            keys.a.pressed = false;
            break


        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;;
            break

    }
});
