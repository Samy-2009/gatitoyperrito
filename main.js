objectDetector = "";

img = "";
status ="";
objects = [];


function preload(){
    img = loadImage('dog_cat.jpg');
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }

    console.log(results);
    objects = results;
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Estatus: Detectando objetos";
}
function modelLoaded(){
    console.log("Modelo Cargado!")
    objectDetector.detect(img, gotResult);
    status = true;
}
function draw(){
    image(img, 0, 0, 640, 420);

    if (status !=""){
        for (var i=0; i<objects.lenght; i++){
            document.getElementById("status").innerHTML = "Estatus: objeto detectado";
    
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text (objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}



