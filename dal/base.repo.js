
const mongoDb = require('mongodb');

const cs = 'mongodb+srv://todoApp:aammiirr@cluster0.iivke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const cs = 'mongodb://localhost:27017/todoApp';

let theDB = undefined;
const connect = (next) => {
    if (theDB) {
        next(null, theDB);
        return;
    }
    mongoDb.connect(cs, {useNewUrlParser:true} , (err, client) => {
        if (err) next(err);
        else {
            theDB = client.db();// ابجکت دیتا بیس را برمیگرداند
            next(null, theDB);
        }
    });
}

module.exports.connect = connect;