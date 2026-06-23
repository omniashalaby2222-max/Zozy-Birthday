let screens = document.querySelectorAll(".screen");
let current = 0;

function showScreen(i){
  screens.forEach(s => s.classList.remove("active"));
  screens[i].classList.add("active");
}

function nextScreen(){
  current++;
  if(current < screens.length){
    showScreen(current);
  }
}

function openExperience(){
  let name = document.getElementById("name").value;

  document.getElementById("title").innerText =
  "Happy Birthday " + name + " 💙";

  createStars();
  nextScreen();
}

/* stars */
function createStars(){
  for(let i=0;i<100;i++){
    let s = document.createElement("div");
    s.className="star";
    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";
    document.body.appendChild(s);
  }
}

/* fireworks */
function fireworks(){
  document.getElementById("fireworks").innerHTML = "";

  for(let i=0;i<50;i++){
    let f = document.createElement("div");
    f.className="firework";
    f.style.left=Math.random()*100+"vw";
    f.style.top=Math.random()*100+"vh";

    let colors = ["#7cc7ff","#ffffff","#c8a27a","#a7d8ff"];
    f.style.background = colors[Math.floor(Math.random()*colors.length)];

    document.getElementById("fireworks").appendChild(f);
  }
}