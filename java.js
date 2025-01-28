// ACTIVE-NAVBAR

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.clzsslist.add("scroll-on");
    }
}

// NAVBAR-HID

let navBar = document.querySelector(`.nav-link`);
let navCollapse = document.querySelector(`.navbar-cllapse.collapse`);
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// COUNTER-DESIGN

document.addEventListener("DOMComtentloaded", ()=>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        counter = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() =>{
            current += increment;
            obj.textcontent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 0, 1287, 3000);
    counter("count3", 0, 1287, 3000);
    counter("count4", 0, 1287, 3000);

});