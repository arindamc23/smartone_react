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

function Investment() {
  return (
    <>
    <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.accountText}>
            <MDBCol md='6' className='px-0'>
                <h2>Investment Visa </h2>
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
            <h5>
            As of August 2014, foreign investors in Thailand are able to stay long-term in the Kingdom. Eligibility for the Investment Visa is based on all/some of the following criteria:
            </h5>
            <span>
                <img src={qt2Image} />
            </span>
        </MDBRow>
        <MDBRow className={`mx-0 ${Style.retireText}`} >
            <MDBCol md="12" className={`px-0 ${Style.retireText1}`}>
                <p className='pt-5 mb-0'><span>1.</span>  Hold a non-immigrant visa. </p>
                <p className='mb-0 '><span>2.</span> Transfer at least 10 million baht into Thailand.</p>
                <p ><span>3.</span> One or a combination of the following, with a value totaling 10 million baht:</p>
            </MDBCol>
            <MDBCol md="12" className={`pt-5 px-0 ${Style.investText1}`}>
                <p> <span>3.1</span> Purchase or lease a condominium project.</p>
                <p><span>3.2</span> Have a balance in a fixed deposit account in a majority Thai-owned bank.</p>
                <p> <span>3.3</span> Purchase and own Thai government and/or state enterprise bonds.</p>
            </MDBCol>
        </MDBRow>

    </MDBContainer>

    <MDBContainer fluid className={`mx-0 pt-5 ${Style.BvisaSec4}`}>
        <MDBRow className={`mx-0 ${Style.investText}`}>
           <MDBCol md="12" className={Style.retireText3}>
            <p className='pt-5'> As long as the investments outlined above are maintained, the investment visa is renewed each year. Like those with other visas, holders of investment visas must report their addresses every 90 days and are only allowed to work in Thailand with a work permit.</p>
           </MDBCol>
           <MDBCol md="12" className={Style.retireText4}>
            <p className='pb-5'>
            If they can show proof of their ties to the investor, a member of the investor's family may also be allowed to reside in Thailand for an extended period of time. Parents, spouses, and kids are considered to be family members. If they possess work permits, they may also work in Thailand.
            </p>
           </MDBCol>

           <MDBCol md="12" className={Style.retireText6}>
            <p> Smart 1 Solutions’ team of lawyers is ready to meet with you
to discuss your eligibility for and to process your Investment Visa.</p>
           </MDBCol>
        </MDBRow>
    </MDBContainer>

</>
  )
}

export default Investment
