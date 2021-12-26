const express = require('express');
const User = require('../models/user');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    console.log(req.body.data);
    try {
      const user = await User.create({
        name: req.body.data.username,
        user_picture : req.body.data.userPicture,
        info: req.body.data.userInfo,
        PIC: req.body.data.userPIC,
        vehicle_type : req.body.data.userVehicleType,
        phone_number: req.body.data.phoneNumber,
        phone_number_family: req.body.data.phoneNumberFamily,
        phone_number_house: req.body.data.phoneNumberHouse,
      });
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });


router.get('/search', async(req, res, next)=>{
  console.log(req.query);
  if(req.query.hasOwnProperty('name')){
    try {
      console.log(req.query.name);
      const users = await User.findAll({
        where: {
          name : {
             [Op.like]: `${req.query.name}%`
          }
        },
        // where : { name : {like: `${req.params.userName}%`}},
      });
      console.log(users);
      return res.json(users);
    } catch(err){
      console.error(err);
      next(err);
    }    
  }
  else if (req.query.hasOwnProperty('vehicleType')){
    try {
      console.log(req.query.vehicleType);
      const users = await User.findAll({
        where: {
          vehicle_type : `${req.query.vehicleType}`
        },
        // where : { name : {like: `${req.params.userName}%`}},
      });
      console.log(users);
      return res.json(users);
    } catch(err){
      console.error(err);
      next(err);
    }    
  }
  else if (req.query.hasOwnProperty('userPIC')){
    try {
      console.log(req.query.userPIC);
      const users = await User.findAll({
        where: {
          PIC :  `${req.query.userPIC}`
        },
        // where : { name : {like: `${req.params.userName}%`}},
      });
      console.log(users);
      return res.json(users);
    } catch(err){
      console.error(err);
      next(err);
    }    
  }
  else{
    res.send('오류!');
  }
})


// router.get('/:userName', async (req, res, next)=>{
//   try {
//     console.log('입력값');
//     console.log(req.params.userName);
//     const users = await User.findAll({
//       where: {
//         name : {
//            [Op.like]: `${req.params.userName}%`
//         }
//       },
//       // where : { name : {like: `${req.params.userName}%`}},
//     });
//     console.log(users);
//     res.json(users);
//   } catch(err){
//     console.error(err);
//     next(err);
//   }    
// })

router.post('/delete', async(req, res, next)=>{
  try {
    console.log(req.body);
    await User.destroy({where :{name : req.body.data}});
    return res.send('done');
  } catch(err){
    console.log(err);
  }
})
module.exports = router;
