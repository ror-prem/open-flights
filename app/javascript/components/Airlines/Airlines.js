import React, {useState, useEffect, Fragment } from 'react' 
import axios from 'axios'
import Airline from './AirlineCard'
import styled from 'styled-components'

const Home = styled.div`
  text-align:center;
  max-width:1200px;
  margin-left:auto;
  margin-right:auto;
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1{
    font-size:42px;
  }
`
const SubHeader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(()=> {
    axios.get('api/v1/airlines.json')
    .then(resp => setAirlines(resp.data.data) )
    .catch(resp => console.log(resp) )
  }, [airlines.length])
  
  const grid = airlines.map( item => {
   
    return (
      <Airline
        key={item.attributes.name}
        attributes={item.attributes}      
      />
    )
  })


  return (
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <SubHeader>Honest, unbiased airline reviews.</SubHeader>
      </Header>
      
      <Grid>
        {grid}
      </Grid>  
    </Home>
  )
}

export default Airlines