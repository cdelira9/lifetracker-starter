const express = require('express')
const router = express.Router()


// middleware that is specific to this router
router.post("/login", async(req, res, next) => {
  try{

  }catch(err){
    next(err)
  }
})

router.post("/register", async(req, res, next) => {
  try{

  }catch(err){
    
  }
})

module.exports = router