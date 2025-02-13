import "./App.css";
import { Button } from "./components/PropTypes/Button";
import { Container } from "./components/PropTypes/Container";
import { Greet } from "./components/PropTypes/Greet";
import { Heading } from "./components/PropTypes/Heading";
import { Input } from "./components/PropTypes/Input";
import { Oscar } from "./components/PropTypes/Oscar";
import { Person } from "./components/PropTypes/Person";
import { PersonList } from "./components/PropTypes/PersonList";
import { Status } from "./components/PropTypes/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Tony",
      last: "Stark",
    },
    {
      first: "Capptain",
      last: "America",
    },
  ];
  return (
    <div className="App">
      <div>
      {/* <h1>App</h1>
      <Greet name="Shivani" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}
      </div>
      <div>
        <Button handleEvent={(event, id)=>{
          console.log('event clicked', event, id);
          
        }} handleClick={()=>{
          console.log('button clciked');
        }} />
        <Input value=" " handleChange={event => console.log(event)
        }  />
      </div>
      <div>
        <Container  styles={{border: '1px solid black', padding: '1rem'}} />
      </div>

    </div>
  );
}

export default App;
