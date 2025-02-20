const Todo = require("../models/todoModel")

exports.getTodos = async(req, res)=>{
    console.log("Fetching data from db");
    try {
        const todos = await Todo.find();
        console.log("Fetched all the todos", todos);
        res.status(200).json(todos)
        
    } catch (error) {
        console.log("Error while fetching the data from db", error);
        res.status(500).json({message:"Something went wrong, please try again"})
    }
    
}

exports.addTodos = async (req, res)=>{
    const title = req.body

    console.log("Adding a new todo", title.todo)
    const newTodo = new Todo({
        title: title.todo
    })
    console.log("Adding the todo to the db", newTodo);
    const savedTodo = await newTodo.save()
    console.log("Added the todo to the db", savedTodo);
   res.status(200).json(savedTodo)

}