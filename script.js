gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true
});
document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = this.getAttribute("href");

    gsap.to(window, {
      scrollTo: target,
      ease: "power3.inOut"
    });
  });
});

gsap.from(".hero", {
    opacity:0,
    duration:1,
})

gsap.from(".degrade1", { 
  x: 100,
  duration: 1,
  filter: "blur(20px)"
});

gsap.from(".degrade",{
    opacity: 0,
    duration:2
})

gsap.from(".port", {
    x:-50,
    opacity: 0,
    duration:1,
    filter: "blur(20px)",
})

gsap.fromTo(".port", 
  { y: 0, opacity: 1 },
  {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#sobre",
      start: "top 70%",
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  }
);

gsap.from(".logo",{
    x:-50,
    opacity:0,
    duration:1,
    filter: "blur(20px)"
})

gsap.fromTo(".logo", 
  { y: 0, opacity: 1 },
  {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#sobre",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true,
    }
  }
);

gsap.from(".menu-link", {
  y: -40,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.15,
  filter: "blur(20px)"
});

//  Sobre  //
gsap.set(".Minhafoto", {
  opacity: 0,
  y: 100,
  filter: "blur(10px)"
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#sobre",
    start: "top 70%",
    endTrigger: "#skills",
    end: "top 10%",
    scrub: true
  }
});

tl.to(".Minhafoto", {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  duration: 1
})
.to(".Minhafoto", {
  opacity: 0,
  y: -80,
  filter: "blur(10px)",
  duration: 1
});

// titulo  //

const split = new SplitText(".h2s", {
  type: "chars, words, lines"
});

gsap.from(split.chars, {
  y: 50,
  opacity: 0,
  stagger: 0.08,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
      trigger: "#sobre",
      start: "top 60%",
      toggleActions: "play reverse play reverse"
  }
});

gsap.fromTo(".h2s", 
  { opacity: 1, y: 0 },
  {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#skills",
      start: "top 60%",
      toggleActions: "play reverse play reverse",
    }
  }
);


// TEXTO  //
const splitTextosobre = new SplitText(".texto-sobre", {
  type: "words"
});

gsap.from(splitTextosobre.words, {
  y: 80,
  opacity: 0,
  stagger: 0.01,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
      trigger: "#sobre",
      start: "top 50%",
      toggleActions: "play reverse play reverse",
  }
  }
)
gsap.fromTo(".texto-sobre", 
  { opacity: 1, y: 0 },
  {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    }
  }
);

// bolinhas //

gsap.set(".cards > div", {
  opacity: 0,
  y: 100,
  filter: "blur(10px)"
});

let tlCards = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards",
    start: "top 90%",  
    end: "bottom 20%",
    scrub: true
  }
});

tlCards
.to(".cards > div", {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  stagger: 0.15,
  duration: 1
})
.to(".cards > div", {
  opacity: 0,
  y: -80,
  filter: "blur(10px)",
  stagger: 0.15,
  duration: 1
});

// skills //

const splitskills = new SplitText(".skills h2", {
  type: "chars, words, lines"
});
let tlSkills = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    start: "top 75%",          
    endTrigger: "#projetos",
    end: "+=400",            
    scrub: 1,
  }
});

tlSkills.from(splitskills.chars, {
  y: 50,
  opacity: 0,
  stagger: 0.03,
  ease: "power2.out",
}, 0);

tlSkills.from(".aplica img", {
  y: 40,
  opacity: 0,
  scale: 0.8,
  stagger: 0.1,
  ease: "power2.out",
}, 0.2);

gsap.to([".skills h2", ".aplica img"], {
  opacity: 0,
  stagger: 0.05,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#projetos",
    start: "top 60%",
    toggleActions: "play reverse play reverse"
  }
});

const splitHard = new SplitText(".hardtext", {
  type: "chars"
});

let tlHard = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    start: "top 75%",
    endTrigger: "#projetos",
    end: "+=400",
    scrub: 1,
  }
});

// ENTRADA
tlHard.from(splitHard.chars, {
  y: 50,
  opacity: 0,
  stagger: 0.03,
  ease: "power2.out",
}, 0);

// SAÍDA
gsap.to(splitHard.chars, {
  opacity: 0,
  y: -20,
  stagger: 0.02,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#projetos",
    start: "top 60%",
    toggleActions: "play reverse play reverse",
    immediateRender: false,
    overwrite: "auto"
  }
});
const splitSoft = new SplitText(".softtext", {
  type: "chars"
});

let tlSoft = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    start: "top 75%",
    endTrigger: "#projetos",
    end: "+=400",
    scrub: 1,
  }
});

// ENTRADA

tlSoft.from(splitSoft.chars, {
  y: 50,
  opacity: 0,
  stagger: 0.03,
  ease: "power2.out",
}, 0.2);

// SAÍDA

gsap.to(splitSoft.chars, {
  opacity: 0,
  y: -20,
  stagger: 0.02,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#projetos",
    start: "top 60%",
    toggleActions: "play reverse play reverse",
    immediateRender: false,
    overwrite: "auto"
  }
});


