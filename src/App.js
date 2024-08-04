import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/miscellaneous/Navbar';
import AboutUs from './pages/AboutUs';
import Footer from './components/miscellaneous/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ENach from './pages/ENach';
import LoanApplicationTC from './pages/LoanApplicationTC';
import RefundPolicy from './pages/RefundPolicy';
import AccountAgg from './pages/AccountAgg';
import ContactUs from './pages/ContactUs';
import InstantLoan from './pages/InstantLoan';
import ShortLoan from './pages/ShortLoan';
import Home from './pages/Home';
import RepayLoan from './pages/RepayLoan';
import InstantJourney from './pages/InstantJourney';
import PaymentGateway from './pages/PaymentGateway';

function App() {
  return (
    <div>
      {/* <ToastContainer /> */}
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/aboutus" Component={AboutUs} />
        <Route path="/repayLoan" Component={RepayLoan} />
        <Route path="/instant_loan" Component={InstantLoan} />
        <Route path="/short_loan" Component={ShortLoan} />
        <Route path="/t&c" Component={TermsAndConditions} />
        <Route path="/privacy_policy" Component={PrivacyPolicy} />
        <Route path="/e-nach_t&c" Component={ENach} />
        <Route path="/loan_application_t&c" Component={LoanApplicationTC} />
        <Route path="/refund_policy" Component={RefundPolicy} />
        <Route path="/acc_agg" Component={AccountAgg} />
        <Route path="/contactus" Component={ContactUs} />
        <Route path="/instant-journey" Component={InstantJourney} />
        <Route path='/payment-gateway' Component={PaymentGateway} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
