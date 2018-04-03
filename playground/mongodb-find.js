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

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5abee8f512f3c619a78a2269')}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('unable to fetch todos', err);
	// })

	db.collection('Users').find({name: 'p'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs, undefined, 2));

	}, (err)=> {
		console.log(err);
	})



	// database.close();

});