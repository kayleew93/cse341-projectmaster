//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();


let items = "";
const request = require("request");
request('https://byui-cse.github.io/cse341-course/lesson03/items.json', (error, response, body) => {
  items = JSON.parse(body);
});

console.log(items);

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    items: items
  });
});


router.post('/search', (req, res, next) => {
  const searchText = req.body.searchText;
  console.log(items);

  const result = Object.values(items).filter(word => word.name === searchText);
  console.log(result)

  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    items: result
  });
})

module.exports = router;

/* PROFESSOR SOLUTION:

const http = require('http');

function processJson(req, res) {
  // read json
  var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

  http
    .get(url, function (response) {
      var body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {
        var jsonResponse = JSON.parse(body);
        // console.log("Got a response: ", jsonResponse);
        var stuff = { data: jsonResponse };

        res.render('results', stuff);

        // var outputFilename = 'my.json';

        //    fs.writeFile(outputFilename, JSON.stringify(jsonResponse, null, 4), function(err) {
        //       if(err) {
        //          console.log(err);
        //       } else {
        //          console.log("JSON saved to " + outputFilename);
        //       }
        //    });
      });
    })
    .on('error', function (e) {
      console.log('Got an error: ', e);
    });
}

module.exports = { processJson: processJson }; */
