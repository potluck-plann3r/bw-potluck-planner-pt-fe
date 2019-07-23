import React from 'react';
import { connect } from 'react-redux';
import './Potluck.scss';

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
      <div className='Container' onClick={this.props.onSelectPotluck}>
        {this.props.potlucks.map(potluck => {
          return (
            <div className='Card' id={potluck.id}>
              <h1>{potluck.locationName}</h1>
              <adress>
                <h3>Location</h3>
                <p>
                  {potluck.locationAddress} {potluck.locationStreet} Unit:{' '}
                  {potluck.locationUnit}
                </p>
                <p>
                  {potluck.locationCity}, {potluck.locationState}{' '}
                  {potluck.locationCountry}
                </p>
              </adress>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  potlucks: state.reducer.potlucks
});

export default connect(
  mapStateToProps,
  {}
)(PotluckCard);

