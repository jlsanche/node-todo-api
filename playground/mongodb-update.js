// const MongoClient = require('mongodb').MongoClient;

const {
	MongoClient,
	ObjectID
} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
	const db = database.db('myDB');
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("5ac11c3bc33665eb5462763b")
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}

	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5abec42d6a4fa50b93954cd2")}, 
		{ $set: {name: 'Chazzz'}, 
		  $inc: {age: 1} }, 
		{ returnOriginal: false }).then((result) => {
		console.log(result);
	})


	// database.close();

});