function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
function search() {
    const query = document.getElementById('search').value;
    if (query) {
        alert(`Você pesquisou por: ${query}`);
        // Aqui você pode adicionar lógica para redirecionar para uma página de resultados de pesquisa
    } else {
        alert('Por favor, insira um termo de pesquisa.');
    }
}

setInterval(updateClock, 1000);
updateClock();