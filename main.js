hat_x = 0;
hat_y = 0;
function preload(){
    hat = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    //loading the poseNet
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotposes);
}
function modelloaded(){
    console.log("poseNet is starting");
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);
        hat_x = result[0].pose.nose.x-25;
        hat_y = result[0].pose.nose.y+0;
    }
}
function draw(){
    image(video,0,0,400,400);
    image(hat, hat_x, hat_y, 75, 50);
}
function take_snapshot(){
    save("filter.png");
}