import React from 'react';
import Style from '../styles/home.module.css'
import { Link } from 'react-router-dom';
import {
  MDBContainer, MDBRow, MDBCol, MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardSubTitle,
  MDBCardImage,
  MDBCardOverlay,
  MDBBtn,
} from 'mdb-react-ui-kit';
import legalBanner from '../assets/images/legal_banner.png'
import contactImg from '../assets/images/contact_img.png'
import legalimg from '../assets/images/legal_document.png'
import legalAccount from '../assets/images/legal-account.png'
import legalUser from '../assets/images/legal_user.svg'
import atmImg from '../assets/images/withdrawal.png'
import rateImg from '../assets/images/rate.png'
import debitImg from '../assets/images/debit.png'
import fundImg from '../assets/images/funds.png'
import personalImg from '../assets/images/personal.png'
import corporateImg from '../assets/images/corporate.png'
import commaImg from '../assets/images/comma.png'
import commaImgSec from '../assets/images/comma2.png'
import businessImg from '../assets/images/businessImg.png'
import crossImg from '../assets/images/crossImg.png'

function Legal() {
  return (
    <section>
      <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.legalText}>
          <MDBCol md='6' className='px-0'>
            <h2>Company Formation <span className='d-block'>in Thailand</span></h2>
          </MDBCol>
          <MDBCol md='6' className='px-0'>
            <p>You can effortlessly start a company in Thailand with our assistance without ever having to touch a legal document. The process of forming a company in Thailand doesn't have to be stressful or unknown when you work with us.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className='mx-0' >
        <MDBRow className={Style.legalBanner}>
          <MDBCard className={Style.legalCard}>
            <MDBRow className={`g-0 ${Style.legalLeft}`}>
              <MDBCol md='6'>
                <MDBCardBody className={Style.CardBody}>
                  <MDBCardText >
                    We assist in putting your Thai company in the best possible position for success by taking the guesswork out of the complex legal process. We have the greatest experts on staff for all of these, whether it is the Board of Investment Promotions, the Amity Company Treaty, or the incorporation of an LLP in Thailand.
                  </MDBCardText>
                  <Link to="" className={Style.bookBtn}>Book a Free Consultation</Link>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='6'>
                <MDBCardImage src={legalBanner} alt='...' fluid />
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={Style.legalContainer}>
        <MDBRow className={`g-0 ${Style.infoText}`}>
          <MDBCol md='12' className='px-0'>
            <p> Our hassle-free <span>process of company</span> <span>formation in Thailand</span> <span>involves:</span></p>
          </MDBCol>
          <MDBCol md='12' className='px-0'>
            <ul>
              <li>100% Foreign Ownership</li>
              <li>Company Name Reservation</li>
              <li>Memorandum of Association (MOA)</li>
              <li>Statutory Meet</li>
              <li>Tax Registration</li>
              <li>Multilingual Legal and Accounting Team</li>
            </ul>
          </MDBCol>
        </MDBRow>

        <MDBRow className={`g-0 ${Style.legalAnim}`}>
          <MDBCard className={`${Style.Card}`}>
            <MDBCol md='6' className={Style.cardImgSec}>
              <MDBCardImage src={contactImg} alt='contact-img' fluid />
            </MDBCol>
            <MDBCol md="6">
              <MDBCardBody className={`${Style.designImg}`}>
                <MDBCardSubTitle > Contact</MDBCardSubTitle>
                <MDBBtn className={`${Style.clickBtn}`}>Click</MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBCard>
        </MDBRow>

        <MDBRow className={`g-0 ${Style.CompanyInfo}`}>
          <MDBCol md="12">
            <p>Thailand Company<span> formation types include</span></p>
          </MDBCol>
          <MDBCol md="12">
            <ul>
              <li>
                <h5>Thai Limited Liability <span>Company (LLC)</span></h5>
                The most popular form of business structure in Thailand requires a minimum of 3 shareholders and 1 Thai promoter.
              </li>
              <li>
                <h5>Thai BOI <span>Company</span></h5>
                Increase the possibility of possessing 100% foreign ownership and 100% tax exemption by forming a Thai BOI company.
              </li>
              <li>
                <h5>Amity <span>Treaty LLC</span></h5>
              If you are a US national, you can establish an Amity Treaty LLC with all foreign directors and 100% foreign ownership.  
              </li>
              <li>
                <h5>Thai Public Limited <span>Company</span></h5>
                There is no minimum amount of registered capital, but you need a minimum of 15 shareholder directors, half of whom must be Thai.
              </li>
              <li>
                <h5>Branch <span>Office</span></h5>
                Companies can set up a branch office in Thailand to accomplish projects lasting up to 5 years with no tax liability.
              </li>
              <li>
                <h5>Representative <span>Office</span></h5>
                You cannot do any type of trading or profit-oriented business via a Representative Office in Thailand, but it can be of 100% foreign ownership.
              </li>
              <li>
                <h5>Regional Operating <span>Headquarters</span></h5>
               If you want to control subsidiaries of foreign businesses in Asia from Thailand, you can do it via the Regional Office.
              </li>
              <li>
                <h5>Thailand <span>Foundation</span></h5>
                Foreigners can establish Thai private and charitable foundations with a liability of 1% Corporate Income Tax.
              </li>
              <li>
                <h5>Thailand Limited <span>Partnership</span></h5>
                You will need Thai limited & general partners with registration,
                  without which it is deemed to be an
                  ordinary partnership.
              </li>
            </ul>
          </MDBCol>
        </MDBRow>

        <MDBRow className='g-0'>
          <MDBCol md='12' className={Style.legalImg}>
            <img src={legalimg} />
          </MDBCol>
        </MDBRow>

        <MDBRow className={`g-0 ${Style.DocsInfo}`}>
          <MDBCol md='6 pt-5'>
            <p>Documents required <span>for Company Formation</span> in Thailand:</p>
          </MDBCol>
          <MDBCol md='6' className={`pt-5 ${Style.docs}`}>
            <ul>
              <li>
                <h5>General</h5>
                <span>-Name of the designated company (3 proposed names)</span>
                <span>-Your confirmation of the registered address (in Thailand)</span>
                <span>-Your specific business goal</span>
              </li>
              <li>
                <h5>Shareholders’ Matter</h5>
                <span> -Copy of three promoters' or shareholders' passports</span>
                <span>-Share allocation for each shareholder</span>
              </li>
              <li>
                <h5>Directorship Matter:</h5>
                <span>-Name of authorised director(s)</span>
                <span> -Each director should have a passport photocopy.</span>
                <span>-And in the case where there is more than 1 director, please specify the
                  signatory condition.</span>
                <span>-The number of foreigners that you initially intended to have working for this entity</span>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


      <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.legalText}>
          <MDBCol md='12' className='px-0'>
            <h2>Corporate Bank <span className='d-block'>Account in Thailand</span></h2>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className='mx-0' >
        <MDBRow className={Style.legalAccount}>
          <MDBCard className={Style.legalCard}>
            <MDBRow className={`g-0 ${Style.legalLeft}`}>
              <MDBCol md='6'>
                <MDBCardBody className={Style.CardBody}>
                  <MDBCardText >
                    We provide the following assistance when opening a corporate bank account in Thailand:
                  </MDBCardText>
                  <ol>
                    <li>Complete all legal tasks on behalf of our customers.</li>
                    <li>Create the necessary paperwork.</li>
                    <li>Assistance throughout the process.</li>
                    <li>Maintain open communication with clients.</li>
                  </ol>
                  <Link to="" className={Style.bookBtn}>Book a Free Consultation</Link>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='6'>
                <MDBCardImage src={legalAccount} alt='legal-account' fluid />
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBRow>
      </MDBContainer>


      <MDBContainer fluid className={Style.legalContainer}>
        <MDBRow className={`g-0 ${Style.eligibility}`}>
          <h5>Eligibility</h5>
          <MDBCard className={Style.eligibilityRow}>
            <MDBRow>
              <MDBCol md='6'>
                <MDBCardBody className={Style.eligibilityCard}>
                  <img src={legalUser} alt="legal user"/>
                  <MDBCardText>
                  Individuals who are presently on visa exemption stamps or short-stay visas
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='6'>
                <MDBCardBody className={Style.eligibilityCard}>
                <img src={legalUser} alt="legal user"/>
                  <MDBCardText>
                  Individuals who are presently in Thailand on a non-immigrant visa or an extension of stay
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBRow>


        <MDBRow className={`g-0 px-0  ${Style.accountText}`}>
          <MDBCol md='12' className='px-0'>
            <p className={`w-100  ${Style.accountPara}`}> Benefits Of <span>Opening a Bank</span> Account in Thailand</p>
          </MDBCol>
          <MDBCol md="12" className={Style.accountImg}>
            <ul>
              <li>
                <img src={atmImg} alt="atmImg" />
               No ATM <span>Withdrawal Fees</span>
              </li>
              <li>
                <img src={rateImg} alt="rateImg" />
                No Conversion <span>Rate Fees</span>
              </li>
              <li>
                <img src={debitImg} alt="debitImg" />
                Access to Thai <span>Debit Card</span>
              </li>
              <li>
                <img src={fundImg} alt="fundImg" />
                Easy Transfer <span>of Funds</span>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>



      <MDBContainer fluid className={Style.bankContainer}>

        <MDBRow className={`mx-0 ${Style.bankRowOne}`}>
          <MDBCol md="12" className='px-0 pb-4'>
            <h1>Expats in Thailand can open the <span>following types of bank accounts:</span></h1>
          </MDBCol>
          <MDBCol md="6" className={`p-0 ${Style.personal}`}>
            <MDBCard className={Style.bankCard}>
              <MDBCardImage overlay src={personalImg} alt='personal' />
              <MDBCardOverlay>
                <MDBCardTitle>PERSONAL</MDBCardTitle>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className={`p-0 ${Style.corporate}`}>
            <MDBCard className={Style.bankCard}>
              <MDBCardImage overlay src={corporateImg} alt='corporate' />
              <MDBCardOverlay>
                <MDBCardTitle>CORPORATE</MDBCardTitle>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className={`g-0 ${Style.infoText}`}>
          <MDBCol md='12' className='px-0'>
            <p> Banks in Thailand <span>where Expats can</span> Open Accounts:</p>
          </MDBCol>
          <MDBCol md='12' className='px-0 pb-5'>
            <ul>
              <li>Bangkok Bank</li>
              <li>UOB Bank</li>
              <li>ICBC</li>
              <li>Krung Thai Bank</li>
              <li>Kiatnakin Bank</li>
              <li>CitiBank</li>
              <li>Bank of Ayudhya</li>
              <li>Bank of Thailand</li>
              <li>Thanachart Bank</li>
              <li>TMB Bank</li>
            </ul>
          </MDBCol>
        </MDBRow>

      </MDBContainer>

      <MDBContainer fluid className='g-0'>
        <MDBRow className={`g-0 mx-0 ${Style.thailandOffice}`}>
          <div className={Style.officeDiv}>
            <h5 className='pb-4'>Representative Office in Thailand</h5>
            <p className='pb-4'>The Regulation of the Office of the <span>Prime Minister BE 2529 (AD 1986)</span> defines a representative office as</p>
            <div className={`${Style.comma}`}>
              <span><img src={commaImg} /></span>
              <p>An office of a foreign company that is located in Thailand and is in the business of trading internationally. It helps facilitate the import and export of goods through its head office,
                and it is characterized by the following features:</p>
              <span><img src={commaImgSec} /></span>
            </div>

            <ol>
              <li>It does not receive any revenue from providing services</li>
              <li>It cannot receive purchase orders, make sales, or negotiate business with third parties</li>
              <li>Its expenses are paid entirely by the head office</li>
              <li>It is not subject to any corporate income tax, except for interest on any remaining funds that it has received from the head office and that are deposited in its bank account</li>
            </ol>
          </div>
        </MDBRow>

        <MDBRow className={`g-0 mx-0 ${Style.blackTheme}`}>
          <div className={Style.leftDiv}>
            <p>
              Furthermore, a “Representative Office” is defined by government regulations as the office that a foreign company sets up in Thailand to engage in the international trading business. According to the Regulations of the Office of the Prime Minister Re: Establishment of a Service Center for Visas and Work Permits (No. 3) B.E. 2544 (2001), the international trading business is defined as consisting of the following activities, which are performed on behalf of the head office or affiliated companies:
            </p>
          </div>
          <div className={`pt-5 ${Style.rightDiv}`}>
            <ol>
              <li> Reporting on business movement in Thailand</li>
              <li>Providing advice related to products that are being sold to distributors or customers</li>
              <li> Sourcing goods and services in Thailand</li>
              <li>Insliecting and controlling the quality and quantity of goods purchased or ordered to be manufactured in Thailand</li>
              <li>Introducing information regarding new products or services</li>
            </ol>
          </div>
        </MDBRow>

        <MDBCard className={Style.bandCard}>
          <MDBRow className='g-0'>
            <MDBCol md='6'>
              <MDBCardImage src={businessImg} alt='business img' fluid />
            </MDBCol>
            <MDBCol md='6'>
              <MDBCardBody className={Style.businessCard}>
                <MDBCardTitle>The Representative Office is strictly limited to the above five activities and may engage in any or all of them. </MDBCardTitle>
                <MDBCardText>
                  However, according to an announcement of the Revenue Department titled “Income Tax and Business Tax of a Representative Office of B.E. 2526 (1986),” if the Representative Office were to offer services outside this defined scope, then the Revenue Department would be empowered to subject the Representative Office to the regular Thai corporate income tax on all the income it has received; this includes all the support income that the Representative Office receives from its head office.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>

      <MDBContainer fluid className={Style.activityContainer}>
        <MDBRow className={`g-0 ${Style.activityInfo}`}>
          <h5>Furthermore, the following business activities are <b>not</b> within the purview of a representative office</h5>
          <ul>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>Making any purchases or payments or any related business transactions on behalf of the head office or affiliated companies</p>
            </li>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>The export of any products ordered by the head office or affiliated companies</p>
            </li>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>Performing quantity and quality control for unaffiliated companies</p>
            </li>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>Performing after-sale services such as installation or maintenance</p>
            </li>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>Providing advice regarding products that are produced by unaffiliated companies</p>
            </li>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>Accepting purchase orders on behalf of the head office or affiliated companies</p>
            </li>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>Coordinating the sale of products on behalf of the head office or affiliated companies</p>
            </li>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>Publicizing products or services that are already available in Thailand</p>
            </li>

            <li>
              <img src={crossImg} alt="cross img" />
              <p>Acting as an agent or distributor between the head office and affiliated companies</p>
            </li>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>Performing any planning or coordination with other entities on behalf of the head office or affiliated companies</p>
            </li>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>Acting as the agent of the head office or affiliated companies in any contracts or business transactions</p>
            </li>
            <li>
              <img src={crossImg} alt="cross img" />
              <p>Making business reports to unaffiliated companies</p>
            </li>

          </ul>
        </MDBRow>

      </MDBContainer>
    </section>
  )
}

export default Legal
