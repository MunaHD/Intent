DROP TABLE IF EXISTS journal_choices CASCADE;


CREATE TABLE journal_choices (
  id SERIAL PRIMARY KEY NOT NULL,
  journal_id INTEGER REFERENCES journals(id) ON DELETE CASCADE,
  choice_id INTEGER REFERENCES choices(id) ON DELETE CASCADE
);

