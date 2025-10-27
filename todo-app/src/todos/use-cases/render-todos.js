
import { Todo } from '../../models/todo.model.js';

/**
 *
 * @param {String} elementId del componete donde se van a renderizar los todos html
 * @param {Todo[]} todos arreglo de todos a renderizar
 */
export const renderTodos = (elementId, todos = []) => {

    console.log("Test de Renderizado" + elementId, todos );

};