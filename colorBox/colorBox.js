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
for (let i=1; i<36; i++)
{
    const boxx = document.createElement("div")
    boxx.setAttribute('id',('box'+i));
    boxx.setAttribute('class','box')
    boxx.onmouseover = randomcolor();
    boxx.onmouseleave = glow();
    document.body.appendChild(boxx);
}