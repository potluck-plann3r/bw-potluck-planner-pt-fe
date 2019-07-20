import React from 'react'
import {connect} from 'react-redux'
import {addPotluck} from '../../actions/index'

class CreatePotluck extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newPotluck:{
                locationName: '',
                locationAddress: '',
                locationStreet: '',
                locationState: '',
                locationCity: '',
                locationCountry: '',
                locationPostcode: ''
            }
        }
    }

    onChange = e =>{
        e.preventDefault();
        console.log(e.target.value)
        this.setState({newPotluck: {
            ...this.state.newPotluck,
            [e.target.name]: e.target.value
        }})
    }

    onCancel =_=>{
        this.props.history.push('/protected/potlucks')
    }
    
    onSubmit = e =>{
        let refreshInput = {
            locationName: '',
            locationAddress: '',
            locationStreet: '',
            locationState: '',
            locationCity: '',
            locationCountry: '',
            locationPostcode: ''
        }
        e.preventDefault();
        this.props.addPotluck(this.state.newPotluck);
        this.setState({locationName:'', locationAddress: '', locationStreet: '', locationState: '', locationCity: '', locationCountry: '', locationPostcode: ''})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Event name' value={this.state.locationName} name='locationName' onChange={this.onChange}/>
                    <h2>Address</h2>
                    <input type='number' placeholder='address number' value={this.state.locationAddress} name='locationAddress' onChange={this.onChange}/>
                    <input type='text' placeholder='street' value={this.state.locationStreet} name='locationStreet' onChange={this.onChange}/>
                    <input type='text' placeholder='city' value={this.state.locationCity} name='locationCity' onChange={this.onChange} />
                    <input type='text' placeholder='zip code' value={this.state.locationPostcode}name='locationPostcode' onChange={this.onChange} />
                    <input type='text' placeholder='state' value={this.state.locationState} name='locationState' onChange={this.onChange}/>
                    <input type='text' placeholder='country' value={this.state.locationCountry} name='locationCountry' onChange={this.onChange}/>
                    <div>
                        <button>Submit</button>
                        <button onClick={this.onCancel}>Cancel</button>
                    </div>                   
                </form>
            </div>
        )
    }
}

export default connect(null,{addPotluck})(CreatePotluck);