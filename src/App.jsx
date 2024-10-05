import React from 'react'
import Style from './styles/App.module.css'
import { Routes,Route } from 'react-router-dom'
// pages
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Home from './pages/Home'
import Legal from './pages/Legal'
import Accounting from "./pages/account/Accounting";
import Housekeeping from "./pages/account/Housekeeping";
import Immigration from './pages/immigration/Immigration'
import Bvisa from './pages/immigration/Bvisa'
import SmartVisa from './pages/immigration/SmartVisa'
import RetirementVisa from './pages/immigration/RetirementVisa'
import Investment from './pages/immigration/Investment'
import EducationVisa from './pages/immigration/EducationVisa'
import MarriageVisa from './pages/immigration/MarriageVisa'
import WorkVisa from './pages/immigration/WorkVisa'
import ResidencyVisa from './pages/immigration/ResidencyVisa'
import ExtentionVisa from './pages/immigration/ExtentionVisa'
import Payroll from './pages/account/Payroll'
import AnnualaccountAudit from './pages/account/AnnualaccountAudit'
import HalfyearlyAudit from './pages/account/HalfyearlyAudit'
import TaxAudit from './pages/account/Taxaudit'
import IncomeTax from './pages/account/IncomeTax'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <div className={Style.AppContainer}>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="legal" element={<Legal/>}/>
        <Route path="accounting" element={<Accounting />} />
        <Route path="accounting/housekeeping" element={<Housekeeping />} />
        <Route path="immigration" element={<Immigration/>}/>
        <Route path="immigration/smart_visa" element={<SmartVisa/>}/>
        <Route path='immigration/non_immigration' element={<Bvisa/>}/>
        <Route path="immigration/retirement_visa" element={<RetirementVisa/>}/>
        <Route path="immigration/investment_visa" element={<Investment/>}/>
        <Route path="immigration/education_visa" element={<EducationVisa/>}/>
        <Route path="immigration/marriage_visa" element={<MarriageVisa/>}/>
        <Route path="immigration/work_visa" element={<WorkVisa/>}/>
        <Route path="immigration/residence_visa" element={<ResidencyVisa/>}/>
        <Route path="immigration/extention_visa" element={<ExtentionVisa/>}/>
        <Route path="accounting/payroll" element={<Payroll/>}/>
        <Route path="accounting/income_tax" element={<IncomeTax/>}/>
        <Route path="accounting/taxaudit" element={<TaxAudit/>}/>
        <Route path="accounting/annualaccountaudit" element={<AnnualaccountAudit/>}/>
        <Route path="accounting/Halfyearlyaudit" element={<HalfyearlyAudit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
