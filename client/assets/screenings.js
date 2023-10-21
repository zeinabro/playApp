const showScreenings = async() => {
    try{
        const resp = await fetch(`https://plays-api.onrender.com/screenings/`)
        if (!resp.ok) {
            throw new Error('could not fetch screenings')
        }
        const screenings = await resp.json()

        screenings.forEach(async screening => {
            const { show_time, show_date,price,remaining_seats,show_id,screen_id } = screening

            try {
                const resp = await fetch(`https://plays-api.onrender.com/shows/${show_id}`)
                const showData = await resp.json()
                const { show_name } = showData
                const showName = document.createElement('td')
                showName.textContent = show_name

                showName.addEventListener('click', () => {
                    editScreening(showData)
                })

                const showDate = document.createElement('td')
                showDate.textContent = show_date
                const showTime = document.createElement('td')
                showTime.textContent = show_time
                const screenID = document.createElement('td')
                screenID.textContent = screen_id
                const ticketPrice = document.createElement('td')
                ticketPrice.textContent = price
                const remainingSeats = document.createElement('td')
                remainingSeats.textContent = remaining_seats
    
                const row = document.createElement('tr')
                screeningsSection.appendChild(row)
                row.appendChild(showName)
                row.appendChild(showDate)
                row.appendChild(showTime)
                row.appendChild(screenID)
                row.appendChild(ticketPrice)
                row.appendChild(remainingSeats)

            } catch (err) {
                console.log(err)
            }

        });
    } catch (err) {
        console.log(err)
    }
}

const editScreening = (showData) => {
    console.log('editing')

}

const screeningsSection = document.querySelector('#screenings-table')
showScreenings()
