function pesquisar() {
    const corpo = document.querySelector("#search").value.toLowerCase();

    if (corpo === "bíceps" || corpo === "biceps" || corpo === "braço" || corpo === "braco") {
        window.location.href = "exercicios/braço.html"; // window.location.href leva o usuário para página pesquisado quando a função pesquisar for chamada
    } else if (corpo === "tríceps" || corpo === "triceps") {
        window.location.href = "exercicios/triceps.html";
    } else if (corpo === "ombro") {
        window.location.href = "exercicios/ombro.html";
    } else if (corpo === "perna" || corpo ==="pernas") {
        window.location.href = "exercicios/pernas.html";
    } else if (corpo === "abdômen" || corpo === "abdomen") {
        window.location.href = "exercicios/abdomen.html";
    } else if (corpo === "glúteo" || corpo === "gluteo") {
        window.location.href = "exercicios/gluteo.html";
    } else if (corpo === "panturrilha") {
        window.location.href = "exercicios/panturrilha.html";
    } else if (corpo === "trapézio" || corpo === "trapezio") {
        window.location.href = "exercicios/trapezio.html";
    } else {
        window.alert("Exercício não encontrado!");
    }
}

document.querySelector('.search-icon').addEventListener('click', pesquisar);

// Adicionando evento de tecla pressionada para a pesquisa
document.querySelector('#search').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') { // Se a tecla pressionada for Enter
        pesquisar(); // Chama a função pesquisar
    }
});
