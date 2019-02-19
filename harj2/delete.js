const dbmethods = require('./Dbmethods.js');

function handleError(err) {
  console.error(err);
  process.exit(1);
}

dbmethods.deleteGrades('x1234', function(err, result) {
  dbmethods.delete('x1234', function(err, result) {
    if (err) {
      return handleError(err);
    }
    else {
      console.log('Success');
    }
  });
  if(err) {
    return handleError(err);
  }
  console.log(result.affectedRows + ' records inserted');
});
