import React from 'react';
import Navbar from '../Navbar/Navbar';
import Experience from './Experience';
import './Header.css'
import Home from './Home';

const Header = () => {
    return (
       <div className="">
        <Navbar></Navbar>
         <main className="flex-center" id="header-main">

            <div className="side-bar ">
                <div className="lavels">
                    <h2>Where do you want to go</h2>
                </div>

                <div className="card ">
                    <div className="header-card-up">
                        <h3>Location</h3>
                        <input type="text" placeholder='Add City,Landmark or Address' />
                    </div>
                </div>

                <div className="header-time">
                    <div className="arrival">
                        <div className="arrival-card">
                            <h3>Arrival</h3>
                            <input type="date" />
                        </div>
                    </div>
                    <div className="deparature">
                        <div className="arrival card">
                            <div className="arrival-card">
                                <h3>Departure</h3>
                                <input type="date" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="action_sort action_sort-card">
                    <div className="header-card-up">
                        <h3>Guests</h3>
                        <h4> 2 Adults, 1 Childs</h4>
                    </div>
                    <select className="dropdown" name="sort" id="sort">
                        <option value="sold"></option>
                        <option value="sold">Most sold first</option>
                        <option value="sold">Most rated first</option>
                        <option value="sold">Newes first</option>
                        <option value="sold">Biggest discount</option>
                    </select>
                </div>

                <div className=" card">
                    <div className="header-card">
                        <div className="adult">
                            <label htmlFor="">ADULT</label>
                        </div>
                        <div className="add">
                            <span className="reduce">-</span>
                            <span className="number">1</span>
                            <span className="addition">+</span>
                        </div>
                    </div>

                    <div className="header-card">
                        <div className="adult">
                            <label htmlFor="">Child</label>
                        </div>
                        <div className="add">
                            <span className="reduce">-</span>
                            <span className="number">1</span>
                            <span className="addition">+</span>
                        </div>
                    </div>

                    <div className="header-card">
                        <div className="adult">
                            <label htmlFor="">Babies</label>
                        </div>
                        <div className="add">
                            <span className="reduce">-</span>
                            <span className="number">1</span>
                            <span className="addition">+</span>
                        </div>
                    </div>
                    <div className="cart-btn-area">
                        <button className="cart-btn">Search</button>
                    </div>
                </div>
                <div className="btn-end">
                    <button className="cart-btn-end">Search</button>
                </div>
            </div>

            <div className="main-content">
             <div className="main">
                 <Experience></Experience>
              <Home></Home>
             </div>
            </div>
        </main>
       </div>
    );
};

export default Header;
