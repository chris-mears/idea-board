const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    }
    catch (err) {
        res.send(err)
    }
    
//   User.find().then(users => {
//     res.json(users)
//   })
//   .catch((err) => console.log(err))
})


module.exports = router;