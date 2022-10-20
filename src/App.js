import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/body/Home';
import Lifestyle from './component/body/Lifestyle';
import Detail from './component/body/Detail';
import Business from './component/body/Business';
// import TestFb from './component/TestFb';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Tech from './component/body/Tech';
// import Login from './component/body/login/login';
// import LgTest from './component/body/login/loginTest';
// import LoginWithGG from './component/body/login/finallLogin';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/lifestyle' element={<Lifestyle />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/business" element={<Business />} />
        <Route path='/tech' element={<Tech />} />
      </Routes>
      {/* <MessengerCustomerChat pageId="107400511790455" appId="1505620756529166" /> */}
      <Footer />
    </div>
  );
}

export default App;
