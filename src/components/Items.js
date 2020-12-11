import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Items extends Component{
    ulStyle = () => {
        return {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: 'rgb(255,255,255)'
        }
    }
    liStyle = () => {
        return {
            float: 'left',
            display: 'block',
            width: '11%',
            color: 'rgb(0,0,0)',
            fontWeight: 600,
            fontSize: 13,
            textAlign: 'center',
            padding: '16px 16px 16px',
            borderBottom: '1px solid #333',
        }
    }
    otherStyle = () => {
        return {
            float: 'left',
            display: 'block',
            width: '11%',
            color: '#0E5240',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 13,
        }
    }
    render() {
        const {number} = this.props.tech;
        return (
            <div>
                <ul style={this.ulStyle()}>
                    <li style={this.liStyle()}>{ this.props.tech.number }</li>
                    <li style={this.liStyle()}>{ this.props.tech.fullName }</li>
                    <li style={this.liStyle()}>{ this.props.tech.email }</li>
                    <li style={this.liStyle()}>{ this.props.tech.phone }</li>
                    <li style={this.liStyle()}>{ this.props.tech.statusActive }</li>
                    <li style={this.liStyle()}>{ this.props.tech.trained }</li>
                    <li style={this.liStyle()}>{ this.props.tech.assignedClients }</li>
                    <li style={this.liStyle()}>{ this.props.tech.spareHoursAvailable }</li>
                    <div>
                        <button onClick={this.props.delTech.bind(this, number)} style={dltBtn}>DLT</button>
                        <button style={edtBtn}>EDT</button>
                    </div>    
                    
                </ul>
            </div>
        )
    }
}

Items.propTypes = {
    tech: PropTypes.object.isRequired
}

const dltBtn = {
    backgroundColor: '#ff0000',
    border: 'none',
    padding: '16px',
    cursor: 'pointer',
    borderRadius: '50%',
    float: 'right',
    marginLeft: '8px',
    marginRight: '12px',
    marginTop:'5px' 
}
const edtBtn = {
    backgroundColor: '#d1c145',
    border: 'none',
    padding: '16px',
    cursor: 'pointer',
    borderRadius: '50%',
    float: 'right',
    marginLeft: '8px',
    marginRight: '12px',
    marginTop:'5px' 
}

export default Items