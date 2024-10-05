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

function MarriageVisa() {
    return (
        <>
            <MDBContainer fluid className='mx-0'>
                <MDBRow className={Style.accountText}>
                    <MDBCol md='6' className='px-0'>
                        <h2>Marriage Visa</h2>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </MDBCol>
                    <MDBCol sm='12' lg="6" md='6' className={`p-0 ${Style.bannerImg}`}>
                        <MDBCardImage src={banner1} alt='...' fluid />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={`${Style.smartcontent}`}>

                <MDBRow className={`mx-0 ${Style.retireText}`} >
                    <MDBCol md="12" >
                        <p>The following are the <span className='d-lg-block'>spouse’s eligibility</span> requirements:</p>
                        <p className='mb-0'><span>1.</span> Legally married to a Thai national.</p>
                        <p><span>2.</span> Meets one of the following financial requirements:</p>
                    </MDBCol>
                    <MDBCol md="12" >
                        <div className={Style.marriageText}>
                            <p className='mb-0'> <span>2.1</span> THB 400,000 in savings held in a Thai bank for at least two months prior to the visa application.</p>
                            <p className='mb-0'><span>2.2</span> Monthly income of at least THB 40,000.</p>
                            <p><span>2.3</span> The marriage visa is valid for one calendar year, and it is renewable yearly.</p>
                        </div>
                    </MDBCol>



                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={Style.MarriageSec}>
                <MDBRow className={`m-0 ${Style.smartComma}`}>
                    <span>
                        <img src={qtImage} />
                    </span>
                    <h5 className='text-white'>
                        In the event of divorce, the marriage visa will be terminated; however, under certain circumstances, visa-holders will be allowed to stay in Thailand until the natural expiration of their marriage visas
                    </h5>
                    <span>
                        <img src={qt2Image} />
                    </span>
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default MarriageVisa
       