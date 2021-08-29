canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 90;
rover_width = 100;

rover_x = 10;
rover_y = 10;

nasa_mars_images=["img1.jfif","img2.jpg","img3.jfif","img4.jfif","mars.jpg"]
var randomNumber= Math.floor(Math.random()*5)

bg_img = nasa_mars_images[randomNumber]
rover_img = "rover.png"

function add() {

    bg_imgTag = new Image();
    console.log(bg_imgTag);
    bg_imgTag.onload = upload_bg
    bg_imgTag.src = bg_img


    rover_imgTag = new Image();
    console.log(rover_imgTag);
    rover_imgTag.onload = upload_rover
    rover_imgTag.src = rover_img

}

function upload_bg() {

    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height)

}

function upload_rover() {

    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height)

}

window.addEventListener("keydown", keydown)
function keydown(e) {

    console.log(e);
    var keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == "37") {

        left();

    }

    if (keypressed == "38") {

        up();

    }

    if (keypressed == "39") {

        right();

    }


    if (keypressed == "40") {

        down();

    }

}


function up() {

    if (rover_y > 0) {

        rover_y = rover_y - 10
        console.log("rover y =" + rover_y)
        upload_bg()
        upload_rover()
    }

}

function down() {

    if (rover_y < 500) {

        rover_y = rover_y + 10
        console.log("rover y =" + rover_y)
        upload_bg()
        upload_rover()
    }

}


function left() {

    if (rover_x > 0) {

        rover_x = rover_x - 10
        console.log("rover x =" + rover_x)
        upload_bg()
        upload_rover()
    }

}

function right() {

    if (rover_x < 700) {

        rover_x = rover_x + 10
        console.log("rover x =" + rover_x)
        upload_bg()
        upload_rover()
    }

}

