window.addEventListener('scroll', function() {

    const header = document.getElementById('header');
    if (window.scrollY > 50) { // Pode ajustar o valor de 50 para o ponto em que deseja a mudança
        console.log("não está no topo");
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});