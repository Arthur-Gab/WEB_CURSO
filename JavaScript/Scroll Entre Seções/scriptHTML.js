const scrollIntoSections = (e) => {
  try {
    e.preventDefault();

    const next = e.target.nextElementSibling;
    const previous = e.target.previousElementSibling;

    // Pra baixo
    if (e.deltaY > 0) {
      window.scrollTo({
        top: next.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
    // Pra cima
    else {
      window.scrollTo({
        top: previous.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  } catch (e) {
    console.log("Não existem seções acima ou abaixo");
  }
};

for (const section of document.querySelectorAll("section")) {
  section.addEventListener("wheel", scrollIntoSections, { passive: false });
}
