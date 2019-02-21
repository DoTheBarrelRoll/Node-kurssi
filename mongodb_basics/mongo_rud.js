/*
 * muut CRUD-operaatiot (Read, Update, Delete)
 * Nämä olisi hyvä suorittaa siten että ajat ne yksi metodi kerrallaan
 * Muut kannattaa kommentoida.
 */

const mongoclient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID; //tarvitaan jotta voidaan käyttää mongon luomaa ObjectID-tyyppistä _id:tä
const serverurl = 'mongodb://localhost:27017'; //palvelimen osoite
const dbname = 'testdatabase'; //kannan nimi

mongoclient.connect(serverurl, { useNewUrlParser: true }, function (err, client) { //clientin avaus
    if (err) {
        throw err;
    }

    const db = client.db(dbname);

    // hakumetodi
    const find = function (db, callback) {
        const collection = db.collection('testcollection');
        collection.find({
            'title': 'I like cake'
        }).toArray(function (err, doc) { // tuloksena voidaan saada useampia dokuja jotka laitetaan taulukkoon
            if (err) {
                throw err
            }
            console.log('Found documents:');
            console.log(doc);
            callback(doc);
        });
    }

    // metodin suoritus
    find(db, function (doc) {
        console.log('Tulosolio logataan konsoliin toisen kerran tässä:');
        console.log(doc);
        client.close();
    });

    // päivitysmetodi, , huomaa että _id:llä varustettu dokumentti pitää olla olemassa jotta toimisi
    const update = function (db, callback) {
        const collection = db.collection('testcollection');
        // _id pitää hakea kannasta. Tässä haettu käsin. Se on ObjectID -tyyppinen
        collection.updateOne({ _id: ObjectID('5bf27bdadbbaa61e25ec6e68') },
            { $set: { 'title': 'I ate too much cake' } }, // updeittaus mongon set-metodilla
            { safe: true }, function (err, result) { // {upsert: true} tekisi uuden dokumetin jossa on update
                if (err) {
                    throw err
                }
                console.log('Document updated!');
                callback(result);
            });
    }
    /*
    // metodin suoritus
    update(db, function (result) {
        // console.log(result);
        client.close();
    });
    */
    // poistometodi, huomaa että _id:llä varustettu dokumentti pitää olla olemassa jotta toimisi
    const remove = function (db, callback) {
        const collection = db.collection('testcollection');
        // _id pitää hakea kannasta. Tässä haettu käsin. Se on ObjectID -tyyppinen
        collection.deleteOne({ _id: ObjectID('5bf27cc37637031e53c9b8df') },
            { safe: true }, function (err, result) {
                if (err) {
                    throw err
                }
                console.log('Document deleted!');
                callback(result);
            });
    }
    /*
    // metodin suoritus
    remove(db, function (result) {
        // console.log(result);
        client.close();
    });
    */
});
