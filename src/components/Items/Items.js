import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Items.css';
import { BiPencil } from 'react-icons/bi';
import { FcCancel } from 'react-icons/fc';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';

export class Items extends Component{
    state = {...this.props.tech, isEditing: false};
    
    ulStyle = () => {
        return {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: 'rgb(239,232,216)'
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
            padding: '16px 10px 16px',
            borderBottom: '1px solid #333',
        }
    }

    toggleEdit = () => {
        this.setState( { isEditing: !this.state.isEditing } );
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    saveChanges = () => {
        this.toggleEdit();
        this.props.updateTechnician(this.state);
    }

    render() {
        const {number} = this.props.tech;
        if (this.state.isEditing){
            return(
                <ul style={this.ulStyle()}>
                <input className="inputStyleEdt"
                    type="text" 
                    name="Number" 
                    value={this.state.number}
                    readonly
                ></input>
                <input className="inputStyleEdt"
                    type="text" 
                    name="fullName" 
                    placeholder=" Add Name"
                    value={this.state.fullName}
                    onChange={this.onChange}
                ></input>
                <input className="inputStyleEdt"
                    type="email" 
                    name="email" 
                    placeholder=" Add Email"
                    value={this.state.email}
                    onChange={this.onChange}
                ></input>
                <input className="inputStyleEdt"
                    type="number" 
                    name="phone" 
                    placeholder=" Add Phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                ></input>
                <input className="inputStyleEdt"
                    type="text" 
                    name="statusActive" 
                    placeholder=" Add Status"
                    value={this.state.statusActive}
                    onChange={this.onChange}
                ></input>
                <input className="inputStyleEdt"
                    type="text" 
                    name="trained" 
                    placeholder=" Add Trained Skills"
                    value={this.state.trained}
                    onChange={this.onChange}
                ></input>
                <input className="inputStyleEdt"
                    type="number" 
                    name="assignedClients" 
                    placeholder=" Add Asigned Clients"
                    value={this.state.assignedClients}
                    onChange={this.onChange}
                ></input>
                <input className="inputStyleEdt"
                    type="number" 
                    name="spareHoursAvailable" 
                    placeholder=" Add Spare Hours Available"
                    value={this.state.spareHoursAvailable}
                    onChange={this.onChange}
                ></input>
                <div>
                    <button onClick={this.toggleEdit} style={Btn}><FcCancel /></button>
                    <button onClick={this.saveChanges} style={Btn}><AiOutlineCheckCircle/></button>
                </div>
                </ul>
            )
        }
        return (
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
                    <button onClick={this.props.delTech.bind(this, number)} style={Btn}><GoTrashcan/></button>
                    <button 
                    onClick={this.toggleEdit} 
                    style={Btn}><BiPencil/></button>
                </div>    
            </ul>
        )
    }
}

Items.propTypes = {
    tech: PropTypes.object.isRequired
}

const Btn = {
    backgroundColor: 'rgb(239,232,216)',
    border: 'none',
    width: '50px',
    height: '50px',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '50%',
    float: 'right',
    marginLeft: '8px',
    marginRight: '12px',
    marginTop:'5px' 
}

export default Items