-- Drop the tables if they exist
DROP TABLE IF EXISTS LibraryComments;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS LittleLibraries;

-- Create the LittleLibraries table with an auto-incrementing primary key
CREATE TABLE LittleLibraries (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL
);

-- Create the Users table with an auto-incrementing primary key
CREATE TABLE Users (
    user_id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

-- Create the LibraryComments table with an auto-incrementing primary key
CREATE TABLE LibraryComments (
    comment_id INTEGER PRIMARY KEY,
    library_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    comment_text TEXT NOT NULL,
    FOREIGN KEY (library_id) REFERENCES LittleLibraries(id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Insert dummy data into the LittleLibraries table
INSERT INTO LittleLibraries (name, description, latitude, longitude) VALUES
    ('Library A', 'A small library with a variety of books.', 40.7128, -74.0060),
    ('Library B', 'Located in a park, specializes in children''s books.', 34.0522, -118.2437),
    ('Library C', 'Community library with a wide selection of genres.', 51.5074, -0.1278);

-- Insert dummy data into the Users table with passwords
INSERT INTO Users (username, email, password) VALUES
    ('user1', 'user1@example.com', 'password1'),
    ('user2', 'user2@example.com', 'password2'),
    ('user3', 'user3@example.com', 'password3');

-- Insert dummy data into the LibraryComments table
INSERT INTO LibraryComments (library_id, user_id, comment_text) VALUES
    (1, 1, 'I love this library! It has a great selection of books.'),
    (2, 2, 'I often bring my kids here. They enjoy it a lot.'),
    (3, 3, 'This library is a fantastic resource for our community.');

