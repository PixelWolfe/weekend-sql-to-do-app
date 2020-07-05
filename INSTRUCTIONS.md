
## Weekend Challenge: SQL To-Do List

Hello Primers! 

Welcome to your weekend challenge!

Full stack is pretty awesome, huh? The idea that you are able to spin up a full application architecture in such a short time is pretty incredible. This weekend is all about showing us that you have a handle on each of the different parts of the full stack. 

## The To-Do App

You are going to create a 'TO DO' application. This type of application is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time. Chances are good that at some point in your career you will tackle this again while learning another language.

**Here are the specific components for the challenge:**

* Create a front end experience that allows a user to create a Task.
[x] create a list button
    [x] checks for an already existing table of that name
      [x] makes a new table in database
      [x] appends card on the dom with table
  [x] create a task button
* When the Task is created, it should be stored inside of a database (SQL)
  [x] post
* Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
  [x] get
* Each Task should have an option to 'Complete' or 'Delete'.
  [] complete checkbox is a put
    [x] change text to have strike-through
    [x] have checkbox be checked
  [] delete is a delete
* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
  [] 
* Whether or not a Task is complete should also be stored in the database.
[x] [id, status, task_description]
* Deleting a Task should remove it both from the front end as well as the Database.
[] delete to database
  [] then get from database



x* Create a front end experience that allows a user to create a Task.
x* When the Task is created, it should be stored inside of a database (SQL)
x* Whenever a Task is created the front end should refresh to show all that need to be completed.
x* Each Task should have an option to 'Complete' or 'Delete'.

x* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.

x* Whether or not a Task is complete should also be stored in the database.
*x Deleting a Task should remove it both from the front end as well as the Database.


### Styling

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - background color of the page
  - font family and size
  - text color & or background color of tasks *to show whether or not they have been completed*

### Approach

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

### Create a Database

Be sure to create a new database through Postico. Use the name `weekend-to-do-app`. You will need to use this name in your database connection configuration on your server.

### Database Structure

Please include a `database.sql` text file in your repo that includes all of your `CREATE TABLE` queries. This is so we can re-create your database while testing your app.

## Stretch Goals

For each of your strech goals, you will be practicing git branching. Please refer to the branching notes for a reminder on commands. Each branch will be merged into master using `--no-ff`. This will allow us to see that you branched your feature when you turn in your code.

- `feature-styling-bootstrap` 

    - [x]  Add Bootstrap to the front end and style it up!
      - [x] Buttons -- make the creation buttons and completion buttons green and the delete red.
      -  Inputs -- make your text inputs styled in the bootstrap way
      -  Responsive -- make your app responsive to different screen sizes -- check out the [Layout](https://getbootstrap.com/docs/4.1/layout/overview/) section

- `feature-confirm-delete`

    - [ ]  In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
        - Some styled options are [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) or [Sweet Alerts](https://sweetalert.js.org/guides/): Use the CDN option.

- `feature-ordering-task-query` 

    - [ ]  Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos. 
    
- `feature-time-completed` 

    - [ ]  Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.


### tasks and bugs to squash

-rethink how a table is named on DB
and how its stored with list??

-add a list description
  -make sure create table input can be used when making a table
    -figure out what can and cannot be used in making a table name
-when checking an item run a PUT to update its status on the list its located on
-update position when moving the order of list items

-when all items of a list are checked off have a prompt asking the user if they want to pop their bubble list
  -add sound to popping of bubblelist
  -bubblessss!!!!
    -cool water sounds

-squash bootstrap flex bugs so tops of the lists stay at the top of the screen
  -Stretch! Figure out have to have the lists scroll horizontally and show a scrollbar

-have bubbles get created when user hits create button, satisfying waterdrop sound

-improve gradient

-auto-pop feature icon
  -delete feature? - pop equivalent

-archive popped bubbles under the nav bar brand, when link is clicked empty main and getArchivedBubbles.

-update create placeholder to create bubble list

-delete list items
-edit list items


