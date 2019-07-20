import React from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
//#region Styled components
const CardDiv = Styled.div`
    background-color: green;
    width: 20rem;
    height: auto; 
    margin: 3rem 3rem 3rem 3rem;
`;
//#endregion

class PotluckCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log('Your potlucks' + this.state.potlucks);
    if (this.props.potlucks === undefined) {
      return <div>You dont have any potlucks currently</div>;
    }
    return (
      <div>
        <CardDiv>
            <h1>{this.props.potluck.locationName}</h1>
            <adress>
            <h3>Location </h3>
            <p>
                {this.props.potluck.locationAddress} {this.props.potluck.locationStreet} Unit:{' '}
                {this.props.potluck.locationUnit}
            </p>
            <p>
                {this.props.potluck.locationCity}, {this.props.potluck.locationState}{' '}
                {this.props.potluck.locationCountry}
            </p>
            </adress>
        </CardDiv>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  potlucks: state.potlucks
});

const WithRouter = withRouter(PotluckCard)

export default connect(
  mapStateToProps,
  {}
)(PotluckCard);
