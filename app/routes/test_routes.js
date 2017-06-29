/**
 * Created by Коля on 29.06.2017.
 */
var ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {
    app.get('/name/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('names').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });
    app.post('/name',(req, res) => {
        const name = {name: req.body.name, age: req.body.age};
        db.collection('names').insert(name, (err, result) => {
           if(err){
               res.send({'error': 'An error has occurred'});
           } else {
               res.send(result.ops[0]);
            }
        });
    });

    app.delete('/name/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id)};
        db.collection('names').remove(details, (err, item)=> {
            if(err){
                res.send({'error':'An error has occurred'});
            } else {
                res.send('Name ' + id + ' deleted!');
            }
        });
    });

    app.put('/name/:id', (req,res) => {
        const  id = req.params.id;
        const  details = {' _id': new ObjectID(id)};
        const name = {name: req.body.name, age: req.body.age};
        db.collection('names').update(details, name, (err, result) => {
            if(err){
                res.send({'error':'An error has occurred'});
            }else {
                res.send(name);
            }
        });
    });

};
