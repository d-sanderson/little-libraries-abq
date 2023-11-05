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
    longitude REAL NOT NULL,
    approved_status INTEGER NOT NULL
);

-- Create the Users table with an auto-incrementing primary key
CREATE TABLE Users (
    user_id INTEGER PRIMARY KEY,
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
