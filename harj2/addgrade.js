const dbmethods = require('./Dbmethods.js');

function handleError(err) {
  console.error(err);
  process.exit(1);
}

dbmethods.transaction(function(err) {
  if (err) {
    handleError(err);
    dbmethods.rollback(function() {
      throw error;
    });
  }

  dbmethods.addGrade('abcd', 'Node kehitys', 3, function(err, result) {
    if(err) {
      return handleError(err);
      dbmethods.rollback(function() {
        throw err;
      });
    }
    dbmethods.addStudyPoints('abcd', function(err, result) {
      if(err) {
        return handleError(err);
        dbmethods.rollback(function() {
          throw err;
        });
      }

      dbmethods.commit(function(err) {
        if (err) {
          handleError(err);
          dbmethods.rollback(function() {
            throw err;
          });
        }
      })

      console.log('Study points increased');
    });
    console.log(result.affectedRows + ' records inserted');
  });

});
