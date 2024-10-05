import React from 'react'
import Style from '../../styles/home.module.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import accountBanner from '../../assets/images/acb_1_2.png';
import qtImage2 from '../../assets/images/immiComma.png';
import qt3Image from '../../assets/images/immiComma2.png';

function HalfyearlyAudit() {
    return (
    <>
      <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.accountText}>
          <MDBCol md='6' className='px-0'>
            <h2>Half Yearly <span>Audit </span></h2>
          </MDBCol>
          <MDBCol md='6' className='px-0'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className='mx-0' >
        <MDBRow className={Style.upBanner}>
          <MDBCol sm='12' lg="6" md='6' className={Style.bannerText}>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`p-0 ${Style.bannerImg}`}>
            <MDBCardImage src={accountBanner} alt='...' fluid />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <section className={Style.house_keep}>
        <MDBContainer fluid className={`${Style.smartcontent}`}>
            <MDBRow className={`m-0 ${Style.smartComma}`}>
                <span>
                    <img src={qtImage2} />
                </span>
                <h5>
                  5 Advantages of using the services of Smart 1 Solutions for Half-Yearly Tax Auditing in Thailand
                </h5>
                <span>
                    <img src={qt3Image} />
                </span>
            </MDBRow>
              <MDBRow className={`bg-white pt-0 ${Style.accountSec2}`} >
                <MDBCol sm='12' lg="12" md='12' className='px-0'>
                    <ul className={Style.anu_audit}>
                      <li>Helps in avoiding fuss during the annual audit.</li>
                      <li>Identifies the weaknesses in the accounting system while suggesting improvements.</li>
                      <li>Enhances the reliability of the figures submitted to the prospective purchasers.</li>
                      <li>Adds credibility to publishing information for the employees, suppliers, tax authorities, and customers.</li>
                      <li>Fixed assets review</li>
                    </ul>
                </MDBCol>
              </MDBRow>
          </MDBContainer>

          <MDBContainer fluid className={` bg-black ${Style.add_service}`}>
          <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>

            <h4>The Half-Yearly Tax Auditing Process in Thailand:</h4>
            <p><span>1.</span>Preparation of the half-year financial report following the financial reporting standards.</p>
            <p><span>2.</span>Auditors consider the issues that arose during the last year’s audit.</p>
            <p><span>3.</span>Auditor inquiries about specific employees, directors, and management on how the company has addressed risks.</p>
            <p><span>4.</span>Analysis of the figures in the half-yearly report to identify unusual items or fluctuations</p>
            <p><span>5.</span>Auditors write a report on their findings.</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`text-white ${Style.secontP}`}>
                <p className='text-white'><span>6.</span>Documents Required</p>
                <p className='text-white'><span>7.</span>Government-issued Photo ID.</p>
                <p className='text-white'><span>8.</span>Completed document/form with the appropriate names, places, and dates.</p>
                <p className='text-white'><span>9.</span>Even after notarization,  your document may require witnesses. Make sure you have them.</p>
          </MDBCol>
        </MDBContainer>
      </section>
    </>
    )
}
export default HalfyearlyAudit









