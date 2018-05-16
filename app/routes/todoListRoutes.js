module.exports = function(app) {
    const todoList = require('../controllers/todolistControllers');
  
    // todoList Routes
    app.route('/todos')
      .get(todoList.listAllTodos)
      .post(todoList.createTodo);
  
    app.route('/todos/:todoId')
      .get(todoList.readTodo)
      .put(todoList.updateTodo)
      .delete(todoList.deleteTodo);
    app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
    });
  };

