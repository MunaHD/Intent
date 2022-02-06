-- Drop and recreate Goals table

DROP TABLE IF EXISTS goals CASCADE;


CREATE TABLE goals (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  -- start_date  DATE DEFAULT CURRENT_TIMESTAMP,
  -- end_date DATE NOT NULL,
  status INTEGER DEFAULT 0,
  category INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

