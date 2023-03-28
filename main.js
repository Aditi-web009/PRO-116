noseX = 0;
noseY = 0;

function preload() { 
    nose_mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
 function setup() { canvas = createCanvas(300, 300); canvas.center(); } 
function draw() { } 
function take_snapshot() { save('myFilterImage.png'); }


function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){

    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x );
        console.log("nose y = " + results[0].pose.nose.y); 
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(nose_mustache, noseX, noseY, 40, 40);
}