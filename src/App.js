import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Context from "./context/Context";

function App() {
  return (
    <div className="App">
      <Context>
        <Form></Form>
        <List></List>
      </Context>
    </div>
  );
}

export default App;
