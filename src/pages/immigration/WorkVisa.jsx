import React from 'react'
import Style from '../../styles/home.module.css'
import {
  MDBContainer, MDBRow, MDBCol,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import banner1 from '../../assets/images/acb_1_2.png'
function WorkVisa() {
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
          <MDBCol md="12" className={Style.residenceText1}>
           <p>We have a large clientele that has faith in our professionalism and ability because we are familiar with Thai rules and regulations and have links with many authorities. Please contact us if you require a Thailand work permit or visa and read the Thailand work permit requirements for more details.</p>
          </MDBCol>
          <MDBCol md="12" className={Style.residenceText2}>
             <p>The Royal Thai Immigration Commission handles the processing of all applications for Thai Permanent Residency. Thailand has a 100-person annual cap on the number of citizens it can grant permanent status to. Typically, the window for Thai PR applications is open from October until the end of December.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={Style.workContainer}>
        <MDBRow className={`g-0 ${Style.infoText}`}>
          <MDBCol md='12' className='px-0'>
            <p> Documents to be <span className='d-lg-block'>submitted by the Employee:</span></p>
          </MDBCol>
          <MDBCol md='12' className='px-0'>
            <ul>
              <li>Self-attested copies of your passport</li>
              <li>Three recent photographs in business attire (5 x 6 centimetres)</li>
              <li>A CV or resume stating the applicant's experience in detail</li>
              <li>Letter of employment</li>
              <li>Non-immigrant visa</li>
              <li>Self-attested education degree</li>
              <li>Self-attestedcertificates or licence</li>
              <li>TM.6 Departure Card</li>
            </ul>
          </MDBCol>
          <MDBCol md='12' className={`px-0 py-5 ${Style.workText}`}>
            <p>Original marriage certificate along with its signed <span className='d-lg-block'>photocopy, wife’s ID, household registration, and birth</span> certificates of children (if married to a Thai national)</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={Style.workContainer2}>
        <MDBRow className={`g-0 ${Style.infoText}`}>
          <MDBCol md='12' className='px-0'>
            <p>Documents to be <span className='d-lg-block'>submitted by the Employer:</span></p>
          </MDBCol>
          <MDBCol md='12' className='px-0'>
            <ul>
              <li>The Commercial Registration Department has certified the shareholders’ list.</li>
              <li>Factory Licence that is issued by the Factory Department (if required)</li>
              <li>VAT Certificate: Phor Phor 20</li>
              <li>VAT filing (Phor Phor 30)</li>
              <li>Withholding Tax (Phor Ngor Dor 1)</li>
              <li>Social Security Payment Filing</li>
            </ul>
          </MDBCol>
          <MDBCol md='12' className={`px-0 py-5 ${Style.workText7}`}>
            <p>Commercial Registration Department Certificate stating the registration of the organisation that the applicant is applying for. It should also show the name of the director(s), the company’s registered capital, and its objections.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={`${Style.smartcontent}`}>
        <MDBRow className={`mx-0 px-0 ${Style.retireText}`} >
          <MDBCol md="12" className={Style.workText1}>
            <h3>Responsibilities of an Expat after <span className='d-lg-block'>Getting a Thailand Work Permit: </span></h3>
           <p><span>1.</span>  The work permit must be carried to work so that it can be shown to government officials at any time.</p>
           <p><span>2.</span>  The licensee must only perform the tasks specified in the work permit.Also, he or she must work in the workplace and   locality defined in the work permit in Thailand.</p>
           <p><span>3.</span>  The licensee must notify the registrar within 30 days of the extension date.</p>
          </MDBCol>
          <MDBCol md="12" className={Style.workText2}>
             <p><span>4.</span> If the licensee wishes to continue working, he or she must apply for a work permit renewal before it expires.</p>
             <p><span>5.</span> If the contract with the present company has been terminated, it is the licensee’s duty to notify the Department of Employment and return the work permit within seven days of the termination date.</p>

             

          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={Style.workContainer}>
        <MDBRow className={`g-0 ${Style.infoText}`}>
          <MDBCol md='12' className='px-0'>
            <p> Provisions under which Work<span className='d-lg-block'> Permits aren’t required:</span></p>
          </MDBCol>
          <MDBCol md='12' className='px-0'>
            <ul>
              <li>Members of the consular missions</li>
              <li>Individuals having special permission from the Thai government</li>
              <li>Representatives of member countries</li>
              
            </ul>
          </MDBCol>
          <MDBCol md='12' className={`px-0 py-5 ${Style.workText}`}>
            <p>Individuals who are on missions under the agreement <span>between a foreign government and the Thai government</span></p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      
    </>
  )
}

export default WorkVisa
