const EmpModel = require("../model/employee");
exports.create = (req,res) => {
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
    })
    .catch(err =>{
        res.json({message:err});
    })
}
exports.view_all =  (req,res) =>{
    EmpModel.find((err,docs) => {
        console.log(docs);
        if(!err){
            //res.render('employee_list', {data:docs});
            res.json({status:"success", result:docs});
        }
        else{
            res.send("Error");
        }
    })
}
exports.get_single_emp =(req,res) => {
    let nm = req.params.name;
    EmpModel.find({name:nm}).exec(function(err, docs){
        if(!err){
            res.render('employee_list',{data:docs})
        }else{
            res.send('error');
        }
    })
}
exports.delete_emp = (req,res) => {
    let nm = req.params.name;
    console.log(req.params.name)
    EmpModel.remove({name:nm}, function(err){
        if(err){
            res.send('error')
        } else{
            res.send('Successfully! Employee has been deleted')
        }
    })
}