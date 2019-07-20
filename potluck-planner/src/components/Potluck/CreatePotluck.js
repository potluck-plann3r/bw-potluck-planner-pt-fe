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
        this.setState({regData: {
            ...this.state.regData,
            [e.target.name]: e.target.value
        }})
    }

    onCancel =_=>{
        this.props.history.push('/protected/potlucks')
    }
    
    onSubmit = e =>{
        e.preventDefault();
        this.props.addPotluck(this.state.newPotluck);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder='Event name' name='locationName' onChange={this.onChange}/>
                    <h2>Address</h2>
                    <input placeholder='address number' name='locationAddress' onChange={this.onChange}/>
                    <input placeholder='street' name='locationStreet' onChange={this.onChange}/>
                    <input placeholder='city' name='locationCity' onChange={this.onChange} />
                    <input placeholder='zip code' name='locationPostcode' onChange={this.onChange} />
                    <input placeholder='state' name='locationState' onChange={this.onChange}/>
                    <input placeholder='country' name='locationCountry' onChange={this.onChange}/>
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