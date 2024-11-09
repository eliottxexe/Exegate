// Fonction pour mettre à jour l'heure toutes les secondes
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// Fonction pour lancer la recherche sur DuckDuckGo
function performSearch() {
    const query = document.getElementById('search').value;
    if (query) {
        const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;  // URL de recherche DuckDuckGo
        window.open(searchUrl, '_self');  // Ouvrir dans l'onglet actuel
    }
}

// Mettre à jour l'heure toutes les secondes
setInterval(updateClock, 1000);
updateClock();  // Appeler une première fois pour l'afficher immédiatement
