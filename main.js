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
