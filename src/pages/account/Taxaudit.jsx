import React from 'react'
import Style from '../../styles/home.module.css'
import { MDBContainer, MDBRow, MDBCol,
  MDBIcon,
  MDBBtn,
  MDBCardImage} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import accountBanner from '../../assets/images/acb_1_2.png';
import qtImage from '../../assets/images/qt1.svg';
import qt2Image from '../../assets/images/qt2.svg';
import buttonimg from '../../assets/images/submitBtn.png';
import banner1 from '../../assets/images/acb_1_2.png'

function TaxAudit() {
  return (
    <>
        <MDBContainer fluid className='mx-0'>
            <MDBRow className={Style.accountText}>
            <MDBCol md='6' className='px-0'>
                <h2>Tax Audit <span className='d-lg-block'>Service</span></h2>
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
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`p-0 ${Style.bannerImg}`}>
            <MDBCardImage src={accountBanner} alt='...' fluid />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={` bg-white ${Style.add_service}`}>
          <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>

            <h4>Benefits of Employing Smart 1 Solutions’ Tax Audit <span className='d-lg-block'>Service in Thailand:</span></h4>
            <p><span>1.</span>An auditor makes suggestions for strengthening the accounting system while helping to detect its flaws.</p>
            <p><span>2.</span>Increase the accuracy of the numbers provided to potential buyers.</p>
            <p><span>3.</span>Increases the credibility of published information for employees, suppliers, tax authorities, and customers.</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`text-white ${Style.secontP}`}>
                <p className='text-white'><span>3.</span>The audit assures the shareholders that the numbers presented are accurate and fair.</p>
                <p className='text-white'><span>4.</span>An auditor makes it easier to give the business suggestions that will increase its profits, such as what margins to anticipate and how to attain them.</p>
          </MDBCol>
        </MDBContainer>

      <MDBContainer fluid className={Style.accountSec2}>
        <MDBRow className='m-0'>
        <MDBCol sm='12' lg="12" md='12' className={`px-0 ${Style.quoteSec}`}>
          <span><img src={qtImage} alt="quote" /></span>
          <h5>Tax Audit Services in Thailand are classified into the following categories:</h5>
          <span><img src={qt2Image} alt="quote" /></span>
        </MDBCol>
        </MDBRow>
        <MDBRow className='m-0'>
          <MDBCol sm='12' lg="12" md='12' className='px-0'>
              <p>Internal Audit</p>
              <ul>
                <li>Taxation review</li>
                <li>Accounting formulation review</li>
                <li>Accounts receivable review</li>
                <li>Accounting payable review</li>
                <li>Fixed assets review</li>
              </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className={` bg-dblue ${Style.accountSec2}`}>
            <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className='px-0'>
                    <p>Statutory Audit</p>
                    <ul>
                        <li>Quarterly review</li>
                        <li>Internal audit</li>
                        <li>Year-end audit</li>
                        <li>Taxation audit</li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={` bg-white ${Style.accountSec2}`}>
            <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className='px-0'>
                    <p>Acquisition Audit</p>
                    <ul className='cop_tax'>
                        <li>Due diligence</li>
                        <li>Confirmation of current assets</li>
                        <li>Bank facility confirmation</li>
                        <li>Confirmation of current liabilities</li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={` bg-dark ${Style.add_service}`}>
          <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>

            <h4>Juristic companies or partnerships for corporate  <span className='d-lg-block'>income tax purposes under foreign law in Thailand</span></h4>
            <p><span>1.</span>Annual financial statements that include both separate and consolidated statements for group companies.</p>
            <p><span>2.</span>Quarterly financial statements that include interim financial statements (separate and consolidated) for group companies.</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`text-white ${Style.secontP}`}>
                <p className='text-white'><span>3.</span>Within 120 days of the end of the reporting period, submit an annual report to the Securities and Exchange Commission (SEC).</p>
          </MDBCol>
        </MDBContainer>

        <MDBContainer fluid className={` bg-dblue !important ${Style.accountSec2}`}>
            <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className={`px-0 mb-4 ${Style.quoteSec}`}>
                <span><img src={qtImage} alt="quote" /></span>
                <h5>
                    Additional Features of Tax Audit Services in Thailand:
                </h5>
                <span><img src={qt2Image} alt="quote" /></span>
                </MDBCol>
            </MDBRow>

            <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className='px-0'>
                    <p>Blueprint internal audit   <span className='d-lg-block'>function</span></p>
                    <ul>
                        <li>Stakeholder expectations</li>
                        <li>Mission statement</li>
                        <li>Strategic Plan</li>
                        <li>Risk assessment and audit plan</li>
                        <li>Establish budget</li>
                        <li>Launch fieldwork</li>
                        <li>Skill sets are assessed</li>
                        <li>Develop infrastructure</li>
                        <li>Establish communication protocols</li>
                        <li>Evaluate results</li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={` bg-white ${Style.add_service}`}>
          <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>

            <h4>Quality Assurance Reviews</h4>
            <p><span>1.</span>Clarifying internal audit stakeholder expectations</p>
            <p><span>2.</span>Assessing present internal audit structure, capabilities related to value expectations, and methodologies.</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`text-white ${Style.secontP}`}>
                <p className='text-white'><span>3.</span>Identifying opportunities for the improvement of processes.</p>
                <p className='text-white'><span>4.</span>Creating actionable strategic plans for aligning internal audits with corporate goals.</p>
          </MDBCol>
        </MDBContainer>

        <MDBContainer fluid className={` bg-dark ${Style.add_service}`}>
          <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>

            <h4>Capability Building and Outsourcing</h4>
            <p><span>1.</span>Access to highly skilled and experienced Thai and foreign auditors</p>
            <p><span>2.</span>Access to technical as well as industry specialists</p>
            <p><span>3.</span>Best internal audit practice</p>
            <p><span>4.</span>Flexible costs and budgets</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`text-white ${Style.secontP}`}>
                <p className='text-white'><span>5.</span>Procedure Manuals</p>
                <p className='text-white'><span>6.</span>Enhance policies and develop procedure manuals to improve the control environment in the organization.</p>
                <p className='text-white'><span>7.</span>Reduction of costs</p>
                <p className='text-white'><span>8.</span>Assist in reducing the cost of improving an organization’s competitiveness by applying the best business practices.</p>
          </MDBCol>
        </MDBContainer>
    </>
  )
}

export default TaxAudit
