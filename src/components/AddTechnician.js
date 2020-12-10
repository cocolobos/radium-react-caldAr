import React, {Component} from 'react';

export class AddTechnician extends Component {
    state = {
        name:'',
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTech(this.state.name);
        this.setState({name:''});
    }
    render () {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input
                    type="text" 
                    name="name" 
                    placeholder=" Add Name"
                    style={{ flex: '1', padding: '5px'}}
                    value={this.state.name}
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