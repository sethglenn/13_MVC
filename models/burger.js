const orm = require("../config/orm");

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },
    insertOne: function(burger_name, cb){
        orm.insertOne("burgers","burger_name", burger_name, function(result){
            cb(result);
        });
    },
    updateOne: function(burger_id, cb){
        orm.updateOne("burgers", "devoured", burger_id, function(result){
            cb(result);
        });
    },
};

module.exports = burger;