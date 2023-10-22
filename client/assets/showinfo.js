function displayShowInfo() {
    const showInfoContainer = document.getElementById('show-info');
    const storedShow = localStorage.getItem('show');
    if (storedShow) {
        const show = JSON.parse(storedShow);
        const { show_name, poster_image_url, rating, genre } = show;

        const showTitle = document.createElement('h2');
        const showPoster = document.createElement('img');
        showPoster.style.height = '200px'
        const showRating = document.createElement('p');
        const showGenre = document.createElement('p');
        const editButton = document.createElement('button');
        const backButton = document.createElement('button');

        showTitle.textContent = show_name;
        showPoster.src = poster_image_url;
        showRating.textContent = `Rating: ${rating}`;
        showGenre.textContent = `Genre: ${genre}`;
        editButton.textContent = 'EDIT';
        backButton.textContent = 'SHOWS';

        showInfoContainer.appendChild(showTitle);
        showInfoContainer.appendChild(showPoster);
        showInfoContainer.appendChild(showRating);
        showInfoContainer.appendChild(showGenre);
        showInfoContainer.appendChild(editButton);
        showInfoContainer.appendChild(backButton)

        editButton.addEventListener('click', () => {
            window.location.href = 'edit.html';
        });

        backButton.addEventListener('click', () => {
            window.location.href = 'shows.html';
        });
    }


}

displayShowInfo();
