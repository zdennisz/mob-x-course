import "./App.css";
import Todos from "./components/Todos";
import { ToDoItem } from "./utils/entities";

const App = () => {
	const data: ToDoItem[] = [];

	data.push({ id: Math.random(), name: "Drink Coffee", isCompleted: false });
	data.push({ id: Math.random(), name: "Wash dishes", isCompleted: false });
	data.push({ id: Math.random(), name: "Run 10k", isCompleted: false });

	return (
		<div className='App'>
			<Todos todos={data} />
		</div>
	);
};

export default App;
