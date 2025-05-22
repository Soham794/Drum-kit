const map = new Map();

map.set("w", "tom-1");
map.set("a", "tom-2");
map.set("s", "tom-3");
map.set("d", "tom-4");
map.set("j", "snare");
map.set("l", "kick-bass");
map.set("k", "crash");

const keyboard = {
    "w" : "tom-1", "a" : "tom-2", "s" : "tom-3",  "d" : "tom-4", "j" : "snare", 
    "l" : "kick-bass", "k" : "crash",
}

function makeSound(key){
    var audio = new Audio("./sounds/"+map.get(key)+".mp3");
    audio.play();
}

function animateOnClick(key){
    let buttonClicked = document.querySelector("."+key);
    buttonClicked.classList.toggle("pressed");
    setTimeout(()=>{buttonClicked.classList.toggle("pressed");}, 80);
}

for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        // var audio =  new Audio("./sounds/"+map.get(this.textContent)+".mp3");
        // audio.play();
        makeSound(this.textContent);
        animateOnClick(this.textContent);
        // var og = this.style.color;
        // this.style.color = "white";
        // var delay = 100;
        // setTimeout(()=>{this.style.color = og;}, delay);    
    })
}


document.addEventListener("keydown",function(event){
    // var audio = new Audio("./sounds/"+keyboard[key.key]+".mp3");
    // audio.play();
    makeSound(event.key);
    animateOnClick(event.key);
});
