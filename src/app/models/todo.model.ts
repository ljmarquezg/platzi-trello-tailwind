export interface Todo {
    id: string;
    title: string;
    completed: boolean;
};

export interface Column {
    title: string;
    todos: Todo[];
    addNew: boolean;
    optionsOpen: boolean;
};