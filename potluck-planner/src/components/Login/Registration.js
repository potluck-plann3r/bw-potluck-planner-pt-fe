import React from 'react';
import {connect} from 'react-redux'

class Registration extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                <form>
                    <input/>
                </form>
            </div>
        )
    }
}

export default connect(
    null
)(Registration)