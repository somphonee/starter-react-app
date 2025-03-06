import './App.css';

const SelfIntroddution = ({name = 'unknown',dateOfBirth, hobbies =[]}) => {
  return( 
  <div>
  <h1>My name is : {name} </h1>
  {dateOfBirth ? <h1> i was born on {dateOfBirth} </h1> : null}
  {hobbies.length === 0 ? null : <h1>My hobbies are: {hobbies.join(', ')}</h1>}
  
  </div>)
}
function App() {
  return (
   <div className="App">
    <SelfIntroddution name="somphone" dateOfBirth="2000 jun 26"/>
    </div>
  );
}

export default App;
