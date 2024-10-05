import React from 'react'
import Style from '../../styles/home.module.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import accountBanner from '../../assets/images/acb_1_2.png';

function Housekeeping() {
  return (
    <>
   
      <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.accountText}>
          <MDBCol md='6' className='px-0'>
            <h2>Complete <span className='d-lg-block'>Housekeeping Services</span></h2>
          </MDBCol>
          <MDBCol md='6' className='px-0'>
            <p>
              In Thailand, bookkeeping refers to the organised recording of financial transactions inside a business, non-profit organisation, or another entity. Journals, inventory records, and general ledgers make up the accounting records; all are in Thai. Thai captions must be present as well if a foreign language is employed.
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
        <MDBContainer fluid className={Style.accountSec2}>
          <MDBRow className='m-0'>
            <MDBCol sm='12' lg="12" md='12' className='px-0'>
                  <p>Thai Bookkeeping Services  <span className='d-lg-block'>from Smart 1 Solutions:</span></p>
                  <ul>
                    <li>Recording transactions in journals or on computer files and updating when required</li>
                    <li>Compare the computer reports with the actual ones</li>
                    <li>Review invoices and statements to ensure the accuracy of the information</li>
                    <li>A review of printed documents against the maintained journals regularly</li>
                    <li>Verify the transaction records posted by the staff</li>
                    <li>Affidavit that you are legally free to marry</li>
                    <li>Vehicle or licence affidavit</li>
                  </ul>
              </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={Style.accountSec2}>
          <MDBRow className='m-0'>
            <MDBCol sm='12' lg="12" md='12' className='px-0'>
                  <p>Level 1 <span className='d-lg-block'>Bookkeeping Services:</span></p>
                  <ul>
                    <li>Financial Statements and Reports</li>
                    <li>Monthly, Quarterly, and Year-End Review</li>
                    <li>Management Reporting</li>
                    <li>Recording and reconciling payroll transactions</li>
                    <li>Income Statements</li>
                    <li>Cash Flow/Budgeting</li>
                    <li>Preparing closing entries</li>
                    <li>Financial Analysis</li>
                    <li>Variance Analysis and Recommendations</li>
                  </ul>
              </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={Style.accountSec2}>
          <MDBRow className='m-0'>
            <MDBCol sm='12' lg="12" md='12' className='px-0'>
                  <p>Level 2 <span className='d-lg-block'>Bookkeeping services:</span></p>
                  <ul>
                    <li>Accounts Payable Management</li>
                    <li>Accounts Receivable Management</li>
                    <li>Bank Reconciliation</li>
                    <li>General Ledger Reconciliation</li>
                    <li>Credit card reconciliation</li>
                    <li>Inventory Management</li>
                    <li>Books Clean-up</li>
                    <li>Revenue Reconciliation with Bank Deposits</li>
                    <li>Cash Applications</li>
                  </ul>
              </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <MDBContainer fluid className={Style.add_service}>
          <MDBCol sm='12' lg="6" md='6'>
            <h4>Additional Services:</h4>
            <p><span>1.</span>Customer Reports: Assisting you to determine the most profitable and the least profitable clients.</p>
            <p><span>2.</span>Employee Reports: Analyse the expenditures of the employees with year-end reports.</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={Style.secontP}>
              <p><span>3.</span>The breakdown of expenses by category: Be it by product line, office, or region, the report will give you an analysis of all of your expenses.</p>
              <p><span>4.</span>Event Analysis: Figure out your expenditure for each event requently.</p>
          </MDBCol>
      </MDBContainer>

      <MDBContainer fluid className={` bg-dark ${Style.add_service}`}>
          <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>
            <h4>Advantages of working <span className='d-lg-block'>with Smart 1 Solutions:</span></h4>
            <p><span>1.</span>Easy management of suppliers' or customers’ accounts and quick tracking of deposits and payments.</p>
            <p><span>2.</span>Identify money-making opportunities and avoid cash-flow problems.</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`text-white ${Style.secontP}`}>
              <p className='text-white'><span>3.</span>Find ways to increase income or reduce spending.</p>
              <p className='text-white'><span>4.</span>Manage risks by detecting fraud and embezzlement.</p>
          </MDBCol>
      </MDBContainer>
    </>
  )
}

export default Housekeeping
