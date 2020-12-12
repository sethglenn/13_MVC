const connection = require("./connection");

const orm = {
    selectAll: function(tablename, cb){
        connection.query("SELECT * FROM ??,", [tablename], function(err, res){
            if (err) throw err;

            cb(res);
        })
    },
    insertOne: function (tablename, colname, burger_name, cb) {
        connection.query("INSERT INTOP ?? (??) VALUES (?)", [tablename, colname, burger_name],
        function (err, res){
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: function (tablename, colname, devoured, id, cb) {
        connection.query("UPDATE ?? SET ?? = ? WHERE ID = ?", [tablename, colname, devoured, id],
        function (err, res){
            if (err) throw err;
            return (res);
        })
    }
}



module.exports = orm;