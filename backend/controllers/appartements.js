const { json, query } = require('express');
const { log } = require('console')
const Appartements = require('../logements.json');
const { Logger } = require('sass');

exports.getAllProducts = (req, res, next) => {
  res.send(Appartements);
  Appartements.find()
    .then(Appartements => res.status(200).json(Appartements))
    .catch(error => res.status(400).json({ error }))
};

exports.getOneProduct = (req, res, next) => {

  for (let i = 0; i < Appartements.length; i++) {

    const element = Appartements[i];
    console.log(element.id);
    if (req.query.id === element.id) {
      res.send(element);
      console.log(element);
    }
  }
  res.status(404).json({})
}


