const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({mssg:"Get all workouts !"})
})

router.get('/:id',(req,res)=>{
    res.json({mssg:"Get single workouts !"})
})

router.post('/',(req,res)=>{
    res.json({mssg:"creating single workouts !"})
    
})

router.delete('/:id',(req,res)=>{
    res.json({mssg:"deleting single workouts !"})
})

router.patch('/:id',(req,res)=>{
    res.json({mssg:"updating single workouts !"})
})

module.exports = router
