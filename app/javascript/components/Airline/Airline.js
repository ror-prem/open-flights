import React, {useState, useEffect} from 'react'

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});

  useEffect(()=>{
    console.log(props)
  },[])


  return (
    <div>This is index#show</div>
  )
}

export default Airline