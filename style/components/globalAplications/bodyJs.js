const totem = document.getElementById("totem");
const projetos = document.getElementById("projetos");
const sobreNos = document.getElementById("sobreNos");

document.getElementById("navHome").addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(totem);
});
document.getElementById("navProjetos").addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(projetos);
});
document.getElementById("navSobreNos").addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(sobreNos);
});

function scrollToElement(element) {
    console.log(element);
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    // Verifica se já está no topo do elemento
    if (window.pageYOffset !== elementPosition) {
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth' // Adicionado para uma rolagem suave
        });
    }
}
