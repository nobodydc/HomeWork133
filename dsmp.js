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
pic = loadImage('Dream_Team.png');
}


function draw(){
    image(pic,0,0,640,420);
    fill('#fc0333');
    text("Sapnap",60,30);
    noFill();
    stroke('#fc0303');
    rect(55,13,200,200);
    
    fill('#fc0303');
    text("GeorgeNotFound",236,43);
    noFill();
    stroke('#0091ff');
    rect(230,28,170,170);
    
    fill('#ffffff');
    text("Dream",400,38);
    noFill();
    stroke('#00ff1a');
    rect(390,20,230,200);
    
    
}
