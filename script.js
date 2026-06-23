let screens = document.querySelectorAll(".screen");
let current = 0;

function show(i){
  screens.forEach(s => s.classList.remove("active"));
  screens[i].classList.add("active");
  current = i;
}

/* 🔥 safe navigation */
function go(i){
  if(i >= screens.length) return;
  show(i);
}

/* 💙 wish scene (safe + cinematic) */
function wishScene(){
  fireworks();
  hearts();

  setTimeout(() => {
    go(5);
  }, 900);
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

    c.appendChild(h);
    setTimeout(()=>h.remove(), 4000);
  }
}

/* 🎆 fireworks */
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
