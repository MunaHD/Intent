-- Drop and recreate Journals table

DROP TABLE IF EXISTS journals CASCADE;


CREATE TABLE journals (
  id SERIAL PRIMARY KEY NOT NULL,
  entry TEXT,
  date DATE DEFAULT CURRENT_TIMESTAMP,
  goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE
);

