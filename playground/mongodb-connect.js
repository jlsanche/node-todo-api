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


	// /* 	/* 
	// 		db.collection('Todos').insertOne({
	// 			text: 'Jerk off',
	// 			completed: false
	// 		}, (err, result) => {
	// 			if (err) {
	// 				return console.log('unable to insert todo', err);
	// 			}

	// 			console.log(JSON.stringify(result.ops, undefined, 2));
	// 		}); */
	// 	// db.collection('Users').insertOne({ */

	// 	name: 'Dick',
	// 	age: 35,
	// 	location: 'Cypress'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('unable to insert into users', err);
	// 	}
	// 	/* ops returns all docs. in array [0] returns ._id */
	// 	console.log(result.ops[0]._id.getTimestamp());

	// });
	db.collection('Todos').insertOne({
		text: 'do hw',
		completed: true
	}, (err, result) => {
		if (err) {
			console.log(err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
 
	})

	database.close();


});