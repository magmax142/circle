canvas=document.getElementById("myCanvas");
pen=canvas.getContext("2d");
var mouseEvent="";
var lastPositionOfX,lastPositionOfY;
color="black";
widthOfLine=1;

canvas.addEventListener("mousedown",mousedoingsomething);
function mousedoingsomething(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", mousedoingsomethingelse);
function mousedoingsomethingelse(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", mousedoinganotherthing );
function mousedoinganotherthing(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", mousedoingwhatever);
function mousedoingwhatever(e){
    currentPositionOfX=e.clientX-canvas.offsetLeft;
    currentPositionOfY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        pen.beginPath();
        pen.strokeStyle=color;
        pen.lineWidth=widthOfLine;
        pen.arc(currentPositionOfX,currentPositionOfY,20,0,2*Math.PI)
        pen.stroke();
    }
}

function erase(){
    pen.clearRect(0,0,canvas.width,canvas.height);
}










