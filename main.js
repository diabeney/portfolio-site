function getElements(...selectors) {
  return selectors.map((selector) => document.querySelector(selector));
}

const [menuBtn, barTop, barCenter, barBottom, nav, header] = getElements(
  ".menu-btn",
  ".bar-top",
  ".bar-cen",
  ".bar-bot",
  "nav",
  "header"
);
menuBtn.addEventListener("click", () => {
  let isVisible = nav.getAttribute("data-open");
  if (isVisible === "false") {
    nav.classList.remove("scale-out-center");
    [barTop, barCenter, barBottom].forEach(
      (bar) => (bar.dataset.rotate = "true")
    );
    nav.classList.add("scale-in-center");
    nav.setAttribute("data-open", "true");
  } else {
    nav.classList.remove("scale-in-center");
    [barTop, barCenter, barBottom].forEach(
      (bar) => (bar.dataset.rotate = "false")
    );
    nav.classList.add("scale-out-center");
    nav.setAttribute("data-open", "false");
  }
  header.classList.toggle("overlay");
  document.body.classList.toggle("hidden");
});

const OPTIONS = {
  threshold: 0.4,
};

let callback = (entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else {
      if (entry.target.classList.contains("project__image")) {
        entry.target.classList.add("slide-tr");
      } else {
        entry.target.classList.add("slide-left");
      }
      appearOnScroll.unobserve(entry.target);
    }
  });
};
const appearOnScroll = new IntersectionObserver(callback, OPTIONS);

const projectImages = document.querySelectorAll(".project__image");
const projectDescription = document.querySelectorAll(".content");
const contactImage = document.querySelectorAll(".contact-img");

projectImages.forEach((image) => appearOnScroll.observe(image));
projectDescription.forEach((content) => appearOnScroll.observe(content));
