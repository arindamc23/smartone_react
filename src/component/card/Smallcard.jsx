import React from 'react'
import Style from './card.module.css';
import { MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBIcon
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Smallcard(props) {
  return (
    <MDBCard className={Style.Text}>
    <MDBCardBody className={Style.TextBody}>
      <MDBCardTitle>{props.name} <span className='d-lg-block'>{props.service}</span></MDBCardTitle>
      <MDBCardText>{props.text}</MDBCardText>
      <Link to={props.details}>Learn More <MDBIcon fas icon="arrow-right" className='ms-1'/></Link>
    </MDBCardBody>
  </MDBCard>
  )
}

export default Smallcard
