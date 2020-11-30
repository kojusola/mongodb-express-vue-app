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
        //res.json(data)
        res.redirect('/emp/all_employees');
    next();

    })
    .catch(err =>{
        res.json({message:err});
    })
})
// retrieve all employee data
router.get('/all_employees', (req,res) =>{
    EmpModel.find((err,docs) => {
        //console.log(docs);
        if(!err){
            res.render('employee_list', {data:docs});
        }
        else{
            res.send("Error");
        }
    })
});
// retrieve one employee data
router.get('/:name',(req,res) => {
    let nm = req.params.name;
    EmpModel.find({name:nm}).exec(function(err, docs){
        if(!err){
            res.render('employee_list',{data:docs})
        }else{
            res.send('error');
        }
    })
})
// delete employee data
//router.get('/delete/:name',(req,res) => {
    //let nm = req.params.name;
    //EmpModel.find({"name":nm}).exec(function(err, docs){
        //console.log(docs)
        //if(!err){
          //  const deletedName = EmpModel.remove({"name":nm})
            //res.json(deletedName)
        //}else{
          //  res.send('error');
        //}
    //})
//})
router.get('/delete/:name',(req,res) => {
    let nm = req.params.name;
    console.log(req.params.name)
    EmpModel.remove({name:nm}, function(err){
        if(err){
            res.send('error')
        } else{
            res.send('Successfully! Employee has been deleted')
        }
    })  
})
module.exports = router;