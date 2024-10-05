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
import qtImage from '../../assets/images/immiComma.png';
import qt2Image from '../../assets/images/immiComma2.png';

function EducationVisa() {
    return (
        <>
            <MDBContainer fluid className='mx-0'>
                <MDBRow className={Style.accountText}>
                    <MDBCol md='6' className='px-0'>
                        <h2>Education Visa </h2>
                    </MDBCol>
                    <MDBCol md='6' className='px-0'>
                        <p>
                            Issued to applicants who wish to study, attend a seminar or training session, or participate in an internship in Thailand.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className='mx-0 pt-5' >
                <MDBRow className={Style.upBanner}>
                    <MDBCol sm='12' lg="6" md='6' className={Style.bannerText}>
                        <p>
                            A holder of this kind of visa may remain in Thailand for a maximum of 90 days, which can be approved for up to a year by the Office of the Immigration Bureau, following the date of the first arrival in Thailand.
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
                    <h5>
                        Only at the Thai Embassy or Consulate-General in their country of residence or birth, or at the authorised Thai Embassy, must nationals of specified nations submit a visa application.
                    </h5>
                    <span>
                        <img src={qt2Image} />
                    </span>
                </MDBRow>
                <MDBRow className={`mx-0 ${Style.retireText}`} >
                    <MDBCol md="12" className={Style.eduVisa}>
                        <p>In order to find out where to apply for a Thailand visa before departing, travellers are suggested to get in touch with the closest Thai Embassy or Consulate-General.</p>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>


            <MDBContainer fluid className={Style.smartvisaForm}>
                <MDBRow>
                    <MDBCol md="6" className={Style.visaFormText}>
                        <p>We are ready to meet with you to discuss your eligibility for a Education Visa </p>
                    </MDBCol>
                    <MDBCol md="6" className={Style.visaForm}>
                        <form className='pt-4'>
                            <p className="pb-4">Drop your details and we’ll get in touch with you.</p>
                            <div className='d-flex align-items-center mt-3'>
                                <input className='form-control' type="number" placeholder='mobile number' />
                                <span><MDBIcon fas icon="arrow-right" /></span>
                            </div>

                            <div className='d-flex align-items-center mt-4'>
                                <input className='form-control' placeholder='email id' type="email" />
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

export default EducationVisa
