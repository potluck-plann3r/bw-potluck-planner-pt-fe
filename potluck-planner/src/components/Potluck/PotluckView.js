import React from 'react';

class PotluckView extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }

    render(){
        console.log(this.props.p)
        return(
            <div>Potluck: {this.props.p.id}</div>
        )
    }
}

export default PotluckView