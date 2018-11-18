# Mongo Commands

```
$ mongod - start mongodb server
$ mongo - start mongo shell
$ help
$ show dbs - show database names
$ use <db_name> - set current database; if doesn't exist created new one

$ db.dropDatabase() - delete the current database

$ db.collection.insert()
    - db.dogs.insert({ name: "Rusty", breed: "Mutt" }) - created dogs collection and inserted name and breed properties.

$ show collections - show database collections

$ db.collection.find()
  - db.dogs.find() - list objects in collection dogs
  - db.dogs.find({ name: "Rusty" }) - list objects in collection dogs where name == "Rusty"

$ db.collection.update()
  - db.dogs.update({ name: "Lulu"}, { breed: "Labradoodle" }) - over write objects with breed property where name == "Lulu"
  - db.dogs.update({ name: "Lucy" }, { $set: { name: "Tater", isCute: true }}) - update objects' name property & add isCute property where name == "Lucy"

$ db.collection.remove()
  - db.dogs.remove( { } ) - remove all documents from dogs collection
    - db.dogs.drop() - drop the entire collection dogs, including the indexes, and then recreate the collection and rebuild the indexes.
  - db.dogs.remove({ breed: "Labradoodle" }) - remove objects where breed == "Labradoodle"
  - db.products.remove( { qty: { $gt: 20 } } ) - removes all the documents from the collection products where qty is greater than 20
  - db.products.remove( { qty: { $gt: 20 } }, true ) - removes the first document from the collection products where qty is greater than 20
```
CRUD - CREATE, READ, UPDATE, DELETE