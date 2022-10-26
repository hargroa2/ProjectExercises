import "./App.css";

const Person = (props) => {
  <>
    <h1>Name: {props.name}</h1>
    <h1>Last Name: Doe</h1>
    <h2>Age: 30</h2>
  </>;
};

const App = () => {
  return (
    <div className="App">
      <h1>Person</h1>
      <Person name={"John"} />
    </div>
  );
};

export default App;
