import React from 'react'
// import Style from '../../styles/index.css'
//import Style from '../styles/responsive.css'
//import Style from './footer.module.css';
import footerLogo from '../../assets/f_logo.png'
import facebook from '../../assets/fb.png'
import linkdin from '../../assets/in.png'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    // <div className='footer'>
    //     <MDBContainer fluid>
    //       <MDBRow className='m-0'>
    //         <MDBCol sm='5' offsetMd='6' className='footer_content'>
    //           <h4>Sitemap</h4>
    //         </MDBCol>
    //         <MDBCol sm='5' offsetSm='2' md='6' offsetMd='0' className='footer_content'>
    //           <h4>Contact Us</h4>
    //         </MDBCol>
    //     </MDBRow>
    //     </MDBContainer>
    // </div>

    <MDBContainer fluid className='footer'>
      <MDBRow className='mb-3'>
        <MDBCol  md="6" lg="6" xl="6" className='footer_contact'>
          <h4>Sitemap</h4>
          <ul className='footer_link'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="">Design</Link></li>
            <li><a href=''>About Us</a></li>
            <li><Link to="legal">Legal </Link></li>
            <li><a href=''>News</a></li>
            <li><Link to="immigration">Immigration</Link></li>
            <li><a href=''>Contact Us</a></li>
            <li><Link to="accounting">Accounts & Tax Advisory</Link></li>
            <li><a href=''>Privacy Policy</a></li>
          </ul>
        </MDBCol>
        <MDBCol md="6" lg="6" xl="6" className='footer_contact2'>
          <h4>Contact Us</h4>
          <p>
            info@smart1solutions.com<br/>
            Tel: +91-9836941571<br/>
            Fax: +91-987654321
          </p>
          <p>
            B-303 Block B Chittaranjan Ground Fl, New Delhi, Delhi, 110019, India
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className='pt-3 pt-lg-5 bottom_footer'>
        <MDBCol  md="6" lg="6" xl="6">
            <img src={footerLogo} alt="brandlogo" />
            <p className='mt-3'>Copyright &copy; 2022 Smart1Solutions Limited  |   All Rights Reserved</p>
        </MDBCol>
        <MDBCol md="6" lg="6" xl="6" className='socila_media'>
          <a href=''><img src={facebook} alt="facebook" /></a>
          <a href=''><img src={linkdin} alt="linkdin" /></a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  )
}

export default Footer
