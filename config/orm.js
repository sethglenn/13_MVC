const connection = require("./connection");

const orm = {
    selectAll: function(tablename, cb){
        connection.query("SELECT * FROM ??", [tablename], function(err, result){
            if (err) throw err;

            cb(result);
        })
    },
    insertOne: function (tablename, colname, burger_name, cb) {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [tablename, colname, burger_name, cb],
        function (err, result){
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (tablename, devoured, id, cb) {
        connection.query("UPDATE ?? SET ?? = ? WHERE ID = ?", [tablename, devoured, id],
        function (err, res){
            if (err) throw err;
            return (res);
        })
    }
}



module.exports = orm;