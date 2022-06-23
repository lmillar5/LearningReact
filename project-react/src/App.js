import React, {useState} from "react";
import Tweet from './Tweet';

function App(){
  const [users, setUser] = useState([
    {name: 'Leanne', message: "Hello there"},
    {name: 'Sarah', message: "Goodbye"}
  ]);

  return(
    <div className="app">
      {
        users.map(
          user => (
            <Tweet name={user.name} message={user.message}/>
          ) 
        )
      }
    </div>
  );
}
export default App;
