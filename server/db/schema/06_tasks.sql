-- Drop and recreate Tasks table

DROP TABLE IF EXISTS tasks CASCADE;


CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  details VARCHAR(255) NOT NULL,
  isCompleted BOOLEAN DEFAULT FALSE,
  goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

