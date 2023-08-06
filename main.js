function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#3E41FF')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}