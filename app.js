const express = require('express');
const app = express();

const indexRouter = require('./routes/index');

app.set('view engine', 'pug');
app.use('/static', express.static('public')); 

app.use('/', indexRouter);


//   ------------ ERROR HANDLERs --------
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);

});

/* Global error handler*/ 
app.use((err, req, res, next) => {
	res.locals.error = err;
	const status = err.status || 500;
	res.status(status);
	res.render('error'); 

	// if(err.status === 404){
	// 	res.render('error', { err });
	// } else {
	// 	err.message = err.message || `Opps! It seems something is wrong with the server`;
	// 	res.render( 'error', { err });
	// }
});



app.listen(3000, () => {
	console.log('The application is running on localhost:3000!')
});

