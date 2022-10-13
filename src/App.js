import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/body/Home';
import Lifestyle from './component/body/Lifestyle';
import Detail from './component/body/Detail';
import Business from './component/body/Business';
// import TestFb from './component/TestFb';
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Routes>
        <Route path='/lifestyle' element={<Lifestyle />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes> */}
      <MessengerCustomerChat pageId="107400511790455" appId="1505620756529166"/>
      <Footer />
    </div>
  );
}

export default App;
