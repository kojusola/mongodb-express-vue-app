const express = require('express');
const router = express.Router();
const EmpModel = require('../model/employee.js');
const { removeAllListeners } = require('../model/employee.js');
const emp_controller = require('../Contollers/employee.controllers')

router.get('/', function(req, res){
    res.send('This is the employee page');
});

router.get('/about', function(req, res){
    res.send('This is the employee about page');
});
router.get('/add', function(req, res){
    res.render('add_employee');
});
// Starting data in Database from AddEmployees form
//saving data in the database
router.post('/add', emp_controller.create);
// retrieve all employee data
router.get('/all_employees', emp_controller.view_all);
// retrieve one employee data
router.get('/:name',emp_controller.get_single_emp)
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
router.get('/delete/:name',emp_controller.delete_emp)
module.exports = router;