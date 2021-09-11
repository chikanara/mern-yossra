const { body, validationResult } = require('express-validator');


const registerRules = () => [
    body('email',"You Should enter a valid email").isEmail(),
  // password must be at least 6 chars long
  body('password',"you should enter strong  password").isLength({ min: 6 }),
  body('name',"name should not be empty").notEmpty(),
  body('phone',"phone should not be empty").notEmpty(),

]

const loginRules = () => [
    body('email',"You Should enter a valid email").isEmail(),
  // password must be at least 6 chars long
  body('password',"you should enter strong  password").isLength({ min: 6 }),


]

const validator = (req,res,next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array()[0].msg });
    }
    else {
        
        return next()
    }

}

module.exports = {registerRules,loginRules,validator}