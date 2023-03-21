import Todos from '../TODOS.js'

const todos = new Todos()
console.log(todos.list())

todos.add('Hacer pruebas')
console.log(todos.list())