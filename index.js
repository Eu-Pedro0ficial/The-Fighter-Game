'use strict';
import Fighter from "./assets/js/classes/Fighter.js";
import Sprite from "./assets/js/classes/Spriter.js";
import { detectCollision } from "./assets/js/helpers/detectCollision.js";
import decreaseTimer from "./assets/js/helpers/decreaseTimer.js";
import determineWinner from "./assets/js/helpers/determineWinner.js";
import detectJump from "./assets/js/helpers/detectJump.js";
import characterMovement from "./assets/js/helpers/characterMovement.js";
import character from "./assets/js/helpers/characters.js";

const timeForStartGame = document.getElementById('timerForStartGame');
const playerSelected = document.getElementById('selectPlayer');
const enemySelected = document.getElementById('selectEnemy');

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

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

let player = new Fighter({
    name: "Ishikawa Aiko",
    canvas: canvas,
    position: {
        x: 200,
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
            imageSrc: {
                right: './assets/img/samuraiMack/Idle.png',
                left: './assets/img/samuraiMack/EsquerdaIdle.png'
            },
            framesMax: 8
        },
        run: {
            imageSrc: {
                right: './assets/img/samuraiMack/Run.png',
                left: './assets/img/samuraiMack/EsquerdaRun.png'
            },
            framesMax: 8
        },
        jump: {
            imageSrc: {
                right: './assets/img/samuraiMack/Jump.png',
                left: './assets/img/samuraiMack/EsquerdaJump.png'
            },
            framesMax: 2
        },
        fall: {
            imageSrc: {
                right: './assets/img/samuraiMack/Fall.png',
                left: './assets/img/samuraiMack/EsquerdaFall.png'
            },
            framesMax: 2
        },
        attack: {
            imageSrc: {
                right: './assets/img/samuraiMack/Attack2.png',
                left: './assets/img/samuraiMack/EsquerdaAttack2.png'
            },
            framesMax: 6
        },
        takeHit: {
            imageSrc: {
                right: './assets/img/samuraiMack/Take Hit - white silhouette.png',
                left: './assets/img/samuraiMack/EsquerdaTake Hit - white silhouette.png'
            },
            framesMax: 4
        },
        death: {
            imageSrc: {
                right: './assets/img/samuraiMack/Death.png',
                left: './assets/img/samuraiMack/Death.png'
            },
            framesMax: 6
        }
    },
    attackBox: {
        offset: {
            x: {
                left: -200,
                right: 95
            },
            y: 50
        },
        width: 175,
        height: 50
    },
    damage: 25,
    canvasObjectProperties: c,
});

