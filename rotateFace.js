let faces = document.querySelectorAll(".face");

rotaionsList = [
    "rotateY(0deg) translateZ(35vmin)",
    "rotateY(180deg) translateZ(35vmin)",
    "rotateY(90deg) translateZ(35vmin)",
    "rotateY(-90deg) translateZ(35vmin)",
    "rotateX(90deg) translateZ(35vmin)",
    "rotateX(-90deg) translateZ(35vmin)"
]

faces.forEach( (face, iter)=> {
    let x0,y0, moving=false;
    let [initialAngX, initialAngY] = [0, 0];
    let currentAngX, currentAngY;

    face.style.transform = rotaionsList[iter];

    face.addEventListener("mousedown", (event) => faceTouch(event.x,event.y));
    document.addEventListener("mousemove", (event) => rotateFace(event.x,event.y));
    document.addEventListener("mouseup", endFace);

    function faceTouch(x, y){
        moving = true;
        [x0,y0] = [x,y];
    }

    function rotateFace(x, y, friction = 2){
        if(!moving) return;
    
        dx = x - x0;
        dy = y - y0;
        [x0,y0] = [x,y];
    
        angY =  dx / friction;
        angX = -dy / friction;
    
        [currentAngX, currentAngY] = [initialAngX + angX, initialAngY + angY];
    
        face.style.transform += `rotate(${currentAngY}deg)`;
    }

    function endFace(){
        if(!moving) return;
        [initialAngX, initialAngY] = [currentAngX, currentAngY];
        moving = false;
    }

});

