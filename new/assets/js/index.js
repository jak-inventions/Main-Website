
// Nav stick code

const el = document.querySelector("#navigation")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);

