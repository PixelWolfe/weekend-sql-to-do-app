CREATE TABLE water (
	"id" serial PRIMARY KEY,
	"status" varchar(20) NOT NULL,
	"task_description" varchar(100) NOT NULL,
	"position_number" varchar(3) NOT NULL
);

INSERT INTO "water" ("status", "task_description", "position_number")
VALUES ('completed', 'save $650 for gear', '1'),
		('not completed', 'get scuba certified', '2'),
		('not completed', 'learn to speak with fishes and such', '3'),
		('completed', 'befriend a lion turtle', '4'),
		('not completed', 'master waterbending', '5');

CREATE TABLE fire (
	"id" serial PRIMARY KEY,
	"status" varchar(20) NOT NULL,
	"task_description" varchar(100) NOT NULL,
	"position_number" varchar(3) NOT NULL
);

INSERT INTO "fire" ("status", "task_description", "position_number")
VALUES ('completed', 'play with it', '1');


