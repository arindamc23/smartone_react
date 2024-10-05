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

function IncomeTax() {
  return (
    <>
        <MDBContainer fluid className='mx-0'>
        <MDBRow className={Style.accountText}>
          <MDBCol md='6' className='px-0'>
            <h2>Corporate <span className='d-lg-block'>Income Tax</span></h2>
          </MDBCol>
          <MDBCol md='6' className='px-0'>
            <p>
                A legal partnership or corporation, whether it conducts business in Thailand or not, that receives income from the nation is subject to a direct tax known as corporate income tax. File your corporate income tax in Thailand with the help of Smart 1 Solutions to avoid fines, receive refunds, and make additional savings.
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
                    <p>Juristic Companies and Partnerships for Corporate <span className='d-lg-block'>Income Tax Purposes in Thailand under Thai Law</span></p>
                    <ul>
                        <li>Limited Companies</li>
                        <li>Joint Ventures</li>
                        <li>Registered Ordinary and Limited Liability Partnerships</li>
                        <li>Foundations and Associations</li>
                        <li>Foreign corporations making money in Thailand</li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={` bg-dark !important ${Style.add_service}`}>
          <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>
            <h4>Include and exclude the following  <span className='d-lg-block'>information when calculating CIT tax:</span></h4>
            <p><span>1.</span>CIT is computed from the company’s net profit.</p>
            <p><span>2.</span>Revenues from or in consequence of the company operating the business in an accounting period are taken into account while deducting all expenses concerning the condition stated by the Revenue Code.</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`text-white ${Style.secontP}`}>
              <p className='text-white'><span>3.</span>One-half of dividends received from Thai companies by Thai companies are likely to be excluded from taxable income. Nevertheless, the full amount may be excluded if the recipient is listed on the Stock Exchange of Thailand or else owns a minimum of 25% of the company’s capital interest.</p>
          </MDBCol>
        </MDBContainer>

        <MDBContainer fluid className={` bg-dblue !important ${Style.accountSec2}`}>
            <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className={`px-0 ${Style.quoteSec}`}>
                <span><img src={qtImage} alt="quote" /></span>
                <h5>
                    Ordinary and essential expenses, such as a 200% deduction for research and development expenses and a 200% deduction for job training expenses, etc.
                </h5>
                <span><img src={qt2Image} alt="quote" /></span>
                </MDBCol>
            </MDBRow>

            <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className='px-0'>
                    <p>Deductible expenses in <span className='d-lg-block'>calculating CIT are:</span></p>
                    <ul>
                        <li>Other than corporate income tax and value-added tax, taxes are given to the government</li>
                        <li>Wear and tear</li>
                        <li>Provident fund contributions</li>
                        <li>Entertainment expenses reached 0.3%</li>
                        <li>Bad debts</li>
                        <li>Interest, except the interest on the company’s capital reserves</li>
                        <li>Donations of up to 2% of the net profits</li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        

        <MDBContainer fluid className={` bg-white ${Style.accountSec2}`}>
            <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className='px-0'>
                    <p>Expenses that can be deducted from net profits:</p>
                    <ul className='cop_tax'>
                        <li>Reserves</li>
                        <li>Funds, except PF</li>
                        <li>Service fee</li>
                        <li>Personal gifts and donations for a charitable purpose</li>
                        <li>Fine or surcharge</li>
                        <li>Part of the shareholder’s salary</li>
                        <li>Remuneration for assets that a company or legal partnership owns</li>
                        <li>Value of assets, except for devalued assets that are subject to 65 bis, etc</li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={` bg-dark ${Style.add_service}`}>
          <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>

            <h4>Juristic companies or partnerships for corporate <span className='d-lg-block'>income tax purposes under foreign law in Thailand</span></h4>
            <p><span>1.</span>Doing business in Thailand.</p>
            <p><span>2.</span>Conducting business in other places, including Thailand.</p>
            <p><span>3.</span>Doing business in other places, including Thailand, in the carriage of passengers and goods.</p>
            <p><span>4.</span>Has an agent, an employee, or a go-between for doing business in Thailand while receiving income and profits in the country.</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`text-white ${Style.secontP}`}>
                <p className='text-white'><span>5.</span>Not doing business in Thailand but receiving income from or in the country under Section 40 (2), (3), (4), (5), or (6).</p>
                <p className='text-white'><span>6.</span> Carrying on commercial or profitable business by a foreign government, a juristic person under foreign law, or a foreign government organisation.</p>
                <p className='text-white'><span>7.</span> An association operating a revenue-generating business without including the association, as confirmed by the Minister, is complying with Section 47(7)(b) under the Revenue Code.</p>
          </MDBCol>
        </MDBContainer>

        <MDBContainer fluid className={` bg-dblue ${Style.accountSec2}`}>
            <MDBRow className='m-0'>
                <MDBCol sm='12' lg="12" md='12' className='px-0'>
                    <p>Three Things to Consider for <span className='d-lg-block'>Corporate Income Tax Filing:</span></p>
                    <ul>
                        <li>The audited financial statement should follow the return.</li>
                        <li>20% of the deficit would be fined to the taxpayer for failing to pay the tax.</li>
                        <li>50% of the estimated income tax must be paid by the end of the 8th month.</li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className={` bg-white ${Style.add_service}`}>
          <MDBCol sm='12' lg="6" md='6' className={Style.blackText}>

            <h4>File a tax return or payment with Smart 1 <span className='d-lg-block'>Solutions:</span></h4>
            <p><span>1.</span>File tax returns per Form CIT 50 within 150 days from the ending date of the accounting period.</p>
            <p><span>2.</span>Tax payments need to be submitted along with tax returns. Firms disposing of funds out of Thailand must pay tax on the sum disposed of within 7 days from the date of disposal (Form CIT 54).</p>
          </MDBCol>
          <MDBCol sm='12' lg="6" md='6' className={`text-white ${Style.secontP}`}>
                <p className='text-white'><span>3.</span>Companies subject to corporate income tax in Thailand should repay tax (Form CIT 51). Annual net profits should be estimated to pay half of the tax liability within two months after the first six months of the accounting period.</p>
                <p className='text-white'><span>4.</span> A foreign company that is not operating any business in Thailand is subject to a flat tax rate, and the payer should withhold tax at source while making the payment. Form CIT 54 must be filed to pay the Revenue Department.</p>
          </MDBCol>
        </MDBContainer>

        <MDBContainer fluid className={Style.smartvisaForm}>
        <MDBRow>
          <MDBCol md="6" className={Style.residenceFormText}>
            <p>We are ready to meet with you to discuss how to manage your Corporate Income Tax</p>
          </MDBCol>
          <MDBCol md="6" className={Style.visaForm}>
            <form className={Style.residenceForm}>
              <p className="pb-4">Drop your details and we’ll get in touch with you.</p>
              <div className='d-flex align-items-center mt-3'>
                <input className='form-control' type='number' placeholder='mobile number' />
                <span><MDBIcon fas icon="arrow-right" /></span>
              </div>

              <div className='d-flex align-items-center mt-5'>
                <input className='form-control' type='email' placeholder='email id' />
                <span><MDBIcon fas icon="arrow-right" /></span>
              </div>
              <div className={Style.visaSendBtn}>
                <button type='submit'><img src={buttonimg} alt="design" /></button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        
        </section>

        
    </>
  )
}

export default IncomeTax
