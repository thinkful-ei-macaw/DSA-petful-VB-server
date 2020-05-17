# Petful Server

##heroku link:
https://petful-server-bv.herokuapp.com/
##link to live app:
https://petful-client-liard.now.sh/

##Partner: Brannen Petit

Stack:
queue, linkedlist
heroku

### API Docs:

- POST
  - https://petful-server-bv.herokuapp.com/people
  - allows user's to be added to the end of the line
- GET
  - https://petful-server-bv.herokuapp.com/pets
  - Shows the two most current animals up for adopiton from the queue
- GET
  - https://petful-server-bv.herokuapp.com/people
  - Retrieves and updates the current people in line to adopt pets
- DELETE
  - https://petful-server-bv.herokuapp.com/people
  - Takes the person who just adopted an animal off of the queue list
- DELETE
  - https://petful-server-bv.herokuapp.com/pets
  - removes the most recently adopted pet from it's queue

### Summary

- This app allows users to view the current animals up for adoption
- This apps allows users to add their name to the list
- This app simulates the adoption process before the user can adopt an animal
- This app provides the user feedback on the animal they chose to adopt
- Once at the front of line, the user can see other's line up behind them in the queue
