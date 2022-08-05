const {newfun }= require('../controllers/newcontroller')
const express = require('express')
const router = express.Router()

router.get('/newpage',newfun)

module.exports=router