DROP TABLE IF EXISTS theatre, shows, screens, screenings;

CREATE TABLE theatre (
    theatre_id SERIAL PRIMARY KEY,
    theatre_name VARCHAR NOT NULL,
    address VARCHAR
);

CREATE TABLE screens (
    screen_id SERIAL PRIMARY KEY,
    capacity INT,
    theatre_id INT REFERENCES theatre(theatre_id) 
);

CREATE TABLE shows (
    show_id SERIAL PRIMARY KEY,
    show_name VARCHAR NOT NULL,
    genre VARCHAR,
    rating REAL,
    poster_image_url VARCHAR,
    running_time VARCHAR
);

CREATE TABLE screenings (
    screening_id SERIAL PRIMARY KEY,
    show_time TIME,
    show_date VARCHAR,
    -- date_time DATE,
    price REAL,
    remaining_seats INT,
    show_id INT REFERENCES shows(show_id),
    screen_id INT REFERENCES screens(screen_id)
);

INSERT INTO theatre (theatre_name,address)
VALUES 
    ('Lyceum Theatre', '21 Wellington St, London WC2E 7RQ');

INSERT INTO screens (capacity, theatre_id)
VALUES 
    (2000,1),
    (5000,1),
    (6250,1),
    (3500,1),
    (7000,1);

INSERT INTO shows (show_name,genre,rating,poster_image_url,running_time)
VALUES 
    ('Matilda','Family','4.7','https://jenifershop.com/wp-content/uploads/2021/05/il_fullxfull.2242609322_9ofg-scaled-1-1448x2048.jpg','02-40'),
    ('Frozen','Fantasy','4.5','https://portland.broadway.com/wp-content/uploads/2018/12/FRZN_Global2020_Vertical_RGB-690x1095.jpg','02-15'),
    ('Mamma Mia!','Romance','4.1','https://tse1.mm.bing.net/th?id=OIP.IcIs05nLQg_7MueNzyV3lAHaLH&pid=Api','02-35'),
    ('Heathers','Comedy','4.8','https://tse4.mm.bing.net/th?id=OIP.YmkkYjNA2XVhKV5CPzcIiAAAAA&pid=Api','02-30'),
    ('Wicked','Fantasy','4.8','https://tse2.mm.bing.net/th?id=OIP.PB_RuH_CEfsXIuKmbGugdQHaLH&pid=Api','02-45');


INSERT INTO screenings (show_time,show_date,price,remaining_seats,show_id,screen_id)
VALUES 
    ('17:30','30-06-23',25,50,1,3),
    ('14:00','14-07-23',50,155,2,2),
    ('14:30','12-08-23',38,400,3,1),
    ('16:00','10-08-23',54,300,4,5),
    ('17:30','18-07-23',46,100,5,4);
