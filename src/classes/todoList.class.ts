//import { ListServices } from "../interfaces/listservices.int";
import { TodoItem } from "./todoItem.class"

export class TodoList<T> {

    private taskContainer: Map<number, TodoItem<T>> = new Map();

    addItem(item: TodoItem<T>): void {

        this.taskContainer.set(this.taskContainer.size+1, item);
        console.log(`Item added: ${item}`);


    };

    deleteItem(id: number): void {

        this.taskContainer.delete(id);

    };

    listItems(): void {

        console.log(this.taskContainer);

    }

}