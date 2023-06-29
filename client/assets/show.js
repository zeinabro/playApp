async function fetchShows() {
    try {
        const response = await fetch('http://localhost:3001/shows');
        if (!response.ok) {
            throw new Error('Failed to fetch shows');
        }
        const shows = await response.json();

        const showList = document.getElementById('show-list');
        showList.innerHTML = '';

        shows.forEach((show) => {
            const { show_name, poster_image_url, rating, show_id } = show;

            const showContainer = document.createElement('div');
            const showTitle = document.createElement('h2');
            const showPoster = document.createElement('img');
            const showRating = document.createElement('p');

            showPoster.classList.add("show-poster");
            showContainer.classList.add("show-container");
            showTitle.textContent = show_name;
            showPoster.src = poster_image_url;
            showRating.textContent = `Rating: ${rating}`;

            showContainer.appendChild(showTitle);
            showContainer.appendChild(showPoster);
            showContainer.appendChild(showRating);

            showPoster.addEventListener('click', () => {
                editShow(show_id);
            });

            showList.appendChild(showContainer);
        });
    } catch (error) {
        console.error('Failed to fetch shows:', error);
    }
}

async function editShow(id) {
    try {
        const response = await fetch(`http://localhost:3001/shows/${id}`);
        if (!response.ok) {
            throw new Error('Failed to load show information');
        }
        const show = await response.json();
        localStorage.setItem('show', JSON.stringify(show));
        window.location.href = '/client/showinfo.html';
    } catch (error) {
        console.log('Failed to load show information:', error);
    }
}

fetchShows();
