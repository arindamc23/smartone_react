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
import qtImage from '../../assets/images/Comma.png';
import qt2Image from '../../assets/images/Comma2.png';

function ExtentionVisa() {
  return (
    <>
      <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.accountText}>
          <MDBCol md='6' className='px-0'>
            <h2>Work Permits</h2>
          </MDBCol>
          <MDBCol md='6' className='px-0'>
            <p>
            Smart 1 Solutions quickly processes Thailand work permits and one-year visas for expatriates.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className='mx-0 pt-5' >
        <MDBRow className={Style.upBanner}>
          <MDBCol sm='12' lg="6" md='6' className={Style.bannerText}>
            <p>
            Thai law mandates that everyone working legally in Thailand must have a work permit. It can only be done after submitting an application to the Bangkok Ministry of Labour.
            </p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`p-0 ${Style.bannerImg}`}>
            <MDBCardImage src={banner1} alt='...' fluid />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={`${Style.smartcontent}`}>
        <MDBRow className={`mx-0 px-0 ${Style.retireText}`} >
          <MDBCol md="12" className={Style.workText1}>
            <h3>Important Information About  <span className='d-lg-block'>Non-Immigrant Business Visas in Thailand:              </span></h3>
           <p><span>1.</span>   Initial non-immigrant visas should be issued by the consulate in the foreigner’s home country, allowing ninety days' stay in Thailand for a single entry. Note that it can be extended to a one-year non-immigrant visa as soon as the work permit is processed.</p>
           <p><span>2.</span> A one-year non-immigrant visa is issued to the potential businessman to conduct business and travel in and out of the country frequently.</p> 
          </MDBCol>
         

          <MDBCol md="12" className={Style.workText2}>
             <p><span>4.</span> Non-immigrant B-A visas for approved businesses can be applied for by the company where the would-be visa holder is willing to invest. The grant of such a visa is possible under the jurisdiction of the Office of the Immigration Bureau, Bangkok. Once it is approved by them, they will advise the Royal Thai Embassy through the Ministry of Foreign Affairs on the issuance of the visa. The holder of this visa will be allowed to stay at least for a period of a year or so from the date of his entry into the kingdom.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={`bg-black ${Style.smartcontent}`}>
        <MDBRow className={`mx-0 px-0 text-light ${Style.retireText}`} >
          <MDBCol md="12" className={Style.workText1}>
            <h3 className='text-light'>The Thai Business Visa <span className='d-lg-block'>Application Procedure:</span></h3>
           <p><span>1.</span>Preparing documents provided by the organisation that has sent an employment invitation to the visa applicant in Thailand.</p>
           <p><span>2.</span>Submitting the necessary documents to the consulate or the Thai embassy in the home country of the applicant.</p> 
          </MDBCol>
          
         


          <MDBCol md="12" className={Style.workText2}>
             <p><span>3.</span>  Paying the consular fees either by check, credit card, or cash.</p>
             <p><span>4.</span>  The visa application is reviewed and processed. The processing time generally takes almost five to ten business days, depending on the Thai embassy where the application has been made.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={`bg-white  ${Style.workContainer}`}>
        <MDBRow className={`g-0 ${Style.infoText}`}>
          <MDBCol md='12' className='px-0'>
            <p className='text-black'>Requisites:</p>
          </MDBCol>
          <MDBCol md='12' className={`px-0 pb-4 ${Style.extentionText1}`}>
            <ul>
              <li>The applicant should confirm that they are not a threat to the Thai government.</li>
              <li>The applicant must be present in person when the visa application is lodged.</li>
            </ul>
          </MDBCol>
        
        </MDBRow>
      </MDBContainer> 

      <MDBContainer fluid className={Style.smartvisaForm}>
        <MDBRow>
          <MDBCol md="6" className={Style.residenceFormText}>
            <p>We are ready to meet with you to discuss your Business Visa Extension </p>
          </MDBCol>
          <MDBCol md="6" className={Style.visaForm}>
            <form className={Style.residenceForm}>
              <p className="pb-4">Drop your details and we’ll get in touch with you.</p>
              <div className='d-flex align-items-center mt-3'>
                <input className='form-control' placeholder='mobile number'  type="number"/>
                <span><MDBIcon fas icon="arrow-right" /></span>
              </div>

              <div className='d-flex align-items-center mt-4'>
                <input className='form-control' placeholder='email id' type='email'/>
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

export default ExtentionVisa
