import React from 'react'
import Style from '../../styles/home.module.css'
import {
    MDBContainer, MDBRow, MDBCol, MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import banner1 from '../../assets/images/acb_1_2.png'
import qtImage from '../../assets/images/immiComma.png';
import qt2Image from '../../assets/images/immiComma2.png';

function RetirementVisa() {
    return (
        <>
            <MDBContainer fluid className='mx-0'>
                <MDBRow className={Style.accountText}>
                    <MDBCol md='6' className='px-0'>
                        <h2>Retirement Visa</h2>
                    </MDBCol>
                    <MDBCol md='6' className='px-0'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className='mx-0 pt-5' >
                <MDBRow className={Style.upBanner}>
                    <MDBCol sm='12' lg="6" md='6' className={Style.bannerText}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </MDBCol>
                    <MDBCol sm='12' lg="6" md='6' className={`p-0 ${Style.bannerImg}`}>
                        <MDBCardImage src={banner1} alt='...' fluid />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={`${Style.smartcontent}`}>
                <MDBRow className={`m-0 ${Style.smartComma}`}>
                    <span>
                        <img src={qtImage} />
                    </span>
                    <h5 >
                        To be able to apply for a Thailand Retirement Visa, the foreigner has to meet the following requirements:
                    </h5>
                    <span>
                        <img src={qt2Image} />
                    </span>
                </MDBRow>
                <MDBRow className={`mx-0 ${Style.retireText}`}>
                    <MDBCol md="12" className={Style.retireText1}>
                        <p className='mb-0'><span>1.</span> The applicant needs to be at least 50 years old. </p>
                        <p ><span>2.</span> The applicant has to meet one of the following financial requirements:</p>
                    </MDBCol>
                    <MDBCol md="12" className={`pt-5 ${Style.retireText2}`}>
                        <p><span>2.1</span> Hold a deposit of no less than THB 800,000 in a Thai bank account for at least 3 months.</p>
                        <p><span>2.2</span> Receive a monthly income (including pension) of at least THB 65,000. As proof of monthly income, an affidavit must be obtained from the applicant’s embassy or consulate
                            in Thailand.</p>
                        <p> <span>2.3</span> A combination of bank deposits and an annual income of at least THB 800,000. As supporting evidence, an updated bank book or letter from both the applicant’s bank and embassy must be submitted.</p>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>

            <MDBContainer fluid className={`mx-0 pt-5 ${Style.BvisaSec4}`}>
                <MDBRow className='mx-0'>
                    <h5>Retirement Visa <span className='d-lg-block'>application process:</span></h5>
                   <MDBCol md="12" className={Style.retireText3}>
                    <p className='pt-5'>The applicant must obtain a non-immigrant visa at the Thai embassy in his or her home country or country of residence. This visa will allow the applicant to enter Thailand and subsequently apply for a Retirement Visa.</p>
                   </MDBCol>
                   <MDBCol md="12" className={Style.retireText4}>
                    <p className='pb-5'>
                    Once the applicant has entered Thailand, this non-immigrant visa can be converted into a one-year Retirement Visa in the last month of the visa’s validity.
                    </p>
                   </MDBCol>

                   <MDBCol md="12" className={`pt-5 ${Style.retireText5}`}>
                  <h3>To be Noted:</h3>
                  <div className={Style.retireTextPara}>
                  <p> <span>1.</span> Those on a retirement visa are not allowed to work in Thailand.</p>
                  <p><span> 2.</span> Retirement visa holders must notify the Immigration Office of their address in Thailand every 90 days.</p>
                  <p> <span>3.</span> Retirement visa holders must secure a re-entry permit when travelling outside of Thailand; otherwise, their current retirement visa will be cancelled.</p>
                  <p><span> 4.</span> A retirement visa is renewable annually.</p>
                  <p> <span>5.</span> Recent changes in the requirements for duty-free allowance no longer permit retirees to import their household effects duty-free.</p>
                  </div>
                 



                   </MDBCol>
                </MDBRow>
            </MDBContainer>

        </>
    )
}

export default RetirementVisa
