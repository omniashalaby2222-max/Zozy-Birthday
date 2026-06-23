const screens = document.querySelectorAll(".screen");

function show(i){
  screens.forEach(s => s.classList.remove("active"));
  if(screens[i]) screens[i].classList.add("active");
}

function go(i){
  show(i);
}

function wishScene(){
  fireworks();
  hearts();
  setTimeout(() => go(5), 800);
}

function hearts(){
  const c = document.getElementById("hearts");
  if(!c) return;

  for(let i=0;i<20;i++){
    let h = document.createElement("div");
    h.innerHTML = "💙";
    h.style.position = "absolute";
    h.style.left = Math.random()*100 + "vw";
    h.style.top = "100vh";
    h.style.fontSize = "18px";

    c.appendChild(h);
    setTimeout(()=>h.remove(), 4000);
  }
}

function fireworks(){
  const c = document.getElementById("fx");
  if(!c) return;

  for(let i=0;i<40;i++){
    let d = document.createElement("div");
    d.style.position = "absolute";
    d.style.width = "6px";
    d.style.height = "6px";
    d.style.borderRadius = "50%";
    d.style.left = Math.random()*100 + "vw";
    d.style.top = Math.random()*100 + "vh";

    c.appendChild(d);
    setTimeout(()=>d.remove(), 1000);
  }
}