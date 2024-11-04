const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});



const card = document.querySelectorAll('.image');
const container = document.querySelector('.page2-left');

//Moving animation event
for (let i = 0; i < card.length; i++) {
    
container.addEventListener('mousemove', (e)=>{

    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    
    card[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

// Animate in
container.addEventListener('mouseenter', (e)=>{
    card[i].style.transition = "all 0.1s ease";
      card[i].style.transform = "translateZ(20000px)"
});

// Animate Out
container.addEventListener('mouseleave', (e)=>{
    card[i].style.transition = "all 0.5s ease";
    card[i].style.transform = `rotateY(0deg) rotateX(0deg)`
});

    
}







