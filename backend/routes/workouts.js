const express = require('express')
const router = express.Router()
const Workout = require('../models/WorkoutModel')

router.get('/',(req,res)=>{
    res.json({mssg:"Get all workouts !"})
})

router.get('/:id',(req,res)=>{
    res.json({mssg:"Get single workouts !"})
})

router.post('/',async (req,res)=>{
    const {title,load,reps} = req.body
    try{
        const workout =await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

})

router.delete('/:id',(req,res)=>{
    res.json({mssg:"deleting single workouts !"})
})

router.patch('/:id',(req,res)=>{
    res.json({mssg:"updating single workouts !"})
})

module.exports = router
