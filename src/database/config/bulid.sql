BEGIN;
DROP TABLE IF EXISTS users , posts , votes ,comments ;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) not null,
    passwords TEXT not null,
    email VARCHAR(100) not null unique,
    birthday VARCHAR(50),
    gender VARCHAR(20)
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    content TEXT not null,
    image_url TEXT,
    user_id int REFERENCES users(id),
    created_at TIMESTAMP NOT NULL default CURRENT_TIMESTAMP
);

CREATE TABLE votes(
    id SERIAL PRIMARY KEY,
    user_id int REFERENCES users(id),
    post_id int REFERENCES posts(id)
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    title TEXT not null,
    user_id int REFERENCES users(id),
    post_id int REFERENCES posts(id),
    created_at TIMESTAMP NOT NULL default CURRENT_TIMESTAMP
);

COMMIT;