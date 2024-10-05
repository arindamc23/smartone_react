import React from 'react'
import Style from '../../styles/home.module.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import accountBanner from '../../assets/images/acb_1_2.png';
import qtImage from '../../assets/images/qt1.svg';
import qt2Image from '../../assets/images/qt2.svg';
import qtImage2 from '../../assets/images/immiComma.png';
import qt3Image from '../../assets/images/immiComma2.png';

function AnnualaccountAudit() {
    return (
    <>
      <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.accountText}>
          <MDBCol md='6' className='px-0'>
            <h2>Annual Account  <span className='d-lg-block'>Audit</span></h2>
          </MDBCol>
          <MDBCol md='6' className='px-0'>
            <p>
              According to Thai law, limited companies, registered partnerships, and foreign legal entities conducting business in Thailand are required to pay taxes per Thailand's governing taxation policies. Failing to do so is illegal, and any infraction could result in a fine of up to 200,000 baht. You can be sure that, as a client of Smart 1 Solutions, we will take care of the formalities so you don't have to waste time going through the processes.
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

      <section className={Style.house_keep}>
      <MDBContainer fluid className={`bg-white ${Style.accountSec2}`}>

        <MDBRow className='m-0'>
          <MDBCol sm='12' lg="12" md='12' className='px-0'>
                <p>An annual audit in Thailand is mandatory for:</p>
                <ul>
                  <li>Thai Private Limited Company</li>
                  <li>Thai Public Limited Company</li>
                </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
        <MDBContainer fluid className={`bg-black ${Style.accountSec2}`}>
          <MDBRow className='m-0'>
            <MDBCol sm='12' lg="12" md='12' className='px-0'>
                <p>A foreign company in Thailand is active as:</p>
                <ul>
                  <li>Representative Office in Thailand</li>
                  <li>Regional Office in Thailand</li>
                  <li>Branch Office in Thailand</li>
                </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={` bg-dblue !important ${Style.accountSec2}`}>
            <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className='px-0'>
                    <p>Smart 1 Solutions’ Annual <span className='d-lg-block'>Auditing Package</span></p>
                      <ul>
                        <li>Annual Audit and Financial Statement for the Concerned Fiscal Year</li>
                        <li>Issuance of a Financial Statement</li>
                        <li>PND 50 Filing</li>
                        <li>Financial Reporting to the Department of Business Development and Revenue</li>
                        <li>English Translation Service</li>
                        <li>Bookkeeping according to Thai Accounting Standards</li>
                        <li>Update of the Affidavit and Shareholder List</li>
                        <li>Annual PND 1 Kor Filing</li>
                        <li>Annual Workmen's Compensation Fund Filing</li>
                      </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={` bg-white ${Style.add_service}`}>
          <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>

            <h4>If you avail of our services, we will do the paperwork for you:</h4>
            <p><span>1.</span>Income and Expenses for the Year: Government receipts plus the forms PND 1, 3, 53; PP 30, 36; Por Tor 40; and Social Fund for January–December</p>
            <p><span>2.</span>Bank statement of every corporate bank account</p>
            <p><span>3.</span>Inventory (if any)</p>
            <p><span>4.</span>Stock Cards</p>
            <p><span>5.</span>Lease agreement</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`text-white ${Style.secontP}`}>
                <p className='text-white'><span>6.</span>A copy of the title deeds to the land purchased by the company (if any).</p>
                <p className='text-white'><span>7.</span>Annual Audit for the Previous Year: Financial Statement, Auditor Report, PND 50 with General Ledger, Trial Balance, and Assets Register</p>
                <p><span>8.</span>Company Seal</p>
                <p><span>9.</span>Half-Year Report (PND 51)</p>
          </MDBCol>
        </MDBContainer>

        <MDBContainer fluid className={` bg-black ${Style.add_service}`}>
          <MDBRow className='m-0'>
            <MDBCol sm='12' lg="12" md='12' className={`px-0 ${Style.quoteSec}`}>
              <span><img src={qtImage} alt="quote" /></span>
              <h5>Following the signing of the audit report, numerous obligations must be met. Smart 1 Solutons’ auditing package additionally includes the following post-signing processes:</h5>
              <span><img src={qt2Image} alt="quote" /></span>
            </MDBCol>
            <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>
              <p><span>1.</span>We will submit a copy of the audit to be reviewed and signed by a director in your firm after it has been completed.</p>
              <p><span>2.</span>We will notify you if you owe any taxes, and we will settle your liabilities with the Revenue Department once we receive a cheque or cash payment from your company.</p>
            </MDBCol>
            <MDBCol sm='12' lg="6" md='6' className={`pt-lg-5 !important ${Style.secontP}`}>
                  <p className='text-white'><span>3.</span>Third Step: Following the auditor's signature on the audit report, the company must place an advertisement in a local newspaper informing the public about a shareholder meeting.</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={`${Style.smartcontent}`}>
          <MDBRow className={`m-0 ${Style.smartComma}`}>
              <span>
                  <img src={qtImage2} />
              </span>
              <h5>
                Smart 1 Solutions’ Bookkeeping according to Thai Accounting Standards includes:
              </h5>
              <span>
                  <img src={qt3Image} />
              </span>
          </MDBRow>
            <MDBRow className={`bg-white pt-0 ${Style.accountSec2}`} >
              <MDBCol sm='12' lg="12" md='12' className='px-0'>
                  <ul className={Style.anu_audit}>
                    <li>Within seven days, send a formal invitation to all shareholders.</li>
                    <li>Create meeting minutes.</li>
                    <li>Within 30 days of receiving an audit report signed by an auditor, complete all formal obligations.</li>
                  </ul>
              </MDBCol>
            </MDBRow>
        </MDBContainer>
      </section>
        
    </>
    )
}
export default AnnualaccountAudit





