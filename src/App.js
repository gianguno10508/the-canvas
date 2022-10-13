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

function App() {
  return (
    <div className="App">
      <Header />
      <MessengerCustomerChat/>
      <p>dsfdasdsdf</p>
      <Routes>
        <Route path='/lifestyle' element={<Lifestyle />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path='/business' element={<Business />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
