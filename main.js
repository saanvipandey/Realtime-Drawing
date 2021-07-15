noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
rightWristY = 0;
leftWristY = 0; 

function setup()
{
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.position(100, 160);

    canvas = createCanvas(550, 350);
    canvas.position(570, 165);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    background('#FFC0CB');
    document.getElementById("square_side").innerHTML = "Width and Height of the Square wiil be = " + difference + "px";
    fill('#1E90FF');
    stroke('#0000FF');
    strokeWeight(2);
    square(noseX, noseY, difference, difference, 10);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;

        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX + "difference = " + difference);
    }
}