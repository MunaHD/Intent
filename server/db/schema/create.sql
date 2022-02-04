BEGIN;
\i db/schema/01_users.sql
\i db/schema/02_goals.sql
\i db/schema/03_journals.sql
\i db/schema/04_choices.sql
\i db/schema/05_journal_choices.sql
COMMIT;