let enemy = new Fighter({
    name: "Kenji",
    canvas: canvas,
    position: {
        x: 700,
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
            imageSrc: {
                right: './assets/img/kenji/DireitaIdle.png',
                left: './assets/img/kenji/Idle.png'
            },
            framesMax: 4
        },
        run: {
            imageSrc: {
                right: './assets/img/kenji/DireitaRun.png',
                left: './assets/img/kenji/Run.png'
            },
            framesMax: 8
        },
        jump: {
            imageSrc: {
                right: './assets/img/kenji/DireitaJump.png',
                left: './assets/img/kenji/Jump.png'
            },
            framesMax: 2
        },
        fall: {
            imageSrc: {
                right: './assets/img/kenji/DireitaFall.png',
                left: './assets/img/kenji/Fall.png'
            },
            framesMax: 2
        },
        attack: {
            imageSrc: {
                right: './assets/img/kenji/DireitaAttack1.png',
                left: './assets/img/kenji/Attack1.png'
            },
            framesMax: 4
        },
        takeHit: {
            imageSrc: {
                right: './assets/img/kenji/DireitaTake hit.png',
                left: './assets/img/kenji/Take hit.png'
            },
            framesMax: 3
        },
        death: {
            imageSrc: {
                right: './assets/img/kenji/Death.png',
                left: './assets/img/kenji/Death.png'
            },
            framesMax: 7
        }
    },
    attackBox: {
        offset: {
            x: {
                left: -170,
                right: 70
            },
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
function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    background.update();
    shop.update();
    
    c.fillStyle = 'rgba(255, 255, 255, 0.15)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    let display = window.getComputedStyle(document.getElementById('homeModal'), null).display;
    if(display === 'none'){
        player.update();
        enemy.update();
    }

    if(timeForStartGame.textContent != ''){
        return
    }

    if(!playerSelected.checked){
   
        let index = character.findIndex((element)=>{
            return element.name === player.name;
        });
        let playerSelected = character[index];
        document.getElementById('playerImage').src = playerSelected.pathImage;
        document.getElementById('playerName').innerText = playerSelected.name;
        document.getElementById('characterOne').classList.remove('active')
    }else{
        document.getElementById('characterOne').classList.add('active')
    }
    
    if(!enemySelected.checked){
        
        let index = character.findIndex((element)=>{
            return element.name === enemy.name;
        });
        let enemySelected = character[index];
        document.getElementById('enemyImage').src = enemySelected.pathImage;
        document.getElementById('enemyName').innerText = enemySelected.name;
        document.getElementById('characterTwo').classList.remove('active')
    }else{
        document.getElementById('characterTwo').classList.add('active')
    }
    
    // Player movement
    characterMovement(player, 'a', 'd', keys);
    detectJump(player);

    // Enemy movement
    characterMovement(enemy, 'ArrowLeft', 'ArrowRight', keys)
    detectJump(enemy);

    // Player Collision
    detectCollision({
        rectangle1: player,
        rectangle2: enemy,
        gsap: gsap,
        id: '#enemyHealth',
        frame: 4
    })
    
    // Enemy Collision
    detectCollision({
        rectangle1: enemy,
        rectangle2: player,
        gsap: gsap,
        id: '#playerHealth',
        frame: 2
    })
    if(enemy.health <= 0 || player.health <= 0){
        determineWinner({ player, enemy })
    }
}  
animate();

let timeValue = 3;
function startTime(){
    let index = setTimeout(startTime, 1000)
    timeForStartGame.innerText = timeValue;
    
    if(timeValue === 0){
        timeForStartGame.innerText = 'Ready';
    }

    if(timeValue <= -2){
        timeForStartGame.innerText = '';
        clearTimeout(index);
    }
    
    if(timeValue === -1){
        timeForStartGame.innerText = 'Go';
    }
    timeValue--
}

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
                if(!player.checkJump){
                    player.velocity.y = -10;
                }
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
                    if(!enemy.checkJump){
                        enemy.velocity.y = -10;
                }
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

document.getElementById('changeCharacter').addEventListener('click', ()=>{
    document.getElementById('modalForChangeCharacter').style.display = 'block';
});
document.getElementById('closeModal').addEventListener('click', ()=>{
    document.getElementById('modalForChangeCharacter').style.display = 'none';
});
document.getElementById('play').addEventListener('click', ()=>{
    enemy.direction = 'left'
    player.direction = 'right'

    decreaseTimer();
    startTime()
    
    timeForStartGame.style.display = 'block';
    document.getElementById('homeModal').style.display = 'none';
});
document.getElementById('home').addEventListener('click', ()=>{
    window.location.reload(false)
});
document.getElementById('render').addEventListener('click', (event)=>{
    let index = Number(event.target.getAttribute("data-index"));
    let characterSelected = character[index];

    characterSelected.canvas = canvas;
    characterSelected.canvasObjectProperties = c;
    
    if(playerSelected.checked){
        characterSelected.position.x = 700;
        enemy = new Fighter(characterSelected);
    }else{
        player = new Fighter(characterSelected);
    }
});

function renderCharacterPreview(){
    let content = '';
    character.forEach( ( character, index ) =>{
        content += `
            <div class="preview" data-index="${index}">
                <img src="${character.pathImage}" data-index="${index}" alt="Imagem do personagem">
                <p data-index="${index}">
                    ${character.name}
                </p>
            </div>
        `;
    })
    document.querySelector("#render").innerHTML = content;
}
renderCharacterPreview();

export {
    enemy, player
}
