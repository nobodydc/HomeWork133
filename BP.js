pic = "";
status = "";

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded(){
    console.log(" Model is loaded ");
    status = true;
    objdetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results)
}

function preload(){
pic = loadImage('dummy.jpeg');
}


function draw(){
    image(pic,0,0,640,420);
    fill('#e39ad9');
    text("Jisoo",50,43);
    noFill();
    stroke('#fc0303');
    rect(45,33,120,120);
    
    fill('#fc0303');
    text("Rose",186,43);
    noFill();
    stroke('#0091ff');
    rect(180,33,120,120);
    
    fill('#ffffff');
    text("Jennie",340,42);
    noFill();
    stroke('#00ff1a');
    rect(340,33,120,120);
    
    fill('#ffffff');
    text("Lisa",471,40);
    noFill();
    stroke('#00ff1a');
    rect(470,33,120,120);
    
}