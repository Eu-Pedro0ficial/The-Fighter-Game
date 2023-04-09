const character = [
    // ***
    {
        name: "Ishikawa Aiko",
        pathImage: "./assets/img/samuraiMack/previewIdle.png",
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
    },
    {   
        name: "Kenji",
        pathImage: "./assets/img/kenji/previewIdle.png",
        position: {
            x: 200,
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
    },
    {
        name: "Sir Arthur",
        pathImage: "./assets/img/Sir_Arthur/previewIdle.png",
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
        imageSrc: './assets/img/Sir_Arthur/character/_Idle.png',
        framesMax: 10,
        scale: 3.3,
        offset: {
            x: 215,
            y: 115,
        },
        sprites: {
            idle: {
                imageSrc: {
                    right: './assets/img/Sir_Arthur/character/_Idle.png',
                    left: './assets/img/Sir_Arthur/esquerdaCharacter/Esquerda_Idle.png'
                },
                framesMax: 10
            },
            run: {
                imageSrc: {
                    right: './assets/img/Sir_Arthur/character/_Run.png',
                    left: './assets/img/Sir_Arthur/esquerdaCharacter/Esquerda_Run.png'
                },
                framesMax: 10
            },
            jump: {
                imageSrc: {
                    right: './assets/img/Sir_Arthur/character/_Jump.png',
                    left: './assets/img/Sir_Arthur/esquerdaCharacter/Esquerda_Jump.png'
                },
                framesMax: 3
            },
            fall: {
                imageSrc: {
                    right: './assets/img/Sir_Arthur/character/_Fall.png',
                    left: './assets/img/Sir_Arthur/esquerdaCharacter/Esquerda_Fall.png'
                },
                framesMax: 3
            },
            attack: {
                imageSrc: {
                    right: './assets/img/Sir_Arthur/character/_Attack2.png',
                    left: './assets/img/Sir_Arthur/esquerdaCharacter/Esquerda_Attack2.png'
                },
                framesMax: 6
            },
            takeHit: {
                imageSrc: {
                    right: './assets/img/Sir_Arthur/character/_Hit.png',
                    left: './assets/img/Sir_Arthur/esquerdaCharacter/Esquerda_Hit.png'
                },
                framesMax: 1
            },
            death: {
                imageSrc: {
                    right: './assets/img/Sir_Arthur/character/_Death.png',
                    left: './assets/img/Sir_Arthur/character/_Death.png'
                },
                framesMax: 10
            }
        },
        attackBox: {
            offset: {
                x: {
                    left: -180,
                    right: 0
                },
                y: 50
            },
            width: 150,
            height: 50
        },
        damage: 30,
    },
    {
        name: "Monarch of dragons",
        pathImage: "./assets/img/Striker/previewIdle.png",
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
        imageSrc: './assets/img/Striker/spr_StrikerIdle_strip.png',
        framesMax: 8,
        scale: 3.5,
        offset: {
            x: 215,
            y: 90,
        },
        sprites: {
            idle: {
                imageSrc: {
                    right: './assets/img/Striker/spr_StrikerIdle_strip.png',
                    left: './assets/img/Striker/Esquerdaspr_StrikerIdle_strip.png'
                },
                framesMax: 8
            },
            run: {
                imageSrc: {
                    right: './assets/img/Striker/spr_StrikerRun_strip.png',
                    left: './assets/img/Striker/Esquerdaspr_StrikerRun_strip.png'
                },
                framesMax: 8
            },
            jump: {
                imageSrc: {
                    right: './assets/img/Striker/jump.png',
                    left: './assets/img/Striker/Esquerdajump.png'
                },
                framesMax: 2
            },
            fall: {
                imageSrc: {
                    right: './assets/img/Striker/fall.png',
                    left: './assets/img/Striker/Esquerdafall.png'
                },
                framesMax: 2
            },
            attack: {
                imageSrc: {
                    right: './assets/img/Striker/spr_StrikerSlash_stripWithEffect.png',
                    left: './assets/img/Striker/Esquerdaspr_StrikerSlash_stripWithEffect.png'
                },
                framesMax: 16
            },
            takeHit: {
                imageSrc: {
                    right: './assets/img/Striker/spr_StrikerGetHit_strip.png',
                    left: './assets/img/Striker/Esquerdaspr_StrikerGetHit_strip.png'
                },
                framesMax: 4
            },
            death: {
                imageSrc:{
                    right: './assets/img/Striker/spr_StrikerDeath_strip.png',
                    left: './assets/img/Striker/spr_StrikerDeath_strip.png'
                },
                framesMax: 16
            }
        },
        attackBox: {
            offset: {
                x: {
                    left: -140,
                    right: 0
                },
                y: 50
            },
            width: 160,
            height: 50
        },
        damage: 25,
    },
];

export default character;