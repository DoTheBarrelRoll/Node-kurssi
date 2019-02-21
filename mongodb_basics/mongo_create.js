/*
 * Koodissa on esitetty yhteydenotto Mongodb:hen ja datan lisääminen (CRUD Create)
 * Mongodb collectioniin. Käytössä perusajurikirjasto mongodb.
 *
 * Mongodb on yleiskäyttöinen NoSQL -kanta. Sopii tiedon pitkäaikaisempaan varastointiin
 * ja jossain määrin relaatiotietokantojen korvaajaksi.
 *
 * Mongodb koostuu kannasta, kokoelmista eli collectioneista ja
 * niiden sisältämistä dokumenteista jotka muodostuvat
 * JSON-muotoisista avain-arvo -pareista.
 *
 * Database: testdatabase
 * Collection: testcollection
 * Document:
 * {"title": "I like cake",
 * "body": "It is quite good."}
 *
 * Tietokanta ja kokoelma syntyvät automaattisesti elleivät ole jo olemassa.
 * Dokumentteja voi katsella esim. Robo3t:llä
 */

const mongoclient = require('mongodb').MongoClient; // käytetään mongodb -perusajurikirjastoa
const serverurl = 'mongodb://localhost:27017'; //palvelimen osoite
const dbname = 'testdatabase'; //kannan nimi

mongoclient.connect(serverurl, { useNewUrlParser: true }, function (err, client) { //clientin avaus
    if (err) {
        throw err;
    }

    const db = client.db(dbname);

    //dokumentti
    const doc = {
        'title': 'I like cake',
        'body': 'It is quite good.'
    };
    // lisäysmetodi
    const insert = function (db, callback) {
        const collection = db.collection('testcollection'); // määritetään collection
        collection.insertOne( doc, function (err, result) { // lisätään uusi dokumentti
            if (err) {
                throw err
            }
            console.log('document inserted!');
            callback(result); // tulosta voisi käsitellä callbackin avulla
        });
    }
    // metodin suoritus
    insert(db, function (result) {
        console.log(result); // voidaan tarkastella lisäystoiminnon tulosoliota
        client.close();
    });

});
