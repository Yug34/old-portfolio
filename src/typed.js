let name = new Typed("#typeName", {
  strings: ["Yug"],
  typeSpeed: 100,
  showCursor: false,
});

let description = new Typed("#typeDescription", {
  strings: ["Full-Stack Developer", "Machine Learning Guy", "Research Volunteer"],
  typeSpeed: 50,
  startDelay: 500,
  cursorChar: "|",
  fadeOut: true,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  loop: true,
  loopCount: Infinity,
});