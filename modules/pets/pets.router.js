const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  let pets = Pets.get();
  console.log(pets);
  return res.json(pets);
});

router.delete("/", json, (req, res) => {
  // Remove a pet from adoption.

  Pets.dequeue(req.body.type);
  res.status(204).send();
});

module.exports = router;
