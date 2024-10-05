import React from 'react'
import Style from '../../styles/home.module.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import accountBanner from '../../assets/images/acb_1_2.png';
import qtImage from '../../assets/images/immiComma.png';
import qt2Image from '../../assets/images/immiComma2.png';

function Payroll() {
  return (
    <>
        <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.accountText}>
          <MDBCol md='6' className='px-0'>
            <h2>Payroll Services</h2>
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

        <MDBContainer fluid className={`${Style.smartcontent}`}>
            <MDBRow className={`m-0 ${Style.smartComma}`}>
                <span>
                    <img src={qtImage} />
                </span>
                <h5>
                    Employers use payroll management services to make sure that employees are paid on time and that their legal duties are satisfied. With the help of Smart 1 Solutions' payroll management services in Thailand, you can avoid the following difficulties in the legal and human resources facets of your company:
                </h5>
                <span>
                    <img src={qt2Image} />
                </span>
            </MDBRow>
        </MDBContainer>

        <section className={Style.house_keep}>
            <MDBContainer fluid className={Style.accountSec2}>
              <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className='px-0'>
                    <ul>
                        <li>Inaccuracy and higher maintenance costs</li>
                        <li>Reduce the burden on the finance team</li>
                        <li>Avoid Tax-Related issues</li>
                        <li>Stay compliant with the Thai Law</li>
                        <li>Simplify the payroll process</li>
                        <li>Compliance with Government Regulations</li>
                        <li>Better Security</li>
                        <li>More focus on the business</li>
                    </ul>
                </MDBCol>
              </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={`bg-black ${Style.accountSec4}`}>
            <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className='px-0'>
                    <p>Smart 1 Solutions payroll <span className='d-lg-block'>services in Thailand include:</span></p>
                    <ul>
                        <li>Monthly payroll calculation, including pension fund</li>
                        <li>Preparation of documents for bank auto-payments</li>
                        <li>Preparation of monthly pay slips</li>
                    </ul>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>
    </>
  )
}

export default Payroll
