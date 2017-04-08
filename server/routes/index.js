var express = require('express');
var router = express.Router();
var controller = require('../controllers/todoController')

// router.get('/', function(req,res){
//   res.send('okee')
// })

router.get('/', controller.getTodo);
router.post('/', controller.createTodo);
router.put('/complete/:id', controller.complete);
router.put('/uncomplete/:id', controller.uncomplete);
router.delete('/del/:id', controller.deleteTodo);

module.exports = router;
