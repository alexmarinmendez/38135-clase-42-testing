import Todos from "../TODOS.js";
import assert from 'assert'

describe('Pruebas de TODOS', () => {
    it('Si hago una instanacia de la clase TODOS, el array debe estar vacío', () => {
        const todos = new Todos()
        assert.strictEqual(todos.list().length, 0)
    })
    it('Debe agregarse un TODO', () => {
        const todos = new Todos()
        todos.add('task1')
        assert.strictEqual(todos.list().length, 1)
    })
})