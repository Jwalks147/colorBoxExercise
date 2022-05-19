function randomcolor(x) 
{
    var color = Math.floor(Math.random()*16777215).toString(16);
    //here we want to change a boxes color
    var box = document.getElementById(x);
    box.style.boxShadow = "0px 0px 22px #8fd7d2";
    box.style.backgroundColor = "#"+color;
}

function glow(x)
{
    var box = document.getElementById(x)
    box.style.boxShadow = "";
}
var container = new Array();

for (var i=0; i<100; i++){
var tag = document.createElement("div");
var text = document

}