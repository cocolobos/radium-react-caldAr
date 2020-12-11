import React, {Component} from 'react';

export class AddTechnician extends Component {
    state = {
        fullName:'',
        email:'',
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTech(this.state.email);
        this.props.addTech(this.state.fullName);
        this.setState(
            {
                fullName:'',
                email:''
            });
    }
    render () {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input
                    type="text" 
                    name="fullName" 
                    placeholder=" Add Name"
                    style={{ flex: '1', padding: '5px'}}
                    value={this.state.fullName}
                    onChange={this.onChange}
                ></input>
                <input
                    type="email" 
                    name="email" 
                    placeholder=" Add Email"
                    style={{ flex: '1', padding: '5px'}}
                    value={this.state.email}
                    onChange={this.onChange}
                ></input>
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                ></input>
            </form>
        )
    }
}

export default AddTechnician;