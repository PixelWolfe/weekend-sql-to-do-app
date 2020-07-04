CREATE TABLE tablename (
	"id" serial PRIMARY KEY,
	"status" varchar(20) NOT NULL,
	"task_description" varchar(100) NOT NULL,
	"position_number" varchar(3) NOT NULL
);

INSERT INTO "tablename" ("status", "task_description", "position_number") VALUES ( $1, $2, $3 );

INSERT INTO "list2" ("status", "task_description", "position_number")
VALUES ( 'completed', 'wash the dirty laundry', '1');

SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name; 

SELECT * FROM "list1" ORDER BY position_number ASC;

SELECT * FROM list1;
SELECT * FROM list3;

SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public'
        ORDER BY table_name; 
