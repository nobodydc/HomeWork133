pic = "";
status = "";
object = [];

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded(){
    console.log(" Model is loaded ");
    status = true;
    objdetector.detect(pic,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results)
    object = results;
}

function preload(){
pic = loadImage('btspic.jfif');
}


function draw(){
image(pic,0,0,640,420);
    if(status != ""){
        for(i = 0; i<object.length; i++){
            document.getElementById("status").innerHTML = "Status : objects detected";
            fill("#ff1100");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x - 15, object[i].y - 15);
            noFill();
            stroke("#000000");
            rect(object[i].x - 25,object[i].y - 25,object[i].width - 20,object[i].height - 70);
        }
    }
    
}