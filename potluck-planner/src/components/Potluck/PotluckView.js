import React from 'react';
import {connect} from 'react-redux'
import {deletePotluck} from '../../actions'
class PotluckView extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            inviteEmail: '',
        }
    }
    
    deletePotluck = () =>{
        console.log('Deleting Potluck')
        this.props.deletePotluck(this.props.p.id)
        //this.props.history.push('/protected/potlucks')
    }

    onChangeInvite = e =>{
        this.setState({inviteEmail: e.target.value});
    }

    render(){
        if(this.props.p.role == 0)
        {
            return(
                <div>
                    <div>
                    <h1>{this.props.p.locationName}</h1>  
                    <h3>Location</h3>
                    <address>
                        <p>{this.props.p.locationAddress} {this.props.p.locationStreet} Unit:{this.props.p.locationUnit} </p> 
                        <p>{this.props.p.locationCity} {this.props.p.locationState} {this.props.p.locationPostcode}</p>   
                    </address>   
                    </div>
                    <hr/>
                    <div>
                        <h2>Attendees</h2>
                        <div>This is where the attendees will go...</div>
                        <input 
                            type='text' 
                            placeholder='Guest E-mail'
                            onChange={this.onChangeInvite}
                            value={this.state.inviteEmail}
                        />
                        <button>Invite Guest</button>
                    </div> 
                    <hr/>
                    <div>
                        <button>Edit Potluck</button>
                        <button onClick={this.deletePotluck}>Delete Potluck</button>
                    </div>
                </div>
            ) 

        } else {
            return(
                <div>
                   <div>
                    <h1>{this.props.p.locationName}</h1>  
                    <h3>Location</h3>
                    <address>
                        <p>{this.props.p.locationAddress} {this.props.p.locationStreet} Unit:{this.props.p.locationUnit} </p> 
                        <p>{this.props.p.locationCity} {this.props.p.locationState} {this.props.p.locationPostcode}</p>   
                    </address>   
                    </div>
                    <hr/>
                    <div>
                        <h2>Attendees</h2>
                        <div>This is where the attendees will go...</div>
                    </div> 
                </div>
            )
        } 
    }
}

const mapStateToProps = state =>{

}

export default connect(
    null,
    {
        deletePotluck
    }
)(PotluckView)