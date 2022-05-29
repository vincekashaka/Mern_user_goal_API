const express = require('express')
const router  = express.Router()
const {getGoals, setGoals, updateGoals,deleteGoals} = require('../controller/goalController')

router.route('/').get(getGoals).post(setGoals)

router.route('/:id').put(updateGoals).delete(deleteGoals)


// router.get('/', getGoals)

// router.get('/', setGoals)

// router.get('/:id', updateGoals)

// router.get('/:id', deleteGoals)

 
module.exports = router