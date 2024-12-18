let tl = gsap.timeline();
let tl1 = gsap.timeline();

function page1() {
    tl.from(".line-b", {
        // border: "none"
        delay: 0.1,
        duration: 0.8,
        width: 0
    })
    tl.from(".nav h3", {
        opacity: 0,
        y: -10,
        scale: 0.1,
        delay: 0.1,
        duration: 0.5
    })
    tl.from(".navi span", {
        opacity: 0,
        y: -10,
        // scale:0.1,
        delay: 0.1,
        duration: 0.5,
        stagger: 0.2
    })
    tl.from(".menu1 a", {
        opacity: 0,
        y: -10,
        // scale:0.1,
        delay: 0.1,
        duration: 0.5,
        stagger: 0.2
    }, "o")
    tl.from(".menu1 span", {
        opacity: 0,
        // y:-10,
        scale: 0.1,
        delay: 0.1,
        duration: 0.5,
        stagger: 0.2
    }, "o")
    tl.from(".heading span", {
        x: -20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5
    })
    tl.from(".heading button", {
        opacity: 0,
        scale: 0.1,
        duration: 0.5
    }, "ok")
    tl.from(".bk", {
        opacity: 0,
        scale: 0.1,
        duration: 0.5
    }, "ok")
    tl.from(".func1 img", {
        opacity: 0,
        scale: 0.1,
        duration: 0.5
    }, "a")
    tl.from(".func1 span", {
        y: -10,
        opacity: 0,
        scale: 0.1,
        duration: 0.5
    }, "a")
}
tl1.from(".main2",{
    
})
page1();