import React, {Component} from 'react';
import Technicians from './components/Technicians';
import AddTechnician from './components/AddTechnician';
import Header from './components/layout/header';
import mockTechnicians from './mockTechnicians.json';
import nextId from 'react-id-generator';
import './App.css';

class App extends Component {
  state = {mockTechnicians}
  
  delTech = (number) =>{
    this.setState({mockTechnicians: [...this.state.mockTechnicians.filter(tech => tech.number !== number)] })
  }

  addTech = (fullName, email) => {
    const newTech = {
      number: nextId(),
      fullName,
      email,
    }
    this.setState({mockTechnicians: [...this.state.mockTechnicians, newTech]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <Technicians technicians={this.state.mockTechnicians} delTech={this.delTech} />
        <AddTechnician  addTech={this.addTech}/>
        </div>
      </div>
    );
  } 
}
export default App;
