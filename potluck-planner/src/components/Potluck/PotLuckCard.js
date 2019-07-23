import React from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
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
    console.log(this.props.potlucks);
    if (this.props.potlucks === undefined) {
      return <div>You dont have any potlucks currently</div>;
    }
    return (
      <div>
        {this.props.potlucks.map(potluck => {
          return (
            <CardDiv>
              <h1>{potluck.locationName}</h1>
              <adress>
                <h3>Location </h3>
                <p>
                  {potluck.locationAddress} {potluck.locationStreet} Unit:{' '}
                  {potluck.locationUnit}
                </p>
                <p>
                  {potluck.locationCity}, {potluck.locationState}{' '}
                  {potluck.locationCountry}
                </p>
              </adress>
            </CardDiv>
          );
        })}
      </div>
    );
  }
}

export default PotluckCard

// const mapStateToProps = state => ({
//   potlucks: state.potlucks
// });

// export default connect(
//   null,
//   {}
// )(PotluckCard);
