function setLinks() {
  const navlinks = document.querySelector("[data-element='nav-links']");

  for (let child of navlinks.children) {
    child.dataset.element = "link";
  }
}

export { setLinks };
