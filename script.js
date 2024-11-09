// Fonction pour mettre à jour l'heure toutes les secondes
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// Fonction pour lancer la recherche
function performSearch() {
    const query = document.getElementById('search').value;
    const engine = document.getElementById('searchEngine').value;  // Obtenir le moteur de recherche sélectionné

    if (query) {
        let searchUrl = '';
        switch (engine) {
            case 'google':
                searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                break;
            case 'bing':
                searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
                break;
            case 'duckduckgo':
                searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
                break;
            case 'yahoo':
                searchUrl = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
                break;
            default:
                searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                break;
        }
        // Mettre à jour la page avec l'URL du moteur de recherche sélectionné
        window.location.href = searchUrl;  // Utiliser window.location.href pour rester dans le même onglet
    }
}

// Mettre à jour l'heure toutes les secondes
setInterval(updateClock, 1000);
updateClock();  // Appeler une première fois pour l'afficher immédiatement
