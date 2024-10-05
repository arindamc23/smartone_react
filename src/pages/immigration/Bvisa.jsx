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
function Bvisa() {
    return (
        <>
            <MDBContainer fluid className='mx-0'>
                <MDBRow className={Style.accountText}>
                    <MDBCol md='6' className='px-0'>
                        <h2>Non-Immigrant <span>B Visa</span></h2>
                    </MDBCol>
                    <MDBCol md='6' className='px-0'>
                        <p>
                            Foreigners who wish to work, conduct business, or undertake investment activities in Thailand must apply for a non-immigrant visa at the Royal Thai Embassies or Royal Thai Consulates-General.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className='mx-0 pt-5' >
                <MDBRow className={Style.upBanner}>
                    <MDBCol sm='12' lg="6" md='6' className={Style.bannerText}>
                        <p>
                            The spouse and children of the applicant who receive authorization to work are eligible for employment under every category of visa.
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
                        These include business visa category B, business-approved visa category B-A, and investment and business visa category IB. Holders of this type of visa who wish to work in Thailand must be granted a work permit before starting work.
                    </h5>
                    <span>
                        <img src={qt2Image} />
                    </span>
                </MDBRow>
                <MDBRow className="m-0">
                    <MDBCol md="12" className={Style.visaText}>
                        <p className='pt-5'>Nationals of certain countries are required to apply for a visa only at the Royal Thai Embassy or Royal Thai Consulate-General in their home or residence country or at the designated Royal Thai Embassy or Royal Thai Consulate-General.</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={`mx-0 pt-5 ${Style.BvisaSec4}`}>
                <MDBRow className='mx-0'>
                    <h5>Non-Immigrant Visa <span className='d-lg-block'>Category B (Business Visa)</span></h5>
                    <p className='pt-5'>Issued to applicants who wish to<span className='d-lg-block'> enter the Kingdom to work or</span> <span className='d-lg-block     '>conduct business. </span></p>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={`mx-0 pt-5 ${Style.BvisaSec5}`}>
                <MDBRow className='mx-0'>
                    <MDBCol md="12">
                        <h5>
                            Non-Immigrant Visa
                            <span className='d-lg-block'>Category B-A (Business Approved Visa)</span>
                        </h5>
                    </MDBCol>
                    <MDBCol md="12" className={Style.BvisaText1}>
                        <p className='pt-5'>
                            The granting of such visas to qualified applicants is under the jurisdiction of the Office of the Immigration Bureau in Bangkok. The applicant’s associated company, in which he or she will invest or conduct business, may apply for this type of visa on behalf of the applicant at the Office of the Immigration Bureau.
                        </p>
                    </MDBCol>
                    <MDBCol md="12" className={Style.BvisaText2}>
                        <p className='pt-5'>
                            Once the application is approved, the Immigration Bureau will advise the concerned Royal Thai Embassy or Royal Consulate-General, via the Ministry of Foreign Affairs, to issue the visa to the applicant. The holder of this category B-A visa will be permitted to stay for a period of one year from the date of first entry into the Kingdom.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={`mx-0 pt-5 ${Style.BvisaSec6}`}>
                <MDBRow className='mx-0'>
                    <MDBCol md="12">
                        <h5>Non-Immigrant Visa Category
                            <span className='d-lg-block'>IB (Investment and Business Visa)</span></h5>
                    </MDBCol>
                    <MDBCol md="12" className='mt-5'>
                        <div className={Style.BvisaSecComma}>
                            <span>
                                <img src={qtImage} />
                            </span>
                            <h5>
                                These include business visa category B, business-approved visa category B-A, and investment and business visa category IB. Holders of this type of visa who wish to work in Thailand must be granted a work permit before starting work.
                            </h5>
                            <span>
                                <img src={qt2Image} />
                            </span>
                        </div>

                    </MDBCol>

                    <MDBCol md='12' className={`mt-5 ${Style.infoText}`}>
                        <ul>
                            <li>Export-promotion</li>
                            <li>Increasing employment</li>
                            <li>Utilising local raw materials</li>
                            <li>Projects involving provinces</li>
                            <li>Projects involving provinces</li>
                            <li>Not hindering existing domestic businesses</li>
                        </ul>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={`mx-0 pt-5 ${Style.BvisaSec7}`}>
                <MDBRow className='mx-0'>
                    <MDBCol md="6">
                        <h5>
                            Non-Immigrant Visa <span className='d-lg-block'>Category B (Teaching)</span>
                        </h5>
                    </MDBCol>
                    <MDBCol md="6" className={Style.NonImmiText1}>
                        <p className='pt-5'>
                            Foreigners who intend to take up employment as school teachers at levels below the university level in Thailand must submit the relevant set of documents.
                        </p>
                    </MDBCol>
                    <MDBCol md="6" className={Style.NonImmiText2}>
                        <p className='pt-5'>
                            A One-Year Extension of the non-immigrant B visa is similar to the One-Year Multiple Entry non-immigrant B visa in many respects.
                        </p>
                    </MDBCol>
                    <MDBCol md="6" className={Style.NonImmiText3}>
                        <p >
                            The two main differences are the requirement of employment (the applicant needs to have a valid work permit) and the lack of a requirement to leave the country every 90 days. The Thai B or Business Visa can be extended to a one-year visa. There are precise criteria governing the extension of the visa, which is granted on the condition of employment.
                        </p>
                    </MDBCol>
                    <MDBCol md="12" className={Style.NonImmiText4}>
                        <p className='pt-5'>
                            Regulations for the extension <span className='d-lg-block'>of the B Business Visa:</span>
                        </p>
                        <p>
                            The business must be registered in Thailand.
                            <span className='d-lg-block'>The company must be capitalised to at least Baht 2 million.</span>
                            <span className='d-lg-block'>The company must have a ratio of at least 4 to 1—four Thais for every foreigner.</span>
                            <span className='d-lg-block'>  You must earn at least the minimum wage specified for your nationality.</span>
                            <span className='d-lg-block'>Duration of the Extension: One year at a time.</span>
                            
                          
                            
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </>
    )
}

export default Bvisa
