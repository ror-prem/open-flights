import React, {useState, useEffect, Fragment} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'

const Airline = () => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);
  const params = useParams() // This gets me the slug
  
  const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr) ;

  `
  const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
      background: #000;
    }
  `
  const Main = styled.div`
    left-padding: 50px;
  `


  useEffect(()=>{
    const slug = params.slug
    const url = `/api/v1/airlines/${slug}`
    axios.get(url)
    .then( resp => {
      setAirline(resp.data)
      setLoaded(true)    
    })
    .catch( resp => console.log(resp.data))
  },[])
  
  const handleChange = (e) =>{

  }

  const handleSubmit = (e) => {

  }


  return (
    <Wrapper>
        { loaded &&
          <Fragment>
            <Column>
              <Main>
                <Header 
                  attributes={airline?.data?.attributes} 
                  reviews={airline?.included}
                />

                <div className='reviews'></div>
              </Main>
            </Column>
          </Fragment>
        }       
      <Column>
          <ReviewForm
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}
            attributes={airline?.data?.attributes} 
            review={review}          
          />
      </Column>
    </Wrapper>
  )
}

export default Airline