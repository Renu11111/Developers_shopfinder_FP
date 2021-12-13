function welcomeMessage() {
	alert("Thank you for your interest in our Shop Finder.\nHopefully you enjoy this site.");
}
function contactMessage(){
    alert("Thank you for your valuable information sharing with us.\nHopefully you enjoy this site.");
}

function productMessage(){
    alert("You can view all product list here.");
}

var level = 1;
function changeImage(){
    if(level==1){
        level = 0;
        document.getElementById("logo").src = "images/logo.png";
    }else{
        document.getElementById("logo").src = "images/logo1.png";
        level = 1;
    }
    setTimeout(changeImage,2000);
}

var color = 1;
function changeColor(){
    if(color==1){
        color = 0;
        document.getElementById("heading_message").style.color = "black";
    }else{
        color = 1;
        document.getElementById("heading_message").style.color = "red";
    }
}