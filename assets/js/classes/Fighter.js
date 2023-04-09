import Sprite from "./Spriter.js";

class Fighter extends Sprite{

    constructor(
            { 
            name,
            canvas, 
            position, 
            velocity, 
            color = 'red', 
            imageSrc, 
            scale = 1, 
            framesMax = 1,
            offset = {x: 0, y: 0},
            sprites,
            attackBox = {
                offset: {},
                width: undefined,
                height: undefined
            },
            damage,
            canvasObjectProperties 
        }
        ){
        super({
            position, 
            imageSrc, 
            scale, 
            framesMax,
            offset
        });
        this.name = name;
        this.canvas = canvas;
        // this.position = position;
        this.velocity = velocity;
        this.width = 50;
        this.height = 150;
        this.lastKey = '';
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height,
        }
        this.color = color;
        this.isAttacking;
        this.health = 100;
        this.frameCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 5;
        this.sprites = sprites;
        this.damage = damage;
        this.dead = false;
        this.canvasObjectProperties = canvasObjectProperties;

        this.direction = 'right'

        for(const sprite in sprites){
            // ***
            sprites[sprite].image = new Object();
            sprites[sprite].image.left = new Image();
            sprites[sprite].image.right = new Image();
            sprites[sprite].image.left.src = sprites[sprite].imageSrc.left;
            sprites[sprite].image.right.src = sprites[sprite].imageSrc.right;
        }
    }

    update(){
        this.draw();
        if (!this.dead) this.animateFrames();


        this.attackBox.position.x = this.position.x + this.attackBox.offset.x[this.direction];
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

        this.canvasObjectProperties.fillRect(
          this.attackBox.position.x,
          this.attackBox.position.y,
          this.attackBox.width,
          this.attackBox.height
        )
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
        const gravity = 0.2;
        if(this.position.y + this.height + this.velocity.y >= this.canvas.height - 96){
            this.velocity.y = 0;
            this.position.y = 330;
        }else{
            this.velocity.y += gravity;
        }
    }

    attackAction(){
        this.switchSprite('attack');
        this.isAttacking = true;
    }

    takeHit(damage){
        this.health -= damage;
        
        if(this.health <= 0){
            this.switchSprite('death')
        }else{
            this.switchSprite('takeHit')
        }
    }

    switchSprite(sprite){
        if(this.image === this.sprites.death.image[this.direction]){
            if(this.frameCurrent === this.sprites.death.framesMax - 1){
                this.dead = true;
            }
            return;
        }

        if(
            this.image === this.sprites.attack.image[this.direction] &&
            this.frameCurrent < this.sprites.attack.framesMax - 1
        ) return

        if(
            this.image === this.sprites.takeHit.image[this.direction] &&
            this.frameCurrent < this.sprites.takeHit.framesMax - 1
        ) return

        switch (sprite) {
            // ***
            case 'idle':
                if(this.image !== this.sprites.idle.image[this.direction]){
                    this.image = this.sprites.idle.image[this.direction];
                    this.framesMax = this.sprites.idle.framesMax;
                    this.frameCurrent = 0;
                }
                break;
            case 'run':
                if(this.image !== this.sprites.run.image[this.direction]){
                    this.image = this.sprites.run.image[this.direction];
                    this.framesMax = this.sprites.run.framesMax;
                    this.frameCurrent = 0;
                }
                break;
            case 'jump':
                if(this.image !== this.sprites.jump.image[this.direction]){
                    this.image = this.sprites.jump.image[this.direction];
                    this.framesMax = this.sprites.jump.framesMax;
                    this.frameCurrent = 0;
                }
                break;
            case 'fall':
                if(this.image !== this.sprites.fall.image[this.direction]){
                    this.image = this.sprites.fall.image[this.direction];
                    this.framesMax = this.sprites.fall.framesMax;
                    this.frameCurrent = 0;
                }
                break;
            case 'attack':
                if(this.image !== this.sprites.attack.image[this.direction]){
                    this.image = this.sprites.attack.image[this.direction];
                    this.framesMax = this.sprites.attack.framesMax;
                    this.frameCurrent = 0;
                }
                break;
            case 'takeHit':
                if(this.image !== this.sprites.takeHit.image[this.direction]){
                    this.image = this.sprites.takeHit.image[this.direction];
                    this.framesMax = this.sprites.takeHit.framesMax;
                    this.frameCurrent = 0;
                }
                break;
            case 'death':
                if(this.image !== this.sprites.death.image[this.direction]){
                    this.image = this.sprites.death.image[this.direction];
                    this.framesMax = this.sprites.death.framesMax;
                    this.frameCurrent = 0;
                }
            break;
            default:
                break;
        }
    }
}

export default Fighter;
