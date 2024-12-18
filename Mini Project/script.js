let icon1 = document.querySelector(".icon1");
let icon3 = document.querySelector(".icon3");
let log = document.querySelector(".log");
let log1 = document.querySelector("#s1");
let log2 = document.querySelector("#s2");
let cl = document.querySelectorAll(".close");
console.log(cl.src);
if (icon1) {
    icon1.addEventListener("click", (e) => {
        e.stopPropagation();
        log.classList.add("ad");
        console.log(1);
    })
}
if (icon3) {
    icon3.addEventListener("click", (e) => {
        e.stopPropagation();
        log1.classList.add("ad");
        console.log(1);
    })
}
if (cl) {
    cl.forEach(e=>{

        e.addEventListener("click", (e) => {
            e.stopPropagation();
            log.classList.remove("ad")
            log1.classList.remove("ad")
            log2.classList.remove("ad")
        })
    }
    )
}
window.addEventListener("scroll",()=>{
    let srl=document.querySelector(".srl");
    this.scrollY>=300?srl.classList.add("scr"):srl.classList.remove("scr");
})




// locomotive js
const scroll = new LocomotiveScroll({
    el: document.querySelector('.scroll'),
    smooth: true
});