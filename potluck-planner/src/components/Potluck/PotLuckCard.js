import React from 'react'
import Styled from 'styled-components'

//#region Styled components
const CardDiv = Styled.div`
    background-color: green;
    width: 20rem;
    height: auto;
    margin: 3rem 3rem 3rem 3rem;
`
//#endregion

const testObj =  {
    id: 6,
    locationName: "the spot 666",
    locationAddress: 3493,
    locationStreet: "Bitt street",
    locationUnit: "3A",
    locationState: "NV",
    locationCity: "Las Vegas",
    locationCountry: "US",
    locationPostcode: "70808",
    userId: 64,
    potluckId: 17,
    role: 0,
    attendance: 2
}

const PotluckCard = props =>{
    return(
        <CardDiv>
            <h1>{testObj.locationName}</h1>
            <adress>
                <h3>Location </h3> 
                <p>{testObj.locationAddress} {testObj.locationStreet} Unit: {testObj.locationUnit}</p>
                <p>{testObj.locationCity}, {testObj.locationState} {testObj.locationCountry}</p>
            </adress>
        </CardDiv>
    )
}

export default PotluckCard;