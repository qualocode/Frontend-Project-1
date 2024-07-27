// --------------------------------------
// ------------ H E A D E R -------------
// --------------------------------------

function headerAnim(elm, x) {
  gsap.from(elm, {
    x: x,
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    delay: 1,
  });
}

headerAnim("#header .title", 400);
headerAnim("#header .para", 400);
headerAnim("#header .btn", 460);

// --------------------------------------
// -------------- M A I N ---------------
// --------------------------------------

// ------------ Section # 1 -------------

gsap.from("#main .sctOne", {
  x: 600,
  opacity: 0,
  scrollTrigger: {
    trigger: "#main .sctOne",
    scroller: "body",
    start: "top 60%",
    end: "top 60%",
    scrub: 4,
  },
});

// ------------ Section # 4 -------------

gsap.from("#main .sctFour .sct4Desc", {
  y: 600,
  opacity: 0,
  scrollTrigger: {
    trigger: "#main .sctFour",
    scroller: "body",
    start: "top 60%",
    end: "top 60%",
    scrub: 2,
  },
});

// ------------ Section # 5 -------------

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main .sctFive",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 3,
  },
});

tl.from("#main .sctFive .heading", {
  scale: 0,
  opacity: 0,
});

tl.from(".sctFive .numContainer .boxes", {
  y: 300,
  opacity: 0,
  stagger: 1,
});

// ------------ Section # 6 -------------

function sctSixAnim(elm) {
  gsap.from(elm, {
    opacity: 0,
    duration: 1.2,
    scale: 0,

    scrollTrigger: {
      trigger: "#main .sctSix",
      scroller: "body",
      start: "top 70%",
      end: "top 70%",
      scrub: 3,
    },
  });
}

sctSixAnim("#main .sctSix .heading");
sctSixAnim("#main .sctSix .cardContainer .boxes");

// ------------ Section # 7 -------------

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main .sctSeven",
    scroller: "body",
    start: "top 55%",
    end: "top 55%",
    scrub: 3,
  },
});

tl2.from("#main .sctSeven .heading", {
  scale: 0,
  opacity: 0,
  duration: 3,
});

tl2.from(".sctSeven .aboutTeam .mbrCards", {
  y: 300,
  opacity: 0,
  duration: 8,
  stagger: 1,
});

// ------------ Section # 8 -------------

gsap.from("#main .sctEight .headContent h2", {
  opacity: 0,
  scale: 0,
  duration: 2,

  scrollTrigger: {
    trigger: "#main .sctEight .headContent",
    scroller: "body",
    start: "top 70%",
    end: "top 70%",
    scrub: 3,
  },
});

// ------------ Section # 9 -------------

function sctNineAnim(elm, trg) {
  gsap.from(elm, {
    opacity: 0,
    scale: 0,
    duration: 2,

    scrollTrigger: {
      trigger: trg,
      scroller: "body",
      start: "top 70%",
      end: "top 70%",
      scrub: 3,
    },
  });
}

sctNineAnim("#main .sctNine .gall1 > h2", "#main .sctNine");
sctNineAnim("#main .sctNine .gall2 > h2", "#main .sctNine .gall2");

// ------------ Section # 10 -------------

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main .sctTen",
    scroller: "body",
    start: "top 50%",
    end: "top 50%",
    scrub: 3,
  },
});

tl3.from("#main .sctTen > h2", {
  opacity: 0,
  duration: 1,
  transform: "rotateX(90deg)",
  ease: "bounce.out",
});

tl3.from(
  "#main .sctTen .cardsCont .cards",
  {
    y: 140,
    opacity: 0,
  },
  "-=0.8"
);
