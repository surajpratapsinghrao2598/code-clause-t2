// script.js

document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value;
    if (query) {
        searchRepositories(query);
    }
});

function searchRepositories(query) {
    fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.items);
        })
        .catch(error => console.error('Error fetching repositories:', error));
}

function displayResults(repositories) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    repositories.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.classList.add('repository');

        repoElement.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description || 'No description available'}</p>
            <p>🌟 Stars: ${repo.stargazers_count}</p>
            <p>🍴 Forks: ${repo.forks_count}</p>
        `;

        resultsContainer.appendChild(repoElement);
    });
}
