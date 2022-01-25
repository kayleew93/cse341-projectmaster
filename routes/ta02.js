//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const alert = require('alert');

let message = "";

// me
const names = ['John', 'Bob', 'Bill'];

router.get('/', (req, res, next) => {
  res.render('pages/ta02.ejs', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    names: names,
    errorMessage: message
  });
});

router.post('/addUser', (req, res, next) => {
  // me
  const newUser = req.body.addUser

  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}
  if ( containsObject(newUser, names) ) {
    alert("Error: Duplicate Entry");
    message = "Error: Duplicate Entry";
  } else {
    names.push(newUser);
  };

  

  res.render('pages/ta02', {
    title: 'Add User',
    path: '',
    errorMessage: message
  })

  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  const removeUser = req.body.removeUser;
  const index = names.indexOf(removeUser);
  if (index === -1) {
    alert("Error: No user of that name to remove");
    message = "Error: No users of that name";
  }
  if (index > -1) {
    names.splice(index, 1);
  }

  res.render('pages/ta02', {
    title: 'Add User',
    path: '',
    errorMessage: message
  })

  res.redirect('/ta02');
});

module.exports = router;
