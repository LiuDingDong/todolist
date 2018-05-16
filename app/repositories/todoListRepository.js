const Todo = require("../models/todo");

let currentId = 0;

class TodoListRepository {
  constructor() {
    const todo1 = new Todo(++currentId, "todo1", "todo1 desc");
    const todo2 = new Todo(++currentId, "todo2", "todo2 desc");
    todo1.isFinished = true;
    this.todoList = [todo1, todo2];
  }

  listAllTodos() {
    //实现查看所有todos的方法
    for(const obj in this.todoList){
        console.log(obj);
    }
        return this.todoList;

  }

  findTodoBy(id) {
    //实现通过id查看具体todo的方法
    for(const obj in this.todoList){
        if(obj.currentId == id){
            console.log(obj);
            return obj;
        }
    }
  }

  createTodo(todoBody) {
    //实现创建新todo纪录的方法
    ++currentId
    var str = "todo"+currentId;
    const str = new Todo(currentId,"todo1 desc");
    this.todoList.push(str);
    this.listAllTodos();
    return str;
  }

  updateTodo(id, update) {
    //实现通过id和一个更新对象来更新todo纪录的方法
    for(const obj in this.todoList){
        if(obj.currentId){
            obj.name=update.name;
            obj.description=update.description
        }
    }
  }

  deleteTodoBy(id) {
    //实现通过id来删除todo纪录的方法
    this.todoList.reduce[id];
  }
}

module.exports = new TodoListRepository();