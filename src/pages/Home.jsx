import React from 'react'
import Style from '../styles/home.module.css'
import designImage from '../assets/images/design.png'
import legalImg from '../assets/images/legal.png'
import immigration from '../assets/images/immigration.png'
import account_tax from '../assets/images/account&tax.png'
import buttonimg from '../assets/images/send.svg'
import {
  MDBContainer, MDBRow, MDBCol, MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBIcon,
  MDBBtn 
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Smallcard from '../component/card/Smallcard'
import Swiper from '../component/swiper/Swiper'
function Home() {
  return (
    <>

      <MDBContainer fluid className={Style.homeContainer}>
          <MDBRow className="mb-3 m-0">
            <MDBCol sm='12' lg="6" md='6' className={`px-0 ${Style.Banner}`}>
              <MDBCard className={Style.textCard}>
                <MDBCardBody className='px-0'>
                  <MDBCardTitle>Welcome to our Corporate <span className='d-block'>Services website</span></MDBCardTitle>
                  <MDBCardText>
                    where we offer a range of specialized services to help businesses thrive.
                    Our team of experienced professionals provides legal, immigration, accounting, and design services to clients across various industries..
                  </MDBCardText>
                  <Link to='#' className={Style.bookBtn}>Book a Free Consultation</Link>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className={`${Style.Card}`}>
                <MDBCardBody className={`${Style.designImg}`}>
                  <MDBCardSubTitle >Design <small>Service</small></MDBCardSubTitle>
                  <Link  to="#" className={`${Style.clickBtn}`}>Click</Link>
                  <img src={designImage} alt="design" />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol sm='12' lg="3" md='6' className={`px-0 ${Style.legalCard}`}>
              <MDBCard className={Style.Card}>
                <MDBCardBody className={`${Style.designImg}`}>
                <Link  to="legal" className={`${Style.clickBtn}`}>Click</Link>
                  <img src={legalImg} alt="design" />
                  <MDBCardSubTitle className={Style.legalTitle}>Legal <small>services</small></MDBCardSubTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol sm='12' lg="3" md='6' className={`px-0 ${Style.ImmigrationCard}`}>
              <MDBCard className={Style.Card}>
                <MDBCardBody className={`${Style.designImg}`}>
                <Link  to="immigration" className={`${Style.clickBtn}`}>Click</Link>
                  <img src={immigration} alt="design" />
                  <MDBCardSubTitle>Immigration <small>Services</small></MDBCardSubTitle>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className={Style.Card}>
                <MDBCardBody className={`${Style.designImg}`}>
                <Link  to="accounting" className={`${Style.clickBtn}`}>Click</Link>
                  <img src={account_tax} alt="design" />
                  <MDBCardSubTitle>Accounts & <span>Tax Advisory</span></MDBCardSubTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

        
          <MDBRow className={`me-0 ms-0 ${Style.CardContainer}`}>
            <MDBCol sm='12' md='6' lg="6" className='px-0'>
              <MDBCard className={Style.Text}>
                <MDBCardBody className={Style.leftText}>
                  <MDBCardTitle>We understand that running
                    a business can be challenging, and that's where we come in. </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm='12' md='6' lg="6" className='px-0'>
              <MDBCard className={Style.Text}>
                <MDBCardBody className={Style.rightText}>
                  <MDBCardSubTitle>Our team is committed to providing personalized solutions that meet your unique needs. We take a collaborative approach, working closely with you to understand your goals and develop strategies that help you achieve them.</MDBCardSubTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          {/* -------------------------------services---------------------------------- */}


          <MDBRow className={`me-0 ms-0 ${Style.service}`}>
            <MDBCol sm='12' md='6' lg="3" className='px-0 mb-4 mb-lg-0'>
              <Smallcard name="design" service="service"
                text="Our design team can help you develop a powerful visual identity and branding strategy that sets your business apart from the competition. We offer logo design, website design, marketing collateral, and more." 
                details=""
                />
            </MDBCol>

            <MDBCol sm='12' md='6' lg="3" className='px-0 mb-4 mb-lg-0'>
              <Smallcard name="immigration" service="service"
                text="Our immigration team can assist you with work visas, permanent residency, citizenship applications, and more. We understand the complexities of immigration and can help streamline the process for you and your employees." 
                details="immigration"
                />
            </MDBCol>

            <MDBCol sm='12' md='6' lg="3" className='px-0 mb-4 mb-lg-0'>
              <Smallcard name="legal" service="service"
                text="Our legal team offers a range of legal solutions, including contract drafting and negotiation, corporate governance, dispute resolution, and more. We can help ensure that your business is legally compliant and protected." 
                details="legal"
                />
            </MDBCol>

            <MDBCol sm='12' md='6' lg="3" className='px-0 mb-4 mb-lg-0'>
              <Smallcard name="accounting" service="service"
                text="Our accounting team can help you streamline your financial processes, from bookkeeping to tax preparation. We offer personalized financial solutions that help you make informed decisions and optimize your bottom line." 
                details="accounting"
                />
            </MDBCol>
          </MDBRow>
      </MDBContainer>

      {/* ----------------------------------latest insight---------------------------------------------------- */}
      <section className={Style.Insights}>
        <MDBContainer fluid className={Style.homeContainer}>
          <MDBRow className="mb-3 m-0">
            <MDBCard className={`px-0 ${Style.TextInsight}`}>
              <MDBCardBody className='p-0 d-flex justify-content-between align-items-end'>
                <MDBCardTitle className='px-0 mb-0'>Latest <span className='d-block'>Insights</span></MDBCardTitle>
                <a href='' className='viewall_btn'>View All</a>
              </MDBCardBody>
            </MDBCard>
            <MDBCol className='px-0'>
              <Swiper />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* ----------------------------------------business------------------------------------------------------------------ */}
      <MDBContainer fluid className={Style.formContainer}>
        <MDBRow className="mb-3 m-0">
          <MDBCol sm='12' lg="6" md='6' className={Style.leftSide}>
            <p>Are you ready to take your business to the next level?</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={Style.resp0}>
            <p className={Style.rightSide}>We take a collaborative approach, working closely with you to understand your goals and develop strategies that help you achieve them. <span>Drop your details and we’ll get in touch with you.</span>
            </p>
            <form className={Style.homeForm}>
              <div className='d-flex align-items-center mt-3'>
              <input type="number" className='form-control' placeholder='mobile number'  />
              <span><MDBIcon fas icon="arrow-right" /></span>
              </div>
              
              <div className='d-flex align-items-center mt-4'>
              <input type="email" className='form-control' placeholder='email id'  />
              <span><MDBIcon fas icon="arrow-right" /></span>
              </div>
              <div className={Style.sendBtn}>
                <button type='submit'><img src={buttonimg} alt="design" /></button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Home
 