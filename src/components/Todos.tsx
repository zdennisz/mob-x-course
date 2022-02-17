import React from "react";
import Todo from "./Todo";
import { observer } from "mobx-react-lite";
import { ToDoItem } from "../utils/entities";

declare interface ToDoListProps {
	todos: ToDoItem[];
}

const Todos = observer(({ todos }: ToDoListProps) => {
	return (
		<ul>
			{todos.map((todo: ToDoItem) => {
				return <Todo todo={todo} />;
			})}
		</ul>
	);
});

export default Todos;
