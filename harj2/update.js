const dbmethods = require('./Dbmethods.js');

function handleError(err) {
  console.error(err);
  process.exit(1);
}

dbmethods.update('abcd', function(err, result) {
  if(err) {
    return handleError(err);
  }
  console.log(result.affectedRows + ' records updated');
});
