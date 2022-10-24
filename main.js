function getElements(...selectors) {
  return selectors.map((selector) => document.querySelector(selector));
}
