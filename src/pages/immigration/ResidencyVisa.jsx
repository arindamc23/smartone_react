import React from 'react'
import Style from '../../styles/home.module.css'
import {
  MDBContainer, MDBRow, MDBCol, MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBIcon
} from 'mdb-react-ui-kit';
import buttonimg from '../../assets/images/submitBtn.png'
import { Link } from 'react-router-dom';
import banner1 from '../../assets/images/acb_1_2.png'
import qtImage from '../../assets/images/comma.png';
import qt2Image from '../../assets/images/comma2.png';

function ResidencyVisa() {
  return (
    <>
      <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.accountText}>
          <MDBCol md='6' className='px-0'>
            <h2>Permanent <span className='d-lg-block'>Residency</span></h2>
          </MDBCol>
          <MDBCol md='6' className='px-0'>
            <p>
            There are many benefits to becoming a Permanent Resident (PR) in Thailand. It enables a foreigner to live continuously in Thailand without having to request a visa extension.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className='mx-0 pt-5' >
        <MDBRow className={Style.upBanner}>
          <MDBCol sm='12' lg="6" md='6' className={Style.bannerText}>
            <p>
            PRs will also be able to purchase condominiums without using an international bank transfer and have their names listed on documents for registering homes. Once a foreigner gets PR status, obtaining a work permit is also simpler.
            </p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`p-0 ${Style.bannerImg}`}>
            <MDBCardImage src={banner1} alt='...' fluid />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={`${Style.smartcontent}`}>
        <MDBRow className={`mx-0 px-0 ${Style.retireText}`} >
          <MDBCol md="12" className={Style.residenceText1}>
           <p>Additionally, the PR may be qualified to apply for naturalisation as a Thai citizen and serve as a director of a Thai public corporation. For non-Thai family members, the PR will also be allowed to petition for a visa extension and permanent resident status.</p>
          </MDBCol>
          <MDBCol md="12" className={Style.residenceText2}>
             <p>The Royal Thai Immigration Commission handles the processing of all applications for Thai Permanent Residency. Thailand has a 100-person annual cap on the number of citizens it can grant permanent status to. Typically, the window for Thai PR applications is open from October until the end of December.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={`mx-0 pt-5 ${Style.BvisaSec4}`}>
        <MDBRow className={`mx-0 ${Style.investText}`}>
          <MDBCol md="12" className={Style.residenceText3}>
            <h3>The applicant must meet <span className='d-lg-block'>the following requirements:</span></h3>
            <p className='mb-0 pt-5'> <span className='pt-5'>1.</span> The applicant must have had a Thai non-immigrant visa for at least three years prior to the submission of the application.  Holders of multiple non-immigrant visas cannot apply. The applicant must have three consecutive yearly extensions to qualify.</p>
            <p className='mb-0'><span> 2.</span> The applicant must be a holder of a non-immigrant visa at the time of submitting the application.</p>
           <p className='mb-0'><span> 3.</span> The applicant must be able to meet one of these criteria to apply for PR status in Thailand:</p>


          </MDBCol>
          <MDBCol md="12" className={`pt-5 ${Style.residenceText4}`}>
            <p className='mb-0'><span>3.1</span> Investment category (minimum THB 3–10 million investment in Thailand).</p>
            <p className='mb-0'><span>3.2</span> Working/Business category.</p>
            <p className='mb-0'><span>3.3</span> Support a family or humanitarian reasons category: In this category, the applicant must have a relationship with a Thai citizen or an alien who already possesses a residence permit as a husband or wife; father or mother; or guardian of a Thai child under 20 years of age.</p>
            <p className='mb-0'><span>3.4</span> Expert/academic category.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={Style.residenceSec}>
        <MDBRow className={`m-0 ${Style.smartComma}`}>
          <span>
            <img src={qtImage} />
          </span>
          <h5 className='text-white'>
          The applicant should note that the list of required documents for the application depends on the category under which the application is made.
          </h5>
          <span>
            <img src={qt2Image} />
          </span>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={`${Style.smartcontent}`}>

        <MDBRow className={`mx-0 ${Style.retireText}`} >
          <MDBCol md="12"  className={Style.residenceText5}>
            <p>Upon approval of the application for Thai Permanent Residency, the PR is given a residence Blue Book. The next step for PRs is to register their address in Thailand with the neighbourhood district of Amphur and get a House Card. The PR can then apply for an alien book (the "Red Book"), which is the equivalent of the Thai national ID card, at the neighbourhood police station one week after receiving the residence certificate.</p>
           
          </MDBCol>
          <MDBCol md="12"  className={Style.residenceText6}>
           <p>Every year, the PR needs to re-register there. Unless it is withdrawn, the Residency Permit itself never expires. But the PR must apply for re-entry permission in order to depart the nation and return to Thailand (endorsement). The PR may submit a request to become a naturalised Thai citizen after holding permanent resident status for five consecutive years.</p>
          </MDBCol>



        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={Style.smartvisaForm}>
        <MDBRow>
          <MDBCol md="6" className={Style.residenceFormText}>
            <p>We are ready to meet with you to discuss your eligibility for a Permanent residency </p>
          </MDBCol>
          <MDBCol md="6" className={Style.visaForm}>
            <form className={Style.residenceForm}>
              <p className="pb-4">Drop your details and we’ll get in touch with you.</p>
              <div className='d-flex align-items-center mt-3'>
                <input className='form-control' placeholder='mobile number' type="number" />
                <span><MDBIcon fas icon="arrow-right" /></span>
              </div>

              <div className='d-flex align-items-center mt-4'>
                <input className='form-control' type="email" placeholder='email id' />
                <span><MDBIcon fas icon="arrow-right" /></span>
              </div>
              <div className={Style.visaSendBtn}>
                <button type='submit'><img src={buttonimg} alt="design" /></button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default ResidencyVisa
