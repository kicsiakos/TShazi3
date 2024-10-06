"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
class TodoList {
    constructor() {
        this.taskContainer = new Map();
    }
    addItem(item) {
        this.taskContainer.set(this.taskContainer.size + 1, item);
        console.log(`Item added: ${item}`);
    }
    ;
    deleteItem(id) {
        this.taskContainer.delete(id);
    }
    ;
    listItems() {
        console.log(this.taskContainer);
    }
}
exports.TodoList = TodoList;
