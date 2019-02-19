const dbmethods = require('./Dbmethods.js');

function handleError(err) {
  console.error(err);
  process.exit(1);
}

dbmethods.add('abcd', 'Miikka Niemelainen', 'mnieme@laurea.fi', 160, function(err, result) {
  if(err) {
    return handleError(err);
  }
  console.log(result.affectedRows + ' records inserted');
});
