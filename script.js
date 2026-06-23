const screens = document.querySelectorAll(".screen");
let current = 0;

function show(i){
  screens.forEach(s => s.classList.remove("active"));
  if(screens[i]) screens[i].classList.add("active");
  current = i;
}

function next(){
  if(current < screens.length - 1){
    show(current + 1);
  }
}

/* 💙 hearts */
function hearts(){
  const c = document.getElementById("hearts");

  for(let i=0;i<25;i++){
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💙";
    h.style.left = Math.random()*100 + "vw";
    h.style.top = "100vh";
    h.style.fontSize = (14 + Math.random()*18) + "px";

    c.appendChild(h);
    setTimeout(()=>h.remove(), 4000);
  }
}

/* ✨ fireworks */
function fireworks(){
  const c = document.getElementById("fx");

  for(let i=0;i<50;i++){
    let d = document.createElement("div");
    d.className = "fx-dot";
    d.style.left = Math.random()*100 + "vw";
    d.style.top = Math.random()*100 + "vh";

    c.appendChild(d);
    setTimeout(()=>d.remove(), 1000);
  }
}

/* 🎬 wish cinematic moment */
function wish(){
  hearts();
  fireworks();

  setTimeout(() => {
    next();
  }, 1000);
}