
function sound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            
        case "s":
            var snare =new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "g":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "v":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "h":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

    }
}

// For click :

for(var i=0; i<document.querySelectorAll(".kit").length;i++){
    document.querySelectorAll(".kit")[i].addEventListener("click", function(){
        var key = this.innerHTML;
        sound(key);
        animation(key);
    })
}

// For press :

document.addEventListener("keydown", function(event){
    sound(event.key);
    animation(event.key);
})

// For animation:

function animation(currentKey){
    document.querySelector("."+ currentKey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+ currentKey).classList.remove("pressed");
    }, 100);
}