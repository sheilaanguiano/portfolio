const express = require ('express');
const router = express.Router();
const { projects } = require('../data/data.json');

// ---------- GET home page----------
router.get('/', (req, res, next) => {
	
	// throw new Error('500');
    
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


module.exports = router;