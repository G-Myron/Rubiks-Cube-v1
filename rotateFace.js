let faces = document.querySelectorAll(".face");


faces.forEach( (face)=> {
    let x0,y0, moving=false;
    let [initialAngX, initialAngY] = [0, 0];
    let currentAngX, currentAngY;

    face.addEventListener("mousedown", (event) => faceTouch(event.x,event.y));
    document.addEventListener("mousemove", (event) => rotateFace(event.x,event.y));
    document.addEventListener("mouseup", endFace);

    function faceTouch(x, y){
        moving = true;
        [x0,y0] = [x,y];
    }

    function rotateFace(x, y, friction = 4){
        if(!moving) return;
    
        dx = x - x0;
        dy = y - y0;
    
        angY =  dx / friction;
        angX = -dy / friction;
    
        [currentAngX, currentAngY] = [initialAngX + angX, initialAngY + angY];
    
        face.style.transform = `rotateY(${currentAngY}deg) translateZ(35vmin)`;
    }

    function endFace(){
        if(!moving) return;
        [initialAngX, initialAngY] = [currentAngX, currentAngY];
        moving = false;
    }

});

