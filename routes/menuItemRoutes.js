const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');

router.post('/',async(req,res)=>{
    try {
     const data =req.body
     const newMenuItem = new MenuItem(data)
     const response = await newMenuItem.save()
 
     console.log('data saved')
     res.status(200).json(response);
    } 
     catch (error) {
     console.log(error)
     res.status(500).json({error:'internal error'})
 
    }
 })
 router.get('/',async(req,res)=>{
    try {
      const data = await MenuItem.find()
      console.log('data found')
      res.status(200).json(data)
    } catch (error) {
      console.log(error)
      res.status(500).json({error:'internal error'})
    }
  })

  router.get('/:tastes', async(req,res)=>{
    try {
      const tastes = req.params.tastes;
    if (tastes == 'spicy' || tastes == 'sweet' || tastes == 'basic'){
      const response = await MenuItem.find({taste: tastes});
      console.log('response fetched');
      res.status(200).json(response);
    } else {
      res.status(404).json({error:'invalid work type'})
    }
    } catch (error) {
      console.log(error)
      res.status(500).json({error:'internal error'})
    }
  })

  module.exports = router;