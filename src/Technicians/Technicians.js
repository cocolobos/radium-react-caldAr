import React, {Component} from 'react';
import Items from '../components/Items/Items';
import './Technicians.css'
import PropTypes from 'prop-types';

class Technicians extends Component {
  render(){
    return(
      <div>
        <ul className="ulStyle">
          <li className="liStyleHeader">Number</li>
          <li className="liStyleHeader">Full Name</li>
          <li className="liStyleHeader">Email</li>
          <li className="liStyleHeader">Phone</li>
          <li className="liStyleHeader">Status</li>
          <li className="liStyleHeader">Trained In</li>
          <li className="liStyleHeader">Assigned Clients</li>
          <li className="liStyleHeader">Spare Hours Available</li>
          <li className="liStyleHeader">Actions</li>
        </ul>
        {this.props.technicians.map((tech) => (
        <Items 
          key={tech.number} 
          tech={tech} 
          delTech={this.props.delTech} 
          updateTechnician={this.props.updateTechnician}
        />
        ))}
      </div>
    )
  } 
}

Technicians.propTypes = {
    technicians: PropTypes.array.isRequired
}

export default Technicians;