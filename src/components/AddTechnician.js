import React, {Component} from 'react';

export class AddTechnician extends Component {
    state = {
        fullName: '',
        email: '',
        phone: '',
        statusActive: '',
        trained: '',
        assignedClients: '',
        spareHoursAvailable: ''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTech(this.state);
        this.setState(
            {
                fullName:'',
                email:'',
                phone: '',
                statusActive: '',
                trained: '',
                assignedClients: '',
                spareHoursAvailable: ''
            });
    }
    render () {
        return (
            <form onSubmit={this.onSubmit} style={{ marginTop: '100px', display: 'flex'}}>
                <input
                    type="text" 
                    name="fullName" 
                    placeholder=" Add Name"
                    style={{ flex: '1', padding: '3px'}}
                    value={this.state.fullName}
                    onChange={this.onChange}
                ></input>
                <input
                    type="email" 
                    name="email" 
                    placeholder=" Add Email"
                    style={{ flex: '1', padding: '3px'}}
                    value={this.state.email}
                    onChange={this.onChange}
                ></input>
                <input
                    type="number" 
                    name="phone" 
                    placeholder=" Add Phone"
                    style={{ flex: '1', padding: '3px'}}
                    value={this.state.phone}
                    onChange={this.onChange}
                ></input>
                <input
                    type="text" 
                    name="statusActive" 
                    placeholder=" Add Status"
                    style={{ flex: '1', padding: '3px'}}
                    value={this.state.statusActive}
                    onChange={this.onChange}
                ></input>
                <input
                    type="text" 
                    name="trained" 
                    placeholder=" Add Trained Skills"
                    style={{ flex: '1', padding: '3px'}}
                    value={this.state.trained}
                    onChange={this.onChange}
                ></input>
                <input
                    type="number" 
                    name="assignedClients" 
                    placeholder=" Add Asigned Clients"
                    style={{ flex: '1', padding: '3px'}}
                    value={this.state.assignedClients}
                    onChange={this.onChange}
                ></input>
                <input
                    type="number" 
                    name="spareHoursAvailable" 
                    placeholder=" Add Spare Hours Available"
                    style={{ flex: '1', padding: '3px'}}
                    value={this.state.spareHoursAvailable}
                    onChange={this.onChange}
                ></input>
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{color: 'rgb(239,232,216)',backgroundColor: 'rgb(19,84,76)',border: '1px solid #333',fontWeight: '600', flex: '1'}}
                ></input>
            </form>
        )
    }
}

export default AddTechnician;