var express = require('express');
var router = express.Router();

// Require controller modules.
var markdownController = require('../controllers/markdown');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/* GET home page. */
router.get('/', (req, res, next) => res.status(201).send({ success: 'true' }));

// MARKDOWN
// GET: Random fill
router.get('/markdown/fill', markdownController.fill);
// GET: All items
router.get('/markdown/', markdownController.list);
// GET: Find a item
router.get('/markdown/:id', markdownController.details);
// GET: Convert markdown to HTML
router.get('/markdown/converter', markdownController.converter);
// DELETE: Find and delete an item
router.delete('/markdown/:id', markdownController.delete);
// POST: Create an item
router.post('/markdown/', markdownController.create);

module.exports = router;