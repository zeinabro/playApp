DROP TABLE IF EXISTS theatre, shows, screens, screenings ;

CREATE TABLE theatre (
    theatre_id SERIAL PRIMARY KEY,
    theatre_name VARCHAR NOT NULL,
    address VARCHAR
);

CREATE TABLE screens (
    screen_id SERIAL PRIMARY KEY,
    capacity INT,
    remaining_seats INT 
);

CREATE TABLE shows (
    show_id SERIAL PRIMARY KEY,
    show_name VARCHAR NOT NULL,
    genre VARCHAR,
    rating INT,
    poster_image_url VARCHAR,
    screen_id INT REFERENCES screens(screen_id)
);

CREATE TABLE screenings (
    screening_id SERIAL PRIMARY KEY,
    show_time TIME,
    show_date DATE,
    show_id INT REFERENCES shows(show_id),
    screen_id INT REFERENCES screens(screen_id)
);

