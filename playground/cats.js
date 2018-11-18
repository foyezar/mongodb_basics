const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/cat_app");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

// Merge
// const catSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   temperament: String
// });
const Cat = mongoose.model('Cat', {
  name: String,
  age: Number,
  temperament: String
});

// adding a new cat to the DB

// const kitty = new Cat({
//   name: 'Mrs. Norris',
//   age: 7,
//   temperament: 'Evil'
// });

// kitty.save((err, cat) => {
//   if(err) {
//     console.log('Something went wrong');
//   } else {
//     console.log('Meow!!!');
//     console.log(cat);
//   }
// });

Cat.create({
  name: 'Snow White',
  age: 15,
  temperament: 'Bland'
}, (err, cat) => {
  if(err) {
    console.log(err);
  } else {
    console.log(cat);
  }
});

// retrieve all cats from the DB 

Cat.find({}, (err, cats) => {
  if(err) {
    console.log('ERROR!');
    console.log(err);
  } else {
    console.log('ALL THE CATS...');
    console.log(cats);
  }
});