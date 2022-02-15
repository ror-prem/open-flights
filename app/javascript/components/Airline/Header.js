import React from 'react'
import styled from 'styled-components'

const Header = (props) => {
  const name = props?.attributes?.name
  const image_url = props?.attributes?.image_url
  const avg_score = props?.attributes?.avg_score
  const total = props?.reviews?.length

  const Wrapper = styled.div`
    padding: 50px 100px 50px 50px;
    font-size: 22px;
    img {
      height: 60px;
      width: 60px;
      border-radius: 100%;
      border: 1px solid rgba(0,0,0,0.1);
      margin-bottom: -8px;
    }
  `
  const TotalReviews = styled.div`
    font-size: 18px;
    padding: 10px 0px;  
  `
  const TotalOutOf = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0px;  
  `
 
  return (
    <Wrapper>
      <h1><img src={image_url} alt={name}/> {name}</h1>
      <div>
        <TotalReviews>{total} User Reviews.</TotalReviews>
        <div className="starRating">star rating</div>
        <TotalOutOf>{avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header