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
import accountBanner from '../../assets/images/acb_1_2.png';
import banner2 from '../../assets/images/banner2.png'
import qtImage from '../../assets/images/immiComma.png';
import qt2Image from '../../assets/images/immiComma2.png';
import { Link } from 'react-router-dom';


function SmartVisa() {
    return (
        <>
            <MDBContainer fluid className='mx-0'>
                <MDBRow className={Style.accountText}>
                    <MDBCol md='6' className='px-0'>
                        <h2>Smart Visa</h2>
                    </MDBCol>
                    <MDBCol md='6' className='px-0'>
                        <p>
                            The five different types of smart visas have different requirements for minimum salaries, employment requirements, and endorsement of qualifications.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className='mx-0' >
                <MDBRow className={Style.upBanner}>
                    <MDBCol sm='12' lg="6" md='6' className={Style.bannerText}>
                        <p>
                            The spouse and children of the applicant who receive authorization to work are eligible for employment under every category of visa.
                        </p>
                    </MDBCol>
                    <MDBCol sm='12' lg="6" md='6' className={`p-0 ${Style.bannerImg}`}>
                        <MDBCardImage src={accountBanner} alt='...' fluid />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={`g-0 m-0 ${Style.bannerSec}`} >
                <MDBRow className={`g-0 ${Style.upBanner2}`}>
                   <MDBCol className={Style.overlay} md="8">
                    <img src={banner2} alt=""/>
                   </MDBCol>
                   <MDBCol className='' md="4">
                    <p>Every candidate must own a business or partner with one that has been authorised by the appropriate government body.</p>
                   </MDBCol>
                    
                </MDBRow>
            </MDBContainer>

           <MDBContainer fluid className={`${Style.smartcontent}`}>
            <MDBRow className={`m-0 ${Style.smartComma}`}>
            <span>
                <img src={qtImage}/>
            </span>
            <h5>
            All visas have a maximum renewal period of four years, with the exception of the Smart S Visa, whose renewal period is based on the initial period issued (6 months, 1 year, or 2 years).          
            </h5>
            <span>
                <img src={qt2Image}/>
            </span>
            </MDBRow>
            <MDBRow className="m-0">
                <MDBCol md="12" className={Style.visaText}>
                    <p className='pt-5'>There is no need for re-entry permission, and the applicant can use Thailand's Fast Track service at international airports. In the event that their employment changes, visa holders are required to notify the appropriate authorities and obtain further authorizations.</p>
                </MDBCol>
            </MDBRow>
           </MDBContainer>

            <MDBContainer fluid className={Style.smartvisaForm}>
                <MDBRow>
                    <MDBCol md="6" className={Style.visaFormText}>
                        <p>We are ready to meet with you to discuss your eligibility for a Smart Visa </p>
                    </MDBCol>
                    <MDBCol md="6" className={Style.visaForm}>
                        <form className='pt-4'>
                        <p className="pb-4">Drop your details and we’ll get in touch with you.</p>
                            <div className='d-flex align-items-center mt-3'>
                                <input type="number" className='form-control' placeholder='mobile number' />
                                <span><MDBIcon fas icon="arrow-right" /></span>
                            </div>

                            <div className='d-flex align-items-center mt-4'>
                                <input type="email" className='form-control' placeholder='email id' />
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

export default SmartVisa