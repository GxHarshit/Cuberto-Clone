Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hover-target",  {
    videos: ["./0.mp4", "./2.mp4","./3.mp4"], // array of video sources or single source string
  });

  gsap.to(".fleftelem", {
    scrollTrigger: {
      trigger: "#featuredImages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });
let sections = document.querySelectorAll(".fleftelem");

  Shery.imageEffect("#images", {
    style: 5,
    config: {onMouse :{ value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger: section,
                start :"top top",
                scrub : 1,
                onUpdate : function (prog) {
                    setScroll(prog.progress+0.0739+index)
                }
            })
        })
      
    },
  });