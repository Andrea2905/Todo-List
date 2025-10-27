
import html from './app.html?raw';
import todoStore from '../store/todo.store.js';

/**
 * @param {string} elementId
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    }

    // Cuando se llame la función app() se llama esta función anónima autoejecutable
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();

};
