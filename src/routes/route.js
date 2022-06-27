const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();



router.get('/movies', function(req, res){
    
    let movies = ['Pushpa','bahubali','Roohi','Saina','Bell Bottom','Bhavai']
    res.send(movies)
})

router.get('/movies/:indexNo', function(req,res){
    let movies = ['Pushpa','bahubali','Roohi','Saina','Bell Bottom','Bhavai']
    let movieLen = movies.length
    let index = req.params.indexNo
    if(index<movieLen){
        res.send(movies[index])
    }
    else{
        res.send("Invalid index number")
    }
})

router.get('/films', function(req, res){
    
    let films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
    res.send(films)
})

router.get('films/:filmId', function(req,res){
    let films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       let filmLen = films.length
       let fIndex = req.params.filmId
       console.log(fIndex)
       if(fIndex<filmLen){
           let selectedFilm =films[fIndex]
           res.send(selectedFilm)
       }
       else{
           res.send("Please enter a valid index number")
       }
})




module.exports = router;
// adding this comment for no reason
