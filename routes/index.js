const express = require ('express');
const router = express.Router();
const { projects } = require('../data/data.json');

// ---------- GET home page----------
router.get('/', (req, res, next) => {	
	/* Passing the project data to the index template */
	res.render('index', { projects });
});


// -------- GET about page ------
router.get('/about', (req, res) => {
	res.render('about');
});


// -------- GET project page ------
router.get('/projects/:id', (req, res, next) => {
	const projectId = req.params.id;
	const project = projects.find( ({ id }) => id === +projectId);

	if (project){
		res.render('project', { project });
	} 

});

// -------- GET error page ------
/* Route to test 500 error */
router.get('/500error', (req, res) => {
	throw new Error (500);
});



module.exports = router;