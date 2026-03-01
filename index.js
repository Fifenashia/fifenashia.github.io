async function loadProjects() {
    const username ="Fifenashia";
    const endpoint =`https://api.github.com/users/${username}/repos?sort=updated`;
    const response = await fetch(endpoint);
    const repos = await response.json();
    console.log(repos);

    const container = document.querySelector("#projects");
    container.innerHTML = "";

    repos.forEach((repo) => {
    const card = document.createElement("article");
    card.className = "project";

    card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank" rel="noreferrer">${repo.name}</a></h3>
        <p>${repo.description ?? "No description yet."}</p>
    `;

    container.appendChild(card);
});
}
loadProjects();