import './App.css';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Andres',
  lastName: 'Ruiz'
};

function getGreeting(user){
  if(user)
    return <h1>Hello, {formatName(user)}</h1>
  else
    return <h1>Hello, Stranger</h1>
}

const element = getGreeting(user);
const elementWithoutName = getGreeting();

function App() {
  return (element);
}

export default App;
