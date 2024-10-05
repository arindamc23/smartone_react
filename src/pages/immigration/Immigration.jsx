import React from 'react'
import Style from '../../styles/home.module.css'
import {
    MDBContainer, MDBRow, MDBCol, MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage
} from 'mdb-react-ui-kit';
import immiImg from '../../assets/images/immigrationImg1.png'
import immiImg2 from '../../assets/images/immiBanner.png'
import visaImg1 from '../../assets/images/visaImg1.png'
import visaImg2 from '../../assets/images/visaImg2.png'
import visaImg3 from '../../assets/images/visaImg3.png'
import visaImg4 from '../../assets/images/visaImg4.png'
import visaImg9 from '../../assets/images/visaImg9.jpg'
import visaImg5 from '../../assets/images/visaImg5.png'
import visaImg6 from '../../assets/images/visaImg6.png'
import visaImg7 from '../../assets/images/visaImg7.png'
import visaImg8 from '../../assets/images/visaImg8.png'
import visaBanner from '../../assets/images/visaBannerImg.png'
import immiComma from '../../assets/images/immiComma.png'
import immiComma2 from '../../assets/images/immiComma2.png'
import qtImage from '../../assets/images/qt1.svg';
import qt2Image from '../../assets/images/qt2.svg';
import { Link,Outlet,useNavigate } from 'react-router-dom';
import immiAirport from '../../assets/images/immi_airport.jpg';

