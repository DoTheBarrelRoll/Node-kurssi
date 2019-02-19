const config = require('./connect.js');
const mysql = require('mysql');
const conn = mysql.createConnection(config);

const Dbmethods = {
    /*metodi on esitetty oliosyntaksilla eli se on olion sisältämä avain:arvo -pari.
    callback on anonyymi funktio jolla käsitellään kyselyn tulos. Se luodaan
    tiedostoon jossa tämä metodi suoritetaan (add.js)*/

    add: function (student_code, name, email, study_points, callback) {
        return conn.query('insert into Students set student_code = ?, name = ?, email = ?, study_points = ?',
            [student_code, name, email, study_points], callback);
    },

    delete: function (student_code, callback) {
      return conn.query('DELETE FROM Students WHERE student_code = ?', [student_code], callback);
    },

    deleteGrades: function (student_code, callback) {
      return conn.query('DELETE FROM grades WHERE student_code = ?', [student_code], callback);
    },

    find: function (callback) {
      return conn.query('SELECT * FROM Students WHERE study_points < ?', [100], callback);
    },

    findAll: function (callback) {
      return conn.query('SELECT * FROM Students', callback);
    },

    addGrade: function (student_code, course_code, grade, callback) {
      return conn.query('insert into grades set student_code = ?, course_code = ?, grade = ?', [student_code, course_code, grade], callback);
    },

    addStudyPoints: function (student_code, callback) {
      return conn.query('UPDATE students SET study_points = (study_points + 5) WHERE student_code = ?', [student_code], callback);
    },

    update: function(student_code, callback) {
      return conn.query('UPDATE students SET study_points = 200 WHERE student_code = ?', [student_code], callback);
    },

    updateGrade: function(student_code, course_code, callback) {
      return conn.query('UPDATE grades SET grade = 5 WHERE course_code = ? AND student_code = ?', [course_code, student_code], callback);
    },

    transaction: function(callback) {
      return conn.beginTransaction(callback);
    },

    commit: function(callback) {
      return conn.commit(callback);
    },

    rollback: function(callback) {
      return conn.rollback(callback);
    }
};
module.exports = Dbmethods;
