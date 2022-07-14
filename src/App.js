import logo from './logo.svg';
import './App.css';
import User from './component/User';
import Users from './users.json';

function App() {
  return (
    <div className="App">
      <User/>
      {
      Users.map( user =>{
        return(
          <tr className="man" key={user.id}>
            
            <td>{user.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{user.username}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{user.email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{user.name.firstname}{user.name.lastname}</td>
            <td>{user.phone}</td>
          </tr>
        )
      })
    }
    </div>
  );
}

export default App;