function Immigration() {
   const navigate = useNavigate('')
    return (
        <>
            <MDBContainer fluid className='mx-0'>
                <MDBRow className={Style.accountText}>
                    <MDBCol md='6' className='px-0'>
                        <h2>Immigration</h2>
                    </MDBCol>
                    <MDBCol md='6' className='px-0'>
                        <p>
                            Our immigration team can help you with a variety of matters, including applications for citizenship, permanent residency, and work visas. We are able to simplify the process for you and your employees because we are familiar with the complexities of immigration.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className='mx-0 pt-5' >
                <MDBRow className={Style.upBanner}>
                    <MDBCol sm='12' lg="6" md='6' className={Style.bannerText}>
                        <p>
                            We believe that when you choose us for your business equipment needs, you should expect more than just a transaction—you deserve a relationship! We're here to help, whether it's answering questions about one of our service offerings or offering suggestions based on your unique service needs.
                        </p>
                        <Link to="" className={Style.book_btn}>Book a Free Consultation</Link>
                    </MDBCol>
                    <MDBCol sm='12' lg="6" md='6' className={`p-0 ${Style.bannerImg}`}>
                        <MDBCardImage src={immiImg} alt='...' fluid />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className='mt-lg-5'>
                <MDBRow className={Style.accountText}>
                    <MDBCol md='6' className='px-0'>
                        <h2>Thai <span className='d-lg-block'>Citizenship</span></h2>
                        <p className='pt-3 pt-lg-5 ms-0'>
                            Applications for naturalisation as a Thai citizen are first submitted to the Special Branch of the Royal Thai Police in Bangkok, after which they are reviewed and approved by the Ministry of Interior.
                        </p>
                    </MDBCol>
                    <MDBCol md='6'  className='px-0'>
                        <p>
                            Permanent residency can minimise barriers for foreigners in Thailand, while naturalisation as Thai citizens can remove all of them. The right to own land and property, respite from the paperwork requirements of Thai immigration procedures, the opportunity to work in Thailand without a work visa, and simpler access to bank products are some advantages of attaining
                            Thai nationality.
                        </p>
                    </MDBCol>
                    <MDBCol sm='12' className={Style.bannerImg2}>
                        <MDBCardImage src={immiImg2} alt='...' fluid />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={Style.immiSec1}>
                <MDBRow className='m-0'>
                    <MDBCol sm='12' lg="6" md='6' className={Style.immiParaText}>
                        <p>
                            Permanent residency can minimise barriers for foreigners in Thailand, while naturalisation as Thai citizens can remove all of them. The right to own land and property, respite from the paperwork requirements of Thai immigration procedures, the opportunity to work in Thailand without a work visa, and simpler access to bank products are some advantages of attaining Thai nationality. Applications for naturalisation as a Thai citizen are first submitted to the Special Branch of the Royal Thai Police in Bangkok, after which they are reviewed and approved by the Ministry of Interior.
                        </p>
                    </MDBCol>
                    <MDBCol sm='12' lg="6" md='6' className={Style.immiPara}>
                        <p>
                            The eligibility conditions will vary depending on the applicant's situation. Unless the applicant can prove a close connection to Thailand (such as by marriage to a Thai citizen or having children who are citizens of Thailand), they will typically need to obtain permanent residency and have lived continuously in Thailand for at least five years.
                        </p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0'>
                    <MDBCol sm='12' lg="12" md='12' className={`px-0 ${Style.quoteSec}`}>
                        <span><img src={qtImage} alt="quote" /></span>
                        <h5>  Applicants applying for naturalisation via the permanent residency route must meet the following criteria:</h5>
                        <span><img src={qt2Image} alt="quote" /></span>
                    </MDBCol>
                </MDBRow>

                <MDBRow className={`${Style.immiContent}`}>
                    <MDBCol md="8">
                        <MDBRow>
                            <MDBCol md="6">
                                <p>1. A legal adult under both Thai law and the law of the applicant’s country.
                                </p>
                            </MDBCol>
                            <MDBCol md="6">
                                <p>
                                    2. Has demonstrated good conduct with respect to criminal records, political actions, and behaviour involving drugs.`
                                </p>
                            </MDBCol>
                            <MDBCol md="12" className='pt-5'>
                                <p>
                                    3. Has a stable career; the applicant must have a work permit from the Office of Work Permit or the Provincial Office of Employment and a minimum income that meets the following criteria:
                                </p>
                                <p>
                                    3.1. If the applicant does not have a strong relationship with the Kingdom of Thailand, he or she must have an income of at least 80,000 baht per month. To meet these criteria, the foreigner must submit an income certificate together with documents showing that he or she has paid personal income tax for more than 3 years or documents that show that he or she has paid personal income tax for an income of at least 100,000 Baht in the year prior to filing the request for naturalisation to Thai citizenship.
                                </p>
                                <p>
                                    3.2. If the applicant has a strong relationship with the Kingdom of Thailand (e.g., marrying a Thai national, having a child with Thai citizenship, or graduating from higher education in Thailand), he or she must have an income of at least 40,000 Baht per month. To meet these criteria, the foreigner must submit an income certificate together with documents showing that he or she has paid personal income tax for more than 3 years or documents showing that he or she has paid personal income tax for an income of at least 50,000 Baht in the year prior to filing the request for naturalisation to Thai citizenship.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" className={Style.immiContent4}>
                        <p>4. Have permission to reside in the Kingdom of Thailand under the Immigration Act B.E. 2522. To prove such, the applicant must submit a Certificate of Residence, a Certificate of Foreign Identity, or Civil Registration (Tor.Ror.14).</p>
                        <p> 5. On the date of filing the request for naturalisation as a Thai citizen, the applicant must have been continuously domiciled in Thailand for at least 5 years (i.e., permanent residency). This is certified by a Certificate of Residence, a Certificate of Foreigner Identity, or Civil Registration (Tor.Ror.14).</p>
                        <p> 6. The applicant must demonstrate Thai language proficiency. He or she must be able to speak, listen to, and understand the Thai language and also be able to sing the Thai National Anthem and Thai Royal Anthem.</p>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>



            <MDBContainer fluid className={Style.accountSec3}>
                <MDBRow className='m-0'>
                    <ul className={Style.immiList}>
                        <li>
                            <div className={Style.acct_text}>
                                <h4>Smart Visa</h4>
                                <p>
                                    The five different types of smart visas have different requirements for minimum salaries, employment requirements, and endorsement of qualifications. The spouse and children of the applicant who receive authorization to work are eligible for employment.
                                </p>
                                <Link to='smart_visa' className={Style.book_btn}>Learn More</Link>
                            </div>
                            <img src={visaImg1} alt="acctImage" />
                        </li>
                        <li>
                            <div className={Style.acct_text}>
                                <h4>Non-Immigrant <span className='d-lg-block'>B Visa</span></h4>
                                <p>
                                    Foreigners who wish to work, conduct business, or undertake investment activities in Thailand must apply for a non-immigrant visa at the Royal Thai Embassies or Royal Thai Consulates-General.
                                </p>
                                <Link to='non_immigration' className={Style.book_btn}>Learn More</Link>
                            </div>
                            <img src={visaImg2} alt="acctImage" />
                        </li>
                        <li>
                            <div className={Style.acct_text}>
                                <h4>Retirement Visa</h4>
                                <p>
                                    To be able to apply for a Thailand Retirement Visa, the foreigner has to meet the following requirements
                                </p>
                                <Link to='retirement_visa' className={Style.book_btn}>Learn More</Link>
                            </div>
                            <img src={visaImg3} alt="acctImage" />
                        </li>
                        <li>
                            <div className={Style.acct_text}>
                                <h4>Investment Visa</h4>
                                <p>
                                    As of August 2014, foreign investors in Thailand are able to stay long-term in the Kingdom. Eligibility for the Investment Visa is based on all/some of the following criteria
                                </p>
                                <Link to='investment_visa' className={Style.book_btn}>Learn More</Link>
                            </div>
                            <img src={visaImg4} alt="acctImage" />
                        </li>
                        <li>
                            <div className={Style.acct_text}>
                                <h4>Education Visa</h4>
                                <p >
                                    Issued to applicants who wish to study, attend a seminar or training session, or participate in an internship in Thailand.
                                </p>
                                <Link to='education_visa' className={Style.book_btn}>Learn More</Link>
                            </div>
                            <img src={visaImg5} alt="acctImage" />
                        </li>
                        <li>
                            <div className={Style.acct_text}>
                                <h4>Marriage Visa</h4>
                                <p>
                                    Issued to a Thai citizen's foreign spouse who must meet the immigration bureau's financial and other requirements in addition to being legally married.
                                </p>
                                <Link to='marriage_visa' className={Style.book_btn}>Learn More</Link>
                            </div>
                            <img src={visaImg6} alt="acctImage" />
                        </li>
                        <li>
                            <div className={Style.acct_text}>
                                <h4>Permanent <span>Residency</span></h4>
                                <p>
                                    There are many benefits to becoming a Permanent Resident (PR) in Thailand. It enables a foreigner to live continuously in Thailand without having to request a visa extension.
                                </p>
                                <Link to='residence_visa' className={Style.book_btn}>Learn More</Link>
                            </div>
                            <img src={visaImg7} alt="acctImage" />
                        </li>
                        <li>
                            <div className={Style.acct_text}>
                                <h4>Work Permit</h4>
                                <p>
                                    Smart 1 Solutions quickly processes Thailand work permits and one-year visas for expatriates.
                                </p>
                                <Link to='work_visa' className={Style.book_btn}>Learn More</Link>
                            </div>
                            <img src={visaImg8} alt="acctImage" />
                        </li>
                        <li>
                            <div className={Style.acct_text}>
                                <h4>Business Visa <span>Extension</span></h4>
                                <p>
                                    Foreigners who wish to do business in Thailand must obtain a non-immigrant Thai business visa at the Royal Thai Consulate General.
                                </p>
                                <Link to='extention_visa' className={Style.book_btn}>Learn More</Link>
                            </div>
                            <img src={visaImg9} alt="acctImage" />
                        </li>
                    </ul>
                </MDBRow>
            </MDBContainer>




            <MDBContainer fluid className='mt-lg-5'>
                <MDBRow className={Style.accountText}>
                    <MDBCol md='12' className='px-0'>
                        <h2>General Information  <span className='d-lg-block'>on Visas</span></h2>
                    </MDBCol>

                    <MDBCol sm='12' className={Style.bannerImg2}>
                        <MDBCardImage src={visaBanner} alt='...' fluid />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>




            <MDBContainer fluid className={`bg-white ${Style.immiSec2}`}>
                <MDBRow className='m-0'>
                    <MDBCol sm='12' lg="12" md='12' className={`px-0 ${Style.quoteSec}`}>
                        <span><img src={immiComma} alt="quote" /></span>
                        <h5 className='text-dark'> Generally, a foreign citizen who wishes to enter the Kingdom of Thailand is required to obtain a visa from a Royal Thai Embassy or a Royal Thai Consulate-General. However, nationals of certain countries do not require a visa if they meet the visa exemption requirements as follows:</h5>
                        <span><img src={immiComma2} alt="quote" /></span>
                    </MDBCol>

                    <MDBCol md="12">
                        <div className={Style.immiDiv}>
                            <p>(1) They are nationals of countries that are exempt from visa requirements when entering Thailand for tourism purposes. Such nationals will be permitted to stay in the Kingdom for a period not exceeding 30 days.</p>
                            <p>(2) They are nationals of countries that hold bilateral agreements with Thailand on the exemption of visa requirements.</p>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0'>

                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={Style.immiSec1}>
                <MDBRow className='m-0'>
                    <MDBCol md="6" className={`${Style.airportText1}`}>
                        <div className='sticky-top'>
                        <p >2. Nationals of certain countries may apply for a visa upon arrival in Thailand. Travellers with this type of visa are permitted to enter and stay in Thailand for a period not exceeding 15 days.
                        </p>
                        <p className='pt-4'>
                            3. Travelers travelling from or through countries that have been declared "yellow fever-infected areas" must acquire an international health certificate verifying the receipt of a yellow fever vaccination.
                        </p>
                        <p className='pt-4'>
                            4. Nationals of certain countries are required to apply for a visa only at the Royal Thai Embassy or the Royal Thai Consulate-General in the applicant’s country of residence, or at the Royal Thai Embassy that has jurisdiction over his or her country of residence. Travellers are advised to inquire about authorised offices for visa issuance at any Royal Thai Embassy or Royal Thai Consulate-General before departure.
                        </p>
                        </div>
                     
                    </MDBCol>
                    <MDBCol md="6">
                        <div className={Style.airportImg}>
                            <img src={immiAirport} alt="airport img" />
                        </div>
                        <div className='pt-5'>
                        <p>5. To apply for a visa, a foreigner must possess a valid passport or travel document that is recognised by the Royal Thai Government and comply with the conditions set forth in the Immigration Act of Thailand B.E. 2522 (1979) and its relevant regulations. In addition, the visa applicant must be outside of Thailand at the time of application. The applicant will be issued a type of visa in accordance with his or her purpose of visit.</p>
                        <p className='pt-5'>
                            6. In general, applicants are required to apply for a visa in person. However, Royal Thai Embassies and Royal Thai Consulates-General in some countries and in some cases may also accept applications sent through representatives, authorised travel agencies, or by post.
                        </p>
                        <p className='pt-5'>
                            7. Please note that the period of visa validity is different from the period of stay. Visa validity is the period during which a visa can be used to enter Thailand. In general, the validity of a visa is 3 months, but in some cases, visas may be issued to be valid for 6 months, 1 year, or 3 years. The validity of a visa is granted at the discretion of the Royal Thai Embassy or Royal Thai Consulate-General and is displayed on the visa sticker.
                        </p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={Style.immiSec3}>
                <MDBRow className='mx-0'>
                    <MDBCol md="12" className={`mx-0 ${Style.immiSecText}`}>
                        <p >8. On the other hand, the period of stay is granted by an immigration officer upon arrival at the port of entry and in accordance with the type of visa. For example, the period of stay for a transit visa is not to exceed 30 days; for a tourist visa, it is not to exceed 60 days; and for a non-immigrant visa, it is not to exceed 90 days from the arrival date. The period of stay granted by the immigration officer is displayed on the arrival stamp. Travellers who wish to stay longer than such a period may apply for an extension of stay.</p>
                    </MDBCol>
                    <MDBCol md="12" className={`mx-0 ${Style.immiSecText1}`}>
                        <p className='py-5'>
                            9. Foreigners entering Thailand are not permitted to work, regardless of their type of visa, unless they are granted a work permit. Those who intend to work in Thailand must hold the correct type of visa to be eligible to apply for a work permit.
                        </p>
                    </MDBCol>
                    <MDBCol md="12" className={`mx-0 ${Style.immiSecText2}`}>
                        <p>10. Royal Thai Embassies and Royal Thai Consulates-General have the authority to issue visas to foreigners for travel to Thailand. The authority to permit entry and stay in Thailand, however, is with the immigration officers. In some cases, the immigration officer may not permit a foreigner holding a valid visa entry into Thailand should the officer find a reason to believe that he or she falls into the category of aliens prohibited from entering Thailand under the Immigration Act B.E. 2522 (1979). </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className={Style.actsList}>
                <MDBRow className='mx-0'>
                    <MDBCol sm='12' lg="12" md='12' className={`px-0 ${Style.quoteSec}`}>
                        <span><img src={immiComma} alt="quote" /></span>
                        <h5 className='text-dark'> According to the Immigration Act of Thailand, B.E. 2522 (1979), foreigners who fall into any of the following categories are prohibited from entering Thailand:</h5>
                        <span><img src={immiComma2} alt="quote" /></span>
                    </MDBCol>

                    <MDBRow className={Style.actText1}>
                        <div>
                        <p>(1) Having no genuine valid passport or document used in lieu of a passport; or having a genuine valid passport or document used in lieu of a passport without valid visa issuance by the Royal Thai Embassies, the Royal Thai Consulates-General, or the Ministry of Foreign Affairs, with the exception of those who meet visa exemption requirements. The terms and conditions of visa issuance and visa exemption are prescribed by the Ministerial Regulations.
                            </p>
                        </div>
                           
                       <div>
                       <p>(2) Having no appropriate means of living following entry into the Kingdom.</p>
                            <p>(3) Having entered the Kingdom to be employed as an unskilled or untrained labourer or to work in violation of the Alien Work Permit Law</p>
                            <p>(4) Being mentally unstable or having any of the diseases stated in the Ministerial Regulations.</p>
                       </div>
                       
                        
                       
                    </MDBRow>
                
                    <MDBRow className={Style.actText2}>
                        <div>
                        <p>(5) Not having received a smallpox vaccination, inoculation, or other medical treatment for disease protection, and refusing to have such vaccinations administered by the Immigration Doctor.
                            </p>
                            <p className='pt-4'>
                            (6) Having been imprisoned by a judgement of the Thai Court or by a lawful injunction or judgement of the Court of a foreign country, except when the penalty is for a petty offence, negligence, or is provided for as an exception by the Ministerial Regulations.
                            </p>
                        </div>
                           
                       <div>
                       <p>(7) Having behaviour that could cause possible danger to the public; or having the likelihood of being a nuisance or constituting any violence to the peace, safety, and security of the public or to the security of the nation; or being under warrant of arrest by competent officials of foreign governments.</p>
                            <p>(8) Reason to believe that entry into the Kingdom is for the purpose of being involved in prostitution, the trafficking of women or children, drug smuggling, or other types of smuggling that are against public morality.</p>
                       </div>
                       
                        
                       
                    </MDBRow>

                    <MDBRow className={Style.actText3}>
                        <div>
                        <p>(9) Having no money or bond as prescribed by the Minister under Section 14 of the Immigration Act, B.E. 2522 (1979).
                            </p>
                            <p >
                            (10) Being a person prohibited by the Minister under Section 16 of the Immigration Act, B.E. 2522 (1979).
                            </p>
                        </div>
                           
                       <div>
                       <p>(11) Being deported by either the Government of Thailand or that of other foreign countries; or have had the right to stay revoked in the Kingdom or in foreign countries; or having been expelled from the Kingdom by competent officials at the expense of the Government of Thailand, unless an exemption is provided by the Minister on an individual basis.</p>
                         
                       </div>
                       
                        
                       
                    </MDBRow>
                    {/* <MDBCol md="6">
                        <p>(5) Not having received a smallpox vaccination, inoculation, or other medical treatment for disease protection, and refusing to have such vaccinations administered by the Immigration Doctor.
                        </p>
                        <p>(5) Not having received a smallpox vaccination, inoculation, or other medical treatment for disease protection, and refusing to have such vaccinations administered by the Immigration Doctor.
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <p>(6) Having been imprisoned by a judgement of the Thai Court or by a lawful injunction or judgement of the Court of a foreign country, except when the penalty is for a petty offence, negligence, or is provided for as an exception by the Ministerial Regulations.
                        </p>
                        <p>(8) Reason to believe that entry into the Kingdom is for the purpose of being involved in prostitution, the trafficking of women or children, drug smuggling, or other types of smuggling that are against public morality.
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <p>(9) Having no money or bond as prescribed by the Minister under Section 14 of the Immigration Act, B.E. 2522 (1979).
                        </p>
                        <p>(10) Being a person prohibited by the Minister under Section 16 of the Immigration Act, B.E. 2522 (1979).
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <p>(11) Being deported by either the Government of Thailand or that of other foreign countries; or have had the right to stay revoked in the Kingdom or in foreign countries; or having been expelled from the Kingdom by competent officials at the expense of the Government of Thailand, unless an exemption is provided by the Minister on an individual basis.
                        </p>
                    </MDBCol> */}
                </MDBRow>
            </MDBContainer>
        </>

    )
}

export default Immigration
