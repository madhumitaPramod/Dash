import React,{Component} from 'react';
import './App.css';
import data from "./data";
const Items = data.user;

class  App extends Component {
  render(){
    return (
      <div className="App">
      {/* items to display */}
      <h2>Dashboard Page</h2>
       <div className="blockItemsDisplay">
        {Items && (
                    <table>
                    <tbody>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Email</th>
                      <th>PhoneNumber</th>
                    </tr>
                  {Items.map(function(item, key) {
                      return (
                      <tr key = {key}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.age}</td>
                          <td>{item.gender}</td>
                          <td>{item.email}</td>
                          <td>{item.phoneNo}</td>
                      </tr>
                    )
                  })}
                  </tbody>
                </table>
              )}
        </div>
      </div>
    );
  }
}
export default App;
