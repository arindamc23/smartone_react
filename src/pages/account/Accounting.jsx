import React from 'react'
import Style from '../../styles/home.module.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import accountBanner from '../../assets/images/acb_1.png';
import accountBanner2 from '../../assets/images/acb_2.jpg';
import qtImage from '../../assets/images/qt1.svg';
import qt2Image from '../../assets/images/qt2.svg';
import acctImg1 from '../../assets/images/acb_3.jpg'
import payrollImg from '../../assets/images/payroll.png'
import taxImg from '../../assets/images/taxImg.png'
import taxaudit from '../../assets/images/taxaudit.png'
import accountImg from '../../assets/images/accountImg.png'
import halfyr from '../../assets/images/halfyr.png'
function Accounting() {

  return (
    // <div>
    //   Accounting
    //  <Link to='housekeeping'><button>next</button></Link>
    // </div>
    <>
      <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.accountText}>
          <MDBCol md='6' className='px-0'>
            <h2>Accounting & <span className='d-lg-block'>Tax Advisory</span></h2>
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
            <Link to="" className={Style.book_btn}>Book a Free Consultation</Link>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`p-0 ${Style.bannerImg}`}>
            <MDBCardImage src={accountBanner} alt='...' fluid />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className='mt-lg-5'>
        <MDBRow className={Style.accountText}>
          <MDBCol md='6' className='px-0'>
            <h2>Accounting <span className='d-lg-block'>Packages</span></h2>
            <p className='pt-3 pt-lg-5 ms-0'>
              We provide flexible accounting services that are tailored to the individual needs of our clients. You can concentrate on the expansion of your company by letting Smart 1 Solutions help you with your accounting needs.
            </p>
          </MDBCol>
          <MDBCol md='6' className='px-0'>
            <p>
              The size and nature of the client's business, the amount of monthly turnover, and the number of transactions that need to be documented all factor into accounting costs. An effective approach for your business in Thailand is to have a Thai CPA oversee your Thailand accounting department through Smart 1 Solutions, Bangkok, Thailand.
            </p>
          </MDBCol>
          <MDBCol sm='12' className={Style.bannerImg2}>
            <MDBCardImage src={accountBanner2} alt='...' fluid />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={Style.accountSec2}>
        <MDBRow className='m-0'>
        <MDBCol sm='12' lg="12" md='12' className={`px-0 ${Style.quoteSec}`}>
          <span><img src={qtImage} alt="quote" /></span>
          <h5> As required by Thai Accounting Law, Smart 1 Solutions' Thai accountants are qualified to certify your Thai accounting records. Thai accounting company Smart 1 Solutions is dedicated to producing timely financial statements that are compliant with Thai tax legislation and accounting standards.</h5>
          <span><img src={qt2Image} alt="quote" /></span>
        </MDBCol>
        </MDBRow>
        <MDBRow className='m-0'>
          <MDBCol sm='12' lg="12" md='12' className='px-0'>
              <p>At the end of each month, you get the <span className='d-lg-block'>following accounting and financial reports:</span></p>
              <ul>
                <li>Balance sheet, detailing assets and liabilities at the end of each fiscal month</li>
                <li>Bank Account Reconciliation</li>
                <li>Job Ledger (detailing revenues and costs of each and all project jobs)</li>
                <li>Aging schedule of accounts receivable</li>
                <li>Aging schedule of accounts payable</li>
                <li>Reconciliation of Balance Sheet Accounts.</li>
                <li>Fixed assets and depreciation schedule</li>
                <li>Detailed account ledgers</li>
                <li>Detailed accounting journal entries</li>
              </ul>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className='px-0'>
              <p>
                The profit and loss statement lists revenues and <span className='d-lg-block'>details expenses for the month and the year-to-date</span>
              </p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className='p-0 pt-lg-5'>
              <p>
              Smart 1 Solutions will work with you to achieve the requirement while adhering to <span className='d-lg-block'>Thai accounting standards and Thai accounting legislation if your parent company</span> <span className='d-lg-block'>outside of Thailand has specified a customised accounting report format.</span>
              </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={Style.accountSec3}>
        <MDBRow className='m-0'>
          <ul>
            <li>
              <div className={Style.acct_text}>
                <h4>Complete Housekeeping Services</h4>
                <p>
                  In Thailand, bookkeeping refers to the organised recording of financial transactions inside a business, non-profit organisation, or another entity.
                </p>
                <Link to='housekeeping' className={Style.book_btn}>Learn More</Link>
              </div>
              <img src={acctImg1} alt="acctImage" />
            </li>
            <li>
              <div className={Style.acct_text}>
                <h4>Payroll Services</h4>
                <p>
                Employers use payroll management services to make sure that employees are paid on time and that their legal duties are satisfied.
                </p>
                <Link to='payroll' className={Style.book_btn}>Learn More</Link>
              </div>
              <img src={payrollImg} alt="acctImage" />
            </li>
            <li>
            <div className={Style.acct_text}>
                <h4>Corporate Income Tax</h4>
                <p>
                A legal partnership or corporation, whether it conducts business in Thailand or not, that receives income from the nation is subject to a direct tax known as corporate income tax.
                </p>
                <Link to='income_tax' className={Style.book_btn}>Learn More</Link>
              </div>
              <img src={taxImg} alt="acctImage" />
            </li>
            <li>
            <div className={Style.acct_text}>
                <h4>Tax Audit Service</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to='taxaudit' className={Style.book_btn}>Learn More</Link>
              </div>
              <img src={taxaudit} alt="acctImage" />
            </li>
            <li>
            <div className={Style.acct_text}>
                <h4>Annual Account Audit</h4>
                <p>
                According to Thai law, limited companies, registered partnerships, and foreign legal entities conducting business in Thailand are required to pay taxes per Thailand's governing taxation policies.
                </p>
                <Link to='annualaccountaudit' className={Style.book_btn}>Learn More</Link>
              </div>
              <img src={accountImg} alt="acctImage" />
            </li>
            <li>
               <div className={Style.acct_text}>
                <h4>Half-Yearly <span className='d-lg-block'> Account Audit</span></h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to='HalfyearlyAudit' className={Style.book_btn}>Learn More</Link>
              </div>
              <img src={halfyr} alt="acctImage" /></li>
          </ul>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Accounting
