function updateClock() {
    const agora = new Date(); // Obtém a data e hora atuais

    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona um "0" à esquerda se o número for menor que 10
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Exibe a hora no formato HH:MM:SS
    document.getElementById("relogio").innerText = `${hora}:${minutos}:${segundos}`;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função imediatamente para evitar atraso na primeira exibição
updateClock();


document.getElementById("Mudar-Modo").addEventListener("click", function() {
    document.body.classList.toggle("modo-claro");
});

