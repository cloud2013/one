var couchbackup = require('couchbackup');
var opts = {
  "COUCH_URL": "http://127.0.0.1:5984",
  "COUCH_DATABASE": "deadbase01",
}
couchbackup.backupFile("backup.txt", opts, function() {});