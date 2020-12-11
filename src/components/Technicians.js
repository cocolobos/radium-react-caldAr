import React, {Component} from 'react';
import Items from './Items';
import PropTypes from 'prop-types';

class Technicians extends Component {
  render(){
    console.log(this.props.technicians)
    return this.props.technicians.map((tech) => (
        <Items key={tech.number} tech={tech} delTech={this.props.delTech}/>
    ));
  } 
}

Technicians.propTypes = {
    technicians: PropTypes.array.isRequired
}
export default Technicians;