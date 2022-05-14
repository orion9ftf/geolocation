const d = document;
let x = 0,
y = 0;


export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
    //console.log(e.keyCode);
    //console.log(e.key);
    //console.log(limitsBall, limitsStage);
    
    switch(e.keyCode){
        case 37: //izquierda
        e.preventDefault();
        //move("left");
        if(limitsBall.left > limitsStage.left)
        e.preventDefault();
        x--;
        break;
        case 38: // btn arriba
        e.preventDefault();
        //move("up");
        y--;
        break;
        case 39: // derecha
        e.preventDefault();
        //move("right");
        x++;
        break;
        case 40: //abajo
        e.preventDefault();
        //move("down");
        y++;
        break;
        
        default:
            break;
        }
        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}

export function shortcuts(e){
    /*console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
*/
}