export class TodoItem<T> {

    public itemId: number;
    public content: T;

    constructor(id: number, content: T) {

        this.itemId = id;
        this.content = content;

    }


}