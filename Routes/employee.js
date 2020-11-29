const express = require('express');
const router = express.Router();
const EmpModel = require('../model/employee.js');

router.get('/', function(req, res){
    res.send('This is the employee page');
});

router.get('/about', function(req, res){
    res.send('This is the employee  about page');
});
router.get('/add', function(req, res){
    res.render('add_employee');
});
// Starting data in Database from AddEmployees form
//saving data in the database
router.post('/add', (req,res) => {
    //console.log(req.body);
    const employee = new EmpModel({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    });
    employee.save()
    .then(data =>{
        res.json(data)
        //res.redirect('/emp/all_employees');
    //next();

    })
    .catch(err =>{
        res.json({message:err});
    })
})
module.exports = router;