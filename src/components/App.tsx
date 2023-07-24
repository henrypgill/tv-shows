import "./App.css";
import episodes from "../data/got-episodes.json";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App() {
  return <div>Hello world</div>;
}

export default App;