// orb //

gsap.to(".orb-medium", {
  scale: 4,
  x: -550,
  y: 770,
  rotate: 25,
  opacity: 0.2,
  filter: "blur(2px)",
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#skills",
    start: "bottom 80%",
    endTrigger: "#projetos",
    end: "top 20%",
    scrub: 1.5
  }
});
let tlSkillsExit = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    start: "bottom 80%",
    end: "bottom 30%",
    scrub: 1.2
  }
});


tlSkillsExit.to(".orb-big", {
  y: -200,
  scale: 0.6,
  rotate: -30,
  opacity: 0,
  filter: "blur(8px)",
  ease: "power2.out"
}, 0);


tlSkillsExit.to(".orb-small", {
  y: 200,
  x: 90,
  scale: 0.3,
  rotate: 40,
  opacity: 0,
  filter: "blur(6px)",
  ease: "power2.out"
}, 0);

// projetos //

const splitTituloProjetos = new SplitText(".titu", {
  type: "chars"
});

gsap.from(splitTituloProjetos.chars, {
  y: 60,
  opacity: 0,
  stagger: 0.04,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#projetos",
    start: "top 70%",
    toggleActions: "play reverse play reverse"
  }
});


// TEXTO PROJETOS
const splitTextoProjetos = new SplitText(".textproj", {
  type: "words"
});

gsap.from(splitTextoProjetos.words, {
  y: 50,
  opacity: 0,
  stagger: 0.01,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#projetos",
    start: "top 70%",
    toggleActions: "play reverse play reverse"
  }
});
let tlExitSkillsText = gsap.timeline({
  scrollTrigger: {
    trigger: "#cursos",
    start: "top 70%",  
    end: "top 40%",
    scrub: 1.2
  }
});

tlExitSkillsText
  .to(".titu", {
    y: -50,
    opacity: 0,
    filter: "blur(6px)",
    ease: "power2.out"
  }, 0)

  .to(".textproj", {
    y: -30,
    opacity: 0,
    filter: "blur(4px)",
    ease: "power2.out"
  }, 0);


let imagens = gsap.utils.toArray(".imagens-celular img");


imagens.forEach(img => {
  img.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.05, duration: 0.3 });
  });

  img.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, duration: 0.3 });
  });
});


let tlcelular = gsap.timeline({
  scrollTrigger: {
    trigger: "#projetos",
    start: "top 75%",
    end: "bottom 15%",
    scrub: 1,
  }
});

tlcelular.from(imagens, {
  x: (i) => i === 0 ? -300 : i === 2 ? 300 : 0,
  y: (i) => i === 1 ? -300 : 0,
  rotate: (i) => i === 0 ? -20 : i === 1 ? 15 : 20,
  opacity: 0,
  scale: 0.6,
  filter: "blur(8px)",
  stagger: 0.15,
  duration: 1
});

// SAÍDA
tlcelular.to(imagens, {
  x: (i) => i === 0 ? -300 : i === 2 ? 300 : 0,
  y: (i) => i === 1 ? -300 : 0,
  rotate: (i) => i === 0 ? -20 : i === 1 ? 15 : 20,
  opacity: 0,
  scale: 0.6,
  filter: "blur(8px)",
  stagger: 0.15,
  duration: 1
});

//  Cursos //

const splitTitucursos = new SplitText(".titucurso", {
  type: "words"
});
gsap.from(splitTitucursos.words, {
  y: 50,
  opacity: 0,
  stagger: 0.01,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#cursos",
    start: "top 70%",
    toggleActions: "play reverse play reverse"
  }
});

const splitTextoCursos = new SplitText(".curso-texto", {
  type: "words"
});
gsap.from(splitTextoCursos.words, {
  y: 50,
  opacity: 0,
  stagger: 0.01,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#cursos",
    start: "top 50%",
    toggleActions: "play reverse play reverse"
  }
});

let tlCursos = gsap.timeline({
  scrollTrigger: {
    trigger: ".cursos",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});

tlCursos.from(".curso-item", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.25,
  ease: "power3.out"
});

tlCursos.from(".curso-item img", {
  scale: 0.6,
  opacity: 0,
  duration: 0.8,
  stagger: 0.25,
  ease: "back.out(1.7)"
}, "-=0.8");

let mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {

  gsap.to(".orb-medium", {
    opacity: 0.9,
    scrollTrigger: {
      trigger: "#sobre",
      scrub: true
    }
  });

});

mm.add("(max-width: 768px)", () => {

  gsap.to(".orb-big", {
   
    filter: "blur(6px)",
  })})

mm.add("(max-width: 768px)", () => {

  gsap.to(".orb-small", {
    
    filter: "blur(6px)",
  })})
mm.add("(max-width: 769px)",  () => {   
gsap.to(".orb-medium", {
  scale: 3,
  x: -75,
  y: 470,
  rotate: 25,
  opacity: 0.2,
  filter: "blur(2px)",
  opacity: 0.10,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#skills",
    start: "bottom 80%",
    endTrigger: "#projetos",
    end: "top 20%",
    scrub: 1.5
  }
})});