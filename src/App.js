import logo from './logo.svg';
import './App.css';
import Button from './Button';


function App() {
  const [count, setCount] = setCount(10);
  const name = "Hello";
  const employees = [
    { name: "AAA", email: "aaaa@gmail.com", age: 19},
    { name: "BBB", email: "bbbb@gmail.com", age: 18},
    { name: "CCC", email: "cccc@gmail.com", age: 20}
  ]
  console.log(employees);
  return (
    <>
    <div className="App">
      <h1>{count}</h1>
      <Button onCilck={() => setCount(count + 1)}>Count ++</Button>
      {employees.map((em, index) => (
        <li key={index}>
          ชื่อพนักงาน: {em.name} | อีเมล์: {em.email} | อายุ: {em.age}
        </li>
      ))}
      <h1>Hello</h1>
      <Button text = "OK"/>
      <Button text = "Cancel"/>
 
    </div>
    </>

  );
}

export default App;
