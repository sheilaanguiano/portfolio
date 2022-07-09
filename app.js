const e = require('express');
const express = require('express');
const { restart } = require('nodemon');
const app = express();

const indexRouter = require('./routes/index');

app.set('view engine', 'pug');
app.use('/static', express.static('public')); 

app.use('/', indexRouter);


//   ------------ ERROR HANDLERs --------
/* 404 Error handler */
app.use((req, res, next) => {
	const err  = new Error('Not Found');
	err.status = 404;
	next(err);
	// res.status(404).render('not-found');
});

/* Global error handler*/ 
app.use((err, req, res, next) => {	
	if (err.status === 404) {
		// err.status = 404;
		err.message = 'Not Found';
		res.status(404).render('error', { err });
	} else {
		err.message = `Oops! something is wrong with the server`;
		err.status = 500;
		res.render('error', { err });
	}
	// 	err.status = 500;
	// 	err.message = `Opps, something seems to be wrong with the server`;
	// 	res.status(err.status || 500).render('error', { err });
	// }
	
	// res.locals.error = err;
	// console.log(err);
	// const status = err.status || 500;
	// res.message = 'Something went wrong with the server';
	// res.status(status);
	// res.render('error', { err });

	});



app.listen(3000, () => {
	console.log('The application is running on localhost:3000!')
});

