leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
accelerant = null;
edd = null;
function preload()
{
    accelerant = loadSound("accelerant.mp3");
    edd = loadSound("edd.webm")
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left Wrist X = " + leftWristX+" left Wrist Y = "+ leftWristX);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right Wrist X = " + rightWristX+" right Wrist Y = "+ rightWristX);
    }
}