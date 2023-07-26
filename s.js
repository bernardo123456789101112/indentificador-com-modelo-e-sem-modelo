img="";
stats="";
objects=[];
function preload(){
    img=loadImage('s.png');
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: detecting obejects";
}
function draw(){
    
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("cortina",30, 30, 40, 50);
    noFill();
    stroke("#FF0000");
    rect(20, 30, 440, 200);
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
   window.location.href='index.html';
}

