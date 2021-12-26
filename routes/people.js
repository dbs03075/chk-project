const {Router} = require('express');
const Staff  = require('../models/staff');
const User = require('../models/user');
const { isLoggedIn, isNotLoggedIn } = require('./auth-middlewares');

const router = Router();

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile', { title: '내 정보 - NodeBird' });
});
  
router.get('/join', isNotLoggedIn, (req, res) => {
res.render('join', { title: '회원가입 - NodeBird' });
});

router.get('/login', (req,res)=>{
    res.render('login');
});

router.get('/', async(req, res, next)=>{
    try{
        const staffs = await Staff.findAll({
            where : {'staffRank':'직원'}
        });
        const users = await User.findAll();
        res.render('people', {users, staffs});
    } catch(err){
        console.error(err);
        next(err);
    }
});


module.exports = router;