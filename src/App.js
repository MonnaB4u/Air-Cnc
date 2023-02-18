import logo from './logo.svg';
import './App.css';

import Header from './Component/Home/Header/Header';
import Details from './Component/Home/Details/Details';
import AppartmentDetails from './Component/Home/AppartmentDetails/AppartmentDetails';
import HouseRules from './Component/HouseRules/HouseRules';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TravelDetails from './Component/TravelDetails/TravelDetails';
import Payment from './Component/Payment/Payment';

function App() {
  return (
    <div className="App">




      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/appartmentDetails/:id" element={<AppartmentDetails />} />
          <Route path='/appartmentDetails/:id/details/:id' element={<Details />} />
          <Route path='/houseRules' element={<HouseRules />} />
           <Route path='/travellingDetails' element={<TravelDetails />} />
           <Route path='/payment' element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
