exports.create = function(req,res){
    NamedNodeMap.db.create(req.body.dbname,function(){
    if(err){
        res.send('Error creating the database');
    }
    res.send('database creates sucessfully');
    })
}