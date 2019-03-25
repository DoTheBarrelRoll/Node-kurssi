/*
students.js on reititystiedosto (router), joka tarjoaa REST-apin
Tietokantaoperaatiot ovat kontrollerin metodeissa

Tässä samassa tiedostossa ovat myös userin reitit. Käyttäjä pystyy rekisteröitymään
eli lisäämään tunnuksensa kantaan ja kirjautumaan antamalla tunnarinsa.

Student-datan muokkauksen mahdollistavat reitit on suojattu authorize -metodilla
joten muokkaamaan pääsy vaatii kirjautumisen
*/
const express = require('express');
const router = express.Router();

const studentCon = require('../controllers/StudentController'); // student-reittien kontrolleri
const userCon = require('../controllers/UserController'); // user-reittien kontrolleri

const authorize = require('../verifytoken'); // authorisointi eli vahvistetaan token

// localhost:3000/students/
router.get('/', studentCon.findStudents);

router.get('/:_id', studentCon.findStudentsById);

router.get('/lt/100', studentCon.findStudentsLt100);
// rekisteröityminen eli luodaan uudelle käyttäjän tunnarit
router.post('/register', userCon.registerUser);
// kirjautuminen eli autentikaatio tunnareilla
router.post('/login', userCon.authenticateUser);
// seuraavat reitit ovat käytössä vain authorisoiduille käyttäjille
router.post('/', authorize, studentCon.postStudent);

router.delete('/:_id', authorize, studentCon.deleteStudent);

router.put('/:_id', authorize, studentCon.updateStudent);

router.put('/addgrade/:id', authorize, studentCon.addGrade);

router.put('/updgrade/:id/:gid', authorize, studentCon.updateGrade);


module.exports = router;
