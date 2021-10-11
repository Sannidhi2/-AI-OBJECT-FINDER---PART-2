status="";

function setup()
{
    canvas=createCanvas(430, 330);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,430,330); 
}
function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    input=document.getElementById("text").value;
}
function modelLoaded()
{
    console.log("Model Loaded !");
    status=true;
}