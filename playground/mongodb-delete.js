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

	//deleteMany
	/* 	db.collection('Todos').deleteMany({
			text: 'get a 100k job'
		}).then((result) => {
			console.log(result);
		}); */


	//deleteOne

	/* 	db.collection('Todos').deleteOne({
			text: 'get a 100k job'
		}).then((result) => {
			console.log(result);
		}); */

	//findOneAndDelete

	// db.collection('Todos').findOneAndDelete({
	// 	completed: false
	// }).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').deleteMany({name: null}).then((result)=> {
		console.log(result);
	});

	// database.close();

});