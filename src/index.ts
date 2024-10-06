import { TodoItem } from "./classes/todoItem.class";
import { TodoList } from "./classes/todoList.class";

let myList = new TodoList<string | { task: string, date: Date }>();
myList.addItem(new TodoItem(1, 'Elmenni kenyérért a boltba'));
myList.addItem(new TodoItem(2, 'Elmenni tejért a boltba'));
myList.addItem(new TodoItem(3, 'Elmenni vajért a boltba'));
myList.addItem(new TodoItem(4, { task: 'Orvosi időpontra menni', date: new Date('2024-10-06') }));
myList.addItem(new TodoItem(4, { task: 'Nyaralásra menni', date: new Date('2024-12-03') }));

//myList.deleteItem(2);

//console.log(myList);

myList.listItems();

