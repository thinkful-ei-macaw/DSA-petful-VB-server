const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  let pets = Pets.get();
  return res.json(pets).status(200);
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.

  //dequeue if user chooses cat 
  //dequeue if user chooses dog
  //dequeue if two animals and only one user
  if(req.body.type ==='all'){
    Pets.dequeue('cat');
    Pets.dequeue('dog');
    People.dequeue();
  }
  else{
    Pets.dequeue(req.body.type);
    People.dequeue();
  }
  
  
  res.status(204).send();
});

module.exports = router;
