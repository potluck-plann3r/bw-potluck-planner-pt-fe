import React from 'react'

class CreatePotluck extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newPotluck:{
                locationName: '',
                locationStreet: '',
                locationAdress: '',
                locationUnit: '',
                locationState: '',
                locationCity: '',
                locationCountry: '',
                locatiionPostcode: ''
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

    render(){
        return(
            <div>
                <form>
                    <input placeholder='Event name' name='locationName' onChange={this.onChange}/>
                    <h2>Adress</h2>
                    <input placeholder='address number' name='locationAdress' onChange={this.onChange}/>
                    <input placeholder='street' name='locationStreet' onChange={this.onChange}/>
                    <input placeholder='unit' name='locationUnit' onChange={this.onChange}/>
                    <input placeholder='city' name='locationCity' onChange={this.onChange} />
                    <input placeholder='zip code' name='locationPostcode' onChange={this.onChange} />
                    <input placeholder='state' name='locationState' onChange={this.onChange}/>
                </form>
            </div>
        )
    }
}

export default CreatePotluck;