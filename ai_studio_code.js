let allGames = [];

// Fetch data from the JSON file
fetch('games.json')
    .then(response => response.json())
    .then(data => {
        allGames = data;
        displayGames(allGames);
    })
    .catch(error => console.error('Error loading games:', error));

// Function to render game cards
function displayGames(games) {
    const grid = document.getElementById('gameGrid');
    grid.innerHTML = ''; // Clear existing

    games.forEach(game => {
        const card = document.createElement('a');
        card.href = `play.html?id=${game.id}`;
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        grid.appendChild(card);
    });
}

// Search functionality
function filterGames() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filtered = allGames.filter(game => 
        game.title.toLowerCase().includes(searchTerm)
    );
    displayGames(filtered);
}