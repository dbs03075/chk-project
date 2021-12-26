const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./auth-middlewares');
const Staff = require('../models/staff');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { staffId, staffName, staffPassword, staffRank, staffPhoneNumber } = req.body;
  try {
    const exStaff = await Staff.findOne({ where: { staffId } });
    if (exStaff) {
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(staffPassword, 12);
    await Staff.create({
      staffId,
      staffName,
      staffPassword: hash,
      staffRank,
      staffPhoneNumber,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get('/check/:id',async(req,res)=>{
  console.log(await bcrypt.hash(req.params.id, 12)); 
})

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, staff, info) => {
    console.log(staff);
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!staff) {
      console.log(info.message);
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(staff, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      console.log('여기까지옴?');

      return res.redirect('/');
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/',
}), (req, res) => {
  res.redirect('/');
});

module.exports = router;
