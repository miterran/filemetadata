const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs');

app.get('/', function(req, res){
    res.send('<p>Submit a file to view its filesize.</p><form action="/get-file-size" method="post" enctype="multipart/form-data"><input type="file" name="item"><input type="submit"></form>');
});

app.post('/get-file-size', upload.single('item'), function (req, res, next) {
    var filesize = {size: req.file['size']};
    fs.unlink(req.file['path']);
    res.send({size: req.file['size']});
})

app.listen(port, function () {
  console.log('Example app listening on port ' + process.env.PORT + ' or 8080!')
})
