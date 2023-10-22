const storedShow = localStorage.getItem('show');
console.log(JSON.parse(storedShow))
const run_time = JSON.parse(storedShow).running_time

if (storedShow) {
    const show = JSON.parse(storedShow);
    const { show_name, poster_image_url, rating, genre } = show;

    document.getElementById('show-name').value = show_name;
    document.getElementById('poster-url').value = poster_image_url;
    document.getElementById('rating').value = rating;
    document.getElementById('genre').value = genre;
}

const edit_form = document.getElementById('edit-show-form')
edit_form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const updatedShow = {
        show_name: document.getElementById('show-name').value,
        poster_image_url: document.getElementById('poster-url').value,
        rating: parseFloat(document.getElementById('rating').value),
        genre: document.getElementById('genre').value,
        running_time: run_time
    };

    console.log(updatedShow)

    const storedShow = localStorage.getItem('show');
    if (storedShow) {
        const show = JSON.parse(storedShow);
        const showId = show.show_id;
    
        try {
            const response = await fetch(`https://plays-api.onrender.com/shows/${showId}`, {
                method: 'PATCH',
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedShow)
            });
            console.log(response)

            if (!response.ok) {
                throw new Error('Failed to update show information');
            }

            localStorage.setItem('show', JSON.stringify(updatedShow));

            window.location.href = 'showinfo.html';
        } catch (error) {
            alert(error)
            console.error('Failed to update show:', error);
        }
    }
});

const deleteButton = document.getElementById('delete-show-btn')
deleteButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        input.required = false
    });
    if(confirm('Are you sure you want to delete this show?')){
        try {
            const showToDelete = localStorage.getItem('show')
            const show = JSON.parse(showToDelete)
            const { show_id } = show
            const resp = await fetch(`https://plays-api.onrender.com/shows/${show_id}`,{
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            localStorage.removeItem('show');
            window.location.href = 'shows.html';
        } catch (error) {
            console.error('Failed to delete show:', error);
        }     
    }
})
