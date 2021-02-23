 canvas= new fabric.Canvas("myCanvas");
var block_img_height=30;
var block_img_width=30;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}
function new_img(get_img){
    fabric.Image.fromURL(get_img,function(Img){
       block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed=='80'){
        console.log("p and shift are pressed together");
        block_img_width= block_img_width+10;
        block_img_height= block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (e.shiftKey==true && keypressed=='77'){
        console.log("m and shift are pressed together");
        block_img_width= block_img_width-10;
        block_img_height= block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (keypressed=='87'){
        new_img('wall.jpg');

    }
    if (keypressed=='84'){
        new_img('trunk.jpg');

    }
    if (keypressed=='68'){
        new_img('dark_green.png');

    }
    if (keypressed=='76'){
        new_img('light_green.png');

    }
    if (keypressed=='71'){
        new_img('ground.png');

    }
    if (keypressed=='89'){
        new_img('yellow_wall.png');

    }
    if (keypressed=='82'){
        new_img('roof.jpg');

    }
    if (keypressed=='67'){
        new_img('cloud.jpg');

    }
    if (keypressed=='85'){
        new_img('unique.png');

    }
    if(keypressed == '38'){
        up();
        console.log("up");
    }
    if(keypressed == '40'){
        down();
        console.log("down");
    }
    if(keypressed == '37'){
    left();
    console.log("left");
    }
    if(keypressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
    if(player_y>=0){
        player_y= player_y-block_img_height;
        console.log("block img height" + block_img_height);
        console.log("when up arrow key is pressed X= "+ player_x+ ", Y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y= player_y+block_img_height;
        console.log("block img height" + block_img_height);
        console.log("when down arrow key is pressed X= "+ player_x+ ", Y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>0){
        player_x= player_x-block_img_width;
        console.log("block img height" + block_img_width);
        console.log("when left arrow key is pressed X= "+ player_x+ ", Y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x= player_x+block_img_width;
        console.log("block img height" + block_img_width);
        console.log("when right arrow key is pressed X= "+ player_x+ ", Y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}