import React from "react";
import { observer } from "mobx-react-lite";
import { ToDoItem } from "../utils/entities";

declare interface TodoProps {
	todo: ToDoItem;
}

const Todo = observer(({ todo }: TodoProps) => {
	return (
		<li>
			<input type='checkbox' checked={todo.isCompleted} />
			{todo.name}
		</li>
	);
});

export default Todo;
