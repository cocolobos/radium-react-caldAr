import React, {Component} from 'react';
import Technicians from './components/Technicians';
import AddTechnician from './components/AddTechnicians/AddTechnician';
import Header from './components/Header/Header';
import mockTechnicians from './mocks/mockTechnicians.json';
import nextId from 'react-id-generator';
import './App.css';

class App extends Component {
  state = {mockTechnicians}
  
  delTech = (number) =>{
    this.setState({mockTechnicians: [...this.state.mockTechnicians.filter(tech => tech.number !== number)] })
  }

  updateTechnician = (techUpdated) => {
    this.setState({
      mockTechnicians: [...this.state.mockTechnicians.map(tech => {
        if(tech.number === techUpdated.number) {
          tech = techUpdated;
        }
        return tech;
      })]
    });
  }

  addTech = ({fullName, email, phone, statusActive, trained, assignedClients, spareHoursAvailable}) => {
    const newTech = {
      number: nextId(),
      fullName,
      email,
      phone,
      statusActive,
      trained,
      assignedClients,
      spareHoursAvailable
    }
    this.setState({mockTechnicians: [...this.state.mockTechnicians, newTech]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <Technicians 
          technicians={this.state.mockTechnicians} 
          delTech={this.delTech} 
          updateTechnician={this.updateTechnician} 
        />
        <AddTechnician  addTech={this.addTech}/>
        </div>
      </div>
    );
  } 
}

export default App;