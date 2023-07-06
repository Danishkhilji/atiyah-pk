import './styles/App.css';
import './styles/responsive.css'
// import Login from './pages/websites/login/login';
// import Signup from './pages/websites/signup/signup';
// import Navbar from './components/Navbar/Navbar'
import CampaignPage from './pages/donor/CampaignPage';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Navbar /> */}
      <CampaignPage />
      <Footer />
    </>
  );
}

export default App;
