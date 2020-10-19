class Form {

constructor(){

}
display(){
var title = createElement("h2");
title.html("Car Racing Game");
title.position(200,100);
var input = createInput("Enter Your Name");
input.position(200,200);
var button = createButton("START");
button.position(250,300);
var greeting = createElement("h4");
button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playerCount+=1;
    player.update(name);
    player.updateCount(playerCount);
    greeting.html("hello" + name);
    greeting.position(200,200);
})
}


}