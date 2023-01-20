import React from 'react'
import CampaignCard from '../Cards/CampaignCard'
import HomeCarousel from '../Carousel/HomeCarousel'



// REACT-Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {
  return (
    <>
    <div className="mt-2">
      <HomeCarousel/>

      <hr/>

      <Row xs={1} md={2} className="g-4">

      {Array.from({ length: 6 }).map((_, index) => (

      <CampaignCard card={index + 1} key={index}/>

      ))}
      </Row>



    </div>
    </>
  )
}

export default Home