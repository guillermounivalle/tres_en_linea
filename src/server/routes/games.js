const express = require('express');
const bodyParser = require('body-parser');
const Games = require('../models/games');
const cors = require('./cors');
const mongoose = require('mongoose');


const gamesRouter = express.Router();
gamesRouter.use(bodyParser.json());

gamesRouter.route('/')
.options(cors.corsWithOptions, (req, res) => {
    res.statusCode = 200
})

.get(cors.cors, ( req, res, next) => {
    Games.find({})
    .then((games) =>{
        res.statusCode = 200,
        res.setHeader('Content-Type', 'application/json');
        res.json(games);
    },(err) => next(err))
    .catch((err) => next(err));
})


.post(cors.corsWithOptions, (req, res, next) => {
    Games.create(req.body)
    .then((games) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(games);
    },(err) => next(err))
    .catch((err) =>  next(err))
})

.put(cors.corsWithOptions, (req,res, next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /Games');
})

.delete(cors.corsWithOptions, (req,res, next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /Games');
})


gamesRouter.route('/:gameId')

.options(cors.corsWithOptions, (req, res) => {
    res.statusCode = 200
})

.get(cors.cors, (req,res, next) =>{
    Games.findById(req.params.gameId)
    .then((game) => {
        res.statusCode = 200;
        setHeader = ('Content-Type', 'application/json');
        res.json(game);
    }, (err) => next(err))
    .catch((err) =>  next(err));
})


.put(cors.corsWithOptions, (req,res, next) =>{
    Dishes.findByIdAndUpdate(req.params.gameId, {
        $set: req.body
    },{
        new: true
    })
    .then((game) => {
        res.statusCode = 200;
        setHeader = ('Content-Type', 'application/json');
        res.json(game);
    }, (err) => next(err))
    .catch((err) =>  next(err));
})

module.exports = gamesRouter;