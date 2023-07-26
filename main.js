img="";
stats="";
objects=[];
function preload(){
    img=loadImage('q.png');
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: detecting obejects";
}
function draw(){
    
    image(img, 0, 0, 640, 420);
    if(stats != ""){
        for(i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML= "Status: Objeto Detectado";
            fill("#F0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x +15, objects[i].y +15);
            noFill();
            stroke("#F0000")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model loaded")
    stats=true;
    objectDetector.detect(img, gotResult);
}
 function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function trocar(){
   window.location.href='s.html';
}

