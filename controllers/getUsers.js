const dao = require('../dao/dao')
const User = require('../model/User')

exports.fetchUsers = (req,res,next) =>{
   
    dao.fetchUsers().then((result) => {
        const Users = new Array();
        result.records.forEach((record) => {
            Users.push(new User(record._fields[0].properties.name,
                record._fields[0].properties.password, record._fields[0].properties.emailId,
                record._fields[0].properties.username));
        });
        res.status(200).json({Users});
    }).catch((err) =>{
        console.log(err);
    });
    }

