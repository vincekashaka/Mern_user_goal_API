const express = require('express')
const router  = express.Router()
const {
    getGoals, 
    setGoals, 
    updateGoals,
    deleteGoals
} = require('../controller/goalController')

//Protect goals
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoals)

router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals)


// router.get('/', getGoals)

// router.get('/', setGoals)

// router.get('/:id', updateGoals)

// router.get('/:id', deleteGoals)

 
module.exports = router