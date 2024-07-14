const Todo = require("./todo");

function getTodoById(id) {
    let todo = {
        id: id,
        task: "Do your assignments"
    }
    return todo;
}

function getAllTodo() {
    let todo = [{
            id: "123",
            task: "Do your assignments"
        }, {
            id: "1234",
            task: "Do your assignments"
        }
    ]
    return todo;
}

module.exports = {getTodoById, getAllTodo};