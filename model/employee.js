const mongoose = require('mongoose');
 //creating the schema for an employee
 const EmpSchema = new mongoose.Schema({
     name:
     {
         type: String,
         required: true
     },
     email:
     {
         type: String,
         required: true
     },
     address:
     {
         type: String
     },
     phone:
     {
         type: Number,
     }
 });
 const Employee = mongoose.model('demo_collection', EmpSchema);
 module.exports = Employee;